<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Скидки самым активным! в " . $obCity->getDeclination("IN_CITY"));

$description = "Самые активные покупатели всегда могут получить скидку за повторную покупку или отзыв в интернет-магазине SHOP.ORDVOR.Ru в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

$APPLICATION->SetPageProperty("keywords", "скидки, акции, отзывы, ordvor.ru, интернет-магазин");

?>

<h1 class="page-title">Скидки самым активным!</h1>

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
			"PATH" => SITE_DIR."include/loyalty.php"
		)
	);?>	
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>