<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
  die();
}

use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

$arTemplateParameters['BACKGROUND_COLOR'] = array(
    'NAME' => Loc::getMessage('RS_MI_PARAMETERS_BACKGROUND_COLOR'),
    'TYPE' => 'STRING',
    'DEFAULT' => '',
);


$arTemplateParameters['BACKGROUND_IMAGE'] = array(
  'NAME' => Loc::getMessage('RS_MI_PARAMETERS_BACKGROUND_IMAGE'),
  'TYPE' => 'STRING',
  'DEFAULT' => '',
);

$arTemplateParameters['AREA_ID'] = array(
  'NAME' => Loc::getMessage('RS_MI_PARAMETERS_AREA_ID'),
  'TYPE' => 'STRING',
  'DEFAULT' => '',
);

if (Loader::includeModule('redsign.winn'))
{
	\Redsign\Winn\Layouts\Builder::createTemplateParams($arTemplateParameters, $arCurrentValues);
}