<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use \Bitrix\Iblock;
use \Bitrix\Main\Loader;
use \Bitrix\Main\ModuleManager;
use \Bitrix\Main\Web\Json;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;
use \Redsign\Winn\ElementListUtils;
use \Redsign\Winn\MyTemplate;


if (!Loader::includeModule('iblock'))
	return;

$arProperty_UF = array();
$arSProperty_LNS = array();
$arSProperty_F = array();
if ($iblockExists)
{
	$arUserFields = $USER_FIELD_MANAGER->GetUserFields('IBLOCK_'.$arCurrentValues['IBLOCK_ID'].'_SECTION', 0, LANGUAGE_ID);
	foreach( $arUserFields as $FIELD_NAME => $arUserField)
	{
		$arUserField['LIST_COLUMN_LABEL'] = (string)$arUserField['LIST_COLUMN_LABEL'];
		$arProperty_UF[$FIELD_NAME] = $arUserField['LIST_COLUMN_LABEL'] ? '['.$FIELD_NAME.']'.$arUserField['LIST_COLUMN_LABEL'] : $FIELD_NAME;

		if ($arUserField['USER_TYPE']['BASE_TYPE'] === 'string')
		{
			$arSProperty_LNS[$FIELD_NAME] = $arProperty_UF[$FIELD_NAME];
		}

		if ($arUserField['USER_TYPE']['BASE_TYPE'] === 'file' && $arUserField['MULTIPLE'] === 'N')
		{
			$arSProperty_F[$FIELD_NAME] = $arProperty_UF[$FIELD_NAME];
		}
	}
	unset($arUserFields);
}

$defaultValue = array('-' => GetMessage('CP_BC_TPL_PROP_EMPTY'));

$iblockExists = (!empty($arCurrentValues['IBLOCK_ID']) && (int)$arCurrentValues['IBLOCK_ID'] > 0);

$arAllPropList = array();
$arListPropList = array();
$arHighloadPropList = array();
$arLinkElementPropList = array();
$arFilePropList = $defaultValue;

if ($iblockExists)
{
	$rsProps = CIBlockProperty::GetList(
		array('SORT' => 'ASC', 'ID' => 'ASC'),
		array('IBLOCK_ID' => $arCurrentValues['IBLOCK_ID'], 'ACTIVE' => 'Y')
	);
	while ($arProp = $rsProps->Fetch())
	{
		$strPropName = '['.$arProp['ID'].']'.('' != $arProp['CODE'] ? '['.$arProp['CODE'].']' : '').' '.$arProp['NAME'];
		if ('' == $arProp['CODE'])
		{
			$arProp['CODE'] = $arProp['ID'];
		}

		$arAllPropList[$arProp['CODE']] = $strPropName;

		if ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE)
		{
			$arFilePropList[$arProp['CODE']] = $strPropName;
		}

		if ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_LIST)
		{
			$arListPropList[$arProp['CODE']] = $strPropName;
		}

		if ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_STRING && 'directory' == $arProp['USER_TYPE'] && CIBlockPriceTools::checkPropDirectory($arProp))
		{
			$arHighloadPropList[$arProp['CODE']] = $strPropName;
		}

		if ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT)
		{
			$arLinkElementPropList[$arProp['CODE']] = $strPropName;
		}
	}
}

$arCatalogViewMode = array(
	'-' => getMessage('CP_BC_TPL_PROP_EMPTY'),
	'VIEW_SECTIONS' => getMessage('RS_WINN_CATALOG_VIEW_MODE_SECTIONS'),
	'VIEW_ELEMENTS' => getMessage('RS_WINN_CATALOG_VIEW_MODE_ELEMENTS')
);

$arTemplateParameters = array(
	"DISPLAY_DATE" => Array(
		"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_DATE"),
		"TYPE" => "CHECKBOX",
		"DEFAULT" => "Y",
	),
	"DISPLAY_PICTURE" => Array(
		"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_PICTURE"),
		"TYPE" => "CHECKBOX",
		"DEFAULT" => "Y",
	),
	"DISPLAY_PREVIEW_TEXT" => Array(
		"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_TEXT"),
		"TYPE" => "CHECKBOX",
		"DEFAULT" => "Y",
	),
	'CATALOG_VIEW_MODE' => array(
		'PARENT' => 'SECTIONS_SETTINGS',
		'NAME' => getMessage('RS_WINN_CATALOG_VIEW_MODE'),
		'TYPE' => 'LIST',
		'VALUES' => $arCatalogViewMode,
		'MULTIPLE' => 'N',
		'DEFAULT' => 'VIEW_ELEMENTS',
		'REFRESH' => 'Y',
	),
	'LIST_BACKGROUND_COLOR' => array(
		'PARENT' => 'LIST_SETTINGS',
		'NAME' => GetMessage('RS_WINN_LIST_BACKGROUND_COLOR'),
		'TYPE' => 'LIST',
		'MULTIPLE' => 'N',
		'DEFAULT' => '-',
		'ADDITIONAL_VALUES' => 'Y',
		'VALUES' => array_merge($defaultValue, $arSProperty_LNS)
	),
	'SECTION_BACKGROUND_IMAGE' =>array(
		'PARENT' => 'LIST_SETTINGS',
		'NAME' => GetMessage('CP_BC_BACKGROUND_IMAGE'),
		'TYPE' => 'LIST',
		'DEFAULT' => '-',
		'MULTIPLE' => 'N',
		'VALUES' => array_merge(array('-'=>' '), $arSProperty_F)
	),
	'DETAIL_BACKGROUND_COLOR' => array(
		'PARENT' => 'DETAIL_SETTINGS',
		'NAME' => GetMessage('RS_WINN_DETAIL_BACKGROUND_COLOR'),
		'TYPE' => 'LIST',
		'MULTIPLE' => 'N',
		'DEFAULT' => '-',
		'ADDITIONAL_VALUES' => 'Y',
		'VALUES' => $defaultValue + $arAllPropList,
	),
	'DETAIL_BACKGROUND_IMAGE' =>array(
		'PARENT' => 'DETAIL_SETTINGS',
		'NAME' => GetMessage('CP_BC_BACKGROUND_IMAGE'),
		'TYPE' => 'LIST',
		'MULTIPLE' => 'N',
		'DEFAULT' => '-',
		'VALUES' => array_merge(array('-'=>' '), $arFilePropList)
	),
);

if ($arCurrentValues['CATALOG_VIEW_MODE'] == 'VIEW_SECTIONS')
{
	if (Loader::includeModule('redsign.winn'))
	{
		ParametersUtils::addCommonParameters($arTemplateParameters, $arCurrentValues, array('gridSettings'));
	
		$arTemplateParameters['SECTIONS_GRID_RESPONSIVE_SETTINGS'] = $arTemplateParameters['GRID_RESPONSIVE_SETTINGS'];
		$arTemplateParameters['SECTIONS_GRID_RESPONSIVE_SETTINGS']['PARENT'] = 'SECTIONS_SETTINGS';
		unset($arTemplateParameters['GRID_RESPONSIVE_SETTINGS']);
	}
}
