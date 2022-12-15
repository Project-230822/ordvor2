<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$i = 0;

foreach ($arResult["SECTIONS"] as $section)
{
	
	if ($section["RELATIVE_DEPTH_LEVEL"] == 1 && $section["UF_SHOW_ON_MAIN"] == 1)
	{
		$name = $section["UF_SHORT_NAME"] ? $section["UF_SHORT_NAME"] : $section["NAME"];
		
		$arSections[$section["ID"]] = array(
				"NAME" => $name,
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
				"SECTION_PAGE_URL" => $section["SECTION_PAGE_URL"]
		);
		$i++;
		$topSectionID = $section["ID"];
	}
	if ($section["RELATIVE_DEPTH_LEVEL"] == 2 && $section["UF_SHOW_ON_MAIN"] == 1)
	{
		$name = $section["UF_SHORT_NAME"] ? $section["UF_SHORT_NAME"] : $section["NAME"];
		
		$arSections[$section["IBLOCK_SECTION_ID"]]["CHILDREN"][$section["ID"]] = array(
				"NAME" => $name,
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
				"SECTION_PAGE_URL" => $section["SECTION_PAGE_URL"]
		);
		$i++;
	}
}

$arResult["SECTIONS"] = $arSections;
$arResult["COUNT"] = $i;



?>