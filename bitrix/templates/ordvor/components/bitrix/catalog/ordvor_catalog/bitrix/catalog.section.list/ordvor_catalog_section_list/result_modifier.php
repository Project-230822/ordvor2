<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$i = 0;

//echo "<pre>"; var_dump($arResult["SECTIONS"]); echo "</pre>";

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
}

$arResult["SECTIONS"] = $arSections;
$arResult["COUNT"] = $i;

?>