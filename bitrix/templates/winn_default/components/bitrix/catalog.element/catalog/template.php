<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Loader;
use \Bitrix\Main\ModuleManager;
use \Bitrix\Main\Application;
use \Bitrix\Iblock;
use \Redsign\Winn\MyTemplate;

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

$this->setFrameMode(true);

$templateLibrary = array('popup'/*, 'fx'*/);
$currencyList = '';

if (!empty($arResult['CURRENCIES']))
{
	$templateLibrary[] = 'currency';
	$currencyList = CUtil::PhpToJSObject($arResult['CURRENCIES'], false, true, true);
}

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/catalog-item.css');

$templateData = array(
	'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
	'TEMPLATE_LIBRARY' => $templateLibrary,
	'CURRENCIES' => $currencyList,
	'ITEM' => array(
		'ID' => $arResult['ID'],
		'IBLOCK_ID' => $arResult['IBLOCK_ID'],
		'OFFERS_SELECTED' => $arResult['OFFERS_SELECTED'],
		'JS_OFFERS' => $arResult['JS_OFFERS']
	)
);
unset($currencyList, $templateLibrary);

$mainId = $this->GetEditAreaId($arResult['ID']);
$itemIds = array(
	'ID' => $mainId,
	'DISCOUNT_PERCENT_ID' => $mainId.'_dsc_pict',
	'STICKER_ID' => $mainId.'_sticker',
	'BIG_SLIDER_ID' => $mainId.'_big_slider',
	'BIG_IMG_CONT_ID' => $mainId.'_bigimg_cont',
	'SLIDER_CONT_ID' => $mainId.'_slider_cont',
	'OLD_PRICE_ID' => $mainId.'_old_price',
	'PRICE_ID' => $mainId.'_price',
	'DISCOUNT_PRICE_ID' => $mainId.'_price_discount',
	'PRICE_TOTAL' => $mainId.'_price_total',
	'SLIDER_CONT_OF_ID' => $mainId.'_slider_cont_',
	'QUANTITY_MENU' => $mainId.'_quiantity_menu',
	'QUANTITY_ID' => $mainId.'_quantity',
	'QUANTITY_DOWN_ID' => $mainId.'_quant_down',
	'QUANTITY_UP_ID' => $mainId.'_quant_up',
	'QUANTITY_MEASURE' => $mainId.'_quant_measure',
	'QUANTITY_LIMIT' => $mainId.'_quant_limit',
	'BUY_LINK' => $mainId.'_buy_link',
	'ADD_BASKET_LINK' => $mainId.'_add_basket_link',
	'BASKET_ACTIONS_ID' => $mainId.'_basket_actions',
	'NOT_AVAILABLE_MESS' => $mainId.'_not_avail',
	'COMPARE_LINK' => $mainId.'_compare_link',
	'TREE_ID' => $mainId.'_skudiv',
	'DISPLAY_PROP_DIV' => $mainId.'_sku_prop',
	'DISPLAY_MAIN_PROP_DIV' => $mainId.'_main_sku_prop',
	'OFFER_GROUP' => $mainId.'_set_group_',
	'BASKET_PROP_DIV' => $mainId.'_basket_prop',
	'SUBSCRIBE_LINK' => $mainId.'_subscribe',
	'TABS_ID' => $mainId.'_tabs',
	'TAB_CONTAINERS_ID' => $mainId.'_tab_containers',
	'SMALL_CARD_PANEL_ID' => $mainId.'_small_card_panel',
	'TABS_PANEL_ID' => $mainId.'_tabs_panel',
	'PRODUCT_DEAL' => $areaId.'_deal',
	'FAVORITE_LINK' => $areaId.'_favorite',
	'BUY1CLICK_LINK' => $mainId.'_buy1click',
	// 'CHEAPER_LINK' => $mainId.'_cheaper',
	'ACTION_FEEDBACK_LINK' => $mainId.'_feedback',
	// 'BIG_SLIDER_DOTS_ID' => $mainId.'_big_slider_dots',
	'PRODUCT_NAV' => $mainId.'_nav',
	'SALE_BANNER' => $mainId.'_sale_banner',
	'PRICES_CONTAINER' => $mainId.'_prices',
	'ELEMENT_PHOTO' => $mainId.'_images',
	'ELEMENT_PROPS' => $mainId.'_props',
	'ELEMENT_DETAIL_TEXT' => $mainId.'_detail',
	'PRICE_BONUS' => $mainId.'_cashback',
	'SIZE_TABLE_LINK' => $mainId.'_size_table_link',
	'SIZE_TABLE' => $mainId.'_size_table',
);
$obName = $templateData['JS_OBJ'] = 'ob'.preg_replace('/[^a-zA-Z0-9_]/', 'x', $mainId);
$name = !empty($arResult['IPROPERTY_VALUES']['ELEMENT_PAGE_TITLE'])
	? $arResult['IPROPERTY_VALUES']['ELEMENT_PAGE_TITLE']
	: $arResult['NAME'];
$title = !empty($arResult['IPROPERTY_VALUES']['ELEMENT_DETAIL_PICTURE_FILE_TITLE'])
	? $arResult['IPROPERTY_VALUES']['ELEMENT_DETAIL_PICTURE_FILE_TITLE']
	: $arResult['NAME'];
$alt = !empty($arResult['IPROPERTY_VALUES']['ELEMENT_DETAIL_PICTURE_FILE_ALT'])
	? $arResult['IPROPERTY_VALUES']['ELEMENT_DETAIL_PICTURE_FILE_ALT']
	: $arResult['NAME'];

$haveOffers = !empty($arResult['OFFERS']);
if ($haveOffers)
{
	$actualItem = isset($arResult['OFFERS'][$arResult['OFFERS_SELECTED']])
		? $arResult['OFFERS'][$arResult['OFFERS_SELECTED']]
		: reset($arResult['OFFERS']);
}
else
{
	$actualItem = $arResult;
}

$skuProps = array();

if (
	(!isset($arResult['CATALOGS'][$arResult['IBLOCK_ID']]) || empty($arResult['CATALOGS'][$arResult['IBLOCK_ID']]))
	&& $arResult['MODULES']['redsign.winn'])
{
	$actualItem['ITEM_MEASURE']['TITLE'] = $arResult['ITEM_MEASURE']['TITLE'] = Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_MEASURE');
	$actualItem['ITEM_MEASURE_RATIO_SELECTED'] = 0;
	$actualItem['ITEM_PRICE_SELECTED'] = 0;

	$arResult['ITEM_MEASURE_RATIOS'][$arResult['ITEM_MEASURE_RATIO_SELECTED']]['RATIO'] = 1;
	$price = $actualItem['ITEM_PRICES'][$actualItem['ITEM_PRICE_SELECTED']] =  $arResult['RS_PRICES'];

	$arResult['CAN_BUY'] = $actualItem['CAN_BUY'] = is_array($price);

	if ($actualItem['CAN_BUY'])
	{
		$measureRatio = $price['MIN_QUANTITY'] = 1;

		$arResult['ITEM_PRICES'][0] = $price;
		$arResult['ITEM_PRICE_SELECTED'] = 0;
	}

	$templateData['CURRENCIES'] = '';
	$templateData['TEMPLATE_LIBRARY'] = array_diff(
		$templateData['TEMPLATE_LIBRARY'],
		array('currency')
	);

}
else
{
	$price = $actualItem['ITEM_PRICES'][$actualItem['ITEM_PRICE_SELECTED']];
	$measureRatio = $actualItem['ITEM_MEASURE_RATIOS'][$actualItem['ITEM_MEASURE_RATIO_SELECTED']]['RATIO'];

	// $itemIds['OLD_PRICE_ID'] .= '_'.$price['PRICE_TYPE_ID'];
	// $itemIds['PRICE_ID'] .= '_'.$price['PRICE_TYPE_ID'];
	// $itemIds['DISCOUNT_PRICE_ID'] .= '_'.$price['PRICE_TYPE_ID'];

}

