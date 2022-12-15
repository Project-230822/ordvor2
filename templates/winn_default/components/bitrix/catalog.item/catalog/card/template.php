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
 * @var bool $itemHasDetailUrl
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var CatalogSectionComponent $component
 */


$itemClass =  'product';

/*
$arParams['~MESS_BTN_SUBSCRIBED'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-plus"></use></svg>';
$arParams['MESS_BTN_DETAIL'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-dots-3"></use></svg>';
*/
$arParams['MESS_BTN_BUY'] = $arParams['MESS_BTN_ADD_TO_BASKET'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-cart"></use></svg>';
$arParams['MESS_BTN_INCART'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-check"></use></svg>';
/*
$arParams['MESS_BTN_FEEDBACK'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-dots-3"></use></svg>';
$arParams['~MESS_BTN_SUBSCRIBE'] = '<svg class="icon-cart icon-svg"><use xlink:href="#svg-mail"></use></svg>';
*/
?>


	<div class="product-image-wrapper mb-3">
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
			<span class="product-image-canvas" data-entity="image-wrapper">
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

			<h4 class="product-title my-0 mb-md-2">
				<? if ($itemHasDetailUrl): ?>
					<a class="text-body" href="<?=$item['DETAIL_PAGE_URL']?>" title="<?=$productTitle?>">
				<? endif; ?>

				<?=$productTitle?>

				<? if ($itemHasDetailUrl): ?>
					</a>
				<? endif; ?>
			</h4>

			<?php
			if (!empty($arParams['PRODUCT_BLOCKS_ORDER']))
			{
				foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName)
				{
					switch ($blockName)
					{
						case 'price':
							include(MyTemplate::getTemplatePart($templateFolder.'/include/price.php'));
							break;

						case 'quantityLimit':
							break;

						case 'quantity':
							if ($arParams['USE_PRODUCT_QUANTITY'])
							{
								?>
								<div class="product-info-container product-hidden" data-entity="quantity-block">
									<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/quantity.php')); ?>
								</div>
								<?php
							}
							break;

						case 'buttons':
							// include(MyTemplate::getTemplatePart($templateFolder.'/include/card/actions.php'));
							break;

						case 'props':
							include(MyTemplate::getTemplatePart($templateFolder.'/include/props.php'));
							break;

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
										<div class="product-info-container product-scu-container product-hidden" data-entity="sku-block">
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
							break;

						case 'preview';
							if ($arParams['DISPLAY_PREVIEW_TEXT'] === 'Y' && $item['PREVIEW_TEXT'])
							{
								?>
								<div class="product-info-container product-hidden mb-5" data-entity="props-preview">
									<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/preview.php')); ?>
								</div>
								<?php
							}
							break;
					}
				}
			}
			?>
