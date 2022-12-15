<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arParams
 * @var array $templateData
 * @var string $templateFolder
 * @var CatalogSectionComponent $component
 */

global $APPLICATION;

if (isset($templateData['TEMPLATE_THEME']))
{
	$APPLICATION->SetAdditionalCSS($templateFolder.'/themes/'.$templateData['TEMPLATE_THEME'].'/style.css');
	$APPLICATION->SetAdditionalCSS('/bitrix/css/main/themes/'.$templateData['TEMPLATE_THEME'].'/style.css', true);
}

if (!empty($templateData['TEMPLATE_LIBRARY']))
{
	$loadCurrency = false;
	if (!empty($templateData['CURRENCIES']))
	{
		$loadCurrency = \Bitrix\Main\Loader::includeModule('currency');
	}

	CJSCore::Init($templateData['TEMPLATE_LIBRARY']);

	if ($loadCurrency)
	{
		?>
		<script>
			BX.Currency.setCurrencies(<?=$templateData['CURRENCIES']?>);
		</script>
		<?
	}
}

//	lazy load and big data json answers
$request = \Bitrix\Main\Context::getCurrent()->getRequest();
if ($request->isAjaxRequest() && ($request->get('action') === 'showMore' || $request->get('action') === 'deferredLoad'))
{
	$content = ob_get_contents();
	ob_end_clean();

	list(, $itemsContainer) = explode('<!-- items-container -->', $content);
	list(, $paginationContainer) = explode('<!-- pagination-container -->', $content);
	list(, $epilogue) = explode('<!-- component-end -->', $content);

	if ($arParams['AJAX_MODE'] === 'Y')
	{
		$component->prepareLinks($paginationContainer);
	}

	$component::sendJsonAnswer(array(
		'items' => $itemsContainer,
		'pagination' => $paginationContainer,
		'epilogue' => $epilogue,
	));
}

$obCity = OrdvorCity::getInstance();

// SEO //

/*
if ($arResult["FILTER_MANUFACTURER_NAMES"] || $arResult["FILTER_PROPS"])
{
	$title = "Купить " . $arResult["NAME"] . $arResult["FILTER_MANUFACTURER_NAMES"] . " по доступной цене в " . $obCity->getDeclination("IN_CITY") . "." . $arResult["FILTER_PROPS"];
	$description = "Доступная цена на " . $arResult["NAME"] . $arResult["FILTER_MANUFACTURER_NAMES"] . " в интернет магазине Оружейный двор. Купите " . $arResult["NAME"] . " с доставкой в " . $obCity->getDeclination("IN_CITY") . "." . $arResult["FILTER_PROPS"];
}
elseif ($arResult["IPROPERTY_VALUES"])
{
	$arResult["IPROPERTY_VALUES"]["SECTION_META_TITLE"] = preg_replace("/&#?[a-z0-9]+;/i","",$arResult["IPROPERTY_VALUES"]["SECTION_META_TITLE"]);
	$arResult["IPROPERTY_VALUES"]["SECTION_META_DESCRIPTION"] = preg_replace("/&#?[a-z0-9]+;/i","",$arResult["IPROPERTY_VALUES"]["SECTION_META_DESCRIPTION"]);
	
	$title = $arResult["IPROPERTY_VALUES"]["SECTION_META_TITLE"] . " в " . $obCity->getDeclination("IN_CITY");
	$description = $arResult["IPROPERTY_VALUES"]["SECTION_META_DESCRIPTION"] . " в " . $obCity->getDeclination("IN_CITY");
}
elseif ($arResult["NAME"])
{
	$arResult["NAME"] = preg_replace("/&#?[a-z0-9]+;/i","",$arResult["NAME"]);
	
	$title = "Купить " . $arResult["NAME"] . " по низкой цене в " . $obCity->getDeclination("IN_CITY");
	$description = "Доступная цена на " . $arResult["NAME"] . " в интернет магазине Оружейный двор. Купите " . $arResult["NAME"] . " с доставкой в " . $obCity->getDeclination("IN_CITY");
}
*/

if ($arResult["THIS_SECTION_NAME"])
{
	$title = "Товары " . $arParams["THIS_BRAND"] . " из раздела " . $arResult["THIS_SECTION_NAME"] . " купить по доступной цене в " . $obCity->getDeclination("IN_CITY");
	$description = "Доступная цена на товары " . $arParams["THIS_BRAND"] . " из раздела " . $arResult["THIS_SECTION_NAME"] ." в интернет магазине Оружейный двор. Купите товары " . $arParams["THIS_BRAND"] . " с доставкой в " . $obCity->getDeclination("IN_CITY");
}
else 
{
	$title = "Товары " . $arParams["THIS_BRAND"] . " купить по низкой цене в " . $obCity->getDeclination("IN_CITY");
	$description = "Полный перечень товаров " . $arParams["THIS_BRAND"] . " в интернет-магазине Оружейный двор. Купить товары " . $arParams["THIS_BRAND"] . " по низкой цене с доставкой в " . $obCity->getDeclination("IN_CITY");
}


$APPLICATION->SetPageProperty("title", $title);
$APPLICATION->SetPageProperty("description", $description);

// End SEO //


// Вывод описания раздела с подменой меток на домен и текущий город в разных падежах
if ($arResult['HIDE_SECTION_DESCRIPTION'] !== 'Y')
{

	$obCity = OrdvorCity::getInstance();
	
	$arDesignation = array (
		"{{city|domain}}", 
		"{City}", 
		"{{city|предложный}}",
		"{underCity}",
		"{whenceCity}",
		"{whatCity}"
	);
	$arDeclination = array(
		$_SERVER['SERVER_NAME'],
		$obCity->getDeclination("CITY"),
		$obCity->getDeclination("IN_CITY"),
		$obCity->getDeclination("UNDER_CITY"),
		$obCity->getDeclination("WHENCE_CITY"),
		$obCity->getDeclination("WHAT_CITY"),
	);
	
	$arResult['DESCRIPTION'] = str_ireplace($arDesignation, $arDeclination, $arResult['DESCRIPTION']);
	
	?>
		<div class="bx-section-desc bx-<?=$arResult['TEMPLATE_THEME']?>">
			<div class="col-xs-12">
				<p class="bx-section-desc-post"><?=$arResult['DESCRIPTION']?></p>
			</div>
		</div>
	<?
}
?>