$showDiscount = $price['PERCENT'] > 0;

$showDescription = !empty($arResult['PREVIEW_TEXT']) || !empty($arResult['DETAIL_TEXT']);
$showBuyBtn = in_array('BUY', $arParams['ADD_TO_BASKET_ACTION']);
$buyButtonClassName = in_array('BUY', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-primary' : 'btn-outline-secondary';
$showAddBtn = in_array('ADD', $arParams['ADD_TO_BASKET_ACTION']);
$showButtonClassName = in_array('ADD', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-primary' : 'btn-outline-secondary';
$showFeedbackBtn = in_array('FEEDBACK', $arParams['ADD_TO_BASKET_ACTION']);
$feedbackButtonClassName = in_array('FEEDBACK', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-primary' : 'btn-outline-secondary';
$showBuy1ClickBtn = in_array('BUY1CLICK', $arParams['ADD_TO_BASKET_ACTION']);
$buy1ClickButtonClassName = in_array('BUY1CLICK', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-primary' : 'btn-outline-secondary';

$showSubscribe = $arParams['PRODUCT_SUBSCRIPTION'] === 'Y' && ($arResult['PRODUCT']['SUBSCRIBE'] === 'Y' || $haveOffers);


$arDisplayProperties = array();
if (is_array($arResult['DISPLAY_PROPERTIES']) && count($arResult['DISPLAY_PROPERTIES']) > 0)
{
	$arDisplayProperties = array_diff_key(
		$arResult['DISPLAY_PROPERTIES'],
		is_array($arParams['TAB_PROPERTIES']) ? array_fill_keys($arParams['TAB_PROPERTIES'], 0) : array(),
		is_array($arParams['BLOCK_LINES_PROPERTIES']) ? array_fill_keys($arParams['BLOCK_LINES_PROPERTIES'], 0) : array()
	);
}

$showDisplayProperties = count($arDisplayProperties) > 0;
$showTabs = false;

$showMultiPrice = is_array($arResult['CAT_PRICES']) && count($arResult['CAT_PRICES']) > 1;

$showArtnumber = isset($arResult['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$arResult['IBLOCK_ID']]])
	&& $arResult['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$arResult['IBLOCK_ID']]]['VALUE'] != ''
	||
	isset($actualItem['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$actualItem['IBLOCK_ID']]])
	&& $actualItem['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$actualItem['IBLOCK_ID']]]['VALUE'] != '';

if (is_array($actualItem['DETAIL_PICTURE'])) {
	$templateData['PRODUCT_PHOTO'] = $actualItem['DETAIL_PICTURE'];
} elseif (is_array($actualItem['MORE_PHOTO'])) {
	$templateData['PRODUCT_PHOTO'] = reset($actualItem['MORE_PHOTO']);
}

$arParams['MESS_BTN_BUY'] = $arParams['MESS_BTN_BUY'] ?: Loc::getMessage('CT_BCE_CATALOG_BUY');
$arParams['MESS_BTN_ADD_TO_BASKET'] = $arParams['MESS_BTN_ADD_TO_BASKET'] ?: Loc::getMessage('CT_BCE_CATALOG_ADD');
$arParams['MESS_NOT_AVAILABLE'] = $arParams['MESS_NOT_AVAILABLE'] ?: Loc::getMessage('CT_BCE_CATALOG_NOT_AVAILABLE');
$arParams['MESS_BTN_COMPARE'] = $arParams['MESS_BTN_COMPARE'] ?: Loc::getMessage('CT_BCE_CATALOG_COMPARE');
$arParams['MESS_BTN_FAVORITE'] = $arParams['MESS_BTN_FAVORITE'] ?: Loc::getMessage('RS_WINN_BCE_CATALOG_FAVORITE_ADD');
$arParams['MESS_PRICE_RANGES_TITLE'] = $arParams['MESS_PRICE_RANGES_TITLE'] ?: Loc::getMessage('CT_BCE_CATALOG_PRICE_RANGES_TITLE');
$arParams['MESS_DESCRIPTION_TAB'] = $arParams['MESS_DESCRIPTION_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_DESCRIPTION_TAB');
$arParams['MESS_PROPERTIES_TAB'] = $arParams['MESS_PROPERTIES_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_PROPERTIES_TAB');
$arParams['MESS_COMMENTS_TAB'] = $arParams['MESS_COMMENTS_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_COMMENTS_TAB');
$arParams['MESS_SHOW_MAX_QUANTITY'] = $arParams['MESS_SHOW_MAX_QUANTITY'] ?: Loc::getMessage('CT_BCE_CATALOG_SHOW_MAX_QUANTITY');
$arParams['MESS_RELATIVE_QUANTITY_MANY'] = $arParams['MESS_RELATIVE_QUANTITY_MANY'] ?: Loc::getMessage('CT_BCE_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['MESS_RELATIVE_QUANTITY_FEW'] = $arParams['MESS_RELATIVE_QUANTITY_FEW'] ?: Loc::getMessage('CT_BCE_CATALOG_RELATIVE_QUANTITY_FEW');
$arParams['MESS_ECONOMY_INFO2'] = Loc::getMessage('RS_WINN_BCE_CATALOG_ECONOMY_INFO2');
$arParams['MESS_ITEM_ARTNUMBER'] = Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_ARTNUMBER_MESSAGE');

// $arParams['MESS_BTN_BUY'] = '<svg class="icon-cart icon-svg mr-3"><use xlink:href="#svg-cart"></use></svg>'.$arParams['MESS_BTN_BUY'];
// $arParams['MESS_BTN_ADD_TO_BASKET'] = '<svg class="icon-cart icon-svg mr-3"><use xlink:href="#svg-cart"></use></svg>'.$arParams['MESS_BTN_ADD_TO_BASKET'];
$arParams['MESS_BTN_INCART'] = Loc::getMessage('RS_WINN_BCE_CATALOG_MESS_BTN_INCART');
/*
$positionClassMap = array(
	'left' => 'product-item-label-left',
	'center' => 'product-item-label-center',
	'right' => 'product-item-label-right',
	'bottom' => 'product-item-label-bottom',
	'middle' => 'product-item-label-middle',
	'top' => 'product-item-label-top'
);

$discountPositionClass = 'product-item-label-big';
if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && !empty($arParams['DISCOUNT_PERCENT_POSITION']))
{
	foreach (explode('-', $arParams['DISCOUNT_PERCENT_POSITION']) as $pos)
	{
		$discountPositionClass .= isset($positionClassMap[$pos]) ? ' '.$positionClassMap[$pos] : '';
	}
}

$labelPositionClass = 'product-item-label-big';
if (!empty($arParams['LABEL_PROP_POSITION']))
{
	foreach (explode('-', $arParams['LABEL_PROP_POSITION']) as $pos)
	{
		$labelPositionClass .= isset($positionClassMap[$pos]) ? ' '.$positionClassMap[$pos] : '';
	}
}
*/
?>
<article id="<?=$itemIds['ID']?>" itemscope itemtype="http://schema.org/Product">

	<?php
	$layout = new \Redsign\Winn\Layouts\Section();

	$layout
		->useContainer()
		->addModifier('wide')
		->addClass('py-0')
		->addData('SECTION_ATTRIBUTES', 'data-section="interstitial"');

	$layout->start();
	?>
	<div class="product product--detail py-4">
		<div class="row">
			<div class="col-12 col-lg-6">
				<div class="product--detail__slider-container mb-3 mb-lg-0" id="<?=$itemIds['BIG_SLIDER_ID']?>">
					<div class="product--detail__slider-block
						<?/*<?=($arParams['IMAGE_RESOLUTION'] === '1by1' ? 'product--detail__slider-block-square' : '')?>*/?>"
						data-entity="images-slider-block">
						<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/picture/image.php')); ?>
					</div>
<?
/*
					<div class="product--detail__slider-dots owl-carousel owl-loaded">
						<div class="owl-dots" id="<?=$itemIds['BIG_SLIDER_DOTS_ID']?>" data-slider-dots="<?=$itemIds['BIG_SLIDER_ID']?>"></div>
					</div>
*/
?>
				</div>
			</div>

			<div class="col-12 col-lg-6 col-xl-5">
				<?
				if ($arParams['DISPLAY_NAME'] === 'Y')
				{
					?>
					<h1 class="h2 mt-0 ml-lg-5"><?=$name?></h1>
					<?
				}
				?>
				<div class="product__head d-flex  border-bottom pb-4 mb-4 ml-lg-5">
					<?php
					include(MyTemplate::getTemplatePart($templateFolder.'/include/info/id.php'));

					// include(MyTemplate::getTemplatePart($templateFolder.'/include/info/siblings.php'));
					?>
				</div>
				
				<?php
				foreach ($arParams['PRODUCT_INFO_BLOCK_ORDER'] as $blockName)
				{
					switch ($blockName)
					{
						case 'props':
							?>
							<div class="mb-4 ml-lg-5">
								<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/info/props.php')); ?>
							</div>
							<?php
							break;

						case 'price':
							?>
							<div class="mb-4 ml-lg-5">
								<?php
								/*
								if ($arParams['FILL_ITEM_ALL_PRICES'])
								{
									$basePrice = $price;
									$baseShowDiscount = $showDiscount;

									foreach ($actualItem['ITEM_ALL_PRICES'][$actualItem['ITEM_PRICE_SELECTED']]['PRICES'] as $price)
									{
										?>
										<div class="product--detail__price" data-entity="price" data-price-id="<?=$price['PRICE_TYPE_ID']?>">
											<?php
											include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price.php'));
											include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price-bonus.php'));
											?>
										</div>
										<?php
									}

									$price = $basePrice;
									$showDiscount = $baseShowDiscount;
								}
								else
								{
									?>
									<div class="product--detail__price" data-entity="price" data-price-id="<?=$price['PRICE_TYPE_ID']?>">
										<?php
										include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price.php'));
										include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price-bonus.php'));
										?>
									</div>
									<?php
								}
								*/
								?>
								<div class="product--detail__price" data-entity="price" data-price-id="<?=$price['PRICE_TYPE_ID']?>">
									<?php
									include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price.php'));
									include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price-bonus.php'));
									?>
								</div>
								<?php
/*
								if ($showMultiPrice)
								{
									$sPriceStyle = count($actualItem['ITEM_ALL_PRICES'][$actualItem['ITEM_PRICE_SELECTED']]['PRICES']) > 1
										|| count($actualItem['ITEM_QUANTITY_RANGES']) > 1
										? ''
										: 'style="display:none"';

									?>
									<div class="pt-2" id="<?=$itemIds['PRICES_CONTAINER']?>"<?=$sPriceStyle?>>
										<div class="mb-3">
											<a class="font-size-sm collapsed" data-toggle="collapse" href="#prices" aria-expanded="false" aria-controls="prices">
												<span class="collapsed__in"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_ALL_PRICES')?></span>
												<span class="collapsed__out"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_ALL_PRICES_COLLAPSED')?></span>
												<svg class="collapsed__icon icon-svg"><use xlink:href="#svg-chevron-up"></use></svg>
											</a>
										</div>
										<div class="collapse" id="prices">
											<div class="mb-1">
												<?php
												$basePrice = $price;
												$baseShowDiscount = $showDiscount;

												foreach ($arResult['CAT_PRICES'] as $arCatPrice)
												{
													$price = $actualItem['ITEM_ALL_PRICES'][$actualItem['ITEM_PRICE_SELECTED']]['PRICES'][$arCatPrice['ID']];

													include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price-ranges.php'));
												}

												$price = $basePrice;
												$showDiscount = $baseShowDiscount;
												unset($basePrice, $baseShowDiscount);
												?>
											</div>
										</div>
									</div>
									<?php
								}
								elseif ($arParams['USE_PRICE_COUNT'] && count($actualItem['ITEM_QUANTITY_RANGES']) > 1)
								{
									?>
									<div class="pt-2" id="<?=$itemIds['PRICES_CONTAINER']?>">
										<div class="mb-3">
											<a class="font-size-sm collapsed" data-toggle="collapse" href="#prices" aria-expanded="false" aria-controls="prices">
												<span class="collapsed__in"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_ALL_PRICES')?></span>
												<span class="collapsed__out"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_ITEM_ALL_PRICES_COLLAPSED')?></span>
												<svg class="collapsed__icon icon-svg"><use xlink:href="#svg-chevron-up"></use></svg>
											</a>
										</div>
										<div class="collapse" id="prices">
											<div class="mb-1">
												<?php
												$priceCode = array_search($price['PRICE_TYPE_ID'], array_column($arResult['CAT_PRICES'], 'ID', 'CODE'));

												$arCatPrice = $arResult['CAT_PRICES'][$priceCode];

												include(MyTemplate::getTemplatePart($templateFolder.'/include/info/price-ranges.php'));
												?>
											</div>
										</div>
									</div>
									<?php
								}
*/
								?>
							</div>
							<?
							break;

						case 'buttons':
							?>
							<div class="product-button-container mb-4 ml-lg-5" data-entity="main-button-container">
								<div id="<?=$itemIds['BASKET_ACTIONS_ID']?>" style="<?=(($actualItem['CAN_BUY']) ? '' : 'display: none;')?>" class="d-flex align-items-start">
									<?php
									if ($arParams['USE_PRODUCT_QUANTITY'])
									{
										include(MyTemplate::getTemplatePart($templateFolder.'/include/info/quantity.php'));
									}
									
									include(MyTemplate::getTemplatePart($templateFolder.'/include/info/actions.php'));
									?>
									<?php // include(MyTemplate::getTemplatePart($templateFolder.'/include/info/buy1click.php')); ?>
								</div>
<?php
/*
								<div class="product-amount-description-container" id="<?=$itemIds['PRICE_TOTAL']?>"></div>
*/
?>
								<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/info/subscribe.php')); ?>
							</div>
							<?
							break;

						case 'preview':
							?>
							<div class="mb-4 ml-lg-5">
								<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/info/preview.php')); ?>
							</div>
							<?php
							break;
					}
				}
				?>
			</div>
		</div>
	</div>
	<?php $layout->end(); ?>

	<?php
	$this->SetViewTarget($itemIds['TAB_CONTAINERS_ID']);
	?>
	<div class="container">
		<div class="nav-wrap">
			<ul class="nav nav-slide" role="tablist">
				<?php
				$bActiveTab = false;
				foreach ($arParams['TABS_ORDER'] as $blockName)
				{
					//fix arParams saving
					if (!in_array($blockName, $arResult['TABS']))
					{
						continue;
					}

					switch ($blockName)
					{
						case 'detail':

							if ($arResult['DETAIL_TEXT'] != '')
							{
								?>
								<li class="nav-item">
									<a class="nav-link py-5 my-2<?php if (!$bActiveTab): ?> active<?php endif; ?>" rel="nofollow" href="#tab_<?=$itemIds['ELEMENT_DETAIL_TEXT']?>>" id="<?=$itemIds['ELEMENT_DETAIL_TEXT']?>" data-toggle="tab">
										<b class="text-uppercase"><?=$arParams['MESS_DESCRIPTION_TAB']?></b>
									</a>
								</li>
								<?php
								$bActiveTab = true;
							}
							break;

						case 'props':
							if ($showDisplayProperties || $arResult['SHOW_OFFERS_PROPS'])
							{
								?>
								<li class="nav-item">
									<a class="nav-link py-5 my-2<?php if (!$bActiveTab): ?> active<?php endif; ?>" rel="nofollow" href="#tab_<?=$itemIds['ELEMENT_PROPS']?>" id="<?=$itemIds['ELEMENT_PROPS']?>" data-toggle="tab">
										<b class="text-uppercase"><?=$arParams['MESS_PROPERTIES_TAB']?></b>
									</a>
								</li>
								<?php
								$bActiveTab = true;
							}
							break;

						default:
							if (substr($blockName, 0, 5) == 'prop_')
							{
								$sPropCode = substr($blockName, 5);
								if (
									(
										$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE
										|| $arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT
										|| $arResult['PROPERTIES'][$sPropCode]['MULTIPLE'] == 'Y'
									) && !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
									||
									(
										$arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] != 'HTML' && !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
										|| $arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] == 'HTML' && isset($arResult['DISPLAY_PROPERTIES'][$sPropCode])
									)
								)
								{
									?>
									<li class="nav-item">
										<a class="nav-link py-5 my-2<?php if (!$bActiveTab): ?> active<?php endif; ?>" rel="nofollow" href="#tab_<?=$blockName?>" data-toggle="tab">
											<b class="text-uppercase"><?=$arResult['PROPERTIES'][$sPropCode]['NAME']?></b>
										</a>
									</li>
									<?php
									$bActiveTab = true;
								}
							}
							break;
					}
				}
				?>
			</ul>
		</div>
	</div>
	<div class="border-top" style="margin-top:-1px;">
		<div class="container tab-content" id="<?=$itemIds['TAB_CONTAINERS_ID']?>">
		<?php
		$bActiveTab = false;
		foreach ($arParams['TABS_ORDER'] as $blockName)
		{
			//fix arParams saving
			if (!in_array($blockName, $arResult['TABS']))
			{
				continue;
			}

			switch ($blockName)
			{
				case 'detail':
					if ($arResult['DETAIL_TEXT'] != '')
					{
						?>
							<div class="tab-pane fade py-4<?php if (!$bActiveTab): ?> show active<?php endif; ?>"
								id="tab_<?=$itemIds['ELEMENT_DETAIL_TEXT']?>"
								data-value="description"
								itemprop="description">
								<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/detail.php')); ?>
							</div>
						<?php
						$bActiveTab = true;
					}
					break;

				case 'props':
					if ($showDisplayProperties || $arResult['SHOW_OFFERS_PROPS'])
					{
						?>
						<div class="tab-pane fade py-4<?php if (!$bActiveTab): ?> show active<?php endif; ?>"
							id="tab_<?=$itemIds['ELEMENT_PROPS']?>"
							data-value="properties"
						>
							<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/props/display.php')); ?>
						</div>
						<?php
						$bActiveTab = true;
					}
					break;

				default:
					if (substr($blockName, 0, 5) == 'prop_')
					{
						$sPropCode = substr($blockName, 5);
						if (
							$arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] != 'HTML' && !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
							|| $arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] == 'HTML' && isset($arResult['DISPLAY_PROPERTIES'][$sPropCode])
							)
						{
							?>
							<div class="tab-pane fade py-4<?php if (!$bActiveTab): ?> show active<?php endif; ?>"
								id="tab_<?=$blockName?>"
								data-value="<?=$blockName?>">
							<?php
							if ($arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE)
							{
								$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/docs.css');

								switch ($arParams['PROPERTY_FILE_VIEW'][$sPropCode])
								{
									case 'LINE':
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/file/line.php'));
										break;

									case 'IMAGE_COL':
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/file/image-col.php'));
										break;

									case 'IMAGE_LINE':
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/file/image-line.php'));
										break;

									case 'COL':
									default:
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/file/col.php'));
										break;
								}
							}
							elseif (
								$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT &&
								count($arResult['PROPERTIES'][$sPropCode]['VALUE']) > 0
							)
							{
								$IBLOCK_ID = $arResult['PROPERTIES'][$sPropCode]['IBLOCK_ID'];

								if ($arResult['MODULES']['catalog'])
								{
									if (!isset($arSKU[$IBLOCK_ID]))
									{
										$arSKU[$IBLOCK_ID] = CCatalogSKU::GetInfoByProductIBlock($IBLOCK_ID);
									}
									include(MyTemplate::getTemplatePart($templateFolder.'/include/props/catalog-catalog.php'));
								}
								else
								{
									include(MyTemplate::getTemplatePart($templateFolder.'/include/props/catalog-section.php'));
								}
							}
							elseif ($arResult['PROPERTIES'][$sPropCode]['MULTIPLE'] == 'Y')
							{
								include(MyTemplate::getTemplatePart($templateFolder.'/include/props/list.php'));
							}
							else
							{
								include(MyTemplate::getTemplatePart($templateFolder.'/include/props/default.php'));
							}
							?>
							</div>
							<?php
							$bActiveTab = true;
						}
					}
					break;
			}
		}
		unset($blockName);
		?>
		</div>
	</div>
	<?
	$this->EndViewTarget();

	$showTabs = $bActiveTab;

	if ($showTabs)
	{
		$layout = new \Redsign\Winn\Layouts\Section();

		$layout
			// ->useContainer()
			->addModifier('my-4')
			->addClass('py-0')
			->addData('SECTION_ATTRIBUTES', ' id="'.$itemIds['TABS_ID'].'" data-section="interstitial"');

		$layout->start();
		
		
		echo $APPLICATION->GetViewContent($itemIds['TAB_CONTAINERS_ID']);

		$layout->end();
	}

	if (is_array($arResult['BLOCK_LINES']) && count($arResult['BLOCK_LINES']) > 0)
	{
		foreach ($arParams['BLOCK_LINES_ORDER'] as $blockName)
		{
			//fix arParams saving
			if (!in_array($blockName, $arResult['BLOCK_LINES']))
			{
				continue;
			}

			switch ($blockName)
			{
				case 'detail':

					if ($arResult['DETAIL_TEXT'] != '')
					{
						$layout = new \Redsign\Winn\Layouts\Section();

						// $layoutHeader = new \Redsign\Winn\Layouts\Parts\SectionHeaderBase();
						// $layoutHeader->addData('TITLE', $arParams['MESS_DESCRIPTION_TAB']);

						$layout
							// ->useHeader($layoutHeader)
							->useContainer()
							->addModifier('my-4')
							->addClass('py-0')
							->addData('SECTION_ATTRIBUTES', ' id="'.$mainId.'_'.$blockName.'" data-section="interstitial"');

						$layout->start();
						?>
						<div data-value="description" itemprop="description">
							<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/detail.php')); ?>
						</div>
						<?php
						$layout->end();
					}
					break;

				case 'props':

					if ($showDisplayProperties)
					{
						$layout = new \Redsign\Winn\Layouts\Section();

						$layoutHeader = new \Redsign\Winn\Layouts\Parts\SectionHeaderBase();
						$layoutHeader->addData('TITLE', $arParams['MESS_PROPERTIES_TAB']);

						$layout
							->useHeader($layoutHeader)
							->useContainer()
							->addModifier('my-4')
							->addClass('py-0')
							->addData('SECTION_ATTRIBUTES', ' id="'.$mainId.'_'.$blockName.'" data-section="interstitial"');

						$layout->start();
						?>
						<div data-value="properties">
							<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/props/display.php')); ?>
						</div>
						<?php
						$layout->end();
					}
					break;

				default:
					if (substr($blockName, 0, 5) == 'prop_')
					{
						$sPropCode = substr($blockName, 5);
						if (
							(
								$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE
								|| $arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT
								|| $arResult['PROPERTIES'][$sPropCode]['MULTIPLE'] == 'Y'
							) && !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
							||
							(
								$arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] == 'TEXT' && !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
								|| $arResult['PROPERTIES'][$sPropCode]['VALUE']['TYPE'] == 'HTML' && !empty($arResult['DISPLAY_PROPERTIES'][$sPropCode]['DISPLAY_VALUE'])
							)
						)
						{
							$layout = new \Redsign\Winn\Layouts\Section();

							if (
								$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT
								&& $arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_TYPE_ID'] == 'banners'
							)
							{
								$layout->addModifier('min-50')
									->addData('SECTION_ATTRIBUTES', ' id="'.$mainId.'_'.$blockName.'" data-section="interstitial"');
							}
							else
							{
								$layoutHeader = new \Redsign\Winn\Layouts\Parts\SectionHeaderBase();
								if (!is_array($arResult['PROPERTIES'][$sPropCode]['DESCRIPTION']) && $arResult['PROPERTIES'][$sPropCode]['DESCRIPTION'])
								{
									$layoutHeader->addData('TITLE', $arResult['PROPERTIES'][$sPropCode]['DESCRIPTION']);
								}
								else
								{
									$layoutHeader->addData('TITLE', $arResult['PROPERTIES'][$sPropCode]['NAME']);
								}

								$layout->useHeader($layoutHeader)
									->addClass('py-0')
									->addModifier('my-4')
									->useContainer()
									->addData('SECTION_ATTRIBUTES', ' id="'.$mainId.'_'.$blockName.'" data-section="interstitial"');
							}

							$layout->start();

							if ($arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE)
							{
								$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/docs.css');

								include(MyTemplate::getTemplatePart($templateFolder.'/include/props/file/col.php'));
							}
							elseif (
								$arResult['PROPERTIES'][$sPropCode]['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT
								&& !empty($arResult['PROPERTIES'][$sPropCode]['VALUE'])
							)
							{
								if ($arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_TYPE_ID'] == 'banners')
								{
									include(MyTemplate::getTemplatePart($templateFolder.'/include/props/banners.php'));
								}
								else
								{
									$IBLOCK_ID = $arResult['PROPERTIES'][$sPropCode]['IBLOCK_ID'];

									if ($arResult['MODULES']['catalog'])
									{
										if (!isset($arSKU[$IBLOCK_ID]))
										{
											$arSKU[$IBLOCK_ID] = CCatalogSKU::GetInfoByProductIBlock($IBLOCK_ID);
										}
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/catalog-catalog.php'));
									}
									else
									{
										include(MyTemplate::getTemplatePart($templateFolder.'/include/props/catalog-section.php'));
									}
								}
							}
							elseif ($arResult['PROPERTIES'][$sPropCode]['MULTIPLE'] == 'Y')
							{
								?>
								<div>
									<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/props/list.php')); ?>
								</div>
								<?php
							}
							else
							{
								?>
								<div>
									<?php include(MyTemplate::getTemplatePart($templateFolder.'/include/props/default.php')); ?>
								</div>
								<?php
							}

							$layout->end();
						}
					}
					break;
			}
		}
		unset($blockName);
	}
/*
	if ($arResult['CATALOG'] && $actualItem['CAN_BUY'] && \Bitrix\Main\ModuleManager::isModuleInstalled('sale'))
	{
		$APPLICATION->IncludeComponent(
			'bitrix:sale.prediction.product.detail',
			'catalog',
			array(
				'BUTTON_ID' => $showBuyBtn ? $itemIds['BUY_LINK'] : $itemIds['ADD_BASKET_LINK'],
				'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
				'POTENTIAL_PRODUCT_TO_BUY' => array(
					'ID' => isset($arResult['ID']) ? $arResult['ID'] : null,
					'MODULE' => isset($arResult['MODULE']) ? $arResult['MODULE'] : 'catalog',
					'PRODUCT_PROVIDER_CLASS' => isset($arResult['~PRODUCT_PROVIDER_CLASS']) ? $arResult['~PRODUCT_PROVIDER_CLASS'] : '\Bitrix\Catalog\Product\CatalogProvider',
					'QUANTITY' => isset($arResult['QUANTITY']) ? $arResult['QUANTITY'] : null,
					'IBLOCK_ID' => isset($arResult['IBLOCK_ID']) ? $arResult['IBLOCK_ID'] : null,

					'PRIMARY_OFFER_ID' => isset($arResult['OFFERS'][0]['ID']) ? $arResult['OFFERS'][0]['ID'] : null,
					'SECTION' => array(
						'ID' => isset($arResult['SECTION']['ID']) ? $arResult['SECTION']['ID'] : null,
						'IBLOCK_ID' => isset($arResult['SECTION']['IBLOCK_ID']) ? $arResult['SECTION']['IBLOCK_ID'] : null,
						'LEFT_MARGIN' => isset($arResult['SECTION']['LEFT_MARGIN']) ? $arResult['SECTION']['LEFT_MARGIN'] : null,
						'RIGHT_MARGIN' => isset($arResult['SECTION']['RIGHT_MARGIN']) ? $arResult['SECTION']['RIGHT_MARGIN'] : null,
					),
				)
			),
			$component,
			array('HIDE_ICONS' => 'Y')
		);
	}
*/
	?>


	<meta itemprop="name" content="<?=$name?>" />
	<meta itemprop="category" content="<?=$arResult['CATEGORY_PATH']?>" />
	<?
	if ($haveOffers)
	{
		foreach ($arResult['JS_OFFERS'] as $offer)
		{
			$currentOffersList = array();

			if (!empty($offer['TREE']) && is_array($offer['TREE']))
			{
				foreach ($offer['TREE'] as $propName => $skuId)
				{
					$propId = (int)substr($propName, 5);

					foreach ($skuProps as $prop)
					{
						if ($prop['ID'] == $propId)
						{
							foreach ($prop['VALUES'] as $propId => $propValue)
							{
								if ($propId == $skuId)
								{
									$currentOffersList[] = $propValue['NAME'];
									break;
								}
							}
						}
					}
				}
			}

			$offerPrice = $offer['ITEM_PRICES'][$offer['ITEM_PRICE_SELECTED']];
			?>
			<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
				<meta itemprop="sku" content="<?=htmlspecialcharsbx(implode('/', $currentOffersList))?>" />
				<meta itemprop="price" content="<?=$offerPrice['RATIO_PRICE']?>" />
				<meta itemprop="priceCurrency" content="<?=$offerPrice['CURRENCY']?>" />
				<link itemprop="availability" href="http://schema.org/<?=($offer['CAN_BUY'] ? 'InStock' : 'OutOfStock')?>" />
			</span>
			<?
		}

		unset($offerPrice, $currentOffersList);
	}
	else
	{
		?>
		<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
			<meta itemprop="price" content="<?=$price['RATIO_PRICE']?>" />
			<meta itemprop="priceCurrency" content="<?=$price['CURRENCY']?>" />
			<link itemprop="availability" href="http://schema.org/<?=($actualItem['CAN_BUY'] ? 'InStock' : 'OutOfStock')?>" />
		</span>
		<?
	}
	?>
</article>
	<?
	if ($haveOffers)
	{
		$offerIds = array();
		$offerCodes = array();

		$useRatio = $arParams['USE_RATIO_IN_RANGES'] === 'Y';

		foreach ($arResult['JS_OFFERS'] as $ind => &$jsOffer)
		{
			$offerIds[] = (int)$jsOffer['ID'];
			$offerCodes[] = $jsOffer['CODE'];

			$fullOffer = $arResult['OFFERS'][$ind];
			$measureName = $fullOffer['ITEM_MEASURE']['TITLE'];

			$strAllProps = '';
			$strMainProps = '';
			$strPriceRangesRatio = '';
			$arPriceRanges = array();
			$strPriceRanges = '';

			if ($arResult['SHOW_OFFERS_PROPS'])
			{
				if (!empty($jsOffer['DISPLAY_PROPERTIES']))
				{
					foreach ($jsOffer['DISPLAY_PROPERTIES'] as $property)
					{
						$current = '<dt>'.$property['NAME'].':</dt> <dd>'.(
							is_array($property['VALUE'])
								? implode(' / ', $property['VALUE'])
								: $property['VALUE']
							).'</dd>';
						$strAllProps .= $current;

						if (isset($arParams['MAIN_BLOCK_OFFERS_PROPERTY_CODE'][$property['CODE']]))
						{
							$strMainProps .= $current;
						}
					}

					unset($current);
				}
			}

			if ($arParams['USE_PRICE_COUNT'] && count($jsOffer['ITEM_QUANTITY_RANGES']) > 1)
			{
				$strPriceRangesRatio = '('.Loc::getMessage(
						'CT_BCE_CATALOG_RATIO_PRICE',
						array('#RATIO#' => ($useRatio
								? $fullOffer['ITEM_MEASURE_RATIOS'][$fullOffer['ITEM_MEASURE_RATIO_SELECTED']]['RATIO']
								: '1'
							).' '.$measureName)
					).')';

		if ($showMultiPrice)
		{
			foreach ($arResult['CAT_PRICES'] as $arCatPrice)
			// foreach ($fullOffer['ITEM_ALL_PRICES'][$fullOffer['ITEM_PRICE_SELECTED']]['PRICES'] as $key => $arPrice)
			{
				$strPriceRanges = '';
				foreach ($jsOffer['ITEM_QUANTITY_RANGES'] as $range)
				{
					if ($range['HASH'] !== 'ZERO-INF')
					{
						$itemPrice = false;

						foreach ($fullOffer['ITEM_ALL_PRICES'] as $itemPrice)
						{
							if ($itemPrice['QUANTITY_HASH'] === $range['HASH'])
							{
								$itemPrice = $itemPrice['PRICES'][$arCatPrice['ID']];
								break;
							}
						}

						if ($itemPrice)
						{
							$strPriceRanges .= '<dt>'.Loc::getMessage(
									'CT_BCE_CATALOG_RANGE_FROM',
									array('#FROM#' => $range['SORT_FROM'].' '.$measureName)
								).' ';

							if (is_infinite($range['SORT_TO']))
							{
								$strPriceRanges .= Loc::getMessage('CT_BCE_CATALOG_RANGE_MORE');
							}
							else
							{
								$strPriceRanges .= Loc::getMessage(
									'CT_BCE_CATALOG_RANGE_TO',
									array('#TO#' => $range['SORT_TO'].' '.$measureName)
								);
							}

							$strPriceRanges .= '</dt><dd>'.($useRatio ? $itemPrice['PRINT_RATIO_PRICE'] : $itemPrice['PRINT_PRICE']).'</dd>';
						}
						$arPriceRanges[$arCatPrice['ID']] = $strPriceRanges;
					}
				}
			}
		}
		else
		{
				foreach ($jsOffer['ITEM_QUANTITY_RANGES'] as $range)
				{
					if ($range['HASH'] !== 'ZERO-INF')
					{
						$itemPrice = false;

						foreach ($jsOffer['ITEM_PRICES'] as $itemPrice)
						{
							if ($itemPrice['QUANTITY_HASH'] === $range['HASH'])
							{
								break;
							}
						}

						if ($itemPrice)
						{
							$strPriceRanges .= '<dt>'.Loc::getMessage(
									'CT_BCE_CATALOG_RANGE_FROM',
									array('#FROM#' => $range['SORT_FROM'].' '.$measureName)
								).' ';

							if (is_infinite($range['SORT_TO']))
							{
								$strPriceRanges .= Loc::getMessage('CT_BCE_CATALOG_RANGE_MORE');
							}
							else
							{
								$strPriceRanges .= Loc::getMessage(
									'CT_BCE_CATALOG_RANGE_TO',
									array('#TO#' => $range['SORT_TO'].' '.$measureName)
								);
							}

							$strPriceRanges .= '</dt><dd>'.($useRatio ? $itemPrice['PRINT_RATIO_PRICE'] : $itemPrice['PRINT_PRICE']).'</dd>';

							$arPriceRanges[$itemPrice['PRICE_TYPE_ID']] = $strPriceRanges;
						}
					}
				}

				unset($range, $itemPrice);
			}
			}

			if (
				isset($fullOffer['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$fullOffer['IBLOCK_ID']]])
				&& $fullOffer['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$fullOffer['IBLOCK_ID']]]['VALUE'] != ''
			) {
				$arArtnum = $fullOffer['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$fullOffer['IBLOCK_ID']]];


				$jsOffer['PROPERTIES'][$arArtnum['CODE']] = array(
					'ID' => $arArtnum['ID'],
					'VALUE' => str_replace(
						'#NUMBER#',
						$fullOffer['PROPERTIES'][$arParams['ARTNUMBER_PROP'][$fullOffer['IBLOCK_ID']]]['VALUE'],
						$arParams['MESS_ITEM_ARTNUMBER']
					),
				);

				unset($arArtnum);
			}

			$jsOffer['DISPLAY_PROPERTIES'] = $strAllProps;
			$jsOffer['DISPLAY_PROPERTIES_MAIN_BLOCK'] = $strMainProps;
			$jsOffer['PRICE_RANGES_RATIO_HTML'] = $strPriceRangesRatio;
			$jsOffer['PRICE_RANGES_HTML'] = $arPriceRanges;
		}

		$templateData['OFFER_IDS'] = $offerIds;
		$templateData['OFFER_CODES'] = $offerCodes;
		unset($jsOffer, $strAllProps, $strMainProps, $strPriceRanges, $strPriceRangesRatio, $useRatio, $arPriceRanges);

		$jsParams = array(
			'CONFIG' => array(
				'USE_CATALOG' => $arResult['CATALOG'],
				'SHOW_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
				'SHOW_PRICE' => true,
				'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'] === 'Y',
				'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'] === 'Y',
				'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
				'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
				'SHOW_SKU_PROPS' => $arResult['SHOW_OFFERS_PROPS'],
				'OFFER_GROUP' => $arResult['OFFER_GROUP'],
				'MAIN_PICTURE_MODE' => $arParams['DETAIL_PICTURE_MODE'],
				'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
				'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'] === 'Y',
				'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
				'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
				'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
				'USE_STICKERS' => true,
				'USE_SUBSCRIBE' => $showSubscribe,
				'SHOW_SLIDER' => $arParams['SHOW_SLIDER'],
				'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
				'ALT' => $alt,
				'TITLE' => $title,
				'MAGNIFIER_ZOOM_PERCENT' => 200,
				'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
				'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
				'BRAND_PROPERTY' => !empty($arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']])
					? $arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']]['DISPLAY_VALUE']
					: null,
				'USE_FAVORITE' => $arParams['USE_FAVORITE'] === 'Y',
				'FILL_ITEM_ALL_PRICES' => $arParams['FILL_ITEM_ALL_PRICES'],
				'LINK_BUY1CLICK' => $arParams['LINK_BUY1CLICK'],
				'LINK_BTN_FEEDBACK' => $arParams['LINK_BTN_FEEDBACK'],
/*
				'CHEAPER_FORM_URL' => $arParams['CHEAPER_FORM_URL'],
*/
			),
			'PRODUCT_TYPE' => $arResult['PRODUCT']['TYPE'],
			'VISUAL' => $itemIds,
			'DEFAULT_PICTURE' => array(
				'PREVIEW_PICTURE' => $arResult['DEFAULT_PICTURE'],
				'DETAIL_PICTURE' => $arResult['DEFAULT_PICTURE']
			),
			'PRODUCT' => array(
				'ID' => $arResult['ID'],
				'ACTIVE' => $arResult['ACTIVE'],
				'NAME' => $arResult['~NAME'],
				'CATEGORY' => $arResult['CATEGORY_PATH'],
			),
			'BASKET' => array(
				'QUANTITY' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
				'BASKET_URL' => $arParams['BASKET_URL'],
				'SKU_PROPS' => $arResult['OFFERS_PROP_CODES'],
				'ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
				'BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE']
			),
			'OFFERS' => $arResult['JS_OFFERS'],
			'OFFER_SELECTED' => $arResult['OFFERS_SELECTED'],
			'TREE_PROPS' => $skuProps,
			'MESS' => array(
				'MESS_BTN_BUY' => $arParams['MESS_BTN_BUY'],
				'MESS_BTN_ADD_TO_BASKET' => $arParams['MESS_BTN_ADD_TO_BASKET'],
				'MESS_BTN_INCART' => $arParams['MESS_BTN_INCART'],
			),
		);
	}
	else
	{
		$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
		if ($arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !$emptyProductProperties)
		{
			?>
			<div id="<?=$itemIds['BASKET_PROP_DIV']?>" style="display: none;">
				<?
				if (!empty($arResult['PRODUCT_PROPERTIES_FILL']))
				{
					foreach ($arResult['PRODUCT_PROPERTIES_FILL'] as $propId => $propInfo)
					{
						?>
						<input type="hidden" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]" value="<?=htmlspecialcharsbx($propInfo['ID'])?>">
						<?
						unset($arResult['PRODUCT_PROPERTIES'][$propId]);
					}
				}

				$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
				if (!$emptyProductProperties)
				{
					?>
					<table>
						<?
						foreach ($arResult['PRODUCT_PROPERTIES'] as $propId => $propInfo)
						{
							?>
							<tr>
								<td><?=$arResult['PROPERTIES'][$propId]['NAME']?></td>
								<td>
									<?
									if (
										$arResult['PROPERTIES'][$propId]['PROPERTY_TYPE'] === Iblock\PropertyTable::TYPE_LIST
										&& $arResult['PROPERTIES'][$propId]['LIST_TYPE'] === 'C'
									)
									{
										foreach ($propInfo['VALUES'] as $valueId => $value)
										{
											?>
											<label>
												<input type="radio" name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]"
													value="<?=$valueId?>" <?=($valueId == $propInfo['SELECTED'] ? '"checked"' : '')?>>
												<?=$value?>
											</label>
											<br>
											<?
										}
									}
									else
									{
										?>
										<select name="<?=$arParams['PRODUCT_PROPS_VARIABLE']?>[<?=$propId?>]">
											<?
											foreach ($propInfo['VALUES'] as $valueId => $value)
											{
												?>
												<option value="<?=$valueId?>" <?=($valueId == $propInfo['SELECTED'] ? '"selected"' : '')?>>
													<?=$value?>
												</option>
												<?
											}
											?>
										</select>
										<?
									}
									?>
								</td>
							</tr>
							<?
						}
						?>
					</table>
					<?
				}
				?>
			</div>
			<?
		}

		$jsParams = array(
			'CONFIG' => array(
				'USE_CATALOG' => $arResult['CATALOG'],
				'SHOW_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
				'SHOW_PRICE' => !empty($arResult['ITEM_PRICES']),
				'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'] === 'Y',
				'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'] === 'Y',
				'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
				'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
				'MAIN_PICTURE_MODE' => $arParams['DETAIL_PICTURE_MODE'],
				'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
				'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'] === 'Y',
				'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
				'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
				'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
				'USE_STICKERS' => true,
				'USE_SUBSCRIBE' => $showSubscribe,
				// 'SHOW_SLIDER' => $arParams['SHOW_SLIDER'],
				// 'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
				'ALT' => $alt,
				'TITLE' => $title,
				'MAGNIFIER_ZOOM_PERCENT' => 200,
				'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
				'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
				'BRAND_PROPERTY' => !empty($arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']])
					? $arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']]['DISPLAY_VALUE']
					: null,
				'USE_FAVORITE' => $arParams['USE_FAVORITE'] === 'Y',
				'FILL_ITEM_ALL_PRICES' => $arParams['FILL_ITEM_ALL_PRICES'],
				'LINK_BUY1CLICK' => $arParams['LINK_BUY1CLICK'],

				'USE_FEEDBACK' => $arParams['USE_FEEDBACK'],
				'LINK_BTN_FEEDBACK' => $arParams['LINK_BTN_FEEDBACK'],
/*
				'CHEAPER_FORM_URL' => $arParams['CHEAPER_FORM_URL'],
*/
			),
			'VISUAL' => $itemIds,
			'PRODUCT_TYPE' => $arResult['PRODUCT']['TYPE'],
			'PRODUCT' => array(
				'ID' => $arResult['ID'],
				'ACTIVE' => $arResult['ACTIVE'],
				'PICT' => reset($arResult['MORE_PHOTO']),
				'NAME' => $arResult['~NAME'],
				'SUBSCRIPTION' => true,
				'ITEM_PRICE_MODE' => $arResult['ITEM_PRICE_MODE'],
				'ITEM_PRICES' => $arResult['ITEM_PRICES'],
				'ITEM_PRICE_SELECTED' => $arResult['ITEM_PRICE_SELECTED'],
				'ITEM_QUANTITY_RANGES' => $arResult['ITEM_QUANTITY_RANGES'],
				'ITEM_QUANTITY_RANGE_SELECTED' => $arResult['ITEM_QUANTITY_RANGE_SELECTED'],
				'ITEM_MEASURE_RATIOS' => $arResult['ITEM_MEASURE_RATIOS'],
				'ITEM_MEASURE_RATIO_SELECTED' => $arResult['ITEM_MEASURE_RATIO_SELECTED'],
				'SLIDER_COUNT' => $arResult['MORE_PHOTO_COUNT'],
				'SLIDER' => $arResult['MORE_PHOTO'],
				'CAN_BUY' => $arResult['CAN_BUY'],
				'CHECK_QUANTITY' => $arResult['CHECK_QUANTITY'],
				'QUANTITY_FLOAT' => is_float($arResult['ITEM_MEASURE_RATIOS'][$arResult['ITEM_MEASURE_RATIO_SELECTED']]['RATIO']),
				'MAX_QUANTITY' => $arResult['PRODUCT']['QUANTITY'],
				'STEP_QUANTITY' => $arResult['ITEM_MEASURE_RATIOS'][$arResult['ITEM_MEASURE_RATIO_SELECTED']]['RATIO'],
				'CATEGORY' => $arResult['CATEGORY_PATH']
			),
			'BASKET' => array(
				'ADD_PROPS' => $arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y',
				'QUANTITY' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
				'PROPS' => $arParams['PRODUCT_PROPS_VARIABLE'],
				'EMPTY_PROPS' => $emptyProductProperties,
				'BASKET_URL' => $arParams['BASKET_URL'],
				'ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
				'BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE']
			),
			'MESS' => array(
				'MESS_BTN_BUY' => $arParams['MESS_BTN_BUY'],
				'MESS_BTN_ADD_TO_BASKET' => $arParams['MESS_BTN_ADD_TO_BASKET'],
				'MESS_BTN_INCART' => $arParams['MESS_BTN_INCART'],
			),
		);

		if (
			$arParams['FILL_ITEM_ALL_PRICES']
			&& is_array($arResult['ITEM_ALL_PRICES'][$arResult['ITEM_PRICE_SELECTED']]['PRICES']) && count($arResult['ITEM_ALL_PRICES'][$arResult['ITEM_PRICE_SELECTED']]['PRICES']) > 1
		) {
			$jsParams['PRODUCT']['ITEM_ALL_PRICES'] = $arResult['ITEM_ALL_PRICES'];
		}

		if ($arResult['DAYSARTICLE'])
		{
			$arTimer = $arResult['DAYSARTICLE'];

			$jsParams['PRODUCT']['TIMER'] = array(
				'TITLE' => Loc::getMessage('RS_WINN_BCE_CATALOG_DAYSARTICLE_TITLE'),
				'DATE_FROM' => $arTimer['DINAMICA_EX']['DATE_FROM'],
				'DATE_TO' => $arTimer['DINAMICA_EX']['DATE_TO'],
				'AUTO_RENEWAL' => $arTimer['AUTO_RENEWAL'],
				'QUANTITY' => $arTimer['QUANTITY']
			);

			if (isset($arTimer['DINAMICA']))
			{
				$jsParams['PRODUCT']['TIMER']['DINAMICA_DATA'] = $arTimer['DINAMICA'] == 'custom'
					? array_flip(unserialize($arTimer['DINAMICA_DATA']))
					: $arTimer['DINAMICA'];
			}
			unset($arTimer);
		}
		elseif ($arResult['QUICKBUY'])
		{
			$arTimer = $arResult['QUICKBUY'];

			$jsParams['PRODUCT']['TIMER'] = array(
				'TITLE' => Loc::getMessage('RS_WINN_BCE_CATALOG_QUICKBUY_TITLE'),
				'DATE_FROM' => $arTimer['TIMER']['DATE_FROM'],
				'DATE_TO' => $arTimer['TIMER']['DATE_TO'],
				'AUTO_RENEWAL' => $arTimer['AUTO_RENEWAL'],
				'QUANTITY' => $arTimer['QUANTITY']
			);
			unset($arTimer);
		}


		unset($emptyProductProperties);
	}

	if ($arParams['DISPLAY_COMPARE'])
	{
		$jsParams['COMPARE'] = array(
			'COMPARE_URL_TEMPLATE' => $arResult['~COMPARE_URL_TEMPLATE'],
			'COMPARE_DELETE_URL_TEMPLATE' => $arResult['~COMPARE_DELETE_URL_TEMPLATE'],
			'COMPARE_PATH' => $arParams['COMPARE_PATH']
		);
	}
	
	$jsParams['CONFIG']['SLIDER_SLIDE_COUNT'] = $arParams['SLIDER_SLIDE_COUNT'];
	?>
	<br><br><br><br>
<script>
	BX.message({
		ECONOMY_INFO_MESSAGE: '<?=GetMessageJS('CT_BCE_CATALOG_ECONOMY_INFO2')?>',
		TITLE_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_ERROR')?>',
		TITLE_BASKET_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_TITLE_BASKET_PROPS')?>',
		BASKET_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_BASKET_UNKNOWN_ERROR')?>',
		BTN_SEND_PROPS: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_SEND_PROPS')?>',
		BTN_MESSAGE_BASKET_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_BASKET_REDIRECT')?>',
		BTN_MESSAGE_CLOSE: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE')?>',
		BTN_MESSAGE_CLOSE_POPUP: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE_POPUP')?>',
		TITLE_SUCCESSFUL: '<?=GetMessageJS('CT_BCE_CATALOG_ADD_TO_BASKET_OK')?>',
		COMPARE_MESSAGE_OK: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_OK')?>',
		COMPARE_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_UNKNOWN_ERROR')?>',
		COMPARE_TITLE: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_TITLE')?>',
		BTN_MESSAGE_COMPARE_REDIRECT: '<?=GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT')?>',
		PRODUCT_GIFT_LABEL: '<?=GetMessageJS('CT_BCE_CATALOG_PRODUCT_GIFT_LABEL')?>',
		PRICE_TOTAL_PREFIX: '<?=GetMessageJS('CT_BCE_CATALOG_MESS_PRICE_TOTAL_PREFIX')?>',
		RELATIVE_QUANTITY_MANY: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY'])?>',
		RELATIVE_QUANTITY_FEW: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW'])?>',
		SITE_ID: '<?=CUtil::JSEscape($component->getSiteId())?>',
		BTN_COMPARE_ADD: '<?=CUtil::JSEscape($arParams['MESS_BTN_COMPARE'])?>',
		BTN_COMPARE_DEL: '<?=GetMessageJS('RS_WINN_BCE_CATALOG_COMPARE_DEL')?>',
		BTN_FAVORITE_ADD: '<?=GetMessageJS('RS_WINN_BCE_CATALOG_FAVORITE_ADD')?>',
		BTN_FAVORITE_DEL: '<?=GetMessageJS('RS_WINN_BCE_CATALOG_FAVORITE_DEL')?>',
		LOWER_PRICE: '<?=GetMessageJS('RS_WINN_BCE_CATALOG_LOWER_PRICE')?>',
	});

	var <?=$obName?> = new JCCatalogElement(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<?php
unset($actualItem, $itemIds, $jsParams);
