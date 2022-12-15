<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Автохолодильники оптом ICE CUBE купить по низкой цене в " . $obCity->getDeclination("IN_CITY"));

$description = "Купите автохолодильники оптом Ice Cube через интернет-магазин. Широкий выбор и оптовые цены на автохолодильники Ice Cube с доставкой в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Компрессорные автохолодильники ICE CUBE оптом</h1>

	<?php
		$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_RECURSIVE" => "Y",
			"AREA_FILE_SHOW" => "file",
			"AREA_FILE_SUFFIX" => "inc",
			"EDIT_TEMPLATE" => "",
			"PATH" => SITE_DIR."include/kompressornie-avtoholodilniki-icecube-opt.php"
		)
	);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>