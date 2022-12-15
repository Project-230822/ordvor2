<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?php 
CModule::IncludeModule("iblock");

$res = CIBlockElement::GetList(Array(), Array("IBLOCK_ID" => 18, "ACTIVE" => "Y", "CATALOG_AVAILABLE" => "Y"), false, false, Array("ID", "PROPERTY_CML2_MANUFACTURER"));

while ($arItem = $res->fetch())
{
	$arBrandCount[$arItem["PROPERTY_CML2_MANUFACTURER_VALUE"]][] = 1;
}

foreach ($arResult["rows"] as $key => $item)
{
	if (count($arBrandCount[$item["UF_NAME"]]) > 0)
	{
		$arBrands[$key]["NAME"] = $item["UF_NAME"];
		$arBrands[$key]["COUNT"] = count($arBrandCount[$item["UF_NAME"]]);
	}
}

$arResult = $arBrands;


?>