<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$i = 0;

foreach ($arResult["SECTIONS"] as $section)
{
	
	if ($section["RELATIVE_DEPTH_LEVEL"] == 1)
	{
		$arSections[$section["ID"]] = array(
				"NAME" => $section["NAME"],
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
				"SECTION_PAGE_URL" => $section["SECTION_PAGE_URL"]
		);
		$i++;
		$topSectionID = $section["ID"];
	}
	if ($section["RELATIVE_DEPTH_LEVEL"] == 2)
	{
		$arSections[$section["IBLOCK_SECTION_ID"]]["CHILDREN"][$section["ID"]] = array(
				"NAME" => $section["NAME"],
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