<?php if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die(); ?>

<?php

// Добавляем раздел в URL 
/* $res = CIBlockSection::GetByID($arResult["ITEM"]["IBLOCK_SECTION_ID"]);
if($ar_res = $res->GetNext())
{
	$url = explode("/catalog/", $arResult["ITEM"]["DETAIL_PAGE_URL"]);
	$arResult["ITEM"]["DETAIL_PAGE_URL"] = "/catalog/" . $ar_res["CODE"] . "/" . $url[1];
}
 */
?>