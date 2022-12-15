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

if (!$haveOffers)
{
	if ($actualItem['CAN_BUY'] && $arParams['USE_PRODUCT_QUANTITY'])
	{
		?>
		<div class="product-amount d-inline-block text-center mr-1 mr-lg-3" data-entity="quantity-block">
			<div class="product-amount-field-container d-flex align-items-center">
				<svg class="product-amount-field-btn-minus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_DOWN']?>"><use xlink:href="#svg-minus"></use></svg>
				<input class="product-amount-field form-control px-1" id="<?=$itemIds['QUANTITY']?>" type="number"
					name="<?=$arParams['PRODUCT_QUANTITY_VARIABLE']?>"
					value="<?=$measureRatio?>">
				<svg class="product-amount-field-btn-plus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_UP']?>"><use xlink:href="#svg-plus"></use></svg>
			</div>
			<div id="<?=$itemIds['QUANTITY_MEASURE']?>" class="product-amount-measure"><?=$actualItem['ITEM_MEASURE']['TITLE']?></div>
		</div>
		<?
	}
}
elseif ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y')
{
	if ($arParams['USE_PRODUCT_QUANTITY'])
	{
		?>
		<div class="product-amount d-inline-block text-center mr-1 mr-lg-3" data-entity="quantity-block">
			<div class="product-amount-field-container d-flex align-items-center">
				<svg class="product-amount-field-btn-minus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_DOWN']?>"><use xlink:href="#svg-minus"></use></svg>
				<input class="product-amount-field form-control px-1" id="<?=$itemIds['QUANTITY']?>" type="number"
					name="<?=$arParams['PRODUCT_QUANTITY_VARIABLE']?>"
					value="<?=$measureRatio?>">
				<svg class="product-amount-field-btn-plus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_UP']?>"><use xlink:href="#svg-plus"></use></svg>
			</div>
			<div id="<?=$itemIds['QUANTITY_MEASURE']?>" class="product-amount-measure"><?=$actualItem['ITEM_MEASURE']['TITLE']?></div>
		</div>
		<?
	}
}