<?
session_start();
create_image(); 
exit(); 

function create_image() 
	{ 
	
	$width = 132;          //Ширина изображения
	$height = 52;          //Высота изображения
	$font_size = 16;       //Размер шрифта
	$let_amount = 4;       //Количество символов, которые нужно набрать
	$fon_let_amount = 10;  //Количество символов на фоне
	$font = "optima.ttf";  //Путь к шрифту
	 
	//набор символов
	$letters = array("a","b","c","d","e","f","g","k","m","n","p","r","s","t","u","w","x","y","z","3","4","6","7","8","9"); 
	 
	//цвета
	$colors = array("90","110","130","150","170","190","210");
	 
	$src = imagecreatetruecolor($width,$height);  //создаем изображение 
	$fon = imagecolorallocate($src,255,255,255);  //создаем цвет фона
	imagefill($src,0,0,$fon);                     //заливаем изображение фоновым цветом
	 
	//добавляем на фон маленькие буковки для шума
	for ($i=0; $i < $fon_let_amount; $i++) 
	{
	  //случайный цвет
	  $color = imagecolorallocatealpha($src,rand(0,255),rand(0,255),rand(0,255),100);
	 
	  //случайный символ
	  $letter = $letters[rand(0,sizeof($letters)-1)];
	 
	  //случайный размер 
	  $size = rand($font_size-2,$font_size+2);
	 
	  //рисуем символ со случайным смещением и случайным углом наклона
	  imagettftext($src,
				   $size,
				   rand(0,45),
				   rand($width*0.1,$width-$width*0.1),
				   rand($height*0.2,$height),
				   $color,
				   $font,
				   $letter);
	}
	 
	$code = array();
	 
	//то же самое для основных букв
	for ($i=0; $i < $let_amount; $i++)
	{
	  $color = imagecolorallocatealpha($src,$colors[rand(0,sizeof($colors)-1)],
	  $colors[rand(0,sizeof($colors)-1)],
	  $colors[rand(0,sizeof($colors)-1)],rand(20,40));
	  $letter = $letters[rand(0,sizeof($letters)-1)];
	  $size = rand($font_size*2-2,$font_size*2+2);
	  $x = ($i+1)*$font_size + rand(1,5);    //даем каждому символу случайное смещение
	  $y = (($height*2)/3) + rand(0,5);      //           относительно центра картинки
	 
	  $code[] = $letter; //запоминаем код
	  imagettftext($src,$size,rand(0,15),$x,$y,$color,$font,$letter);
	}
	 
	$code = implode("",$code);
	$_SESSION['security_code'] = $code;
	 
	header ("Content-type: image/gif");
	imagegif($src);
	imagedestroy($src);
	
	} 
?>