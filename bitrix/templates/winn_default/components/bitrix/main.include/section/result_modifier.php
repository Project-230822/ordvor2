<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

$arParams['USE_CONTAINER'] = isset($arParams['USE_CONTAINER']) && $arParams['USE_CONTAINER'] === 'N' ? 'N' : 'Y';

$arParams['BACKGROUND_IMAGE'] = isset($arParams['BACKGROUND_IMAGE']) ? trim($arParams['BACKGROUND_IMAGE']) : '';
$arParams['BACKGROUND_COLOR'] = isset($arParams['BACKGROUND_COLOR']) ? trim($arParams['BACKGROUND_COLOR']) : '';

$arContainerAlignList = array('auto', 'left', 'right');

if (!in_array($arParams['CONTAINER_ALIGN'], $arContainerAlignList))
{
	$arParams['CONTAINER_ALIGN'] = 'auto';
}