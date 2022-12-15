<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array $price
 * @var array $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var CatalogSectionComponent $component
 */

use \Bitrix\Main\Localization\Loc;
?>
<a class="btn btn-outline-primary btn-decolor <?=$buttonSizeClass?> mb-4" id="<?=$itemIds['ACTION_FEEDBACK_LINK']?>"
	data-popup="catalog-feedback" data-type="ajax"
	href="<?=str_replace('#ELEMENT_ID#', $actualItem['ID'], $arParams['LINK_BTN_FEEDBACK'])?>">
	<?=$arParams['MESS_BTN_FEEDBACK']?>
</a>
<?php
