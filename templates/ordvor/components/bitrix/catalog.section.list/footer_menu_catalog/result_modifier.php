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
		);
		$i++;
		$topSectionID = $section["ID"];
	}
}

$arResult["SECTIONS"] = $arSections;
$arResult["COUNT"] = $i;

?>