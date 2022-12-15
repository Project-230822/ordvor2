<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

Loc::loadMessages(__FILE__);

$arTemplateParameters['RS_USE_SUMMARY_PAGE'] = array(
	'PARENT' => 'VISUAL',
	'TYPE' => 'CHECKBOX',
	'DEFAULT' => 'Y',
	'REFRESH' => 'Y',
	'NAME' => Loc::getMessage('RS_NLINE_PARAMETERS_USE_SUMMARY_PAGE')
);

if ($arCurrentValues['RS_USE_SUMMARY_PAGE'] == 'Y')
{
	$arTemplateParameters['RS_SUMMARY_PAGE_TITLE'] = array(
		'PARENT' => 'VISUAL',
		'TYPE' => 'STRING',
		'DEFAULT' => Loc::getMessage('RS_NLINE_PARAMETERS_SUMMARY_PAGE_TITLE_DEFAULT'),
		'NAME' => Loc::getMessage('RS_NLINE_PARAMETERS_SUMMARY_PAGE_TITLE')
	);

	$arTemplateParameters['RS_SUMMARY_PAGE_LINK'] = array(
		'PARENT' => 'VISUAL',
		'TYPE' => 'STRING',
		'NAME' => Loc::getMessage('RS_NLINE_PARAMETERS_SUMMARY_PAGE_LINK'),
		'DEFAULT' => '/info/',
	);
}

// $arTemplateParameters['RS_SHOW_IBLOCK'] = array(
// 	'PARENT' => 'VISUAL',
// 	'TYPE' => 'CHECKBOX',
// 	'DEFAULT' => 'Y',
// 	'REFRESH' => 'Y',
// 	'NAME' => Loc::getMessage('RS_NLINE_PARAMETERS_SHOW_IBLOCK')
// );

if (Loader::includeModule('redsign.winn'))
{
	$arTemplateParameters['GRID_RESPONSIVE_SETTINGS'] = ParametersUtils::getGridParameters(array(
		'PARENT' => 'VISUAL'
	));
}