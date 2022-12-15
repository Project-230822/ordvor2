<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

use \Bitrix\Main\Application;
use \Bitrix\Main\IO\File;
use \Bitrix\Main\Loader;

$this->setFrameMode(true);

$mainId = 'mi'.$this->randString();

// $layoutHeader = new \Redsign\Winn\Layouts\Parts\SectionHeaderCustom();
// $layout = new \Redsign\Winn\Layouts\Section();
$layout = \Redsign\Winn\Layouts\Builder::createFromParams($arParams/*, $layoutHeader*/);

$sSectionAttrs = ' data-section';
$sSectionAttrs .= strlen($arParams['AREA_ID'])
	? ' id="'.$arParams['AREA_ID'].'"'
	: ' id="'.$mainId.'"';

	
if (Loader::includeModule('redsign.devfunc'))
{
	$oColor = new RSColor($arParams['BACKGROUND_COLOR']);
	if ($oColor->getHex())
	{
		$sSectionStyles .= 'background-color:#'.$oColor->getHex().';';

		if ($oColor->yiq())
		{
			$layout->addModifier('dark');
		}
		else
		{
			$layout->addModifier('light');
		}
	}
}

if ($arParams['BACKGROUND_IMAGE'])
{
	$obFile = new File(Application::getDocumentRoot().$arParams['BACKGROUND_IMAGE']);
	
	if ($obFile->isExists())
	{
		$sSectionStyles .= 'background-image:url(\''.$arParams['BACKGROUND_IMAGE'].'\');';
	}
}

if ($sSectionStyles)
{
	$sSectionAttrs .= ' style="'.$sSectionStyles.'"';
}

$layout->addData('SECTION_ATTRIBUTES', $sSectionAttrs);

$layout->start();

if ($arResult["FILE"] <> '')
	include($arResult["FILE"]);

$layout->end();
