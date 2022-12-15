<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();


	$arResult = array();
	$geoData = Site::Instance();


	/*
	if(!isset($_SESSION["IS_VISITED_SITE"])){	
		
		//setcookie("IS_VISITED_SITE", 1, 0);
		$_SESSION["IS_VISITED_SITE"] = 1;
		$geoData->geoRedirect();
	}*/ 
		
	 $city = $geoData->detectCity();
	 
	 $arResult['SERVER_NAME'] = $_SERVER['SERVER_NAME'];
  
  
  
	$arResult['ACTIVE_CITY'] = $city;
	$arResult['GEO_DATA'] = $geoData;
	
	 $arResult['SHOW_FORM'] = false;	
	 
	
	if(!isset($_SESSION['IS_SHOWED_FORM'])){
		$arResult['SHOW_FORM'] = true;
		$_SESSION['IS_SHOWED_FORM'] = 1;
		$arResult['REDIRECT'] = $geoData->geoRedirect();
		$arResult['GEO_CITY'] = $geoData->getGeoCity();
		$arResult['URL'] = Site::getCurUri();
		
		//setcookie("IS_SHOWED_FORM", 1, 0);
		
		if($arResult['GEO_CITY']){
			$arResult['ACTIVE_CITY'] = $arResult['GEO_CITY'];
		}
	}
	
$this->IncludeComponentTemplate();
$GLOBALS["NavNum"]=0;
?>