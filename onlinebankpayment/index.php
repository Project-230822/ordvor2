<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Оплата заказа банковской картой через онлайн-банкинг в " . $obCity->getDeclination("IN_CITY"));

$description = "Заказ в интернет-гипермаркете МирПриключений.рф (shop.ordvor.ru) можно оплатить не выходя из дома банковской картой Visa или MasterCard с помощью мобильного и интернет-банкинга. В " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>

<h1 class="page-title">Оплата заказа банковской картой через онлайн-банкинг</h1>

	<?php
		$APPLICATION->IncludeComponent(
		"bitrix:main.include",
		"",
		Array(
			"AREA_FILE_RECURSIVE" => "Y",
			"AREA_FILE_SHOW" => "file",
			"AREA_FILE_SUFFIX" => "inc",
			"EDIT_TEMPLATE" => "",
			"PATH" => SITE_DIR."include/onlinebankpayment.php"
		)
	);?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>