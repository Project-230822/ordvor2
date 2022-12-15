<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<?
$APPLICATION->RestartBuffer();

while (ob_get_level()) {
    ob_end_clean();
}
unset($arResult["COMBO"]);
echo CUtil::PHPToJSObject($arResult, true);
?>