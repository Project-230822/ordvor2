<?php 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test_product_import");
?>

<?php 
/*
include ("work_cat.php");

CModule::IncludeModule('iblock');
CModule::IncludeModule('catalog');

$i = 0;

foreach ($work_cat as $cat)
{
	
	$cat["title"] = mb_strtolower(trim(preg_replace("/\s{2,}/"," ", $cat["title"])));

	$category[$cat["title"]] = $cat;
	
}

$bs = new CIBlockSection;

$db_list = CIBlockSection::GetList(Array("SORT"=>"ASC"), Array('IBLOCK_ID'=>18), true);
while($ar_result = $db_list->GetNext())
{


	
	$ar_result["NAME"] = mb_strtolower(trim(preg_replace("/\s{2,}/"," ", $ar_result["NAME"])));
	
	if ($category[$ar_result["NAME"]]["foto"])
	{
		
		$url = $_SERVER["DOCUMENT_ROOT"] . "/upload/cat/" . $category[$ar_result["NAME"]]["foto"];
		
		*/
		
	/*
		$arFile = CFile::MakeFileArray($url);
		
		//$fid = CFile::SaveFile($arFile, "vote");

		$arFile["MODULE_ID"] = "iblock";
		
		$arFields = Array(
				"PICTURE" => $arFile,
				);
		
		$res = $bs->Update($ar_result["ID"], $arFields);

		echo "<pre>";
		print_r ($arFile);
		echo "</pre>";
		
		$i++;
*/
		
	//}
	

	



}

echo "<h1>" . $i . "</h1>";





?>













<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>