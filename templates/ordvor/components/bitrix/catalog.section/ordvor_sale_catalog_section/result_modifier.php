<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogSectionComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();

/**BEGIN SALE SECTIONS MENU**/
$arSelect = Array("ID", "IBLOCK_ID", "IBLOCK_SECTION_ID");
$arFilter = Array("IBLOCK_ID"=>$arResult["ORIGINAL_PARAMETERS"]['IBLOCK_ID'], "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y",);
$arFilter = array_merge($arFilter,$arResult["ORIGINAL_PARAMETERS"]["GLOBAL_FILTER"]);
$res = CIBlockElement::GetList(Array(), $arFilter, false,false, $arSelect);
$arTmpResult=[];
while($arRes = $res->Fetch()){
    array_push($arTmpResult, $arRes);
}
$arSectionIDs = [];
foreach($arTmpResult as $item) {
    $arSectionIDs[$item['IBLOCK_SECTION_ID']] = $item['IBLOCK_SECTION_ID'];
}

$filter = ['IBLOCK_ID'=>$arResult["ORIGINAL_PARAMETERS"]['IBLOCK_ID'], 'ID' => array_values($arSectionIDs),'ACTIVE' => 'Y'];
$select = ['ID', 'IBLOCK_ID', 'CODE', 'NAME', 'SECTION_PAGE_URL'];
$rsSections = CIBlockSection::GetList(['NAME' => 'ASC'],$filter,'CNT_ACTIVE',$select);
$arSections=[];
while($arSection=$rsSections->GetNext()){
    $arSections[$arSection['ID']] = $arSection;
}

$this->SetViewTarget('sale_section_list');
?>
    <div class="catalog-menu">
    	<div class="menu-title">Категории</div>
    	<ul>
    		<?php foreach($arSections as $section){?>
    			<li><a href="<?=$section['SECTION_PAGE_URL'];?>index.php?WITH_DISCOUNT=Y"><?=$section['NAME']?></a></li>
    		<?php }?>
    	</ul>
    </div>
<?php 
$this->EndViewTarget();
unset($arTmpResult, $arSelect, $arFilter, $res, $arSectionIDs, $filter, $select, $rsSections);
/**END SALE SECTIONS MENU**/

/**BEGIN SOLVE PROBLEM WITH DETAIL URL'S**/
foreach ($arResult['ITEMS'] as $key => $item) {
   $arResult['ITEMS'][$key]['DETAIL_PAGE_URL'] = str_replace('/catalog/',$arSections[$item['IBLOCK_SECTION_ID']]['SECTION_PAGE_URL'], $item['DETAIL_PAGE_URL']);
}
unset($arSections);
/**END SOLVE PROBLEM WITH DETAIL URL'S**/

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


$urls = array();

foreach ($arResult['ITEMS'] as $key => $arItem)
{
	
	$ids[] = $arItem['ID'];
}
	
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












