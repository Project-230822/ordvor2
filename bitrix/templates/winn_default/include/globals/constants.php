<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

if (defined('RS_WINN_DEFINED_CONSTANTS') && RS_WINN_DEFINED_CONSTANTS === true) {
	return;
}

use \Bitrix\Main\Loader;


$tuning = false;
if (Loader::includeModule('redsign.tuning'))
{
	$tuning = \Redsign\Tuning\TuningCore::getInstance();
}

define('RS_WINN_DEFINED_CONSTANTS', true);

if ($tuning)
{
	define('RS_WINN_USE_FONT_FAMILY', $tuning->getOptionValue('FONT_FAMILY'));
	define('RS_WINN_FONT_SIZE', $tuning->getOptionValue('FONT_SIZE'));
	define('RS_WINN_USE_PAGE_LOAD_ANIMATION', $tuning->getOptionValue('USE_PAGE_LOAD_ANIMATION'));
}
else
{
	define('RS_WINN_USE_FONT_FAMILY', 'system');
	define('RS_WINN_FONT_SIZE', 'normal');
	define('RS_WINN_USE_PAGE_LOAD_ANIMATION', 'Y');

}

if (!defined('SITE_LOCATION_ID'))
{
	define('SITE_LOCATION_ID', null);
}
