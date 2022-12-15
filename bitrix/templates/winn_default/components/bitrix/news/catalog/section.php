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
$this->setFrameMode(true);

use Bitrix\Main\Loader;
use Bitrix\Main\Localization\Loc;

$arFilter = array(
	"IBLOCK_ID" => $arParams["IBLOCK_ID"],
	"ACTIVE" => "Y",
	"GLOBAL_ACTIVE" => "Y",
	"CNT_ACTIVE" => "Y"
);
if (0 < intval($arResult["VARIABLES"]["SECTION_ID"]))
	$arFilter["ID"] = $arResult["VARIABLES"]["SECTION_ID"];
elseif ('' != $arResult["VARIABLES"]["SECTION_CODE"])
	$arFilter["=CODE"] = $arResult["VARIABLES"]["SECTION_CODE"];

$obCache = new CPHPCache();
if ($obCache->InitCache(36000, serialize($arFilter), "/iblock/catalog"))
{
	$arResult['SECTION'] = $obCache->GetVars();
}
elseif ($obCache->StartDataCache())
{
	$arResult['SECTION'] = array();
	if (Loader::includeModule("iblock"))
	{
		$arSelect = array(
			'ID',
			'NAME',
			'LEFT_MARGIN',
			'RIGHT_MARGIN',
			'SECTION_PAGE_URL',
			'DEPTH_LEVEL',
		);

		$dbRes = CIBlockSection::GetList(array(), $arFilter, true, $arSelect);
		$dbRes->SetUrlTemplates('', $arResult['FOLDER'].$arResult['URL_TEMPLATES']['section']);
		$arResult['SECTION'] = $dbRes->GetNext();

		if ($arResult['SECTION'])
		{
			$arResult['SECTION']['IS_PARENT'] = 'N';

			unset($arFilter['ID']);
			unset($arFilter['=CODE']);
			$arFilter['LEFT_MARGIN'] = $arResult['SECTION']['LEFT_MARGIN']+1;
			$arFilter['RIGHT_MARGIN'] = $arResult['SECTION']['RIGHT_MARGIN'];
			$arFilter['<=DEPTH_LEVEL'] = $arResult['SECTION']['DEPTH_LEVEL'] + 1;

			$rsSections = CIBlockSection::GetList(array(), $arFilter, false, $arSelect);
			$rsSections->SetUrlTemplates('', $arParams['SECTION_URL']);
			while ($arSection = $rsSections->GetNext())
			{
				$arResult['SECTION']['IS_PARENT'] = 'Y';
				break;
			}
		}

		if(defined("BX_COMP_MANAGED_CACHE"))
		{
			global $CACHE_MANAGER;
			$CACHE_MANAGER->StartTagCache("/iblock/catalog");

			if ($arResult['SECTION'])
				$CACHE_MANAGER->RegisterTag("iblock_id_".$arParams["IBLOCK_ID"]);

			$CACHE_MANAGER->EndTagCache();
		}
		else
		{
			if(!$arResult['SECTION'])
				$arResult['SECTION'] = array();
		}
	}
	$obCache->EndDataCache($arResult['SECTION']);
}

if (!isset($arResult['SECTION']))
	$arResult['SECTION'] = array();

