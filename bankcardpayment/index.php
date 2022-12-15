<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Оплата банковскими картами Visa и MasterCard в " . $obCity->getDeclination("IN_CITY"));

$description = "Оплата банковскими картами Visa и MasterCard в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Оплата банковскими картами Visa и MasterCard</h1>

	<?php
		$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_RECURSIVE" => "Y",
			"AREA_FILE_SHOW" => "file",
			"AREA_FILE_SUFFIX" => "inc",
			"EDIT_TEMPLATE" => "",
			"PATH" => SITE_DIR."include/bankcardpayment.php"
		)
	);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>