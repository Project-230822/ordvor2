<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

// Обнуляем $arResult
$arResult = array();

// Выбираем дочерние разделы для текущего раздела
if(CModule::IncludeModule("iblock"))
{
	$items = GetIBlockSectionList($arParams["IBLOCK_ID"], $arParams["SECTION_ID"]);
	$i = 0;
	while($arItem = $items->GetNext())
	{
		$arResult["SECTIONS"][$i]["NAME"] = $arItem["NAME"];
		$arResult["SECTIONS"][$i]["SECTION_PAGE_URL"] = $arItem["SECTION_PAGE_URL"];
		$i++;
	}
}

$navChain = CIBlockSection::GetNavChain($arParams["IBLOCK_ID"], $arParams["SECTION_ID"], array("ID", "IBLOCK_SECTION_ID", "NAME", "SECTION_PAGE_URL"));
$i = 0;
while ($arNav = $navChain->GetNext())
{
	$arNavChain[] = $arNav["IBLOCK_SECTION_ID"];
	$arResult["NAVIGATION"][$i]["NAME"] = $arNav["NAME"];
	$arResult["NAVIGATION"][$i]["SECTION_PAGE_URL"] = $arNav["SECTION_PAGE_URL"];
	$i++;
}

array_pop($arResult["NAVIGATION"]);

// Если ничего не нашлось, то берем цепочку разделов до текущего и ID раздела на 1 уровень выше
if (!$arResult["SECTIONS"])
{
	// И выбираем разделы уже уровня выше
	$items = GetIBlockSectionList($arParams["IBLOCK_ID"], end($arNavChain));
	$i = 0;
	while($arItem = $items->GetNext())
	{
		$arResult["SECTIONS"][$i]["ID"] = $arItem["ID"];
		$arResult["SECTIONS"][$i]["NAME"] = $arItem["NAME"];
		$arResult["SECTIONS"][$i]["SECTION_PAGE_URL"] = $arItem["SECTION_PAGE_URL"];
		$i++;
	}

	// Записываем ID текущего раздела для того, чтобы его подсветить при выводе в шаблоне
	$arResult["THIS_SECTION_ID"] = $arParams["SECTION_ID"];
}




?>