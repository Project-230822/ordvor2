<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
$this->setFrameMode(true);

use \Bitrix\Main\Loader;
use \Bitrix\Iblock;
use \Redsign\Winn\MyTemplate;

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/banners.css');

$arFilterProps = [
	'BANNER_BACKGROUND_IMAGE',
	'BANNER_BACKGROUND_COLOR',
];


$layout = new \Redsign\Winn\Layouts\Section();
$layout->useContainer();
$layout->addData('SECTION_ATTRIBUTES', 'data-section="interstitial"');
$layout->start();
?>
<div class="news-detail py-6 my-5">
	<?if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arResult["FIELDS"]["PREVIEW_TEXT"]):?>
		<p><?=$arResult["FIELDS"]["PREVIEW_TEXT"];unset($arResult["FIELDS"]["PREVIEW_TEXT"]);?></p>
	<?endif;?>
	<?if($arResult["NAV_RESULT"]):?>
		<?if($arParams["DISPLAY_TOP_PAGER"]):?><?=$arResult["NAV_STRING"]?><br /><?endif;?>
		<?echo $arResult["NAV_TEXT"];?>
		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?><br /><?=$arResult["NAV_STRING"]?><?endif;?>
	<?elseif(strlen($arResult["DETAIL_TEXT"])>0):?>
		<?echo $arResult["DETAIL_TEXT"];?>
	<?else:?>
		<?echo $arResult["PREVIEW_TEXT"];?>
	<?endif?>
</div>
<?php
$layout->end();


$sPropCode = 'BANNER_FOOTER_REF';
if (
	$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT
	&& $arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_TYPE_ID'] == 'banners'
	&& !empty($arResult['PROPERTIES'][$sPropCode]['VALUE']) > 0
)
{
	
	$layout = new \Redsign\Winn\Layouts\Section();
	$layout->addModifier('m-0')
		->addModifier('min-50')
		->addData('SECTION_ATTRIBUTES', 'data-section=""');

	$layout->start();

	include(MyTemplate::getTemplatePart($templateFolder.'/include/props/banners.php'));

	$layout->end();
}