<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
use Bitrix\Main\Loader;
use Bitrix\Main\ModuleManager;

$this->setFrameMode(true);
$this->addExternalCss("/bitrix/css/main/bootstrap.css");


if(!$arResult["VARIABLES"]["SECTION_CODE"] && !$arResult["VARIABLES"]["SECTION_ID"]){

	$res = preg_match('/(.+)\/(filter\/.+\/apply)/', $arResult["VARIABLES"]["SECTION_CODE_PATH"], $matches);
	
	$filter = '';
	if($res == 1){
		
		$sectionCode = $matches[1];
		$filter = $matches[2].'/';
	}else{
		$sectionCode = $arResult["VARIABLES"]["SECTION_CODE_PATH"];
	}
	
	if($sectionCode && strpos($sectionCode, '/') === false){
		
		Loader::includeModule("iblock");
		
		$arFilter1 = array(
			"IBLOCK_ID" => $arParams["IBLOCK_ID"],
			"ACTIVE" => "Y",
			"GLOBAL_ACTIVE" => "Y",
			"=CODE" => $sectionCode
		);
		
		
		
		//var_dump($arFilter1); die();
		
		$dbRes = CIBlockSection::GetList(array(), $arFilter1, false, array("ID", "SECTION_PAGE_URL"));
		
	
		
		if($arSection = $dbRes->GetNext()){
			$url = $arSection["SECTION_PAGE_URL"].$filter;			
			localredirect($url, false, '301 Moved permanently');
			die();
			
		}
		
		
	}
	
	
	\Bitrix\Iblock\Component\Tools::process404(
				""
				,true
				,true
				,true
				,''
			);
	
}


if (!isset($arParams['FILTER_VIEW_MODE']) || (string)$arParams['FILTER_VIEW_MODE'] == '')
	$arParams['FILTER_VIEW_MODE'] = 'VERTICAL';
$arParams['USE_FILTER'] = (isset($arParams['USE_FILTER']) && $arParams['USE_FILTER'] == 'Y' ? 'Y' : 'N');

$isVerticalFilter = ('Y' == $arParams['USE_FILTER'] && $arParams["FILTER_VIEW_MODE"] == "VERTICAL");
$isSidebar = ($arParams["SIDEBAR_SECTION_SHOW"] == "Y" && isset($arParams["SIDEBAR_PATH"]) && !empty($arParams["SIDEBAR_PATH"]));
$isFilter = ($arParams['USE_FILTER'] == 'Y');

if ($isFilter)
{
	$arFilter = array(
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"ACTIVE" => "Y",
		"GLOBAL_ACTIVE" => "Y",
	);
	if (0 < intval($arResult["VARIABLES"]["SECTION_ID"]))
		$arFilter["ID"] = $arResult["VARIABLES"]["SECTION_ID"];
	elseif ('' != $arResult["VARIABLES"]["SECTION_CODE"])
		$arFilter["=CODE"] = $arResult["VARIABLES"]["SECTION_CODE"];

	$obCache = new CPHPCache();
	if ($obCache->InitCache(36000, serialize($arFilter), "/iblock/catalog"))
	{
		$arCurSection = $obCache->GetVars();
	}
	elseif ($obCache->StartDataCache())
	{
		$arCurSection = array();
		if (Loader::includeModule("iblock"))
		{
			$dbRes = CIBlockSection::GetList(array(), $arFilter, false, array("ID", "NAME"));

			if(defined("BX_COMP_MANAGED_CACHE"))
			{
				global $CACHE_MANAGER;
				$CACHE_MANAGER->StartTagCache("/iblock/catalog");

				if ($arCurSection = $dbRes->Fetch())
					$CACHE_MANAGER->RegisterTag("iblock_id_".$arParams["IBLOCK_ID"]);

				$CACHE_MANAGER->EndTagCache();
			}
			else
			{
				if(!$arCurSection = $dbRes->Fetch())
					$arCurSection = array();
			}
		}
		$obCache->EndDataCache($arCurSection);
	}
	if (!isset($arCurSection))
		$arCurSection = array();
}


 if($arCurSection && $GLOBALS['arrFilterSect']["!=ID"] && in_array($arCurSection['ID'], $GLOBALS['arrFilterSect']["!=ID"])){
	 \Bitrix\Iblock\Component\Tools::process404(
				""
				,true
				,true
				,true
			);
 }
			
			

