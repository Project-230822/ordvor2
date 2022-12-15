<?

$doman = 'https://shop.ordvor.ru';

$file = __DIR__.'/files/yandex_'.$_SERVER['SERVER_NAME'].'.xml';

$protocol = 'https';
$adress = $protocol.'://'.$_SERVER['SERVER_NAME'];	

if(!is_file($file) || (time() - filemtime($file)) > 86400 ){
  if($_SERVER['SERVER_NAME'] == 'shop.ordvor.ru' || $_SERVER['SERVER_NAME'] == 'ordvor.ru'){
    $yandex = file_get_contents($adress.'/bitrix/catalog_export/yandex_goods.php');
  }else{
    $yandex = file_get_contents($adress.'/bitrix/catalog_export/yandex_goods_domain.php');
  }
  
	$yandex = str_replace($doman, $adress ,$yandex);
	file_put_contents($file, $yandex); 
}else{
	
	$yandex = file_get_contents($file); 
}

header('Content-Type: text/xml; charset=windows-1251');

echo $yandex; 


die();