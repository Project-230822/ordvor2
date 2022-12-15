<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogSectionComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();


foreach ($arResult["ORIGINAL_PARAMETERS"]["GLOBAL_FILTER"] as $key => $param)
{
	$pos = stripos($key, "PROPERTY");

	if ($key == "=PROPERTY_158")
	{
		$arManufacturers = $param;
	}
	elseif ($pos !== false) 
	{
		$arFilterPropIDs[] = substr(strstr($key, '_'), 1, strlen($key));
		$arFilterPropValues[substr(strstr($key, '_'), 1, strlen($key))] = $param;
	}
}

if ($arManufacturers)
{
	$arManufacturersNamesStr = " ";
	$property_enums = CIBlockPropertyEnum::GetList(Array("DEF"=>"DESC", "SORT"=>"ASC"), Array("ID" => $arManufacturers));
	while($enum_fields = $property_enums->GetNext())
	{
		$arManufacturersNamesStr .= $enum_fields["VALUE"] . ", ";
	}
	if ($arManufacturersNamesStr)
	{
		$arManufacturersNamesStr = substr($arManufacturersNamesStr, 0, -2);
	}	
}

if ($arFilterPropIDs)
{
	$arFilterPropsStr = " ";
	$res = CIBlockElement::GetProperty(18, "", "sort", "asc", array("ID" => $arFilterPropIDs));
	while ($ob = $res->GetNext())
	{

		$arFilterProps[$ob["NAME"]] = $arFilterPropValues[$ob["ID"]];
		
		$arFilterPropsStr .= $ob["NAME"] . ": ";
		foreach ($arFilterPropValues[$ob["ID"]] as $filterPropValue)
		{
			$arFilterPropsStr .= $filterPropValue . ", ";
		}
		$arFilterPropsStr = substr($arFilterPropsStr, 0, -2);
		$arFilterPropsStr .= ". ";
	}
	
	foreach ($arFilterPropNames as $key => $name)
	{

	}	
}


foreach ($arResult['ITEMS'] as $key => $arItem)
{
	
	$ids[] = $arItem['ID'];
}

$urls = array();
	
if($ids){
	
	$arFilter = Array(
	 "IBLOCK_ID" => $arParams['IBLOCK_ID'], 		
	 "ID" => $ids
	);
	
	$res = CIBlockElement::GetList(Array(), $arFilter, false, false, array('ID', 'IBLOCK_ID', 'DETAIL_PAGE_URL'));
	
	while($ar_fields = $res->GetNext())
	{
	  //echo $ar_fields["DATE_ACTIVE_FROM"].": ".$ar_fields["CNT"]."<br>";
	  $urls[$ar_fields['ID']] = $ar_fields['DETAIL_PAGE_URL']; 
	  
	}
	
}





foreach ($arResult['ITEMS'] as $key => $arItem)
{
	if(isset($urls[$arItem['ID']])){
		$arResult['ITEMS'][$key]['DETAIL_PAGE_URL'] = $urls[$arItem['ID']];
		$arResult['ITEMS'][$key]['~DETAIL_PAGE_URL'] = $urls[$arItem['ID']];
	}
}


//echo "<pre>"; var_dump($arResult['ITEMS'][0]); echo "</pre>";


$cp = $this->__component;

$cp->arResult['HIDE_SECTION_DESCRIPTION'] = $arParams['HIDE_SECTION_DESCRIPTION'];
$cp->arResult['TEMPLATE_THEME'] = $arParams['TEMPLATE_THEME'];
$cp->arResult['IPROPERTY_VALUES'] = $arResult['IPROPERTY_VALUES'];
$cp->arResult['FILTER_MANUFACTURER_NAMES'] = $arManufacturersNamesStr;
$cp->arResult['FILTER_PROPS'] = $arFilterPropsStr;

$cp->SetResultCacheKeys(array(
		"DESCRIPTION",
		"HIDE_SECTION_DESCRIPTION",
		"TEMPLATE_THEME",
		"IPROPERTY_VALUES",
		"FILTER_MANUFACTURER_NAMES",
		"FILTER_PROPS"
));












