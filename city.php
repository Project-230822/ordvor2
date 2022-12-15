<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle(""); 
?>


<?php 

if(\Bitrix\Main\Loader::includeModule('olegpro.ipgeobase')) {
	$arCity = \Olegpro\IpGeoBase\IpGeoBase::getInstance()->getRecord();
}

echo "<pre>";
print_r ($arCity);
echo "</pre>";

?>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>