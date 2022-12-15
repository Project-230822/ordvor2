<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (empty($arResult))
	return;

foreach ($arResult as $key => $arItem)
{
	if ($arItem['DEPTH_LEVEL'] > $arParams['MAX_LEVEL'])
	{
		unset($arResult[$key]);
		continue;
	}
	else if ($arItem['DEPTH_LEVEL'] == $arParams['MAX_LEVEL'])
	{
		$arResult[$key]['IS_PARENT'] = false;
	}
}
