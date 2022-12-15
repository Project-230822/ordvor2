<? 

//var_dump($_SERVER['SERVER_NAME']); die();


if(isset($_SERVER['SERVER_NAME'])){
	
	$parts = explode('.', $_SERVER['SERVER_NAME']);
	$code = array_shift($parts);
	

	if($code == 'www'){		
		
		header("HTTP/1.1 301 Moved Permanently"); 
		$_SERVER['REQUEST_URI'] = str_replace(":80", "", $_SERVER['REQUEST_URI']);
		header("Location: https://".implode('.', $parts).$_SERVER['REQUEST_URI']);
		die();
		
		$code = array_shift($parts);
	}	
}


 if($code){
	 
	
	  if($code == 'ordvor'){
      $code = 'shop';
    }
	
	$settings = include $_SERVER['DOCUMENT_ROOT'].'/bitrix/.settings.php';	
	$dbname = $settings["connections"]["value"]["default"]["database"];
	$user = $settings["connections"]["value"]["default"]["login"];
	$pass = $settings["connections"]["value"]["default"]["password"];
	
	
	$mysqli = new mysqli('localhost', $user, $pass, $dbname);
	
	$code = $mysqli->real_escape_string($code);
	$sql = "SELECT CODE FROM b_iblock_element WHERE IBLOCK_ID = 21 AND CODE='$code' AND ACTIVE='Y' LIMIT 1";
	$results = $mysqli->query($sql);
	
	if($results)
	{
		if(!$results->fetch_assoc() || count($parts) == 3) {
			header("HTTP/1.0 404 Not Found");
			die();
		}
	}
	else
	{
		header("HTTP/1.0 404 Not Found");
		die();
	}

	
	$mysqli = null;
	
	/* try {
		$dbh = new PDO('mysql:host=localhost;dbname='.$dbname, $user, $pass);
		
		$stmt = $dbh->prepare($sql);
		
		if ($stmt->execute(array($code))) {
			
		  if ($row = $stmt->fetch()) {
			
		  }else{
			  die();
		  }
		  
		}
		
		
		$dbh = null;
	} catch (PDOException $e) {
		
		
	} */
} 
