<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
  die();
}

use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

if (!Loader::includeModule('redsign.winn')) {
	return;
}

Loc::loadMessages(__FILE__);

$arTemplateParameters['COMPANY_ACHIVEMENTS'] = array(
	'PARENT' => 'VISUAL',
	'NAME' => Loc::getMessage('RS_MI_PARAMETERS_ACHIVEMENTS'),
	'TYPE' => 'CUSTOM',
	'JS_FILE' => ParametersUtils::getSettingsScript('achievements'),
	'JS_EVENT' => 'CustomSettingsEdit',
	'JS_DATA' => str_replace('\'',"\"", CUtil::PhpToJSObject(
		array(
			'labelNumber' => Loc::getMessage('RS_MI_PARAMETERS_ACHIVEMENTS_NUMBERS'),
			'labelContent' => Loc::getMessage('RS_MI_PARAMETERS_ACHIVEMENTS_DESC'),
		)
	)),
	'DEFAULT' => "",
);
