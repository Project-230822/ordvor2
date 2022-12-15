<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Порядок возврата товара в интернет-магазине Оружейный двор в " . $obCity->getDeclination("IN_CITY"));

$description = "Порядок возврата товара в интернет-магазине Оружейный двор в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Порядок возврата товара</h1>

<div class="content">
	<?php
		$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_RECURSIVE" => "Y",
			"AREA_FILE_SHOW" => "file",
			"AREA_FILE_SUFFIX" => "inc",
			"EDIT_TEMPLATE" => "",
			"PATH" => SITE_DIR."include/conditions.php"
		)
	);?>	
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>