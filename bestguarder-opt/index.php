<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Приборы ночного видения, фотоловушки оптом купить по низкой цене в " . $obCity->getDeclination("IN_CITY"));

$description = "Доступные цены на фотоловушки и приборы ночного видения в интернет-магазине оптом. Купите оптом приборы ночного видения и фотоловушки с доставкой в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Приборы ночного видения, фотоловушки, охотничьи сигнализации оптом</h1>

	<?php
		$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_RECURSIVE" => "Y",
			"AREA_FILE_SHOW" => "file",
			"AREA_FILE_SUFFIX" => "inc",
			"EDIT_TEMPLATE" => "",
			"PATH" => SITE_DIR."include/bestguarder-opt.php"
		)
	);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>