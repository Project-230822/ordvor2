<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (isset($arParams["TEMPLATE_THEME"]) && !empty($arParams["TEMPLATE_THEME"]))
{
	$arAvailableThemes = array();
	$dir = trim(preg_replace("'[\\\\/]+'", "/", dirname(__FILE__)."/themes/"));
	if (is_dir($dir) && $directory = opendir($dir))
	{
		while (($file = readdir($directory)) !== false)
		{
			if ($file != "." && $file != ".." && is_dir($dir.$file))
				$arAvailableThemes[] = $file;
		}
		closedir($directory);
	}

	if ($arParams["TEMPLATE_THEME"] == "site")
	{
		$solution = COption::GetOptionString("main", "wizard_solution", "", SITE_ID);
		if ($solution == "eshop")
		{
			$templateId = COption::GetOptionString("main", "wizard_template_id", "eshop_bootstrap", SITE_ID);
			$templateId = (preg_match("/^eshop_adapt/", $templateId)) ? "eshop_adapt" : $templateId;
			$theme = COption::GetOptionString("main", "wizard_".$templateId."_theme_id", "blue", SITE_ID);
			$arParams["TEMPLATE_THEME"] = (in_array($theme, $arAvailableThemes)) ? $theme : "blue";
		}
	}
	else
	{
		$arParams["TEMPLATE_THEME"] = (in_array($arParams["TEMPLATE_THEME"], $arAvailableThemes)) ? $arParams["TEMPLATE_THEME"] : "blue";
	}
}
else
{
	$arParams["TEMPLATE_THEME"] = "blue";
}

$arParams["FILTER_VIEW_MODE"] = (isset($arParams["FILTER_VIEW_MODE"]) && toUpper($arParams["FILTER_VIEW_MODE"]) == "HORIZONTAL") ? "HORIZONTAL" : "VERTICAL";
$arParams["POPUP_POSITION"] = (isset($arParams["POPUP_POSITION"]) && in_array($arParams["POPUP_POSITION"], array("left", "right"))) ? $arParams["POPUP_POSITION"] : "left";

$properties2 = array();
foreach($arResult["ITEMS"] as $elem){	
		
		if($elem["VALUES"]){			

			
			foreach($elem["VALUES"] as $val){
				
				if($val["CHECKED"]){
					$properties[$elem["CODE"]]['ITEMS'][] = $val["VALUE"];
				}
				
			}
			
			if($properties[$elem["CODE"]]['ITEMS']){
				$properties[$elem["CODE"]]["NAME"] = $elem["NAME"];
			}
			
			
		}	
		
		if($elem["VALUES"]){			
				
				
			foreach($elem["VALUES"] as $k => $val){
				
				if($k == 'MIN' || $k == 'MAX'){
					
					if($val["HTML_VALUE"]){
						$properties2[$elem["CODE"]]['ITEMS'][$k] = $val["HTML_VALUE"];
					}
					
				
				}elseif($val["CHECKED"]){
					$properties2[$elem["CODE"]]['ITEMS'][] = $val;
				}
				
			}
			
			if($properties2[$elem["CODE"]]['ITEMS']){
				$properties2[$elem["CODE"]]["NAME"] = $elem["NAME"];
			}				
			
		}		
	
}

if (CModule::IncludeModule('iblock')) {
    $namesProps = [];
    $synonymsProps = [];
    $resNameProps = CIBlockSection::GetList([], ['IBLOCK_ID' => SYNONYMS_IBLOCK_ID]);
    while ($arNameProps = $resNameProps->GetNext()) {
        $namesProps[$arNameProps['ID']] = $arNameProps['NAME'];
    }

    $arSelect = ['NAME', 'IBLOCK_SECTION_ID', 'PROPERTY_WORDS'];
    $arFilterCombinedBrands = array("IBLOCK_ID" => SYNONYMS_IBLOCK_ID);
    $resCombinedBrands = CIBlockElement::GetList(array(), $arFilterCombinedBrands, false, false, $arSelect);
    while ($arFieldsCombinedBrands = $resCombinedBrands->GetNext()) {
        $propName = $namesProps[$arFieldsCombinedBrands['IBLOCK_SECTION_ID']];
        $synonymsProps[$propName][$arFieldsCombinedBrands['NAME']]['GROUPS'][] = $arFieldsCombinedBrands['PROPERTY_WORDS_VALUE'];
    }

    $arResult['SINONYMS_PROPS'] = $synonymsProps;
}

$arResult['PROPS_ACITVE'] = $properties;
$arResult['ACTIVE_PROPS2'] = $properties2;


$cp = $this->__component;

$cp->SetResultCacheKeys(array("PROPS_ACITVE", "ACTIVE_PROPS2"));
