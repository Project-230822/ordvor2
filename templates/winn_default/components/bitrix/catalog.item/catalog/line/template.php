<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\MyTemplate;

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


$itemClass =  'product mw-768px m-auto';
// if (isset($arParams['TEMPLATE_VIEW']) && strlen($arParams['TEMPLATE_VIEW']) > 0)
// {
	// $itemClass .= ' product-'.$arParams['TEMPLATE_VIEW'];
// }
if ($haveOffers)
{
	$showDisplayProps = !empty($item['DISPLAY_PROPERTIES']);
	$showProductProps = $arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $item['OFFERS_PROPS_DISPLAY'];
	$showPropsBlock = $showDisplayProps || $showProductProps;
	$showSkuBlock = $arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && !empty($item['OFFERS_PROP']);
}
else
{
	$showDisplayProps = !empty($item['DISPLAY_PROPERTIES']);
	$showProductProps = $arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !empty($item['PRODUCT_PROPERTIES']);
	$showPropsBlock = $showDisplayProps || $showProductProps;
	$showSkuBlock = false;
}
/*
$arParams['MESS_BTN_BUY'] = '<svg class="icon-cart icon-svg mr-3"><use xlink:href="#svg-cart"></use></svg>'.$arParams['MESS_BTN_BUY'];
$arParams['MESS_BTN_ADD_TO_BASKET'] = '<svg class="icon-cart icon-svg mr-3"><use xlink:href="#svg-cart"></use></svg>'.$arParams['MESS_BTN_ADD_TO_BASKET'];
*/
$arParams['MESS_BTN_INCART'] = Loc::getMessage('RS_WINN_BCI_CATALOG_MESS_BTN_INCART');
?>
<div class="row flex-grow-1">
	<div class="col-12 col-lg-6 pr-lg-5 d-flex flex-column">
		<div class="product-image-wrapper mb-3 mb-lg-0">
			<?php
			if ($itemHasDetailUrl)
			{
				?>
				<a class="product-image-canvas" href="<?=$item['DETAIL_PAGE_URL']?>" title="<?=$imgTitle?>"
						data-entity="image-wrapper">
				<?php
			}
			else
			{
				?>
				<span class="product-item-image-wrapper" data-entity="image-wrapper">
				<?php
			}

			include(MyTemplate::getTemplatePart($templateFolder.'/include/picture-image.php'));

			if ($itemHasDetailUrl)
			{
				?>
				</a>
				<?php
			}
			else
			{
				?>
				</span>
				<?php
			}
			?>
		</div>
	</div>

	<div class="col-12 col-lg-6 d-flex align-items-stretch">
		<div class="product-content d-flex flex-column justify-content-center">


	<div class="product-head product-info-container mb-0 d-flex flex-column justify-content-end flex-grow-1">

		<h4 class="product-title mt-0 mb-2">
			<? if ($itemHasDetailUrl): ?>
				<a class="text-body" href="<?=$item['DETAIL_PAGE_URL']?>" title="<?=$productTitle?>">
			<? endif; ?>

			<?=$productTitle?>

			<? if ($itemHasDetailUrl): ?>
				</a>
			<? endif; ?>
		</h4>
		<div class="mb-0 mb-3 mb-lg-5" data-entity="price-block">