?>

<?/*<h1 class="page-title"><?=$arCurSection["NAME"]?></h1>*/?>
<h1 class="page-title"><? $APPLICATION->ShowTitle(false); ?></h1>

<div class="row">

<?
if ($isVerticalFilter)
	include($_SERVER["DOCUMENT_ROOT"]."/".$this->GetFolder()."/section_vertical.php");
else
	include($_SERVER["DOCUMENT_ROOT"]."/".$this->GetFolder()."/section_horizontal.php");
?>
</div>

<?

global $PAGE_FILTER_PARAMS;



if($PAGE_FILTER_PARAMS && $arCurSection['NAME']){
	
	//echo "<pre>"; var_dump($PAGE_FILTER_PARAMS); echo "</pre>";
	
	//Купить название категории , бренд, свойство 1, свойство 2, свойство 3 в Городе по низкой цене с доставкой от магазина Оружейный двор
	//Доступные цены на категория производитель свойства в интернет магазине shop.ordvor.ru. На сайте вы можете купить категории с доставкой по РФ и Хабаровску
	
	$manufacturers = $PAGE_FILTER_PARAMS["CML2_MANUFACTURER"];
	$manufacturers_str = '';
	$params_str = "";
	
	if($manufacturers['ITEMS'][0]){
		/* 
		$h1 = $arCurSection['NAME'].' '.$manufacturers['ITEMS'][0];
		$APPLICATION->SetTitle($h1);
		 */
		
		$manufacturers_str = ' ' . strtolower(implode(' ', $manufacturers['ITEMS']));
		
		unset($PAGE_FILTER_PARAMS["CML2_MANUFACTURER"]);		
		
	}
	
	if($PAGE_FILTER_PARAMS){
		
		foreach($PAGE_FILTER_PARAMS as $param){
			$params_str .= ' '. $param['NAME'] . ' ' . implode(', ', $param['ITEMS']) . ',';
		}
		
		$params_str = ' ' . rtrim(strtolower($params_str), ',');
		
	}
	
    if($manufacturers || $params_str){
		
		$ipropValues = new \Bitrix\Iblock\InheritedProperty\SectionValues(
			$arParams["IBLOCK_ID"],
			$arCurSection["ID"]
		);
			 
		
		$title = $APPLICATION->GetPageProperty("title");
		$description = $APPLICATION->GetPageProperty("description");
		$keywords = $APPLICATION->GetPageProperty("keywords");
	

		
		//$title = 'Купить ' . $arCurSection['NAME'] . $manufacturers_str . $params_str . ' в {{city|предложный}} купить по низкой цене с доставкой от магазина Оружейный двор'; 		
		//$description = "Доступные цены на " . $arCurSection['NAME'] .  $manufacturers_str  . $params_str . ' в интернет-магазине ' . $_SERVER["SERVER_NAME"] . '. На сайте вы можете купить ' . $arCurSection['NAME'] .' с доставкой по РФ и Хабаровску.';
		

		if($title){
			$APPLICATION->SetPageProperty('title', $title . ' ' . $manufacturers_str . $params_str);	
		}
		
		if($description){
			$APPLICATION->SetPageProperty('description', $description  . ' ' . $manufacturers_str . $params_str); 
		}		
		
		if($keywords){
			$APPLICATION->SetPageProperty('keywords', $keywords  . ' ' . $manufacturers_str . $params_str); 
		}
		
		
		
	}

	

	
}