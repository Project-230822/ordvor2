<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;

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
$this->addExternalCss('/bitrix/css/main/bootstrap.css');


$templateLibrary = array('popup', 'fx');
$currencyList = '';

if (!empty($arResult['CURRENCIES'])) {
	$templateLibrary[] = 'currency';
	$currencyList = CUtil::PhpToJSObject($arResult['CURRENCIES'], false, true, true);
}

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
	'DISCOUNT_PERCENT_ID' => $mainId . '_dsc_pict',
	'STICKER_ID' => $mainId . '_sticker',
	'BIG_SLIDER_ID' => $mainId . '_big_slider',
	'BIG_IMG_CONT_ID' => $mainId . '_bigimg_cont',
	'SLIDER_CONT_ID' => $mainId . '_slider_cont',
	'OLD_PRICE_ID' => $mainId . '_old_price',
	'PRICE_ID' => $mainId . '_price',
	'DISCOUNT_PRICE_ID' => $mainId . '_price_discount',
	'PRICE_TOTAL' => $mainId . '_price_total',
	'SLIDER_CONT_OF_ID' => $mainId . '_slider_cont_',
	'QUANTITY_ID' => $mainId . '_quantity',
	'QUANTITY_DOWN_ID' => $mainId . '_quant_down',
	'QUANTITY_UP_ID' => $mainId . '_quant_up',
	'QUANTITY_MEASURE' => $mainId . '_quant_measure',
	'QUANTITY_LIMIT' => $mainId . '_quant_limit',
	'BUY_LINK' => $mainId . '_buy_link',
	'ADD_BASKET_LINK' => $mainId . '_add_basket_link',
	'BASKET_ACTIONS_ID' => $mainId . '_basket_actions',
	'NOT_AVAILABLE_MESS' => $mainId . '_not_avail',
	'COMPARE_LINK' => $mainId . '_compare_link',
	'TREE_ID' => $mainId . '_skudiv',
	'DISPLAY_PROP_DIV' => $mainId . '_sku_prop',
	'DISPLAY_MAIN_PROP_DIV' => $mainId . '_main_sku_prop',
	'OFFER_GROUP' => $mainId . '_set_group_',
	'BASKET_PROP_DIV' => $mainId . '_basket_prop',
	'SUBSCRIBE_LINK' => $mainId . '_subscribe',
	'TABS_ID' => $mainId . '_tabs',
	'TAB_CONTAINERS_ID' => $mainId . '_tab_containers',
	'SMALL_CARD_PANEL_ID' => $mainId . '_small_card_panel',
	'TABS_PANEL_ID' => $mainId . '_tabs_panel'
);
$obName = $templateData['JS_OBJ'] = 'ob' . preg_replace('/[^a-zA-Z0-9_]/', 'x', $mainId);
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
if ($haveOffers) {
	$actualItem = isset($arResult['OFFERS'][$arResult['OFFERS_SELECTED']])
		? $arResult['OFFERS'][$arResult['OFFERS_SELECTED']]
		: reset($arResult['OFFERS']);
	$showSliderControls = false;

	foreach ($arResult['OFFERS'] as $offer) {
		if ($offer['MORE_PHOTO_COUNT'] > 1) {
			$showSliderControls = true;
			break;
		}
	}
} else {
	$actualItem = $arResult;
	$showSliderControls = $arResult['MORE_PHOTO_COUNT'] > 1;
}

$skuProps = array();
$price = $actualItem['ITEM_PRICES'][$actualItem['ITEM_PRICE_SELECTED']];

if ($arResult['PROPERTIES']['PROTSENT_SKIDKI']['VALUE']) {
	$price['PERCENT'] = floatval($arResult["PROPERTIES"]["PROTSENT_SKIDKI"]["VALUE"]);
	$discountVal = $price["BASE_PRICE"] - intval($price["BASE_PRICE"] * $price['PERCENT'] / 100);
	$discountPrint = CurrencyFormat($discountVal, "RUB");
	$price["RATIO_PRICE"] = $discountVal;
	$price["PRINT_RATIO_PRICE"] = $discountPrint;
	$price["PRINT_RATIO_DISCOUNT"] = CurrencyFormat(intval($price["BASE_PRICE"] * $price['PERCENT'] / 100), "RUB");
}

$measureRatio = $actualItem['ITEM_MEASURE_RATIOS'][$actualItem['ITEM_MEASURE_RATIO_SELECTED']]['RATIO'];
$showDiscount = $price['PERCENT'] > 0;

