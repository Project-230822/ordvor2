<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
$APPLICATION->ShowAjaxHead();

$APPLICATION->IncludeComponent(
	"custom:delivery.calculation",
	"",
	array(
		"DEFAULT_PRODUCT_ID" => 380,
		"SHOW_NOT_CALCULATED_DELIVERIES" => "N",
		"PERSON_TYPE" => 1,
		"DEFAULT_WEIGHT" => 1,
		"AJAX_MODE" => "Y",
		"AJAX_OPTION_SHADOW" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_TYPE" => "N",
	)
);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/epilog_after.php");
