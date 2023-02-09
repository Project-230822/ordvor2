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

$priceCode = array_search($price['PRICE_TYPE_ID'], array_column((array)$arResult['CAT_PRICES'], 'ID', 'CODE'));
$showDiscount = $price['RATIO_PRICE'] < $price['RATIO_BASE_PRICE'];
?>


<?php
if ($arParams['SHOW_OLD_PRICE'] === 'Y')
{
	?>
	<span class="product-price-old h5 m-0 font-weight-bolder" id="<?=$itemIds['PRICE_OLD']?>">
		<?=($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? '' : $price['PRINT_RATIO_BASE_PRICE'])?>
	</span>
	<?php
}
?>

<span
	class="product-price-current h5 m-0 font-weight-bolder<?=($price['RATIO_PRICE'] < $price['RATIO_BASE_PRICE'] ? ' discount' : '')?>"
	id="<?=$itemIds['PRICE']?>">
	<?
	if (!empty($price))
	{
		// if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers)
		// {

			// echo Loc::getMessage(
				// 'CT_BCI_TPL_MESS_PRICE_SIMPLE_MODE',
				// array(

					// '#PRICE#' => $price['PRINT_RATIO_PRICE'],
					// '#VALUE#' => $measureRatio,
					// '#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
				// )
			// );
		// }
		// else
		// {
			echo $price['PRINT_RATIO_PRICE'];
		// }
	}
	else
	{
		echo Loc::getMessage('RS_WINN_BCI_CATALOG_NO_PRICE');

	}
	?>
</span>

<?php
/*
if ($arParams['SHOW_OLD_PRICE'] === 'Y' && $arParams['SHOW_DISCOUNT_PERCENT'] != 'Y')
{
	?>
	<div class="product-price-economy h5 m-0 font-weight-bolder" id="<?=$itemIds['PRICE_ECONOMY']?>" data-entity="price-discount">
		<?php
		if ($showDiscount)
		{
			echo str_replace('#ECONOMY#', $price['PRINT_RATIO_DISCOUNT'], $arParams['MESS_ECONOMY_INFO2']);
		}
		?>
	</div>
	<?php
}
*/
?>