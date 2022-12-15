<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

use \Bitrix\Main\Localization\Loc;

if (!empty($arResult['PROPERTIES'][$sPropCode]['VALUE']))
{
	if (!is_array($arResult['PROPERTIES'][$sPropCode]['VALUE']))
	{
		$arResult['PROPERTIES'][$sPropCode]['VALUE'] = [$arResult['PROPERTIES'][$sPropCode]['VALUE']];
	}
	
	$GLOBALS['bannersFilter'] = [
		'=ID' => $arResult['PROPERTIES'][$sPropCode]['VALUE'],
	];

	$APPLICATION->IncludeComponent(
		"bitrix:news.list", 
		"banners", 
		array(
			"ADD_SECTIONS_CHAIN" => "N",
			'CACHE_TYPE' => $arParams['CACHE_TYPE'],
			'CACHE_TIME' => $arParams['CACHE_TIME'],
			'CACHE_FILTER' => $arParams['CACHE_FILTER'],
			'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
			"CHECK_DATES" => "Y",
			"DETAIL_URL" => "",
			"DISPLAY_BOTTOM_PAGER" => "N",
			"DISPLAY_NAME" => "Y",
			"DISPLAY_PREVIEW_TEXT" => "Y",
			"DISPLAY_TOP_PAGER" => "N",
			"FILTER_NAME" => "bannersFilter",
			"HIDE_LINK_WHEN_NO_DETAIL" => "N",
			"IBLOCK_ID" => $arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_ID'],
			"IBLOCK_TYPE" => $arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_TYPE_ID'],
			"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
			"INCLUDE_SUBSECTIONS" => "Y",
			"NEWS_COUNT" => count($arResult['PROPERTIES'][$sPropCode]['VALUE']),
			"PAGER_BASE_LINK_ENABLE" => "N",
			"PAGER_DESC_NUMBERING" => "N",
			"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
			"PAGER_SHOW_ALL" => "N",
			"PAGER_SHOW_ALWAYS" => "N",
			"PAGER_TEMPLATE" => ".default",
			"PAGER_TITLE" => "",
			"PARENT_SECTION" => "",
			"PARENT_SECTION_CODE" => "",
			"PREVIEW_TRUNCATE_LEN" => "",
			"PROPERTY_CODE" => array(
				0 => "LINK",
				1 => "",
			),
			"SET_BROWSER_TITLE" => "N",
			"SET_LAST_MODIFIED" => "N",
			"SET_META_DESCRIPTION" => "N",
			"SET_META_KEYWORDS" => "N",
			"SET_STATUS_404" => "N",
			"SET_TITLE" => "N",
			"SHOW_404" => "N",
			"SORT_BY1" => "ACTIVE_FROM",
			"SORT_BY2" => "SORT",
			"SORT_ORDER1" => "DESC",
			"SORT_ORDER2" => "ASC",
			"STRICT_SECTION_CHECK" => "N",
			"COMPONENT_TEMPLATE" => "banners"
		),
		$component,
		array('HIDE_ICONS' => 'Y')
	);
}
