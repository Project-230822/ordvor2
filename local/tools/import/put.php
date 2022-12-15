<?

define("NO_KEEP_STATISTIC", true);
define("NO_AGENT_CHECK", true);
define('PUBLIC_AJAX_MODE', true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
$_SESSION["SESS_SHOW_INCLUDE_TIME_EXEC"]="N";
$APPLICATION->ShowIncludeStat = false;





/* $arSelect = Array("ID", "IBLOCK_ID", 'IBLOCK_SECTION_ID', "NAME", "PREVIEW_TEXT", "DETAIL_TEXT", "ACTIVE");
$arFilter = Array("IBLOCK_ID" => 18, "SECTION_ID" => 4080); */
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);

$handle = fopen('catalog.csv', 'r');


$propertiesEnum = array();
$el = new CIBlockElement;

$counter = 0;
		/* $last_row = (int)$_GET['LAST_ROW'];
		$limit = 100;
		
		
		
		echo "Выгружено:".$counter; */

if ($handle) {
    while (($buffer = fgetcsv($handle)) !== false) {
		
		/* if($counter == $limit){		
			$url = $APPLICATION->GetCurPageParam("LAST_ROW=".$counter, array("LAST_ROW"));
			header("Refresh:0; url={$url}");
			die();
		}
	
		
		if($counter < $last_row){
			continue;
		}
		
		$counter++;
		
		var_dump($counter); */
		
		
		
		$counter++;
		
		$row = unserialize($buffer[0]);
		
		echo "<pre>"; var_dump($row['ID']); echo "</pre>";
		
		
		if($row['ID']){
			
			$PROP = array();
		
			
			foreach($row["PROPERTIES"] as $property){
				
				if($property["PROPERTY_TYPE"] == 'S'){
					$PROP[$property["CODE"]] = $property["VALUE"];
				}elseif($property["PROPERTY_TYPE"] == 'L'){
					
					$propCode = $property["VALUE"]['CODE'];
					
					if(!$propertiesEnum[$propCode]){
						
						$propEnums = CIBlockPropertyEnum::GetList([],[
							"IBLOCK_ID" => 18,
							"CODE" => $propCode
						]);

						while ($enum = $propEnums->Fetch()){
							$propertiesEnum[$propCode][$enum["VALUE"]] = $enum["ID"];
						}
						
					}
					
					if($propertiesEnum[$propCode] && $propertiesEnum[$propCode][$property["VALUE"]]){
						$PROP[$property["CODE"]] = $property["VALUE"];
					}
					
				}
				
				
				
				
			}
			
			
			
			$arLoadProductArray = Array(	
				  "NAME" =>  $row['NAME'],				 
			);
			
			
			 $arLoadProductArray["PREVIEW_TEXT"] = $row["PREVIEW_TEXT"];
			 $arLoadProductArray["PREVIEW_TEXT_TYPE"] = $row["PREVIEW_TEXT_TYPE"];
			 
			 $arLoadProductArray["DETAIL_TEXT"] = $row["DETAIL_TEXT"];
			 $arLoadProductArray["DETAIL_TEXT_TYPE"] = $row["DETAIL_TEXT_TYPE"];
		
			 
			$res = $el->Update($row['ID'], $arLoadProductArray); 
			
			
			
			if($PROP){
				CIBlockElement::SetPropertyValuesEx($row['ID'], 18, $PROP);
			}	 
			
			
		}
		
		
    }
   /*  if (!feof($handle)) {
        echo "Ошибка: fgets() неожиданно потерпел неудачу\n";
    } */
    fclose($handle);
}

echo "Выгружено все " .$counter;


/* while($ob = $res->GetNextElement()){ 

	  $arItems  = $ob->GetFields();  
	  $arItems['PROPERTIES']  = $ob->GetProperties();
	  fwrite($fp, json_encode($arItems));
	

} */