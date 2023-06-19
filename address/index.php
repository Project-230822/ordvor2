<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Наши магазины");

$obCity = OrdvorCity::getInstance();

$description = "Магазины Оружейный двор Мир приключений Моя рыбалочка в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description); ?>
<? $APPLICATION->GetTitle(false) ?>
<h1 class="page-title"><? $APPLICATION->ShowTitle(false); ?></h1>
<?
global $USER;
if ($USER->IsAdmin()) { ?>
	<div class="our-stores-page">
		<? $APPLICATION->IncludeComponent(
			"custom:our.stores",
			".default",
			array(
				"CACHE_TIME" => "3600",
				"CACHE_TYPE" => "A",
				"IBLOCK_ID" => "35",
				"IBLOCK_TYPE" => "content",
				"WRITE_YOUR_TITLE" => "",
				"COMPONENT_TEMPLATE" => ".default"
			),
			false
		); ?>
	</div>
<? } ?>

<? $APPLICATION->IncludeComponent(
	"bitrix:main.include",
	"",
	array(
		"AREA_FILE_RECURSIVE" => "Y",
		"AREA_FILE_SHOW" => "file",
		"AREA_FILE_SUFFIX" => "inc",
		"EDIT_TEMPLATE" => "",
		"PATH" => SITE_DIR . "include/address.php"
	)
); ?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>