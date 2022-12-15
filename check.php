<?

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

//OrdvorCity::cacheCityProp(); die();


   // $cityCache = \Bitrix\Main\Application::getInstance()->getManagedCache();
		//	$cityCache->clean(OrdvorCity::CITY_CACHE_ID);

		\Bitrix\Main\Loader::IncludeModule("highloadblock");		
		\Bitrix\Main\Loader::IncludeModule("iblock");	


   
    
    
		
		$hlblock = \Bitrix\Highloadblock\HighloadBlockTable::getById(8)->fetch();
		$entity = \Bitrix\Highloadblock\HighloadBlockTable::compileEntity($hlblock);
		$entityDataClass = $entity->getDataClass();
		
		$filter = array();
		$arSections = array();
		
    $obCity = OrdvorCity::getInstance();
    
    $arCities = OrdvorCity::setCityProp();
    
 /*    OrdvorCity::cacheCityProp();
     $cityCache = \Bitrix\Main\Application::getInstance()->getManagedCache();
    
    if ($cityCache->read(OrdvorCity::CITY_CACHE_TTL, OrdvorCity::CITY_CACHE_ID))
		{
			$arCity = $cityCache->get(OrdvorCity::CITY_CACHE_ID); // Достаем переменные из кеша
     
		}
    //echo "<pre>"; var_dump($obCity->getDeclination('NAME')); echo "</pre>"; die();
    echo "<pre>"; var_dump($arCity); echo "</pre>"; die();

    $id = $obCity->getDeclination('ITEM_ID') */;
    echo "<pre>"; var_dump( $arCities); echo "</pre>";
    
    die();
    
    	$filter = array(
				"UF_CITIES" => $id
			);
      
      
    $result = $entityDataClass::getList(array(
				"select" => array("*"),
				//"filter" => $filter
			)
		);
		
	

		while ($arRow = $result->Fetch())
		{
			//$arSections = array_merge($arSections, $arRow['UF_SECTION']);
      echo "<pre>"; var_dump($arRow); echo "</pre>";
		} 
    
    //echo "<pre>"; var_dump($arSections); echo "</pre>";