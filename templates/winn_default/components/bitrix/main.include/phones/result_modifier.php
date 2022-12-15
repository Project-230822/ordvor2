<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

use \Bitrix\Main\Loader;
// use \Redsign\DevFunc\Sale\Location\Region;

$arResult['PHONES'] = [];

$arParams['RS_TEMPLATE'] = !empty($arParams['RS_TEMPLATE']) ? $arParams['RS_TEMPLATE'] : 'default';

// if (
// 	$arParams['IGNORE_MULTIREGIONALITY'] !== 'Y'
// 	&& Loader::includeModule('redsign.devfunc')
// 	&& Region::isUseRegionality()
// )
// {
// 	$arRegion = Region::getCurrentRegion();
// 	if (isset($arRegion['REGION_MACROS']['#REGION_PHONE#']))
// 	{
// 		if (is_array($arRegion['REGION_MACROS']['#REGION_PHONE#']))
// 		{
// 			$arResult['PHONES'] = $arRegion['REGION_MACROS']['#REGION_PHONE#'];
// 		}
// 		else
// 		{
// 			$arResult['PHONES'][] = $arRegion['REGION_MACROS']['#REGION_PHONE#'];
// 		}
// 	}
// }
// else
// {
	if ($arParams['GET_FROM'] == 'module')
	{
		$sPhones = \Bitrix\Main\Config\Option::get('redsign.winn', 'global_phones');
		// $sSchedule = \Bitrix\Main\Config\Option::get('redsign.winn', 'global_schedule');

		$arResult['PHONES'] = unserialize($sPhones);
	}
	else
	{
		$arResult['PHONES'] = $arParams['PHONES'];
	}
// }
