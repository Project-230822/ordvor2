<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();


$rsSections = CIBlockSection::GetList(array("SORT"=>"ASC"), array("IBLOCK_ID"=>intval($arParams['IBLOCK_ID']),"ACTIVE"=>"Y"),false,array("ID","NAME","CODE"),false);
while ($arSection = $rsSections->Fetch()) {
    $arResult["SECTIONS"][$arSection['CODE']]=$arSection['NAME'];
    if($arSection['CODE'] == $arParams['PARENT_SECTION_CODE']) {
        $arResult['ACTIVE_CITY'] = $arSection['NAME'];
    }
}
