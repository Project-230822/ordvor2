<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Магазины Оружейный двор Мир приключений Моя рыбалочка в " . $obCity->getDeclination("IN_CITY"));

$description = "Магазины Оружейный двор Мир приключений Моя рыбалочка в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Контакты</h1>

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
			"PATH" => SITE_DIR."include/address.php"
		)
	);?>	
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>