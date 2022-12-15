<?php 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test_product_import");
?>

<?php 
/*
include ("work_position.php");

CModule::IncludeModule('iblock');
CModule::IncludeModule('catalog');

$i = 0;

foreach ($work_position as $positions)
{
	
	$positions["title"] = mb_strtolower(trim(preg_replace("/\s{2,}/"," ", $positions["title"])));

	$items[$positions["title"]] = $positions;
	
}


$db_list = CIBlockElement::GetList(Array("SORT"=>"ASC"), Array('IBLOCK_ID'=>18));
while($ar_result = $db_list->GetNext())
{

	
	
	$ar_result["NAME"] = mb_strtolower(trim(preg_replace("/\s{2,}/"," ", $ar_result["NAME"])));
	
	if ($items[$ar_result["NAME"]])
	{
		$i++;
		
		
		echo "RewriteRule ^catalog/(\w+)/" . $items[$ar_result["NAME"]]["seo_url"] . "$ " . $ar_result["DETAIL_PAGE_URL"] . "? [L,R=301]";

		echo "<br>";
	}


}

echo "<h1>" . $i . "</h1>";


*/


?>













<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>