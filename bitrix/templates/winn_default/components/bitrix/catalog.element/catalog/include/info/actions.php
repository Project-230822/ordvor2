<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

use \Bitrix\Main\Localization\Loc;

if ($showAddBtn)
{
	?>
	<a class="btn <?=$showButtonClassName?> product--detail__buy-button mb-4"
	   id="<?=$itemIds['ADD_BASKET_LINK']?>"
	   href="javascript:void(0);"><?=$arParams['MESS_BTN_ADD_TO_BASKET']?></a>
	<?
}

if ($showBuyBtn)
{
	?>
	<a class="btn <?=$buyButtonClassName?> product--detail__buy-button mb-4"
	   id="<?=$itemIds['BUY_LINK']?>"
	   href="javascript:void(0);"><?=$arParams['MESS_BTN_BUY']?></a>
	<?
}

if ($showFeedbackBtn)
{
    ?>
        <a class="btn <?=$feedbackButtonClassName?> product--detail__buy-button mb-4" id="<?=$itemIds['ACTION_FEEDBACK_LINK']?>"
            data-popup="catalog-feedback" data-type="ajax"
            href="<?=str_replace('#ELEMENT_ID#', $actualItem['ID'], $arParams['LINK_BTN_FEEDBACK'])?>">
            <?=$arParams['MESS_BTN_FEEDBACK']?>
        </a>
    <?
}
