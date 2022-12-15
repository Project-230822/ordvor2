<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use \Bitrix\Main\Loader;
use \Redsign\Winn\ParametersUtils;

$arTemplateParameters = array(
	// "DISPLAY_DATE" => Array(
	// 	"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_DATE"),
	// 	"TYPE" => "CHECKBOX",
	// 	"DEFAULT" => "Y",
	// ),
	"DISPLAY_NAME" => Array(
		"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_NAME"),
		"TYPE" => "CHECKBOX",
		"DEFAULT" => "Y",
	),
	// "DISPLAY_PICTURE" => Array(
	// 	"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_PICTURE"),
	// 	"TYPE" => "CHECKBOX",
	// 	"DEFAULT" => "Y",
	// ),
	"DISPLAY_PREVIEW_TEXT" => Array(
		"NAME" => GetMessage("T_IBLOCK_DESC_NEWS_TEXT"),
		"TYPE" => "CHECKBOX",
		"DEFAULT" => "Y",
	),
);


if (Loader::includeModule('redsign.winn'))
{
	$arCurrentValues['USE_OWL'] = 'Y';

	ParametersUtils::addCommonParameters(
		$arTemplateParameters,
		$arCurrentValues,
		array(
			'owlSupport',
		)
	);

	unset($arTemplateParameters['USE_OWL']);
	unset($arTemplateParameters['SLIDER_RESPONSIVE_SETTINGS']);
}
?>
