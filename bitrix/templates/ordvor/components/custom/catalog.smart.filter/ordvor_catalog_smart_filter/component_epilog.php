<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $templateData */
/** @var @global CMain $APPLICATION */

CJSCore::Init(array('fx', 'popup'));

global $PAGE_FILTER_PARAMS;
$PAGE_FILTER_PARAMS = $arResult['PROPS_ACITVE'];
?>