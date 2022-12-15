<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Где купить автохолодильники ICE CUBE по доступной цене с доставкой в " . $obCity->getDeclination("IN_CITY"));

$description = "Где купить автохолодильники ICE CUBE по доступной цене с доставкой в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Где купить ICE CUBE?</h1>

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
			"PATH" => SITE_DIR."include/gde-kupit-icecube.php"
		)
	);?>	
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>