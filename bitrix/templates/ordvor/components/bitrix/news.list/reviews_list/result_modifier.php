<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$arResult['COUNT_REVIEW'] = array();
$arResult['COUNT_STAR'] = 0;
$arResult['ALL_COUNT'] = 0;

$arSelect = Array("ID", "IBLOCK_ID", "ACTIVE", "PROPERTY_PRODUCT_ID" ,"PROPERTY_STAR");
$arFilter = Array("IBLOCK_ID"=>$arParams['IBLOCK_ID'],"PROPERTY_PRODUCT_ID"=>$arParams['PRODUCT_ID']);
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
while($ob = $res->Fetch())
{
    $arResult['COUNT_REVIEW'][$ob["PROPERTY_STAR_VALUE"]]++;
    $arResult['COUNT_STAR'] = $arResult['COUNT_STAR'] + intval($ob["PROPERTY_STAR_VALUE"]);
    $arResult['ALL_COUNT']++;
}