$showDescription = !empty($arResult['PREVIEW_TEXT']) || !empty($arResult['DETAIL_TEXT']);
$showBuyBtn = in_array('BUY', $arParams['ADD_TO_BASKET_ACTION']);
$buyButtonClassName = in_array('BUY', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-default' : 'btn-link';
$showAddBtn = in_array('ADD', $arParams['ADD_TO_BASKET_ACTION']);
$showButtonClassName = in_array('ADD', $arParams['ADD_TO_BASKET_ACTION_PRIMARY']) ? 'btn-default' : 'btn-link';
$showSubscribe = $arParams['PRODUCT_SUBSCRIPTION'] === 'Y' && ($arResult['PRODUCT']['SUBSCRIBE'] === 'Y' || $haveOffers);

$arParams['MESS_BTN_BUY'] = $arParams['MESS_BTN_BUY'] ?: Loc::getMessage('CT_BCE_CATALOG_BUY');
$arParams['MESS_BTN_ADD_TO_BASKET'] = $arParams['MESS_BTN_ADD_TO_BASKET'] ?: Loc::getMessage('CT_BCE_CATALOG_ADD');
$arParams['MESS_NOT_AVAILABLE'] = $arParams['MESS_NOT_AVAILABLE'] ?: Loc::getMessage('CT_BCE_CATALOG_NOT_AVAILABLE');
$arParams['MESS_BTN_COMPARE'] = $arParams['MESS_BTN_COMPARE'] ?: Loc::getMessage('CT_BCE_CATALOG_COMPARE');
$arParams['MESS_PRICE_RANGES_TITLE'] = $arParams['MESS_PRICE_RANGES_TITLE'] ?: Loc::getMessage('CT_BCE_CATALOG_PRICE_RANGES_TITLE');
$arParams['MESS_DESCRIPTION_TAB'] = $arParams['MESS_DESCRIPTION_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_DESCRIPTION_TAB');
$arParams['MESS_PROPERTIES_TAB'] = $arParams['MESS_PROPERTIES_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_PROPERTIES_TAB');
$arParams['MESS_COMMENTS_TAB'] = $arParams['MESS_COMMENTS_TAB'] ?: Loc::getMessage('CT_BCE_CATALOG_COMMENTS_TAB');
$arParams['MESS_SHOW_MAX_QUANTITY'] = $arParams['MESS_SHOW_MAX_QUANTITY'] ?: Loc::getMessage('CT_BCE_CATALOG_SHOW_MAX_QUANTITY');
$arParams['MESS_RELATIVE_QUANTITY_MANY'] = $arParams['MESS_RELATIVE_QUANTITY_MANY'] ?: Loc::getMessage('CT_BCE_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['MESS_RELATIVE_QUANTITY_FEW'] = $arParams['MESS_RELATIVE_QUANTITY_FEW'] ?: Loc::getMessage('CT_BCE_CATALOG_RELATIVE_QUANTITY_FEW');

$positionClassMap = array(
	'left' => 'product-item-label-left',
	'center' => 'product-item-label-center',
	'right' => 'product-item-label-right',
	'bottom' => 'product-item-label-bottom',
	'middle' => 'product-item-label-middle',
	'top' => 'product-item-label-top'
);

$discountPositionClass = 'product-item-label-big';
if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && !empty($arParams['DISCOUNT_PERCENT_POSITION'])) {
	foreach (explode('-', $arParams['DISCOUNT_PERCENT_POSITION']) as $pos) {
		$discountPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : '';
	}
}

$labelPositionClass = 'product-item-label-big';
if (!empty($arParams['LABEL_PROP_POSITION'])) {
	foreach (explode('-', $arParams['LABEL_PROP_POSITION']) as $pos) {
		$labelPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : '';
	}
}

if (!$arResult["OFFERS"]) {
	$arOfferIDs = $arResult["ID"];
} else {
	foreach ($arResult["OFFERS"] as $offer) {
		$arOfferIDs[] = $offer["ID"];
	}
}

$rsStoreProduct = \Bitrix\Catalog\StoreProductTable::getList(array(
	'filter' => array('=PRODUCT_ID' => $arOfferIDs, 'STORE.ACTIVE' => 'Y'),
));

$storesAmount = 0;
while ($arStoreProduct = $rsStoreProduct->fetch()) {
	$arUF = $GLOBALS["USER_FIELD_MANAGER"]->GetUserFields("CAT_STORE", $arStoreProduct["STORE_ID"]);

	if ($arUF["UF_SHOW"]["VALUE"]) {
		if ($arStoreProduct["AMOUNT"] > 0) {
			if (!in_array($arStoreProduct["STORE_ID"], $arStores)) {
				$arStores[] = $arStoreProduct["STORE_ID"];
				$storesAmount++;
			}
		}
	}
}
?>

<div class="bx-catalog-element product-detail product-detail product-detail js-product-item-d bx-<?= $arParams['TEMPLATE_THEME'] ?>" id="<?= $itemIds['ID'] ?>" itemscope itemtype="http://schema.org/Product">
	<div class="container-fluid container-fluid-element">
		<? if ($arParams['DISPLAY_NAME'] === 'Y') { ?>
			<div class="row">
				<div class="col-xs-12">
					<h1 class="bx-title page-title" itemprop="name"><?= $arResult["PROPERTIES"]["CML2_MANUFACTURER"]["VALUE"] ?> <?= $name ?></h1>
					<? if ($arResult['SHOW_18_04_MESSAGE']) { ?>
						<div class="product-notice-info" style="margin-top: 0;background:#f7b3ae;font-size:16px;color:#000">
							<b>Внимание!</b> С 18 апреля 2020 года этот товар можно приобрести в сети магазинов "Оружейный двор"
							только по предварительной записи по телефонам: <nobr><a style="color:#000" href="tel:89626763099">+7 (962) 676-30-99</a>,</nobr>
							<nobr><a style="color:#000" href="tel:89098436629">+7(909) 843-66-29</a>,</nobr>
							<nobr><a style="color:#000" href="tel:89098015487">+7(909) 801-54-87</a></nobr>
						</div>
					<? } ?>
				</div>
			</div>
		<? } ?>
		<div class="bx-catalog-element-top-container">
			<div class="raiting-container">
				<? // TODO Рейтинг

				$countReviews = intval($arResult['PROPERTIES']['COINT_REVIEWS']['VALUE']);
				$summReviews = intval($arResult['PROPERTIES']['SUMM_REVIEWS']['VALUE']);
				$midRate = round($summReviews / $countReviews, 1); // Средний рейтинг 
				?>
				<div itemprop="aggregateRating" itemscope="" itemtype="https://schema.org/AggregateRating">
					<meta itemprop="ratingValue" content="<?= $midRate ?>">
					<meta itemprop="reviewCount" content="<?= $countReviews; ?>">
				</div>
				<div class="raiting-container-stars">
					<? for ($i = 1; $i < 6; $i++) { ?>
						<svg class="<? if ($i <= $midRate) echo " active"; ?>" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.9457 8.5465C10.773 8.71384 10.6937 8.95584 10.733 9.19317L11.3257 12.4732C11.3757 12.7512 11.2584 13.0325 11.0257 13.1932C10.7977 13.3598 10.4944 13.3798 10.2457 13.2465L7.29305 11.7065C7.19038 11.6518 7.07638 11.6225 6.95971 11.6192H6.77905C6.71638 11.6285 6.65505 11.6485 6.59905 11.6792L3.64571 13.2265C3.49971 13.2998 3.33438 13.3258 3.17238 13.2998C2.77771 13.2252 2.51438 12.8492 2.57905 12.4525L3.17238 9.1725C3.21171 8.93317 3.13238 8.68984 2.95971 8.51984L0.55238 6.1865C0.351047 5.99117 0.281047 5.69784 0.373047 5.43317C0.46238 5.16917 0.69038 4.9765 0.965714 4.93317L4.27905 4.4525C4.53105 4.4265 4.75238 4.27317 4.86571 4.0465L6.32571 1.05317C6.36038 0.986504 6.40505 0.925171 6.45905 0.873171L6.51905 0.826504C6.55038 0.791837 6.58638 0.763171 6.62638 0.739837L6.69905 0.713171L6.81238 0.666504H7.09305C7.34371 0.692504 7.56438 0.842504 7.67971 1.0665L9.15905 4.0465C9.26571 4.2645 9.47305 4.41584 9.71238 4.4525L13.0257 4.93317C13.3057 4.97317 13.5397 5.1665 13.6324 5.43317C13.7197 5.7005 13.6444 5.99384 13.439 6.1865L10.9457 8.5465Z" fill="#CACACA" />
						</svg>
					<? } ?>
					<span><?= (!is_nan($midRate) ? $midRate : '0') ?></span>
				</div>
				<a href="#tab-review" class="raiting-container-reviews">
					<?= ($countReviews ? declensionOfNumbers($countReviews, ['отзыв', 'отзыва', 'отзывов']) : 'Оставить отзыв') ?>
				</a>
			</div>
			<div class="bx-product-code-list">
				<?php if ($arResult["XML_ID"]) : ?>
					<div class="product-code">Код товара: <span class="product-code-value"><?= $arResult["XML_ID"] ?></span></div>
				<?php endif; ?>

				<?php if ($arResult["PROPERTIES"]["CML2_ARTICLE"]["VALUE"]) : ?>
					<div class="product-code">Артикул: <?= $arResult["PROPERTIES"]["CML2_ARTICLE"]["VALUE"] ?></div>
				<?php endif; ?>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-5 col-sm-12">
			<div class="product-item-detail-slider-container" id="<?= $itemIds['BIG_SLIDER_ID'] ?>">
				<span class="product-item-detail-slider-close" data-entity="close-popup"></span>
				<div class="product-item-detail-slider-block
						<?= ($arParams['IMAGE_RESOLUTION'] === '1by1' ? 'product-item-detail-slider-block-square' : '') ?>" data-entity="images-slider-block">
					<span class="product-item-detail-slider-left" data-entity="slider-control-left" style="display: none;">
						<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7 13L1 7L7 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<span class="product-item-detail-slider-right" data-entity="slider-control-right" style="display: none;">
						<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 13L7 7L0.999999 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<div class="product-item-label-text <?= $labelPositionClass ?>" id="<?= $itemIds['STICKER_ID'] ?>" <?= (!$arResult['LABEL'] ? 'style="display: none;"' : '') ?>>
						<?
						if ($arResult['LABEL'] && !empty($arResult['LABEL_ARRAY_VALUE'])) {
							foreach ($arResult['LABEL_ARRAY_VALUE'] as $code => $value) { ?>
								<div<?= (!isset($arParams['LABEL_PROP_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
									<span title="<?= $value ?>"><?= $value ?></span>
					</div>
			<? }
						} ?>
				</div>
				<? if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y') {
					if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") {
						if ($haveOffers) { ?>
							<div class="product-item-label-ring <?= $discountPositionClass ?>" id="<?= $itemIds['DISCOUNT_PERCENT_ID'] ?>" style="display: none;">
							</div>
							<?
						} else {
							if ($price['PERCENT'] > 0) { ?>
								<div class="product-item-label-ring <?= $discountPositionClass ?>" id="<?= $itemIds['DISCOUNT_PERCENT_ID'] ?>" title="<?= -$price['PERCENT'] ?>%">
									<span><?= -$price['PERCENT'] ?>%</span>
								</div>
				<? }
						}
					}
				} ?>
				<div class="product-item-detail-slider-images-container" data-entity="images-container">
					<? if (!empty($actualItem['MORE_PHOTO'])) {
						foreach ($actualItem['MORE_PHOTO'] as $key => $photo) { ?>
							<div class="product-item-detail-slider-image<?= ($key == 0 ? ' active' : '') ?>" data-entity="image" data-id="<?= $photo['ID'] ?>">
								<img src="<?= $photo['SRC'] ?>" alt="<?= $alt ?>" title="<?= $title ?>" <?= ($key == 0 ? ' itemprop="image"' : '') ?>>
							</div>
						<? }
					}
					if ($arParams['SLIDER_PROGRESS'] === 'Y') {
						?>
						<div class="product-item-detail-slider-progress-bar" data-entity="slider-progress-bar" style="width: 0;"></div>
					<? } ?>
				</div>
			</div>
			<? if ($showSliderControls) {
				if ($haveOffers) {
					foreach ($arResult['OFFERS'] as $keyOffer => $offer) {
						if (!isset($offer['MORE_PHOTO_COUNT']) || $offer['MORE_PHOTO_COUNT'] <= 0)
							continue;
						$strVisible = $arResult['OFFERS_SELECTED'] == $keyOffer ? '' : 'none'; ?>
						<div class="product-item-detail-slider-controls-block" id="<?= $itemIds['SLIDER_CONT_OF_ID'] . $offer['ID'] ?>" style="display: <?= $strVisible ?>;">
							<? foreach ($offer['MORE_PHOTO'] as $keyPhoto => $photo) { ?>
								<div class="product-item-detail-slider-controls-image<?= ($keyPhoto == 0 ? ' active' : '') ?>" data-entity="slider-control" data-value="<?= $offer['ID'] . '_' . $photo['ID'] ?>">
									<img src="<?= $photo['SRC'] ?>">
								</div>
							<? } ?>
						</div>
					<? }
				} else { ?>
					<div class="product-item-detail-slider-controls-block" id="<?= $itemIds['SLIDER_CONT_ID'] ?>">
						<?
						if (!empty($actualItem['MORE_PHOTO'])) {
							foreach ($actualItem['MORE_PHOTO'] as $key => $photo) {
						?>
								<div class="product-item-detail-slider-controls-image<?= ($key == 0 ? ' active' : '') ?>" data-entity="slider-control" data-value="<?= $photo['ID'] ?>">
									<img src="<?= $photo['SRC'] ?>">
								</div>
						<?
							}
						}
						?>
					</div>
			<?
				}
			}
			?>
		</div>
	</div>
	<div class="col-md-3 col-sm-12">
		<div class="product-item-detail-info-section">
			<? foreach ($arParams['PRODUCT_INFO_BLOCK_ORDER'] as $blockName) {
				switch ($blockName) {
					case 'sku':
						if ($haveOffers && !empty($arResult['OFFERS_PROP'])) { ?>
							<div id="<?= $itemIds['TREE_ID'] ?>">
								<? foreach ($arResult['SKU_PROPS'] as $skuProperty) {
									if (!isset($arResult['OFFERS_PROP'][$skuProperty['CODE']]))
										continue;

									$propertyId = $skuProperty['ID'];
									$skuProps[] = array(
										'ID' => $propertyId,
										'SHOW_MODE' => $skuProperty['SHOW_MODE'],
										'VALUES' => $skuProperty['VALUES'],
										'VALUES_COUNT' => $skuProperty['VALUES_COUNT']
									); ?>
									<div class="product-item-detail-info-container" data-entity="sku-line-block">
										<div class="product-item-detail-info-container-title"><?= htmlspecialcharsEx($skuProperty['NAME']) ?></div>
										<div class="product-item-scu-container">
											<div class="product-item-scu-block">
												<div class="product-item-scu-list">
													<ul class="product-item-scu-item-list">
														<?
														foreach ($skuProperty['VALUES'] as &$value) {
															$value['NAME'] = htmlspecialcharsbx($value['NAME']);

															if ($skuProperty['SHOW_MODE'] === 'PICT') {
														?>
																<li class="product-item-scu-item-color-container" title="<?= $value['NAME'] ?>" data-treevalue="<?= $propertyId ?>_<?= $value['ID'] ?>" data-onevalue="<?= $value['ID'] ?>">
																	<div class="product-item-scu-item-color-block">
																		<div class="product-item-scu-item-color" title="<?= $value['NAME'] ?>" style="background-image: url('<?= $value['PICT']['SRC'] ?>');">
																		</div>
																	</div>
																</li>
															<? } else { ?>
																<li class="product-item-scu-item-text-container" title="<?= $value['NAME'] ?>" data-treevalue="<?= $propertyId ?>_<?= $value['ID'] ?>" data-onevalue="<?= $value['ID'] ?>">
																	<div class="product-item-scu-item-text-block">
																		<div class="product-item-scu-item-text"><?= $value['NAME'] ?></div>
																	</div>
																</li>
														<? }
														} ?>
													</ul>
													<div style="clear: both;"></div>
												</div>
											</div>
										</div>
									</div>
								<? } ?>
							</div>
			<? }
						break;
				}
			} ?>
		</div>
		<!-- TODO малые характеристики -->
		<div class="product-item-detail-small-characteristics">
			<div class="product-item-detail-info-container-title">Характеристики</div>
			<div class="product-item-detail-small-characteristics-list">
				<? foreach ($arResult['DISPLAY_PROPERTIES'] as $property) {
					if ($property['ACTIVE'] == 'Y') :
						if ($property["CODE"] !== "SEARCH_XML_ID") : ?>
							<div class="prop-item">
								<div class="prop-title">
									<div class="inner-wrap"><?= $property['NAME'] ?></div>
								</div>
								<div class="prop-value <?= $property['CODE'] ?>">
									<?= (is_array($property['DISPLAY_VALUE'])
										? implode(' / ', $property['DISPLAY_VALUE'])
										: $property['DISPLAY_VALUE']
									) ?>
								</div>
							</div>
				<? endif;
					endif;
				}
				unset($property); ?>
			</div>
			<a href="#tab-review" class="product-item-detail-link-to-characteristics">Все характеристики</a>
		</div>
	</div>
	<div class="col-md-4 col-sm-12">
		<div class="row">
			<div class="col-sm-12">
				<div class="product-item-detail-pay-block" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
					<div class="catch_up">Скидка 7% за самовывоз</div>
					<? foreach ($arParams['PRODUCT_PAY_BLOCK_ORDER'] as $blockName) { ?>
						<? if ($blockName === 'price') : ?>
							<? if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") { ?>
								<div>Товар доступен только в оффлайн-магазинах</div>
							<? } ?>
							<div class="product-item-detail-info-container">
								<div class="product-item-detail-price-container">
									<div class="product-item-detail-price-current" id="<?= $itemIds['PRICE_ID'] ?>" <?php if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "style='display: none;'"; ?>>
										<?= $price['PRINT_RATIO_PRICE'] ?>
									</div>
									<meta itemprop="price" content="<?= $price['PRINT_RATIO_PRICE'] ?>">
									<meta itemprop="priceCurrency" content="RUB">
									<? if ($arParams['SHOW_OLD_PRICE'] === 'Y') { ?>
										<div class="product-item-detail-price-old" id="<?= $itemIds['OLD_PRICE_ID'] ?>" style="display: <?= ($showDiscount ? '' : 'none') ?>; <?php if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "none"; ?>">
											<?= ($showDiscount ? $price['PRINT_RATIO_BASE_PRICE'] : '') ?>
										</div>
										<div class="item_economy_price" id="<?= $itemIds['DISCOUNT_PRICE_ID'] ?>" style="display: <?= ($showDiscount ? '' : 'none') ?>;<?php if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "none"; ?>">
											<? if ($showDiscount) {
												echo Loc::getMessage('CT_BCE_CATALOG_ECONOMY_INFO2', array('#ECONOMY#' => $price['PRINT_RATIO_DISCOUNT']));
											} ?>
										</div>
									<? } ?>
								</div>
								<?php if ($actualItem['CAN_BUY']) : ?>
									<div class="availability ">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="#46B260" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
										<div class="in-stock icon-site">Товар в наличии</div>
									</div>
								<?php else : ?>
									<div class="availability ">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="#46B260" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
										<div class="off-stock">Нет в наличии</div>
									</div>
								<?php endif; ?>
							</div>
						<? endif; ?>
						<? if ($blockName === 'priceRanges') : ?>
							<? if ($arParams['USE_PRICE_COUNT']) {
								$showRanges = !$haveOffers && count($actualItem['ITEM_QUANTITY_RANGES']) > 1;
								$useRatio = $arParams['USE_RATIO_IN_RANGES'] === 'Y';
							?>
								<div class="product-item-detail-info-container" <?= $showRanges ? '' : 'style="display: none;"' ?> data-entity="price-ranges-block">
									<div class="product-item-detail-info-container-title">
										<?= $arParams['MESS_PRICE_RANGES_TITLE'] ?>
										<span data-entity="price-ranges-ratio-header">
											(<?= (Loc::getMessage(
													'CT_BCE_CATALOG_RATIO_PRICE',
													array('#RATIO#' => ($useRatio ? $measureRatio : '1') . ' ' . $actualItem['ITEM_MEASURE']['TITLE'])
												)) ?>)
										</span>
									</div>
									<dl class="product-item-detail-properties" data-entity="price-ranges-body">
										<?
										if ($showRanges) {
											foreach ($actualItem['ITEM_QUANTITY_RANGES'] as $range) {
												if ($range['HASH'] !== 'ZERO-INF') {
													$itemPrice = false;

													foreach ($arResult['ITEM_PRICES'] as $itemPrice) {
														if ($itemPrice['QUANTITY_HASH'] === $range['HASH']) {
															break;
														}
													}
													if ($itemPrice) { ?>
														<dt>
															<?
															echo Loc::getMessage(
																'CT_BCE_CATALOG_RANGE_FROM',
																array('#FROM#' => $range['SORT_FROM'] . ' ' . $actualItem['ITEM_MEASURE']['TITLE'])
															) . ' ';

															if (is_infinite($range['SORT_TO'])) {
																echo Loc::getMessage('CT_BCE_CATALOG_RANGE_MORE');
															} else {
																echo Loc::getMessage(
																	'CT_BCE_CATALOG_RANGE_TO',
																	array('#TO#' => $range['SORT_TO'] . ' ' . $actualItem['ITEM_MEASURE']['TITLE'])
																);
															}
															?>
														</dt>
														<dd><?= ($useRatio ? $itemPrice['PRINT_RATIO_PRICE'] : $itemPrice['PRINT_PRICE']) ?></dd>
										<? }
												}
											}
										}
										?>
									</dl>
								</div>
							<? unset($showRanges, $useRatio, $itemPrice, $range);
							} ?>
						<? endif; ?>

						<? if ($blockName === 'quantityLimit') : ?>
							<? if ($arParams['SHOW_MAX_QUANTITY'] !== 'N') {
								if ($haveOffers) { ?>
									<div class="product-item-detail-info-container" id="<?= $itemIds['QUANTITY_LIMIT'] ?>" style="display: none;">
										<div class="product-item-detail-info-container-title">
											<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
											<span class="product-item-quantity" data-entity="quantity-limit-value"></span>
										</div>
									</div>
									<?
								} else {
									if (
										$measureRatio
										&& (float)$actualItem['PRODUCT']['QUANTITY'] > 0
										&& $actualItem['CHECK_QUANTITY']
									) { ?>
										<div class="product-item-detail-info-container" id="<?= $itemIds['QUANTITY_LIMIT'] ?>">
											<div class="product-item-detail-info-container-title">
												<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
												<span class="product-item-quantity" data-entity="quantity-limit-value">
													<?
													if ($arParams['SHOW_MAX_QUANTITY'] === 'M') {
														if ((float)$actualItem['PRODUCT']['QUANTITY'] / $measureRatio >= $arParams['RELATIVE_QUANTITY_FACTOR']) {
															echo $arParams['MESS_RELATIVE_QUANTITY_MANY'];
														} else {
															echo $arParams['MESS_RELATIVE_QUANTITY_FEW'];
														}
													} else {
														echo $actualItem['PRODUCT']['QUANTITY'] . ' ' . $actualItem['ITEM_MEASURE']['TITLE'];
													}
													?>
												</span>
											</div>
										</div>
							<? }
								}
							} ?>
						<? endif; ?>

						<? if ($blockName === 'quantity&buttons') : ?>
							<div class="product-item-detail-info-container">
								<div class="product-item-detail-active-container">
									<? if ($arParams['USE_PRODUCT_QUANTITY']) { ?>
										<div class="product-item-detail-quantity-container" style="<?= (!$actualItem['CAN_BUY'] ? 'display: none;' : '') ?>" data-entity="quantity-block">
											<div class="product-item-amount" <?php if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "style='display: none;'"; ?>>
												<div class="product-item-amount-field-container">
													<span class="product-item-amount-field-btn-minus no-select" id="<?= $itemIds['QUANTITY_DOWN_ID'] ?>">
														<svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.58334 1H14.4167" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
														</svg>
													</span>
													<input class="product-item-amount-field" id="<?= $itemIds['QUANTITY_ID'] ?>" type="number" value="<?= $price['MIN_QUANTITY'] ?>">
													<span class="product-item-amount-field-btn-plus no-select" id="<?= $itemIds['QUANTITY_UP_ID'] ?>">
														<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M11 4.58301V17.4163" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
															<path d="M4.58333 11H17.4167" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
														</svg>
													</span>
												</div>
												<div class="product-item-amount-description-container">
													<span id="<?= $itemIds['QUANTITY_MEASURE'] ?>">
														<?= $actualItem['ITEM_MEASURE']['TITLE'] ?>
													</span>
													<span id="<?= $itemIds['PRICE_TOTAL'] ?>"></span>
												</div>
											</div>
										</div>
									<? } ?>

									<? if ($arResult["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") { ?>
										<div data-entity="main-button-container">
											<div id="<?= $itemIds['BASKET_ACTIONS_ID'] ?>" style="display: <?= ($actualItem['CAN_BUY'] ? '' : 'none') ?>;">
												<? if ($showAddBtn) { ?>
													<div class="product-item-detail-info-container catalog-buy">
														<a class="btn <?= $showButtonClassName ?> product-item-detail-buy-button" id="<?= $itemIds['ADD_BASKET_LINK'] ?>" href="javascript:void(0);">
															<?/*=$arParams['MESS_BTN_ADD_TO_BASKET']*/ ?>
															<span class="btn-caption">
																В корзину
															</span>
														</a>
													</div>
												<? }
												if ($showBuyBtn) { ?>
													<div class="product-item-detail-info-container">
														<a class="btn <?= $buyButtonClassName ?> product-item-detail-buy-button" id="<?= $itemIds['BUY_LINK'] ?>" href="javascript:void(0);">
															<span><?= $arParams['MESS_BTN_BUY'] ?></span>
														</a>
													</div>
												<? } ?>
											</div>
											<? if ($showSubscribe) { ?>
												<div class="product-item-detail-info-container">
													<? $APPLICATION->IncludeComponent(
														'bitrix:catalog.product.subscribe',
														'',
														array(
															'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
															'PRODUCT_ID' => $arResult['ID'],
															'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
															'BUTTON_CLASS' => 'btn btn-default product-item-detail-buy-button',
															'DEFAULT_DISPLAY' => !$actualItem['CAN_BUY'],
															'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
														),
														$component,
														array('HIDE_ICONS' => 'Y')
													); ?>
												</div>
											<? } ?>
											<?php /* ?>
											<div class="product-item-detail-info-container">
												<a class="btn btn-link product-item-detail-buy-button" id="<?=$itemIds['NOT_AVAILABLE_MESS']?>"
													href="javascript:void(0)"
													rel="nofollow" style="display: none;">
													<?=$arParams['MESS_NOT_AVAILABLE']?>
												</a>
											</div>
											<?php */ ?>
										</div>
									<? } ?>
								</div>
							</div>
						<? endif; ?>
					<? } ?>
					<a class="product-item-detail-installment-plan" href="/pokupai-v-rassrochku/" target="_blank">
						<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.587 4.00391C17.0117 4.55255 17.3657 5.15428 17.6666 5.7914L9.49007 11.8265L6.05664 9.66728V7.08336L9.47236 9.22483L16.587 4.00391Z" fill="white" />
							<path d="M2.57068 9.48849C2.57068 9.36463 2.57068 9.25843 2.58837 9.13452L0.517698 9.02832C0.517698 9.16994 0.5 9.32921 0.5 9.47078C0.5 11.9486 1.50879 14.1962 3.13701 15.8244L4.60596 14.3555C3.34939 13.1166 2.57068 11.3999 2.57068 9.48849Z" fill="white" />
							<path d="M9.47166 2.58825C9.59552 2.58825 9.70172 2.58825 9.82563 2.60595L9.93183 0.535276C9.79021 0.535276 9.63094 0.517578 9.48937 0.517578C7.01164 0.517578 4.76396 1.52637 3.13574 3.15459L4.60468 4.62354C5.84354 3.36697 7.57796 2.58825 9.47166 2.58825Z" fill="white" />
							<path d="M9.47384 16.3927C9.34993 16.3927 9.24373 16.3927 9.11987 16.375L9.01367 18.4457C9.15524 18.4457 9.31452 18.4634 9.45613 18.4634C11.9339 18.4634 14.1815 17.4546 15.8097 15.8264L14.3408 14.3574C13.1019 15.6317 11.3852 16.3927 9.47384 16.3927Z" fill="white" />
							<path d="M13.3672 3.79184L15.1193 2.49988C13.5796 1.26102 11.6151 0.5 9.47363 0.5V2.57068C10.9249 2.58837 12.27 3.03083 13.3672 3.79184Z" fill="white" />
							<path d="M18.4641 9.48942C18.4641 8.94076 18.411 8.40986 18.3225 7.87891L16.3934 9.31244C16.3934 9.36551 16.3934 9.43634 16.3934 9.48942C16.3934 11.5247 15.5085 13.3476 14.1104 14.6041L15.5085 16.1439C17.3137 14.5157 18.4641 12.1264 18.4641 9.48942Z" fill="white" />
							<path d="M9.47285 16.3934C7.43754 16.3934 5.61467 15.5085 4.35809 14.1104L2.81836 15.5085C4.46428 17.3314 6.8358 18.4641 9.47285 18.4641V16.3934Z" fill="white" />
							<path d="M4.85373 4.37567L3.45558 2.83594C1.63268 4.48186 0.5 6.85341 0.5 9.49041H2.57068C2.57068 7.47285 3.45558 5.63223 4.85373 4.37567Z" fill="white" />
						</svg>
						В рассрочку
					</a>
					<? if ($arParams['DISPLAY_COMPARE']) {
					?>
						<div class="product-item-detail-compare-container product-detail">
							<div class="product-item-detail-compare product-status">
								<div class="checkbox">
									<label id="<?= $itemIds['COMPARE_LINK'] ?>">
										<input type="checkbox" data-entity="compare-checkbox">
										<span data-entity="compare-title"><?/*=$arParams['MESS_BTN_COMPARE']*/ ?>
											<div class="compare js-compare-d">
												<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M1.5 15.5V9.5" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M15.5 15.5V7.5" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M8.5 15.5V1.5" stroke="#717171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
												</svg>
												<span class="icon-site icon-compare" data-entity="icon-compare">
													<span class="compare-text">Добавить к сравнению</span>
												</span>
											</div>
										</span>
									</label>
								</div>
							</div>
						</div>
					<? } ?>
				</div>

				<div class="delivery-product">
					<div class="delivery-item">
						<div class="value">Самовывоз:
							<?php if ($storesAmount) : ?>
								<a href="#tab-review" class="in-stock">в наличии в <?= $storesAmount ?> магазинах</a></span>
							<?php else : ?>
								нет в наличии
							<?php endif; ?>
						</div>
					</div>
					<div class="delivery-item">
						<div class="value"><a href="/delivery/">Транспортные компании</a></div>
					</div>
					<div class="delivery-item">
						<div class="value"><a href="/delivery/">Курьерская служба EMS</a></div>
					</div>
					<div class="delivery-item">
						<div class="value"><a href="/delivery/">Точки самовывоза Boxberry</a></div>
					</div>
					<div class="delivery-item">
						<div class="value"><a href="/delivery/">Почта России</a></div>
					</div>
				</div>
				<? $cityObject = OrdvorCity::getInstance();
				$cityName = $cityObject->getDeclination("CITY"); ?>
				<a class="calculate-shipping js-ajax-popup" data-url="/ajax/getDeliveryPrice.php" data-item-id="<?= $arResult["ID"] ?>" data-weigth="<?= $arResult["PRODUCT"]["WEIGHT"] ?>" href="javascript:void(0);"><i class="fa fa-truck"></i> Рассчитать доставку в <?= $cityName ?></a>

				<?
				//global $arrBannerFilter;
				//$arrBannerFilter = array('PROPERTY_ELEMENTS_ID' => $arResult["IBLOCK_SECTION_ID"]);
				//$APPLICATION->IncludeComponent(
				//	"bitrix:news.list",
				//	"banners",
				//	array(
				//		"ACTIVE_DATE_FORMAT" => "d.m.Y",
				//		"ADD_SECTIONS_CHAIN" => "Y",
				//		"AJAX_MODE" => "N",
				//		"AJAX_OPTION_ADDITIONAL" => "",
				//		"AJAX_OPTION_HISTORY" => "N",
				//		"AJAX_OPTION_JUMP" => "N",
				//		"AJAX_OPTION_STYLE" => "Y",
				//		"CACHE_FILTER" => "N",
				//		"CACHE_GROUPS" => "Y",
				//		"CACHE_TIME" => "36000000",
				//		"CACHE_TYPE" => "A",
				//		"CHECK_DATES" => "Y",
				//		"DETAIL_URL" => "",
				//		"DISPLAY_BOTTOM_PAGER" => "N",
				//		"DISPLAY_DATE" => "N",
				//		"DISPLAY_NAME" => "Y",
				//		"DISPLAY_PICTURE" => "N",
				//		"DISPLAY_PREVIEW_TEXT" => "N",
				//		"DISPLAY_TOP_PAGER" => "N",
				//		"FIELD_CODE" => array(
				//			0 => "NAME",
				//			1 => "DETAIL_PICTURE",
				//		),
				//		"FILTER_NAME" => "arrBannerFilter",
				//		"USE_FILTER" => "Y",
				//		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
				//		"IBLOCK_ID" => "25",
				//		"IBLOCK_TYPE" => "content",
				//		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
				//		"INCLUDE_SUBSECTIONS" => "Y",
				//		"MESSAGE_404" => "",
				//		"NEWS_COUNT" => "2",
				//		"PAGER_BASE_LINK_ENABLE" => "N",
				//		"PAGER_DESC_NUMBERING" => "N",
				//		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
				//		"PAGER_SHOW_ALL" => "N",
				//		"PAGER_SHOW_ALWAYS" => "N",
				//		"PAGER_TEMPLATE" => ".default",
				//		"PAGER_TITLE" => "Новости",
				//		"PARENT_SECTION" => "",
				//		"PARENT_SECTION_CODE" => "",
				//		"PREVIEW_TRUNCATE_LEN" => "",
				//		"PROPERTY_CODE" => array(
				//			0 => "LINK",
				//			1 => "TARGET",
				//		),
				//		"SET_BROWSER_TITLE" => "N",
				//		"SET_LAST_MODIFIED" => "N",
				//		"SET_META_DESCRIPTION" => "N",
				//		"SET_META_KEYWORDS" => "N",
				//		"SET_STATUS_404" => "N",
				//		"SET_TITLE" => "N",
				//		"SHOW_404" => "N",
				//		"SORT_BY1" => "SORT",
				//		"SORT_BY2" => "ID",
				//		"SORT_ORDER1" => "ASC",
				//		"SORT_ORDER2" => "DESC",
				//		"STRICT_SECTION_CHECK" => "N",
				//		"COMPONENT_TEMPLATE" => "banners",
				//		"FILE_404" => "",
				//		"IN_DETAIL" => "Y"
				//	),
				//	$component,
				//	array('HIDE_ICONS' => 'Y')
				//);
				?>
			</div>
		</div>
	</div>
</div>


<div class="row">
	<div class="col-xs-12">
		<div class="product-item-detail-bottom-label-list">
			<? if ($arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["VALUE"]) : ?>
				<div class="product-item-detail-label-item">
					<? if ($arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["FLAG"]) : ?>
						<div class="product-item-detail-label-svg">
							<img src="<?= $arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["FLAG"] ?>" alt="<?= $arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["VALUE"] ?>">
						</div>
					<? endif; ?>
					<div class="product-item-detail-label-info">
						<span><?= $arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["VALUE"] ?></span>
					</div>
				</div>
			<? endif; ?>
			<? if ($arResult["PROPERTIES"]["PROIZVODITEL"]["VALUE"]) : ?>
				<div class="product-item-detail-label-item">
					<? if ($arResult["PROPERTIES"]["PROIZVODITEL"]["FLAG"]) : ?>
						<div class="product-item-detail-label-svg">
							<img src="<?= $arResult["PROPERTIES"]["PROIZVODITEL"]["FLAG"] ?>" alt="<?= $arResult["PROPERTIES"]["PROIZVODITEL"]["VALUE"] ?>">
						</div>
					<? endif; ?>
					<div class="product-item-detail-label-info">
						<span>Страна производства</span>
						<span><?= $arResult["PROPERTIES"]["PROIZVODITEL"]["VALUE"] ?></span>
					</div>
				</div>
			<? endif; ?>
			<? if ($arResult["PROPERTIES"]["GARANTIYA"]["VALUE"]) : ?>
				<div class="product-item-detail-label-item">
					<div class="product-item-detail-label-svg">
						<svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.783 1.826L9 0L17.217 1.826C17.4391 1.87536 17.6377 1.99897 17.78 2.1764C17.9224 2.35384 18 2.57452 18 2.802V12.789C17.9999 13.7767 17.756 14.7492 17.2899 15.62C16.8238 16.4908 16.1499 17.2331 15.328 17.781L9 22L2.672 17.781C1.85027 17.2332 1.17646 16.4911 0.710348 15.6205C0.244236 14.7498 0.000236356 13.7776 0 12.79V2.802C3.90378e-05 2.57452 0.0776379 2.35384 0.21999 2.1764C0.362341 1.99897 0.560937 1.87536 0.783 1.826ZM2 3.604V12.789C2.00001 13.4475 2.16257 14.0957 2.47326 14.6763C2.78395 15.2568 3.23315 15.7517 3.781 16.117L9 19.597L14.219 16.117C14.7667 15.7518 15.2158 15.2571 15.5265 14.6767C15.8372 14.0964 15.9998 13.4483 16 12.79V3.604L9 2.05L2 3.604Z" fill="#ED3228" />
						</svg>
					</div>
					<div class="product-item-detail-label-info">
						<span>Гарантия</span>
						<span><?= $arResult["PROPERTIES"]["GARANTIYA"]["VALUE"]; ?></span>
					</div>
				</div>
			<? endif; ?>
			<div class="product-item-detail-label-item">
				<div class="product-item-detail-label-svg">
					<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 6V10L0 5L6 0V4H11C13.1217 4 15.1566 4.84285 16.6569 6.34315C18.1571 7.84344 19 9.87827 19 12C19 14.1217 18.1571 16.1566 16.6569 17.6569C15.1566 19.1571 13.1217 20 11 20H2V18H11C12.5913 18 14.1174 17.3679 15.2426 16.2426C16.3679 15.1174 17 13.5913 17 12C17 10.4087 16.3679 8.88258 15.2426 7.75736C14.1174 6.63214 12.5913 6 11 6H6Z" fill="#ED3228" />
					</svg>
				</div>
				<div class="product-item-detail-label-info">
					<span>Обмен и возврат</span>
					<span>7 дней</span>
				</div>
			</div>
			<? if ($arResult["PROPERTIES"]["CML2_MANUFACTURER"]["VALUE"]) : ?>
				<div class="product-item-detail-label-item">
					<div class="product-item-detail-label-svg">
						<svg width="23" height="12" viewBox="0 0 23 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10 0V2H6V12H4V2H0V0H10ZM12 0H14.5L17.5 5.196L20.5 0H23V12H21V3.133L17.5 9.196L14 3.135V12H12V0Z" fill="#ED3228" />
						</svg>
					</div>
					<div class="product-item-detail-label-info">
						<span><?= $arResult["PROPERTIES"]["CML2_MANUFACTURER"]["VALUE"] ?></span>
					</div>
				</div>
			<? endif; ?>
		</div>
	</div>
</div>


<div class="row">
	<div class="col-xs-12">
		<?
		if ($haveOffers) {
			if ($arResult['OFFER_GROUP']) {
				foreach ($arResult['OFFER_GROUP_VALUES'] as $offerId) {
		?>
					<span id="<?= $itemIds['OFFER_GROUP'] . $offerId ?>" style="display: none;">
						<?
						$APPLICATION->IncludeComponent(
							'bitrix:catalog.set.constructor',
							'.default',
							array(
								'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
								'IBLOCK_ID' => $arResult['OFFERS_IBLOCK'],
								'ELEMENT_ID' => $offerId,
								'PRICE_CODE' => $arParams['PRICE_CODE'],
								'BASKET_URL' => $arParams['BASKET_URL'],
								'OFFERS_CART_PROPERTIES' => $arParams['OFFERS_CART_PROPERTIES'],
								'CACHE_TYPE' => $arParams['CACHE_TYPE'],
								'CACHE_TIME' => $arParams['CACHE_TIME'],
								'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
								'TEMPLATE_THEME' => $arParams['~TEMPLATE_THEME'],
								'CONVERT_CURRENCY' => $arParams['CONVERT_CURRENCY'],
								'CURRENCY_ID' => $arParams['CURRENCY_ID']
							),
							$component,
							array('HIDE_ICONS' => 'Y')
						);
						?>
					</span>
		<?
				}
			}
		} else {
			if ($arResult['MODULES']['catalog'] && $arResult['OFFER_GROUP']) {
				$APPLICATION->IncludeComponent(
					'bitrix:catalog.set.constructor',
					'.default',
					array(
						'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
						'IBLOCK_ID' => $arParams['IBLOCK_ID'],
						'ELEMENT_ID' => $arResult['ID'],
						'PRICE_CODE' => $arParams['PRICE_CODE'],
						'BASKET_URL' => $arParams['BASKET_URL'],
						'CACHE_TYPE' => $arParams['CACHE_TYPE'],
						'CACHE_TIME' => $arParams['CACHE_TIME'],
						'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
						'TEMPLATE_THEME' => $arParams['~TEMPLATE_THEME'],
						'CONVERT_CURRENCY' => $arParams['CONVERT_CURRENCY'],
						'CURRENCY_ID' => $arParams['CURRENCY_ID']
					),
					$component,
					array('HIDE_ICONS' => 'Y')
				);
			}
		}
		?>
	</div>
</div>

</div>
</div>
</div>
</div>


<div id="<?= $itemIds['TABS_ID'] ?>">
	<div class="product-item-detail-tabs-container">
		<ul class="product-item-detail-tabs-list container" id="tab-review">
			<?
			if ($showDescription) {
			?>
				<li class="product-item-detail-tab active" data-entity="tab" data-value="description" itemprop="description">
					<a href="javascript:void(0);" class="product-item-detail-tab-link">
						<span><?= $arParams['MESS_DESCRIPTION_TAB'] ?></span>
					</a>
				</li>
			<?
			}

			if (!empty($arResult['DISPLAY_PROPERTIES']) || $arResult['SHOW_OFFERS_PROPS']) {
			?>
				<li class="product-item-detail-tab" data-entity="tab" data-value="properties">
					<a href="javascript:void(0);" class="product-item-detail-tab-link">
						<span><?= $arParams['MESS_PROPERTIES_TAB'] ?></span>
					</a>
				</li>
			<?
			}

			if ($arParams['USE_COMMENTS'] === 'Y') {
			?>
				<li class="product-item-detail-tab" data-entity="tab" data-value="comments">
					<a href="javascript:void(0);" class="product-item-detail-tab-link">
						<span><?/*=$arParams['MESS_COMMENTS_TAB']*/ ?>Отзывы</span>
					</a>
				</li>
			<?
			}
			?>

			<?php /**/ // Подредактировали script.js для того, чтобы работал наш tab 
			?>
			<li class="product-item-detail-tab" data-entity="tab" data-value="stores">
				<a href="javascript:void(0);" class="product-item-detail-tab-link">
					<span>Наличие в магазинах</span>
				</a>
			</li>
		</ul>
	</div>
</div>

<div class="container product-detail">
	<div class="row">
		<div class="col-sm-12">
			<div class="row" id="<?= $itemIds['TAB_CONTAINERS_ID'] ?>">
				<div class="col-xs-12">
					<?
					if ($showDescription) {
					?>

						<div class="product-item-detail-tab-content active" data-entity="tab-container" data-value="description" itemprop="description">
							<div class="tab-content-title">О товаре</div>
							<?
							if (
								$arResult['PREVIEW_TEXT'] != ''
								&& ($arParams['DISPLAY_PREVIEW_TEXT_MODE'] === 'S'
									|| ($arParams['DISPLAY_PREVIEW_TEXT_MODE'] === 'E' && $arResult['~DETAIL_TEXT'] == '')
								)
							) {
								echo $arResult['PREVIEW_TEXT_TYPE'] === 'html' ? html_entity_decode($arResult['PREVIEW_TEXT']) : '<p>' . html_entity_decode($arResult['PREVIEW_TEXT']) . '</p>';
							}

							if ($arResult['DETAIL_TEXT'] != '') {
								echo $arResult['DETAIL_TEXT_TYPE'] === 'html' ? html_entity_decode($arResult['DETAIL_TEXT']) : '<p>' . html_entity_decode($arResult['DETAIL_TEXT']) . '</p>';
							}
							?>
						</div>

					<?
					}

					if (!empty($arResult['DISPLAY_PROPERTIES']) || $arResult['SHOW_OFFERS_PROPS']) {
					?>
						<div class="product-item-detail-tab-content block-tabs" data-entity="tab-container" data-value="properties">

							<?
							if (!empty($arResult['DISPLAY_PROPERTIES'])) {
							?>
								<div class="catalog-properties">
									<div class="tab-content-title">Характеристики товара</div>
									<? foreach ($arResult['DISPLAY_PROPERTIES'] as $property) {
										if ($property['ACTIVE'] == 'Y') :
											if ($property["CODE"] !== "SEARCH_XML_ID") : ?>
												<div class="prop-item">
													<div class="prop-title">
														<div class="inner-wrap"><?= $property['NAME'] ?></div>
													</div>
													<div class="prop-value <?= $property['CODE'] ?>">
														<?= (is_array($property['DISPLAY_VALUE'])
															? implode(' / ', $property['DISPLAY_VALUE'])
															: $property['DISPLAY_VALUE']
														) ?>
													</div>
												</div>
									<? endif;
										endif;
									}
									unset($property); ?>
								</div>
							<? }
							if ($arResult['SHOW_OFFERS_PROPS']) {
							?>
								<dl class="product-item-detail-properties" id="<?= $itemIds['DISPLAY_PROP_DIV'] ?>"></dl>
							<?
							}
							?>

						</div>
					<?
					}

					if ($arParams['USE_COMMENTS'] === 'Y') {
					?>
						<div id="mobile-tab-review" class="product-item-detail-tab-content" data-entity="tab-container" data-value="comments" style="display: none;">
							<?

							if ($USER->GetID() > 0) {
								$rsUser = CUser::GetByID($USER->GetID());
								$arUser = $rsUser->Fetch();
								$userName = $arUser['NAME'];
								$userEmail = $arUser['EMAIL'];
							}

							$GLOBALS['arrFilterReviews']['PROPERTY_PRODUCT_ID'] = $arResult["ID"];

							$APPLICATION->IncludeComponent(
								"bitrix:news.list",
								"reviews_list",
								array(
									"ACTIVE_DATE_FORMAT" => "d.m.Y",
									"ADD_SECTIONS_CHAIN" => "N",
									"AJAX_MODE" => "N",
									"AJAX_OPTION_ADDITIONAL" => "",
									"AJAX_OPTION_HISTORY" => "N",
									"AJAX_OPTION_JUMP" => "N",
									"AJAX_OPTION_STYLE" => "Y",
									"CACHE_FILTER" => "N",
									"CACHE_GROUPS" => "N",
									"CACHE_TIME" => "36000000",
									"CACHE_TYPE" => "A",
									"CHECK_DATES" => "Y",
									"COMPONENT_TEMPLATE" => "reviews_list",
									"DETAIL_URL" => "",
									"DISPLAY_BOTTOM_PAGER" => "Y",
									"DISPLAY_DATE" => "N",
									"DISPLAY_NAME" => "Y",
									"DISPLAY_PICTURE" => "Y",
									"DISPLAY_PREVIEW_TEXT" => "N",
									"DISPLAY_TOP_PAGER" => "N",
									"FIELD_CODE" => array(
										0 => "DATE_CREATE",
										1 => "",
									),
									"FILE_404" => "",
									"FILTER_NAME" => "arrFilterReviews",
									"HIDE_LINK_WHEN_NO_DETAIL" => "N",
									"IBLOCK_ID" => "22",
									"IBLOCK_TYPE" => "content",
									"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
									"INCLUDE_SUBSECTIONS" => "N",
									"MESSAGE_404" => "",
									"NEWS_COUNT" => "5",
									"PAGER_BASE_LINK_ENABLE" => "N",
									"PAGER_DESC_NUMBERING" => "N",
									"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
									"PAGER_SHOW_ALL" => "N",
									"PAGER_SHOW_ALWAYS" => "N",
									"PAGER_TEMPLATE" => "ajax",
									"PAGER_TITLE" => "Отзывы",
									"PARENT_SECTION" => "",
									"PARENT_SECTION_CODE" => "",
									"PREVIEW_TRUNCATE_LEN" => "",
									"PROPERTY_CODE" => array(
										0 => "EMAIL",
										1 => "STAR",
										2 => "REVIEWS",
										3 => "",
									),
									"SET_BROWSER_TITLE" => "N",
									"SET_LAST_MODIFIED" => "N",
									"SET_META_DESCRIPTION" => "N",
									"SET_META_KEYWORDS" => "N",
									"SET_STATUS_404" => "Y",
									"SET_TITLE" => "N",
									"SHOW_404" => "Y",
									"SORT_BY1" => "ID",
									"SORT_BY2" => "ID",
									"SORT_ORDER1" => "DESC",
									"SORT_ORDER2" => "DESC",
									"STRICT_SECTION_CHECK" => "N",
									"COMPOSITE_FRAME_MODE" => "A",
									"COMPOSITE_FRAME_TYPE" => "AUTO",
									"PRODUCT_ID" => $arResult["ID"],
									"USER_NAME" => $userName,
									"USER_EMAIL" => $userEmail
								),
								$component
							);
							?>
						</div>
					<?
					}
					?>

					<div class="product-item-detail-tab-content active" data-entity="tab-container" data-value="stores" itemprop="stores" style="display: none;">
						<?php
						$APPLICATION->IncludeComponent(
							'rasa:catalog.store.amount',
							'ordvor_catalog_store_amount',
							array(
								'ELEMENT_ID' => $arResult['ID'],
								'STORE_PATH' => $arParams['STORE_PATH'],
								'CACHE_TYPE' => 'Y',
								'CACHE_TIME' => '864000‬',
								'MAIN_TITLE' => $arParams['MAIN_TITLE'],
								'USE_MIN_AMOUNT' =>  $arParams['USE_MIN_AMOUNT'],
								'MIN_AMOUNT' => $arParams['MIN_AMOUNT'],
								'STORES' => $arParams['STORES'],
								'SHOW_EMPTY_STORE' => "N",
								'SHOW_GENERAL_STORE_INFORMATION' => $arParams['SHOW_GENERAL_STORE_INFORMATION'],
								"USER_FIELDS" => array("UF_ADDRESS_LINK", "UF_SHOW"),
								'FIELDS' => array(
									"0" => "TITLE",
									"1" => "ADDRESS",
									"2" => "DESCRIPTION",
									"3" => "PHONE",
									"4" => "SCHEDULE",
								)
							),
							$component,
							array('HIDE_ICONS' => 'Y')
						);
						?>
					</div>
				</div>
				<div class="container">
					<div class="product-notice-info">
						<?php
						$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							array(
								"AREA_FILE_RECURSIVE" => "Y",
								"AREA_FILE_SHOW" => "file",
								"AREA_FILE_SUFFIX" => "inc",
								"EDIT_TEMPLATE" => "",
								"PATH" => SITE_DIR . "include/product_notice_info.php"
							)
						); ?>
					</div>
				</div>
			</div>
		</div>
		<?php /* ?>
			<div class="col-sm-4 col-md-3">
				<div>
					<?
					if ($arParams['BRAND_USE'] === 'Y')
					{
						$APPLICATION->IncludeComponent(
							'bitrix:catalog.brandblock',
							'.default',
							array(
								'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
								'IBLOCK_ID' => $arParams['IBLOCK_ID'],
								'ELEMENT_ID' => $arResult['ID'],
								'ELEMENT_CODE' => '',
								'PROP_CODE' => $arParams['BRAND_PROP_CODE'],
								'CACHE_TYPE' => $arParams['CACHE_TYPE'],
								'CACHE_TIME' => $arParams['CACHE_TIME'],
								'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
								'WIDTH' => '',
								'HEIGHT' => ''
							),
							$component,
							array('HIDE_ICONS' => 'Y')
						);
					}
					?>
				</div>
			</div>
			<?php */ ?>
	</div>


	<div class="row">
		<div class="col-xs-12">
			<?
			if ($arResult['CATALOG'] && $actualItem['CAN_BUY'] && \Bitrix\Main\ModuleManager::isModuleInstalled('sale')) {
				$APPLICATION->IncludeComponent(
					'bitrix:sale.prediction.product.detail',
					'.default',
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

			if ($arResult['CATALOG'] && $arParams['USE_GIFTS_DETAIL'] == 'Y' && \Bitrix\Main\ModuleManager::isModuleInstalled('sale')) {
			?>
				<div data-entity="parent-container">
					<?
					if (!isset($arParams['GIFTS_DETAIL_HIDE_BLOCK_TITLE']) || $arParams['GIFTS_DETAIL_HIDE_BLOCK_TITLE'] !== 'Y') {
					?>
						<div class="catalog-block-header" data-entity="header" data-showed="false" style="display: none; opacity: 0;">
							<?= ($arParams['GIFTS_DETAIL_BLOCK_TITLE'] ?: Loc::getMessage('CT_BCE_CATALOG_GIFT_BLOCK_TITLE_DEFAULT')) ?>
						</div>
					<?
					}

					CBitrixComponent::includeComponentClass('bitrix:sale.products.gift');
					$APPLICATION->IncludeComponent(
						'bitrix:sale.products.gift',
						'.default',
						array(
							'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
							'PRODUCT_ID_VARIABLE' => $arParams['PRODUCT_ID_VARIABLE'],
							'ACTION_VARIABLE' => $arParams['ACTION_VARIABLE'],

							'PRODUCT_ROW_VARIANTS' => "",
							'PAGE_ELEMENT_COUNT' => 0,
							'DEFERRED_PRODUCT_ROW_VARIANTS' => \Bitrix\Main\Web\Json::encode(
								SaleProductsGiftComponent::predictRowVariants(
									$arParams['GIFTS_DETAIL_PAGE_ELEMENT_COUNT'],
									$arParams['GIFTS_DETAIL_PAGE_ELEMENT_COUNT']
								)
							),
							'DEFERRED_PAGE_ELEMENT_COUNT' => $arParams['GIFTS_DETAIL_PAGE_ELEMENT_COUNT'],

							'SHOW_DISCOUNT_PERCENT' => $arParams['GIFTS_SHOW_DISCOUNT_PERCENT'],
							'DISCOUNT_PERCENT_POSITION' => $arParams['DISCOUNT_PERCENT_POSITION'],
							'SHOW_OLD_PRICE' => $arParams['GIFTS_SHOW_OLD_PRICE'],
							'PRODUCT_DISPLAY_MODE' => 'Y',
							'PRODUCT_BLOCKS_ORDER' => $arParams['GIFTS_PRODUCT_BLOCKS_ORDER'],
							'SHOW_SLIDER' => $arParams['GIFTS_SHOW_SLIDER'],
							'SLIDER_INTERVAL' => isset($arParams['GIFTS_SLIDER_INTERVAL']) ? $arParams['GIFTS_SLIDER_INTERVAL'] : '',
							'SLIDER_PROGRESS' => isset($arParams['GIFTS_SLIDER_PROGRESS']) ? $arParams['GIFTS_SLIDER_PROGRESS'] : '',

							'TEXT_LABEL_GIFT' => $arParams['GIFTS_DETAIL_TEXT_LABEL_GIFT'],

							'LABEL_PROP_' . $arParams['IBLOCK_ID'] => array(),
							'LABEL_PROP_MOBILE_' . $arParams['IBLOCK_ID'] => array(),
							'LABEL_PROP_POSITION' => $arParams['LABEL_PROP_POSITION'],

							'ADD_TO_BASKET_ACTION' => (isset($arParams['ADD_TO_BASKET_ACTION']) ? $arParams['ADD_TO_BASKET_ACTION'] : ''),
							'MESS_BTN_BUY' => $arParams['~GIFTS_MESS_BTN_BUY'],
							'MESS_BTN_ADD_TO_BASKET' => $arParams['~GIFTS_MESS_BTN_BUY'],
							'MESS_BTN_DETAIL' => $arParams['~MESS_BTN_DETAIL'],
							'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],

							'SHOW_PRODUCTS_' . $arParams['IBLOCK_ID'] => 'Y',
							'PROPERTY_CODE_' . $arParams['IBLOCK_ID'] => $arParams['LIST_PROPERTY_CODE'],
							'PROPERTY_CODE_MOBILE' . $arParams['IBLOCK_ID'] => $arParams['LIST_PROPERTY_CODE_MOBILE'],
							'PROPERTY_CODE_' . $arResult['OFFERS_IBLOCK'] => $arParams['OFFER_TREE_PROPS'],
							'OFFER_TREE_PROPS_' . $arResult['OFFERS_IBLOCK'] => $arParams['OFFER_TREE_PROPS'],
							'CART_PROPERTIES_' . $arResult['OFFERS_IBLOCK'] => $arParams['OFFERS_CART_PROPERTIES'],
							'ADDITIONAL_PICT_PROP_' . $arParams['IBLOCK_ID'] => (isset($arParams['ADD_PICT_PROP']) ? $arParams['ADD_PICT_PROP'] : ''),
							'ADDITIONAL_PICT_PROP_' . $arResult['OFFERS_IBLOCK'] => (isset($arParams['OFFER_ADD_PICT_PROP']) ? $arParams['OFFER_ADD_PICT_PROP'] : ''),

							'HIDE_NOT_AVAILABLE' => 'Y',
							'HIDE_NOT_AVAILABLE_OFFERS' => 'Y',
							'PRODUCT_SUBSCRIPTION' => $arParams['PRODUCT_SUBSCRIPTION'],
							'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
							'PRICE_CODE' => $arParams['PRICE_CODE'],
							'SHOW_PRICE_COUNT' => $arParams['SHOW_PRICE_COUNT'],
							'PRICE_VAT_INCLUDE' => $arParams['PRICE_VAT_INCLUDE'],
							'CONVERT_CURRENCY' => $arParams['CONVERT_CURRENCY'],
							'BASKET_URL' => $arParams['BASKET_URL'],
							'ADD_PROPERTIES_TO_BASKET' => $arParams['ADD_PROPERTIES_TO_BASKET'],
							'PRODUCT_PROPS_VARIABLE' => $arParams['PRODUCT_PROPS_VARIABLE'],
							'PARTIAL_PRODUCT_PROPERTIES' => $arParams['PARTIAL_PRODUCT_PROPERTIES'],
							'USE_PRODUCT_QUANTITY' => 'N',
							'PRODUCT_QUANTITY_VARIABLE' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
							'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
							'POTENTIAL_PRODUCT_TO_BUY' => array(
								'ID' => isset($arResult['ID']) ? $arResult['ID'] : null,
								'MODULE' => isset($arResult['MODULE']) ? $arResult['MODULE'] : 'catalog',
								'PRODUCT_PROVIDER_CLASS' => isset($arResult['~PRODUCT_PROVIDER_CLASS']) ? $arResult['~PRODUCT_PROVIDER_CLASS'] : '\Bitrix\Catalog\Product\CatalogProvider',
								'QUANTITY' => isset($arResult['QUANTITY']) ? $arResult['QUANTITY'] : null,
								'IBLOCK_ID' => isset($arResult['IBLOCK_ID']) ? $arResult['IBLOCK_ID'] : null,

								'PRIMARY_OFFER_ID' => isset($arResult['OFFERS'][$arResult['OFFERS_SELECTED']]['ID'])
									? $arResult['OFFERS'][$arResult['OFFERS_SELECTED']]['ID']
									: null,
								'SECTION' => array(
									'ID' => isset($arResult['SECTION']['ID']) ? $arResult['SECTION']['ID'] : null,
									'IBLOCK_ID' => isset($arResult['SECTION']['IBLOCK_ID']) ? $arResult['SECTION']['IBLOCK_ID'] : null,
									'LEFT_MARGIN' => isset($arResult['SECTION']['LEFT_MARGIN']) ? $arResult['SECTION']['LEFT_MARGIN'] : null,
									'RIGHT_MARGIN' => isset($arResult['SECTION']['RIGHT_MARGIN']) ? $arResult['SECTION']['RIGHT_MARGIN'] : null,
								),
							),

							'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
							'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
							'BRAND_PROPERTY' => $arParams['BRAND_PROPERTY']
						),
						$component,
						array('HIDE_ICONS' => 'Y')
					);
					?>
				</div>
			<?
			}

			if ($arResult['CATALOG'] && $arParams['USE_GIFTS_MAIN_PR_SECTION_LIST'] == 'Y' && \Bitrix\Main\ModuleManager::isModuleInstalled('sale')) {
			?>
				<div data-entity="parent-container">
					<?
					if (!isset($arParams['GIFTS_MAIN_PRODUCT_DETAIL_HIDE_BLOCK_TITLE']) || $arParams['GIFTS_MAIN_PRODUCT_DETAIL_HIDE_BLOCK_TITLE'] !== 'Y') {
					?>
						<div class="catalog-block-header" data-entity="header" data-showed="false" style="display: none; opacity: 0;">
							<?= ($arParams['GIFTS_MAIN_PRODUCT_DETAIL_BLOCK_TITLE'] ?: Loc::getMessage('CT_BCE_CATALOG_GIFTS_MAIN_BLOCK_TITLE_DEFAULT')) ?>
						</div>
					<?
					}

					$APPLICATION->IncludeComponent(
						'bitrix:sale.gift.main.products',
						'.default',
						array(
							'CUSTOM_SITE_ID' => isset($arParams['CUSTOM_SITE_ID']) ? $arParams['CUSTOM_SITE_ID'] : null,
							'PAGE_ELEMENT_COUNT' => $arParams['GIFTS_MAIN_PRODUCT_DETAIL_PAGE_ELEMENT_COUNT'],
							'LINE_ELEMENT_COUNT' => $arParams['GIFTS_MAIN_PRODUCT_DETAIL_PAGE_ELEMENT_COUNT'],
							'HIDE_BLOCK_TITLE' => 'Y',
							'BLOCK_TITLE' => $arParams['GIFTS_MAIN_PRODUCT_DETAIL_BLOCK_TITLE'],

							'OFFERS_FIELD_CODE' => $arParams['OFFERS_FIELD_CODE'],
							'OFFERS_PROPERTY_CODE' => $arParams['OFFERS_PROPERTY_CODE'],

							'AJAX_MODE' => $arParams['AJAX_MODE'],
							'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
							'IBLOCK_ID' => $arParams['IBLOCK_ID'],

							'ELEMENT_SORT_FIELD' => 'ID',
							'ELEMENT_SORT_ORDER' => 'DESC',
							//'ELEMENT_SORT_FIELD2' => $arParams['ELEMENT_SORT_FIELD2'],
							//'ELEMENT_SORT_ORDER2' => $arParams['ELEMENT_SORT_ORDER2'],
							'FILTER_NAME' => 'searchFilter',
							'SECTION_URL' => $arParams['SECTION_URL'],
							'DETAIL_URL' => $arParams['DETAIL_URL'],
							'BASKET_URL' => $arParams['BASKET_URL'],
							'ACTION_VARIABLE' => $arParams['ACTION_VARIABLE'],
							'PRODUCT_ID_VARIABLE' => $arParams['PRODUCT_ID_VARIABLE'],
							'SECTION_ID_VARIABLE' => $arParams['SECTION_ID_VARIABLE'],

							'CACHE_TYPE' => $arParams['CACHE_TYPE'],
							'CACHE_TIME' => $arParams['CACHE_TIME'],

							'CACHE_GROUPS' => $arParams['CACHE_GROUPS'],
							'SET_TITLE' => $arParams['SET_TITLE'],
							'PROPERTY_CODE' => $arParams['PROPERTY_CODE'],
							'PRICE_CODE' => $arParams['PRICE_CODE'],
							'USE_PRICE_COUNT' => $arParams['USE_PRICE_COUNT'],
							'SHOW_PRICE_COUNT' => $arParams['SHOW_PRICE_COUNT'],

							'PRICE_VAT_INCLUDE' => $arParams['PRICE_VAT_INCLUDE'],
							'CONVERT_CURRENCY' => $arParams['CONVERT_CURRENCY'],
							'CURRENCY_ID' => $arParams['CURRENCY_ID'],
							'HIDE_NOT_AVAILABLE' => 'Y',
							'HIDE_NOT_AVAILABLE_OFFERS' => 'Y',
							'TEMPLATE_THEME' => (isset($arParams['TEMPLATE_THEME']) ? $arParams['TEMPLATE_THEME'] : ''),
							'PRODUCT_BLOCKS_ORDER' => $arParams['GIFTS_PRODUCT_BLOCKS_ORDER'],

							'SHOW_SLIDER' => $arParams['GIFTS_SHOW_SLIDER'],
							'SLIDER_INTERVAL' => isset($arParams['GIFTS_SLIDER_INTERVAL']) ? $arParams['GIFTS_SLIDER_INTERVAL'] : '',
							'SLIDER_PROGRESS' => isset($arParams['GIFTS_SLIDER_PROGRESS']) ? $arParams['GIFTS_SLIDER_PROGRESS'] : '',

							'ADD_PICT_PROP' => (isset($arParams['ADD_PICT_PROP']) ? $arParams['ADD_PICT_PROP'] : ''),
							'LABEL_PROP' => (isset($arParams['LABEL_PROP']) ? $arParams['LABEL_PROP'] : ''),
							'LABEL_PROP_MOBILE' => (isset($arParams['LABEL_PROP_MOBILE']) ? $arParams['LABEL_PROP_MOBILE'] : ''),
							'LABEL_PROP_POSITION' => (isset($arParams['LABEL_PROP_POSITION']) ? $arParams['LABEL_PROP_POSITION'] : ''),
							'OFFER_ADD_PICT_PROP' => (isset($arParams['OFFER_ADD_PICT_PROP']) ? $arParams['OFFER_ADD_PICT_PROP'] : ''),
							'OFFER_TREE_PROPS' => (isset($arParams['OFFER_TREE_PROPS']) ? $arParams['OFFER_TREE_PROPS'] : ''),
							'SHOW_DISCOUNT_PERCENT' => (isset($arParams['SHOW_DISCOUNT_PERCENT']) ? $arParams['SHOW_DISCOUNT_PERCENT'] : ''),
							'DISCOUNT_PERCENT_POSITION' => (isset($arParams['DISCOUNT_PERCENT_POSITION']) ? $arParams['DISCOUNT_PERCENT_POSITION'] : ''),
							'SHOW_OLD_PRICE' => (isset($arParams['SHOW_OLD_PRICE']) ? $arParams['SHOW_OLD_PRICE'] : ''),
							'MESS_BTN_BUY' => (isset($arParams['~MESS_BTN_BUY']) ? $arParams['~MESS_BTN_BUY'] : ''),
							'MESS_BTN_ADD_TO_BASKET' => (isset($arParams['~MESS_BTN_ADD_TO_BASKET']) ? $arParams['~MESS_BTN_ADD_TO_BASKET'] : ''),
							'MESS_BTN_DETAIL' => (isset($arParams['~MESS_BTN_DETAIL']) ? $arParams['~MESS_BTN_DETAIL'] : ''),
							'MESS_NOT_AVAILABLE' => (isset($arParams['~MESS_NOT_AVAILABLE']) ? $arParams['~MESS_NOT_AVAILABLE'] : ''),
							'ADD_TO_BASKET_ACTION' => (isset($arParams['ADD_TO_BASKET_ACTION']) ? $arParams['ADD_TO_BASKET_ACTION'] : ''),
							'SHOW_CLOSE_POPUP' => (isset($arParams['SHOW_CLOSE_POPUP']) ? $arParams['SHOW_CLOSE_POPUP'] : ''),
							'DISPLAY_COMPARE' => (isset($arParams['DISPLAY_COMPARE']) ? $arParams['DISPLAY_COMPARE'] : ''),
							'COMPARE_PATH' => (isset($arParams['COMPARE_PATH']) ? $arParams['COMPARE_PATH'] : ''),
						)
							+ array(
								'OFFER_ID' => empty($arResult['OFFERS'][$arResult['OFFERS_SELECTED']]['ID'])
									? $arResult['ID']
									: $arResult['OFFERS'][$arResult['OFFERS_SELECTED']]['ID'],
								'SECTION_ID' => $arResult['SECTION']['ID'],
								'ELEMENT_ID' => $arResult['ID'],

								'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
								'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
								'BRAND_PROPERTY' => $arParams['BRAND_PROPERTY']
							),
						$component,
						array('HIDE_ICONS' => 'Y')
					);
					?>
				</div>
			<?
			}
			?>
		</div>
	</div>
</div>
<!--Small Card-->

<meta itemprop="name" content="<?= $name ?>" />
<meta itemprop="category" content="<?= $arResult['CATEGORY_PATH'] ?>" />
<?
if ($haveOffers) {
	foreach ($arResult['JS_OFFERS'] as $offer) {
		$currentOffersList = array();

		if (!empty($offer['TREE']) && is_array($offer['TREE'])) {
			foreach ($offer['TREE'] as $propName => $skuId) {
				$propId = (int)substr($propName, 5);

				foreach ($skuProps as $prop) {
					if ($prop['ID'] == $propId) {
						foreach ($prop['VALUES'] as $propId => $propValue) {
							if ($propId == $skuId) {
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
			<meta itemprop="sku" content="<?= htmlspecialcharsbx(implode('/', $currentOffersList)) ?>" />
			<meta itemprop="price" content="<?= $offerPrice['RATIO_PRICE'] ?>" />
			<meta itemprop="priceCurrency" content="<?= $offerPrice['CURRENCY'] ?>" />
			<link itemprop="availability" href="http://schema.org/<?= ($offer['CAN_BUY'] ? 'InStock' : 'OutOfStock') ?>" />
		</span>
	<?
	}

	unset($offerPrice, $currentOffersList);
} else {
	?>
	<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
		<meta itemprop="price" content="<?= $price['RATIO_PRICE'] ?>" />
		<meta itemprop="priceCurrency" content="<?= $price['CURRENCY'] ?>" />
		<link itemprop="availability" href="http://schema.org/<?= ($actualItem['CAN_BUY'] ? 'InStock' : 'OutOfStock') ?>" />
	</span>
<?
}
?>
</div>
<?
if ($haveOffers) {
	$offerIds = array();
	$offerCodes = array();

	$useRatio = $arParams['USE_RATIO_IN_RANGES'] === 'Y';

	//echo "<pre>"; var_dump($arResult['JS_OFFERS']); echo "</pre>";

	foreach ($arResult['JS_OFFERS'] as $ind => &$jsOffer) {
		$offerIds[] = (int)$jsOffer['ID'];
		$offerCodes[] = $jsOffer['CODE'];

		$fullOffer = $arResult['OFFERS'][$ind];
		$measureName = $fullOffer['ITEM_MEASURE']['TITLE'];

		$strAllProps = '';
		$strMainProps = '';
		$strPriceRangesRatio = '';
		$strPriceRanges = '';

		if ($arResult['SHOW_OFFERS_PROPS']) {
			if (!empty($jsOffer['DISPLAY_PROPERTIES'])) {
				foreach ($jsOffer['DISPLAY_PROPERTIES'] as $property) {
					$current = '<dt>' . $property['NAME'] . '</dt><dd>' . (is_array($property['VALUE'])
						? implode(' / ', $property['VALUE'])
						: $property['VALUE']
					) . '</dd>';
					$strAllProps .= $current;

					if (isset($arParams['MAIN_BLOCK_OFFERS_PROPERTY_CODE'][$property['CODE']])) {
						$strMainProps .= $current;
					}
				}

				unset($current);
			}
		}

		if ($arParams['USE_PRICE_COUNT'] && count($jsOffer['ITEM_QUANTITY_RANGES']) > 1) {
			$strPriceRangesRatio = '(' . Loc::getMessage(
				'CT_BCE_CATALOG_RATIO_PRICE',
				array('#RATIO#' => ($useRatio
					? $fullOffer['ITEM_MEASURE_RATIOS'][$fullOffer['ITEM_MEASURE_RATIO_SELECTED']]['RATIO']
					: '1'
				) . ' ' . $measureName)
			) . ')';

			foreach ($jsOffer['ITEM_QUANTITY_RANGES'] as $range) {
				if ($range['HASH'] !== 'ZERO-INF') {
					$itemPrice = false;

					foreach ($jsOffer['ITEM_PRICES'] as $itemPrice) {
						if ($itemPrice['QUANTITY_HASH'] === $range['HASH']) {
							break;
						}
					}

					if ($itemPrice) {
						$strPriceRanges .= '<dt>' . Loc::getMessage(
							'CT_BCE_CATALOG_RANGE_FROM',
							array('#FROM#' => $range['SORT_FROM'] . ' ' . $measureName)
						) . ' ';

						if (is_infinite($range['SORT_TO'])) {
							$strPriceRanges .= Loc::getMessage('CT_BCE_CATALOG_RANGE_MORE');
						} else {
							$strPriceRanges .= Loc::getMessage(
								'CT_BCE_CATALOG_RANGE_TO',
								array('#TO#' => $range['SORT_TO'] . ' ' . $measureName)
							);
						}

						$strPriceRanges .= '</dt><dd>' . ($useRatio ? $itemPrice['PRINT_RATIO_PRICE'] : $itemPrice['PRINT_PRICE']) . '</dd>';
					}
				}
			}

			unset($range, $itemPrice);
		}

		$jsOffer['DISPLAY_PROPERTIES'] = $strAllProps;
		$jsOffer['DISPLAY_PROPERTIES_MAIN_BLOCK'] = $strMainProps;
		$jsOffer['PRICE_RANGES_RATIO_HTML'] = $strPriceRangesRatio;
		$jsOffer['PRICE_RANGES_HTML'] = $strPriceRanges;
	}

	$templateData['OFFER_IDS'] = $offerIds;
	$templateData['OFFER_CODES'] = $offerCodes;
	unset($jsOffer, $strAllProps, $strMainProps, $strPriceRanges, $strPriceRangesRatio, $useRatio);

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
				: null
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
			'CATEGORY' => $arResult['CATEGORY_PATH']
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
		'TREE_PROPS' => $skuProps
	);
} else {
	$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
	if ($arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !$emptyProductProperties) {
?>
		<div id="<?= $itemIds['BASKET_PROP_DIV'] ?>" style="display: none;">
			<?
			if (!empty($arResult['PRODUCT_PROPERTIES_FILL'])) {
				foreach ($arResult['PRODUCT_PROPERTIES_FILL'] as $propId => $propInfo) {
			?>
					<input type="hidden" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propId ?>]" value="<?= htmlspecialcharsbx($propInfo['ID']) ?>">
				<?
					unset($arResult['PRODUCT_PROPERTIES'][$propId]);
				}
			}

			$emptyProductProperties = empty($arResult['PRODUCT_PROPERTIES']);
			if (!$emptyProductProperties) {
				?>
				<table>
					<?
					foreach ($arResult['PRODUCT_PROPERTIES'] as $propId => $propInfo) {
					?>
						<tr>
							<td><?= $arResult['PROPERTIES'][$propId]['NAME'] ?></td>
							<td>
								<?
								if (
									$arResult['PROPERTIES'][$propId]['PROPERTY_TYPE'] === 'L'
									&& $arResult['PROPERTIES'][$propId]['LIST_TYPE'] === 'C'
								) {
									foreach ($propInfo['VALUES'] as $valueId => $value) {
								?>
										<label>
											<input type="radio" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propId ?>]" value="<?= $valueId ?>" <?= ($valueId == $propInfo['SELECTED'] ? '"checked"' : '') ?>>
											<?= $value ?>
										</label>
										<br>
									<?
									}
								} else {
									?>
									<select name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propId ?>]">
										<?
										foreach ($propInfo['VALUES'] as $valueId => $value) {
										?>
											<option value="<?= $valueId ?>" <?= ($valueId == $propInfo['SELECTED'] ? '"selected"' : '') ?>>
												<?= $value ?>
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
			'SHOW_SLIDER' => $arParams['SHOW_SLIDER'],
			'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
			'ALT' => $alt,
			'TITLE' => $title,
			'MAGNIFIER_ZOOM_PERCENT' => 200,
			'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
			'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
			'BRAND_PROPERTY' => !empty($arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']])
				? $arResult['DISPLAY_PROPERTIES'][$arParams['BRAND_PROPERTY']]['DISPLAY_VALUE']
				: null
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
		)
	);
	unset($emptyProductProperties);
}

if ($arParams['DISPLAY_COMPARE']) {
	$jsParams['COMPARE'] = array(
		'COMPARE_URL_TEMPLATE' => $arResult['~COMPARE_URL_TEMPLATE'],
		'COMPARE_DELETE_URL_TEMPLATE' => $arResult['~COMPARE_DELETE_URL_TEMPLATE'],
		'COMPARE_PATH' => $arParams['COMPARE_PATH']
	);
}
?>
<script>
	BX.message({
		ECONOMY_INFO_MESSAGE: '<?= GetMessageJS('CT_BCE_CATALOG_ECONOMY_INFO2') ?>',
		TITLE_ERROR: '<?= GetMessageJS('CT_BCE_CATALOG_TITLE_ERROR') ?>',
		TITLE_BASKET_PROPS: '<?= GetMessageJS('CT_BCE_CATALOG_TITLE_BASKET_PROPS') ?>',
		BASKET_UNKNOWN_ERROR: '<?= GetMessageJS('CT_BCE_CATALOG_BASKET_UNKNOWN_ERROR') ?>',
		BTN_SEND_PROPS: '<?= GetMessageJS('CT_BCE_CATALOG_BTN_SEND_PROPS') ?>',
		BTN_MESSAGE_BASKET_REDIRECT: '<?= GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_BASKET_REDIRECT') ?>',
		BTN_MESSAGE_CLOSE: '<?= GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE') ?>',
		BTN_MESSAGE_CLOSE_POPUP: '<?= GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_CLOSE_POPUP') ?>',
		TITLE_SUCCESSFUL: '<?= GetMessageJS('CT_BCE_CATALOG_ADD_TO_BASKET_OK') ?>',
		COMPARE_MESSAGE_OK: '<?= GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_OK') ?>',
		COMPARE_UNKNOWN_ERROR: '<?= GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_UNKNOWN_ERROR') ?>',
		COMPARE_TITLE: '<?= GetMessageJS('CT_BCE_CATALOG_MESS_COMPARE_TITLE') ?>',
		BTN_MESSAGE_COMPARE_REDIRECT: '<?= GetMessageJS('CT_BCE_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT') ?>',
		PRODUCT_GIFT_LABEL: '<?= GetMessageJS('CT_BCE_CATALOG_PRODUCT_GIFT_LABEL') ?>',
		PRICE_TOTAL_PREFIX: '<?= GetMessageJS('CT_BCE_CATALOG_MESS_PRICE_TOTAL_PREFIX') ?>',
		RELATIVE_QUANTITY_MANY: '<?= CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY']) ?>',
		RELATIVE_QUANTITY_FEW: '<?= CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW']) ?>',
		SITE_ID: '<?= CUtil::JSEscape($component->getSiteId()) ?>'
	});

	var <?= $obName ?> = new JCCatalogElement(<?= CUtil::PhpToJSObject($jsParams, false, true) ?>);
</script>
<?
unset($actualItem, $itemIds, $jsParams);
?>

<div class="container">
	<div class="row">