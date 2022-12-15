<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use \Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

$arTemplateParameters = array(
    'INN_KPP' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_INN_KPP'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'OGRN' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_OGRN'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_COUNTRY_NAME_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_COUNTRY_NAME_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_REGION_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_REGION_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_LOCALITY_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_LOCALITY_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_STREET_ADDRESS_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_STREET_ADDRESS_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_EXT_ADDRESS_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_EXT_ADDRESS_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'ADR_POSTAL_CODE_LEGAL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_ADR_POSTAL_CODE_LEGAL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
);