<?php
/*
			<div class="product-info-container-title small text-extra w-100 mb-n2">
				<?php
				if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers)
				{
					echo Loc::getMessage(
						'RS_WINN_BCI_CATALOG_PRICE_FROM_SIMPLE_MODE',
						array(
							'#VALUE#' => $measureRatio,
							'#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
						)
					);
				}
				else
				{
					if (strlen($arResult['CAT_PRICES'][$priceCode]['TITLE']) > 0)
					{
						echo $arResult['CAT_PRICES'][$priceCode]['TITLE'];
					}
					else
					{
						echo Loc::getMessage('RS_WINN_BCI_CATALOG_PRICE');
					}
				}
				?>:
			</div>
*/
?>		
			<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/price.php')); ?>
		</div>
	</div>

	<?php
	if (!empty($arParams['PRODUCT_BLOCKS_ORDER']))
	{
		$bProductInfoShowed = false;
		foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName)
		{
/*
			if (!in_array($blockName, $arParams['PRODUCT_BLOCKS'])) {
				continue;
			}
*/
			switch ($blockName)
			{
				case 'price':
					break;

				case 'quantityLimit':
					break;

				case 'quantity':
					break;

				case 'buttons':
					break;

				case 'props':
					if ($bProductInfoShowed)
					{
						continue 2;
					}
					include(MyTemplate::getTemplatePart($templateFolder.'/include/props.php'));
					break;

				case 'sku':
/*
					if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $haveOffers && !empty($item['OFFERS_PROP']))
					{
						?>
						<div id="<?=$itemIds['PROP_DIV']?>" class="d-none d-md-block">
							<?
							foreach ($arParams['SKU_PROPS'] as $skuProperty)
							{
								$propertyId = $skuProperty['ID'];
								$skuProperty['NAME'] = htmlspecialcharsbx($skuProperty['NAME']);
								if (!isset($item['SKU_TREE_VALUES'][$propertyId]))
									continue;
								?>
								<div class="product-info-container product-scu-container mb-4" data-entity="sku-block">
									<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/line/sku.php')); ?>
								</div>
								<?
							}
							?>
						</div>
						<?
						foreach ($arParams['SKU_PROPS'] as $skuProperty)
						{
							if (!isset($item['OFFERS_PROP'][$skuProperty['CODE']]))
								continue;

							$skuProps[] = array(
								'ID' => $skuProperty['ID'],
								'SHOW_MODE' => $skuProperty['SHOW_MODE'],
								'VALUES' => $skuProperty['VALUES'],
								'VALUES_COUNT' => $skuProperty['VALUES_COUNT']
							);
						}

						unset($skuProperty, $value);


						if ($item['OFFERS_PROPS_DISPLAY'])
						{
							foreach ($item['JS_OFFERS'] as $keyOffer => $jsOffer)
							{
								$strProps = '';

								if (!empty($jsOffer['DISPLAY_PROPERTIES']))
								{
									foreach ($jsOffer['DISPLAY_PROPERTIES'] as $displayProperty)
									{
										$strProps .= '<dt>'.$displayProperty['NAME'].'</dt><dd>'
											.(is_array($displayProperty['VALUE'])
												? implode(' / ', $displayProperty['VALUE'])
												: $displayProperty['VALUE'])
											.'</dd>';
									}
								}

								$item['JS_OFFERS'][$keyOffer]['DISPLAY_PROPERTIES'] = $strProps;
							}
							unset($jsOffer, $strProps);
						}
					}
					break;

				case 'compare':
					break;
*/
				case 'preview';
					if ($bProductInfoShowed)
					{
						continue 2;
					}

					if ($arParams['DISPLAY_PREVIEW_TEXT'] === 'Y' && $item['PREVIEW_TEXT'])
					{
						$bProductInfoShowed = true;
						?>
						<div class="product-info-container product-info-container--shrink mb-lg-3 d-none d-md-block product__preview" data-entity="props-preview">
							<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/preview.php')); ?>
						</div>
						<?php
					}
					break;
			}
		}
	}
	?>
	<div class="product-info-container product-button-container d-none d-md-block flex-grow-1">
		<?php
		if (!$haveOffers)
		{
			if ($actualItem['CAN_BUY'])
			{
				?>
				<div id="<?=$itemIds['BASKET_ACTIONS']?>" class="d-flex align-items-start">
					<?php
					if ($arParams['USE_PRODUCT_QUANTITY'])
					{
						include(MyTemplate::getTemplatePart($templateFolder.'/include/quantity.php'));
					}
					
					include(MyTemplate::getTemplatePart($templateFolder.'/include/actions.php'));
/*
					?>
					<div class="product-amount-description-container" id="<?=$itemIds['PRICE_TOTAL']?>"></div>
*/
?>
				</div>
				<?
			}
			else
			{
				if ($showSubscribe)
				{
					include(MyTemplate::getTemplatePart($templateFolder.'/include/line/subscribe.php'));
				}
				else
				{
					include(MyTemplate::getTemplatePart($templateFolder.'/include/line/actions-feedback.php'));
				}
			}
		}
		else
		{
			if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y')
			{
				include(MyTemplate::getTemplatePart($templateFolder.'/include/line/subscribe.php'));
				?>

				<div id="<?=$itemIds['BASKET_ACTIONS']?>"<?/* style="display: <?=($actualItem['CAN_BUY'] ? '' : 'none')?>;"*/?>>
					<div class="d-inline-block align-middle mr-sm-3">
						<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/line/actions.php')); ?>
					</div>
					<?php
					if ($arParams['USE_PRODUCT_QUANTITY'])
					{
						include(MyTemplate::getTemplatePart($templateFolder.'/include/quantity.php'));
					}
/*
					?>
					<div class="product-amount-description-container" id="<?=$itemIds['PRICE_TOTAL']?>"></div>
*/
?>
				</div>
				<?
			}
		}
		?>
		</div>
	</div>
</div>
