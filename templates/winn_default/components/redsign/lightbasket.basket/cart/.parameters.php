<?if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();

use \Bitrix\Main\Localization\Loc;

$arTemplateParameters = array(
	'PATH_TO_CATALOG' => array(
        'PARENT' => 'URL_TEMPLATES',
        'NAME' => Loc::getMessage('RS_WINN_CRLB_CART_PATH_TO_CATALOG'),
        'TYPE' => 'STRING',
        'DEFAULT' => '/catalog/',
	),
);