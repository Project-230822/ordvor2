<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle ("Информация о способах оплаты в нашем магазине - Оружейный двор в " . $obCity->getDeclination("IN_CITY"));

$description = "Информация о способах оплаты в нашем магазине - Оружейный двор в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Оплата</h1>

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
			"PATH" => SITE_DIR."include/payment.php"
		)
	);?>	
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>