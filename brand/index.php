<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Бренды интернет-магазина Оружейный Двор в \" . \$obCity->getDeclination(\"IN_CITY\"));

\$description = \"Бренды интернет-магазина Оружейный Двор в \" . \$obCity->getDeclination(\"IN_CITY");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Бренды интернет-магазина Оружейный Двор в " . $obCity->getDeclination("IN_CITY"));

$description = "Бренды интернет-магазина Оружейный Двор в " . $obCity->getDeclination("IN_CITY");
$APPLICATION->SetPageProperty("description", $description);

?>
<?php 

global $arrFilter;

?>

<?php 

?>

<div class="col-md-3 col-sm-12 col-xs-12">

		<?$APPLICATION->IncludeComponent(
			"bitrix:catalog.section.list",
			"brand_menu_catalog",
			Array(
				"ADD_SECTIONS_CHAIN" => "N",
				"CACHE_FILTER" => "N",
				"CACHE_GROUPS" => "Y",
				"CACHE_TIME" => "36000000",
				"CACHE_TYPE" => "A",
				"COMPONENT_TEMPLATE" => ".default",
				"COUNT_ELEMENTS" => "N",
				"FILTER_NAME" => "sectionsFilter",
				"HIDE_SECTION_NAME" => "N",
				"IBLOCK_ID" => "18",
				"IBLOCK_TYPE" => "1c_catalog",
				"SECTION_CODE" => "",
				"SECTION_FIELDS" => array(0=>"",1=>"",),
				"SECTION_ID" => "",
				"SECTION_URL" => "",
				"SECTION_USER_FIELDS" => array(0=>"",1=>"",),
				"SHOW_PARENT_NAME" => "Y",
				"TOP_DEPTH" => "3",
				"VIEW_MODE" => "LIST"
			)
		);?>

</div>

<div class="col-md-9 col-sm-12 col-xs-12">

<?php 
if ($_REQUEST["section"])
{
	$sectionCode = trim(strip_tags($_REQUEST["section"]));
}
?>

<?$APPLICATION->IncludeComponent(
	"rasa:brand.list", 
	".default", 
	array(
		"COMPONENT_TEMPLATE" => ".default",
		"CHECKBOX_ACTIVE_ELEMENTS" => "Y",
		"CHECKBOX_AVAILABLE_PRODUCTS" => "N",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "360000",
		"IBLOCK_TYPE" => "1c_catalog",
		"IBLOCK_ID" => "18",
		"SECTION_CODE" => $sectionCode
	),
	false
);?>


</div>


<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>