if (
	$arParams['CATALOG_VIEW_MODE'] == 'VIEW_SECTIONS'
	&& $arResult['SECTION']['IS_PARENT'] == 'Y'
)
{
	?>
	<?$APPLICATION->IncludeComponent(
		"bitrix:catalog.section.list",
		"catalog",
		Array(
			"IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
			"IBLOCK_ID" => $arParams["IBLOCK_ID"],
			"SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
			"SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
			"CACHE_TYPE" => $arParams["CACHE_TYPE"],
			"CACHE_TIME" => $arParams["CACHE_TIME"],
			"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
			"COUNT_ELEMENTS" => $arParams["SECTION_COUNT_ELEMENTS"],
			"TOP_DEPTH" => $arParams["SECTION_TOP_DEPTH"],
			"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
			"SECTIONS_VIEW_MODE" => $arParams["SECTIONS_VIEW_MODE"],
			"BANNER_TYPE" => $arParams["BANNER_TYPE"],
			"SHOW_PARENT_NAME" => 'N',//$arParams["SECTIONS_SHOW_PARENT_NAME"],
			"HIDE_SECTION_NAME" => (isset($arParams["SECTIONS_HIDE_SECTION_NAME"]) ? $arParams["SECTIONS_HIDE_SECTION_NAME"] : "N"),
			"ADD_SECTIONS_CHAIN" => (isset($arParams["ADD_SECTIONS_CHAIN"]) ? $arParams["ADD_SECTIONS_CHAIN"] : ''),
			"SECTION_USER_FIELDS" => $arParams["SECTION_USER_FIELDS"],
			"SET_TITLE" => $arParams["SET_TITLE"],
			"SECTIONS_VIEW_MODE" => $arParams["SECTIONS_VIEW_MODE"],
			"GRID_RESPONSIVE_SETTINGS" => $arParams["~SECTIONS_GRID_RESPONSIVE_SETTINGS"],
		),
		$component
	);?>
	<?php
}
else
{
	?>
<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"catalog",
	Array(
		"IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"NEWS_COUNT" => $arParams["NEWS_COUNT"],
		"SORT_BY1" => $arParams["SORT_BY1"],
		"SORT_ORDER1" => $arParams["SORT_ORDER1"],
		"SORT_BY2" => $arParams["SORT_BY2"],
		"SORT_ORDER2" => $arParams["SORT_ORDER2"],
		"FIELD_CODE" => $arParams["LIST_FIELD_CODE"],
		"PROPERTY_CODE" => $arParams["LIST_PROPERTY_CODE"],
		"DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
		"SET_TITLE" => $arParams["SET_TITLE"],
		"SET_LAST_MODIFIED" => $arParams["SET_LAST_MODIFIED"],
		"MESSAGE_404" => $arParams["MESSAGE_404"],
		"SET_STATUS_404" => $arParams["SET_STATUS_404"],
		"SHOW_404" => $arParams["SHOW_404"],
		"FILE_404" => $arParams["FILE_404"],
		"INCLUDE_IBLOCK_INTO_CHAIN" => $arParams["INCLUDE_IBLOCK_INTO_CHAIN"],
		"ADD_SECTIONS_CHAIN" => $arParams["ADD_SECTIONS_CHAIN"],
		"CACHE_TYPE" => $arParams["CACHE_TYPE"],
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"CACHE_FILTER" => $arParams["CACHE_FILTER"],
		"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
		"DISPLAY_TOP_PAGER" => $arParams["DISPLAY_TOP_PAGER"],
		"DISPLAY_BOTTOM_PAGER" => $arParams["DISPLAY_BOTTOM_PAGER"],
		"PAGER_TITLE" => $arParams["PAGER_TITLE"],
		"PAGER_TEMPLATE" => $arParams["PAGER_TEMPLATE"],
		"PAGER_SHOW_ALWAYS" => $arParams["PAGER_SHOW_ALWAYS"],
		"PAGER_DESC_NUMBERING" => $arParams["PAGER_DESC_NUMBERING"],
		"PAGER_DESC_NUMBERING_CACHE_TIME" => $arParams["PAGER_DESC_NUMBERING_CACHE_TIME"],
		"PAGER_SHOW_ALL" => $arParams["PAGER_SHOW_ALL"],
		"PAGER_BASE_LINK_ENABLE" => $arParams["PAGER_BASE_LINK_ENABLE"],
		"PAGER_BASE_LINK" => $arParams["PAGER_BASE_LINK"],
		"PAGER_PARAMS_NAME" => $arParams["PAGER_PARAMS_NAME"],
		"DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => $arParams["DISPLAY_PICTURE"],
		"DISPLAY_PREVIEW_TEXT" => $arParams["DISPLAY_PREVIEW_TEXT"],
		"PREVIEW_TRUNCATE_LEN" => $arParams["PREVIEW_TRUNCATE_LEN"],
		"ACTIVE_DATE_FORMAT" => $arParams["LIST_ACTIVE_DATE_FORMAT"],
		"USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"],
		"GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
		"FILTER_NAME" => $arParams["FILTER_NAME"],
		"HIDE_LINK_WHEN_NO_DETAIL" => $arParams["HIDE_LINK_WHEN_NO_DETAIL"],
		"CHECK_DATES" => $arParams["CHECK_DATES"],
		"STRICT_SECTION_CHECK" => $arParams["STRICT_SECTION_CHECK"],

		"PARENT_SECTION" => $arResult["VARIABLES"]["SECTION_ID"],
		"PARENT_SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
		"DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["detail"],
		"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
		"IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],

		"GRID_RESPONSIVE_SETTINGS" => $arParams["~SECTIONS_GRID_RESPONSIVE_SETTINGS"],
	),
	$component
);?>
	<?php
}

