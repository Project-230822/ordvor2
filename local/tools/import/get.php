<?

/*
define("NO_KEEP_STATISTIC", true);
define("NO_AGENT_CHECK", true);
define('PUBLIC_AJAX_MODE', true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
$_SESSION["SESS_SHOW_INCLUDE_TIME_EXEC"]="N";
$APPLICATION->ShowIncludeStat = false;


$arSelect = Array("ID", "IBLOCK_ID", 'IBLOCK_SECTION_ID', "NAME", "PREVIEW_TEXT", "DETAIL_TEXT", "ACTIVE");
$arFilter = Array("IBLOCK_ID" => 18, "SECTION_ID" => 4080);
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);

$fp = fopen('catalog.csv', 'w');

while($ob = $res->GetNextElement()){ 

	  $arItems  = $ob->GetFields();  
	  $arItems['PROPERTIES']  = $ob->GetProperties();
	  fputcsv($fp, array(serialize($arItems)));
	

} */