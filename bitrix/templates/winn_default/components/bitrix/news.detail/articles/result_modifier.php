<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) {
	die();
}

use \Bitrix\Main\Loader;
use	\Bitrix\Main\Config\Option;
use \Redsign\Winn\TextUtils;





if (!empty($arResult['DETAIL_TEXT'])) {
	$arResult['READING_TIME'] = TextUtils::getReadingTime($arResult['DETAIL_TEXT']);
}


