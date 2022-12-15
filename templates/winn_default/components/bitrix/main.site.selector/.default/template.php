<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

if (is_array($arResult['SITES']) && count($arResult['SITES']) > 1)
{
	foreach ($arResult['SITES'] as $key => $arSite)
	{
		if ($key > 0)
		{
			?>
			<span>|</span>&nbsp;
			<?php
		}
		
		if ($arSite["CURRENT"] == "Y")
		{
			?>
			<span class="font-weight-bolder" title="<?=$arSite["NAME"]?>"><?=$arSite["NAME"]?></span>&nbsp;
			<?php
		}
		else
		{
			?>
			<a class="text-decoration-none" href="<?if(is_array($arSite['DOMAINS']) && strlen($arSite['DOMAINS'][0]) > 0 || strlen($arSite['DOMAINS']) > 0):?>http://<?endif?><?=(is_array($arSite["DOMAINS"]) ? $arSite["DOMAINS"][0] : $arSite["DOMAINS"])?><?=$arSite["DIR"]?>" title="<?=$arSite["NAME"]?>"><?=$arSite["NAME"]?></a>&nbsp;
			<?php
		}
	}
}