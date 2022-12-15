<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();


use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

$defaultListValues = array('-' => getMessage('RS_WINN_UNDEFINED'));

$arTemplateParameters = array(
	'SHOW_PARENT_NAME' => array(
		'PARENT' => 'VISUAL',
		'NAME' => GetMessage('CPT_BCSL_SHOW_PARENT_NAME'),
		'TYPE' => 'CHECKBOX',
		'DEFAULT' => 'Y'
    ),
	// 'SHOW_PARENT_DESCR' => array(
		// 'PARENT' => 'VISUAL',
		// 'NAME' => GetMessage('RS_WINN_SHOW_PARENT_DESCR'),
		// 'TYPE' => 'CHECKBOX',
		// 'DEFAULT' => 'Y'
    // ),
    // 'PREVIEW_TRUNCATE_LEN' => array(
		// 'PARENT' => 'VISUAL',
		// 'NAME' => GetMessage('RS_WINN_PREVIEW_TRUNCATE_LEN'),
		// 'TYPE' => 'STRING',
		// 'DEFAULT' => '',
    // ),
	
	'LVL1_SECTION_COUNT' => array(
		'PARENT' => 'DATA_SOURCE',
		'NAME' => GetMessage('RS_WINN_LVL1_SECTION_COUNT'),
		'TYPE' => 'STRING',
		'DEFAULT' => '0',
	),
);

if ($arCurrentValues['SHOW_PARENT_NAME'] == 'Y')
{
    $arTemplateParameters['PARENT_TITLE'] = array(
		'PARENT' => 'VISUAL',
		'NAME' => GetMessage('RS_WINN_PARENT_TITLE'),
		'TYPE' => 'STRING',
		'DEFAULT' => '',
    );

    $arTemplateParameters['PARENT_URL'] = array(
		'PARENT' => 'VISUAL',
		'NAME' => GetMessage('RS_WINN_PARENT_URL'),
		'TYPE' => 'STRING',
		'DEFAULT' => '',
    );
}

if (Loader::includeModule('redsign.winn'))
{
    ParametersUtils::addCommonParameters(
		$arTemplateParameters,
		$arCurrentValues,
		array(
			'sectionsView',
			'lazy-images'
		)
    );

    // $arTemplateParameters['PARENT_URL'] = array(
		// 'PARENT' => 'VISUAL',
		// 'NAME' => GetMessage('RS_WINN_PARENT_URL'),
		// 'TYPE' => 'STRING',
		// 'DEFAULT' => '',
    // );
}

if ($arCurrentValues['SECTIONS_VIEW_MODE'] == 'TILE')
{
	$arTemplateParameters['HIDE_SECTION_NAME'] = array(
		'PARENT' => 'VISUAL',
		'NAME' => GetMessage('CPT_BCSL_HIDE_SECTION_NAME'),
		'TYPE' => 'CHECKBOX',
		'DEFAULT' => 'N'
	);

	ParametersUtils::addCommonParameters($arTemplateParameters, $arCurrentValues, array('gridSettings'));
}

if (Loader::includeModule('redsign.winn'))
{
	\Redsign\Winn\Layouts\Builder::createTemplateParams($arTemplateParameters, $arCurrentValues);
}
