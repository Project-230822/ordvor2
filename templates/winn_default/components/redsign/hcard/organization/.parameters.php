<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use \Bitrix\Main\Localization\Loc;

Loc::loadMessages(__FILE__);

$arTemplateParameters = array(
    'PHOTO' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_PHOTO'),
        'TYPE' => 'FILE',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
        "FD_TARGET" => "F",
        "FD_EXT" => 'jpg,jpeg,png',
        "FD_UPLOAD" => true,
        "FD_USE_MEDIALIB" => true,
        "FD_MEDIALIB_TYPES" => Array('image'),
    ),
    'DIRECTOR_FIRST_NAME' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_DIRECTOR_FIRST_NAME'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'DIRECTOR_LAST_NAME' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_DIRECTOR_LAST_NAME'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'POSITION' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_POSITION'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'PHONE' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_PHONE'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    ),
    'EMAIL' => array(
        'NAME' => Loc::getMessage('RS_HCARD_PARAMETERS_EMAIL'),
        'TYPE' => 'STRING',
        'DEFAULT' => '',
        'PARENT' => 'BASE',
    )
);
