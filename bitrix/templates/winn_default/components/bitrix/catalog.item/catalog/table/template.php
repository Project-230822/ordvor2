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

$showSlider = false;

// $arParams['MESS_BTN_DETAIL'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-dots-3"></use></svg>';
$arParams['MESS_BTN_BUY'] = $arParams['MESS_BTN_ADD_TO_BASKET'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-cart"></use></svg>';
$arParams['MESS_BTN_INCART'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-check-mark"></use></svg>';

$arParams['~MESS_BTN_SUBSCRIBE'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-mail"></use></svg>';
$arParams['USE_PRODUCT_QUANTITY'] = false;
?>

<div class="row py-4 px-lg-4 align-items-center">
	<?php
	if ($item['PREVIEW_PICTURE']['ID'] > 0)
	{
		?>
		<div class="col-12 col-sm-auto col-md-auto">
			<div class="product-image-wrapper mr-md-4">
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
		<?php
	}
	?>
	<div class="col-12 col-sm">
		<div class="row h-100 align-items-center">
			<div class="col-12 col-lg">

				<div class="product-head">
					<h6 class="product-title lead">
						<? if ($itemHasDetailUrl): ?>
							<a class="text-body" href="<?=$item['DETAIL_PAGE_URL']?>" title="<?=$productTitle?>">
						<? endif; ?>

						<?=$productTitle?>

						<? if ($itemHasDetailUrl): ?>
							</a>
						<? endif; ?>
					</h6>
				</div>

				<?php
				if (!empty($arParams['PRODUCT_BLOCKS_ORDER']))
				{
					foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName)
					{
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
								include(MyTemplate::getTemplatePart($templateFolder.'/include/table/props.php'));
								break;
/*
							case 'sku':
								if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $haveOffers && !empty($item['OFFERS_PROP']))
								{
									?>
									<div id="<?=$itemIds['PROP_DIV']?>">
										<?php
										foreach ($arParams['SKU_PROPS'] as $skuProperty)
										{
											$propertyId = $skuProperty['ID'];
											$skuProperty['NAME'] = htmlspecialcharsbx($skuProperty['NAME']);
											if (!isset($item['SKU_TREE_VALUES'][$propertyId]))
												continue;
											?>
											<div class="product-info-container product-scu-container" data-entity="sku-block">
												<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/card/sku.php')); ?>
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
*/								break;

							case 'preview';
								if ($arParams['DISPLAY_PREVIEW_TEXT'] === 'Y' && $item['PREVIEW_TEXT'])
								{
									?>
									<div class="product-info-container small" data-entity="props-preview">
										<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/preview.php')); ?>
									</div>
									<?php
								}
								break;
						}
					}
				}
				?>
			</div>
			<div class="col col-lg-3 text-right">

				<div class="product-price-container" data-entity="price-block">
					<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/price.php')); ?>
				</div>

			</div>
			<div class="col-auto">
				<div class="product-buttons" data-entity="buttons-block">
					<div class="product-button-container">
						<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/table/actions.php')); ?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
