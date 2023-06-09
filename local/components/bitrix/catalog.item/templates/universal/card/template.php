<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();


/**
 *
 *
 *
 *
 * Сравнение
 *
 * Скрипт, который делает, чтобы иконка сравнения загоралась прописана в скрипте только в одном из
 * компонентов catalog.item (из тех трех, которые вызываются на главной).
 * В первом, который вызывается.
 *
 * main_new_products_slider_item
 *
 * Так же блочим setPrice() в том же файле, чтобы не подставлял цену куда не нужно
 *
 *
 *
 */

use \Bitrix\Main\Localization\Loc;

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


if ($item['PROPERTIES']['PROTSENT_SKIDKI']['VALUE']) {
	$price['PERCENT'] = floatval($item["PROPERTIES"]["PROTSENT_SKIDKI"]["VALUE"]);
	$discountVal = $price["BASE_PRICE"] - intval($price["BASE_PRICE"] * $price['PERCENT'] / 100);
	$discountPrint = CurrencyFormat($discountVal, "RUB");
	$price["RATIO_PRICE"] = $discountVal;
	$price["PRINT_RATIO_PRICE"] = $discountPrint;
} ?>

<div class="product-item main_catalog_popular_item">

	<div class="product-item-block">
		<? if ($itemHasDetailUrl) : ?>
			<a class="product-item-block product-item-image-wrapper" href="<?= $item['DETAIL_PAGE_URL'] ?>" title="<?= $imgTitle ?>" data-entity="image-wrapper">
			<? else : ?>
				<span class="product-item-image-wrapper" data-entity="image-wrapper">
				<? endif; ?>
				<span class="product-item-ima4ge-slider-slide-container slide" id="<?= $itemIds['PICT_SLIDER'] ?>" <?= ($showSlider ? '' : 'style="display: none;"') ?> data-slider-interval="<?= $arParams['SLIDER_INTERVAL'] ?>" data-slider-wrap="true">
					<? if ($showSlider) {
						foreach ($morePhoto as $key => $photoч) { ?>
							<span class="product-item-image-slide item lazy <?= ($key == 0 ? 'active' : '') ?>" <?/*style="background-image: url('<?=GetImageResized($photo['SRC'], 230, 230, 2);?>');"*/ ?> data-bg="<?= GetImageResized($photo['SRC'], 230, 230, 2); ?>">
							</span>
					<? }
					} ?>
				</span>

				<span class="product-item-image-original lazy" id="<?= $itemIds['PICT'] ?>" style="<?/*background-image: url('<?=GetImageResized($item['PREVIEW_PICTURE']['SRC'], 230, 230, 2)?>');*/ ?> <?= ($showSlider ? 'display: none;' : '') ?>" data-bg="<?= GetImageResized($item['PREVIEW_PICTURE']['SRC'], 230, 230, 2); ?>">
				</span>
				<? if ($item['SECOND_PICT']) {
					$bgImage = !empty($item['PREVIEW_PICTURE_SECOND']) ? $item['PREVIEW_PICTURE_SECOND']['SRC'] : $item['PREVIEW_PICTURE']['SRC']; ?>
					<span class="product-item-image-alternative lazy" id="<?= $itemIds['SECOND_PICT'] ?>" style="<?/*background-image: url('<?=GetImageResized($bgImage, 230, 230, 2)?>');*/ ?><?= ($showSlider ? 'display: none;' : '') ?>" data-bg="<?= GetImageResized($bgImage, 230, 230, 2) ?>">
					</span>
				<? }

				if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y') { ?>
					<div class="product-item-label-ring <?= $discountPositionClass ?>" id="<?= $itemIds['DSC_PERC'] ?>" <?= ($price['PERCENT'] > 0 ? '' : 'style="display: none;"') ?>>
						<span><?= -$price['PERCENT'] ?>%</span>
					</div>
				<? }

				if ($item['LABEL']) { ?>
					<div class="product-item-label-text <?= $labelPositionClass ?>" id="<?= $itemIds['STICKER_ID'] ?>">
						<? if (!empty($item['LABEL_ARRAY_VALUE'])) {
							foreach ($item['LABEL_ARRAY_VALUE'] as $code => $value) { ?>
								<div<?= (!isset($item['LABEL_PROP_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
									<span title="<?= $value ?>"><?= $value ?></span>
					</div>
			<? }
						} ?>

		<? } ?>
		<div class="product-item-image-slider-control-container" id="<?= $itemIds['PICT_SLIDER'] ?>_indicator" <?= ($showSlider ? '' : 'style="display: none;"') ?>>
			<?
			if ($showSlider) {
				foreach ($morePhoto as $key => $photo) {
			?>
					<div class="product-item-image-slider-control<?= ($key == 0 ? ' active' : '') ?>" data-go-to="<?= $key ?>"></div>
			<?
				}
			}
			?>
		</div>
		<? if ($arParams['SLIDER_PROGRESS'] === 'Y') { ?>
			<div class="product-item-image-slider-progress-bar-container">
				<div class="product-item-image-slider-progress-bar" id="<?= $itemIds['PICT_SLIDER'] ?>_progress_bar" style="width: 0;"></div>
			</div>
		<? } ?>
		<? if ($itemHasDetailUrl) : ?>
			</a>
		<? else : ?>
			</span>
		<? endif; ?>

		<!-- TODO название -->
		<div class="product-item-block product-item-title">
			<? if ($itemHasDetailUrl) : ?>
				<a href="<?= $item['DETAIL_PAGE_URL'] ?>" title="<?= $productTitle ?>">
				<? endif; ?>
				<?= $productTitle ?>
				<? if ($itemHasDetailUrl) : ?>
				</a>
			<? endif; ?>
		</div>


		<!-- TODO рейтинг и пропсы -->
		<? $countReviews = intval($arResult["ITEM"]['PROPERTIES']['COINT_REVIEWS']['VALUE']);
		$summReviews = intval($arResult["ITEM"]['PROPERTIES']['SUMM_REVIEWS']['VALUE']); ?>

		<div class="product-item-block product-item-general-info">
			<? if (!empty($countReviews) && !empty($summReviews)) {
				$midRate = $summReviews / $countReviews; ?>
				<div class="raiting-block">
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.9456 8.54699C10.7729 8.71433 10.6936 8.95633 10.7329 9.19366L11.3256 12.4737C11.3756 12.7517 11.2583 13.033 11.0256 13.1937C10.7976 13.3603 10.4943 13.3803 10.2456 13.247L7.29293 11.707C7.19026 11.6523 7.07626 11.623 6.95959 11.6197H6.77893C6.71626 11.629 6.65493 11.649 6.59893 11.6797L3.64559 13.227C3.49959 13.3003 3.33426 13.3263 3.17226 13.3003C2.77759 13.2257 2.51426 12.8497 2.57893 12.453L3.17226 9.17299C3.21159 8.93366 3.13226 8.69033 2.95959 8.52033L0.552258 6.18699C0.350925 5.99166 0.280925 5.69833 0.372925 5.43366C0.462258 5.16966 0.690258 4.97699 0.965592 4.93366L4.27893 4.45299C4.53093 4.42699 4.75226 4.27366 4.86559 4.04699L6.32559 1.05366C6.36026 0.986992 6.40493 0.925659 6.45893 0.873659L6.51892 0.826992C6.55026 0.792326 6.58626 0.763659 6.62626 0.740326L6.69893 0.713659L6.81226 0.666992H7.09292C7.34359 0.692992 7.56426 0.842992 7.67959 1.06699L9.15893 4.04699C9.26559 4.26499 9.47293 4.41633 9.71226 4.45299L13.0256 4.93366C13.3056 4.97366 13.5396 5.16699 13.6323 5.43366C13.7196 5.70099 13.6443 5.99433 13.4389 6.18699L10.9456 8.54699Z" fill="#EE332A" />
					</svg>
					<?= $midRate ?>
				</div>
				<div class="reviews-block">
					<a href="<?= $item['DETAIL_PAGE_URL'] ?>#tab-review">
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.125 7.18752C13.1272 8.01243 12.9344 8.8262 12.5625 9.56252C12.1215 10.4449 11.4436 11.187 10.6047 11.7058C9.76572 12.2246 8.7989 12.4996 7.8125 12.5C6.98758 12.5022 6.17382 12.3094 5.4375 11.9375L1.875 13.125L3.0625 9.56252C2.69058 8.8262 2.49785 8.01243 2.5 7.18752C2.50038 6.20112 2.77538 5.2343 3.2942 4.39536C3.81302 3.55642 4.55516 2.8785 5.4375 2.43752C6.17382 2.0656 6.98758 1.87287 7.8125 1.87502H8.125C9.42772 1.94689 10.6582 2.49674 11.5807 3.4193C12.5033 4.34187 13.0531 5.5723 13.125 6.87502V7.18752Z" stroke="#CACACA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<?= $countReviews; ?>
					</a>
				</div>
			<? } ?>
			<div class="external-code-block">
				Код <?= $arResult['ITEM']['XML_ID'] ?>
			</div>
		</div>
	</div>

	<!-- TODO Price & Buttons -->
	<div class="product-item-block product-item-action-block">
		<? if (!empty($arParams['PRODUCT_BLOCKS_ORDER'])) {
			foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName) { ?>
				<? if ($blockName == 'price') { ?>
					<div class="product-item-info-container product-item-price-container" data-entity="price-block">
						<? if ($arParams['SHOW_OLD_PRICE'] === 'Y') { ?>
							<span class="product-item-price-old" id="<?= $itemIds['PRICE_OLD'] ?>" <?= ($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? 'style="display: none;"' : '') ?>>
								<?php if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") { ?>
									<?= str_replace(" руб.", "<span> ₽</span>", $price['PRINT_RATIO_BASE_PRICE']) ?>
								<?php } ?>
							</span>
						<? } ?>
						<span class="product-item-price-current" id="<?= $itemIds['PRICE'] ?>" <?= ($price['RATIO_PRICE'] >= $price['RATIO_BASE_PRICE'] ? 'style="bottom: 10px;"' : '') ?>>
							<? if (!empty($price)) {
								if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") {
									if ($arParams['PRODUCT_DISPLAY_MODE'] === 'N' && $haveOffers) {
										echo Loc::getMessage(
											'CT_BCI_TPL_MESS_PRICE_SIMPLE_MODE',
											array(
												'#PRICE#' => $price['PRINT_RATIO_PRICE'],
												'#VALUE#' => $measureRatio,
												'#UNIT#' => $minOffer['ITEM_MEASURE']['TITLE']
											)
										);
									} else {
										echo str_replace(" руб.", "<span> ₽</span>", $price['PRINT_RATIO_PRICE']);
									}
								}
							} ?>
						</span>
					</div>
				<? } ?>

				<? if ($blockName == 'buttons') {
					if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") { ?>
						<div class="product-item-info-container product-item-hidden buttons-block" data-entity="buttons-block">
							<? if (!$haveOffers) {
								if ($actualItem['CAN_BUY']) { ?>
									<div class="product-item-button-container product-item-button-container-2" id="<?= $itemIds['BASKET_ACTIONS'] ?>">
										<a class="js-add-basket fade-out" id="<?= $itemIds['BUY_LINK'] ?>" href="javascript:void(0)" rel="nofollow">
											<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.5 2.50005H4.28333C4.4843 2.49778 4.67932 2.56822 4.83246 2.69838C4.9856 2.82855 5.08653 3.00968 5.11667 3.20839L5.51667 5.83339L6.66667 13.3334L15.8333 12.5001L17.5 5.83339H5.51667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
												<path d="M6.125 17.083H6.20833" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
												<path d="M15.125 17.083H15.2083" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
											</svg>
											<?/*=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])*/ ?>
										</a>
									</div>
								<? } else { ?>
									<div class="product-item-button-container under-the-order">
										<? if ($showSubscribe) {/*
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.product.subscribe',
												'',
												array(
													'PRODUCT_ID' => $actualItem['ID'],
													'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
													'BUTTON_CLASS' => 'btn btn-default '.$buttonSizeClass,
													'DEFAULT_DISPLAY' => true,
													'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
												),
												$component,
												array('HIDE_ICONS' => 'Y')
											);
										*/
										} ?>
										<a class="btn btn-link <?= $buttonSizeClass ?>" href="<?= $item['DETAIL_PAGE_URL'] ?>" id="<?= $itemIds['NOT_AVAILABLE_MESS'] ?>" rel="nofollow">
											Под заказ
										</a>
									</div>
								<? }
							} else {
								if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') { ?>
									<div class="product-item-button-container">
										<? if ($showSubscribe) {/*
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.product.subscribe',
												'',
												array(
													'PRODUCT_ID' => $item['ID'],
													'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
													'BUTTON_CLASS' => 'btn btn-default '.$buttonSizeClass,
													'DEFAULT_DISPLAY' => !$actualItem['CAN_BUY'],
													'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
												),
												$component,
												array('HIDE_ICONS' => 'Y')
											);
										*/
										} ?>
										<a class="btn btn-link on-order <?= $buttonSizeClass ?>" id="<?= $itemIds['NOT_AVAILABLE_MESS'] ?>" href="<?= $item['DETAIL_PAGE_URL'] ?>" rel="nofollow" <?= ($actualItem['CAN_BUY'] ? 'style="display: none;"' : '') ?>>
											<?/*=$arParams['MESS_NOT_AVAILABLE']*/ ?>
											Под заказ
										</a>
										<div class="product-item-button-container buy-btn" id="<?= $itemIds['BASKET_ACTIONS'] ?>" <?= ($actualItem['CAN_BUY'] ? '' : 'style="display: none;"') ?>>
											<a class="js-add-basket fade-out <?= $buttonSizeClass ?>" id="<?= $itemIds['BUY_LINK'] ?>" href="javascript:void(0)" rel="nofollow">
												<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2.5 2.50005H4.28333C4.4843 2.49778 4.67932 2.56822 4.83246 2.69838C4.9856 2.82855 5.08653 3.00968 5.11667 3.20839L5.51667 5.83339L6.66667 13.3334L15.8333 12.5001L17.5 5.83339H5.51667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M6.125 17.083H6.20833" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
													<path d="M15.125 17.083H15.2083" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
												</svg>
												<?/*=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])*/ ?>
											</a>
										</div>
									</div>
								<? } else { ?>
									<div class="product-item-button-container">
										<a class="btn btn-default <?= $buttonSizeClass ?>" href="<?= $item['DETAIL_PAGE_URL'] ?>">
											<?= $arParams['MESS_BTN_DETAIL'] ?>
										</a>
									</div>
							<? }
							} ?>
						</div>
				<? }
				} ?>
			<? } ?>
		<? } ?>
	</div>

	<? if (!empty($arParams['PRODUCT_BLOCKS_ORDER'])) {
		foreach ($arParams['PRODUCT_BLOCKS_ORDER'] as $blockName) {
			switch ($blockName) {
					// TODO Quantity limit
				case 'quantityLimit':
					if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") {
						if ($arParams['SHOW_MAX_QUANTITY'] !== 'N') {
							if ($haveOffers) {
								if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') { ?>
									<div class="product-item-info-container product-item-hidden" id="<?= $itemIds['QUANTITY_LIMIT'] ?>" style="display: none;" data-entity="quantity-limit-block">
										<div class="product-item-info-container-title">
											<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
											<span class="product-item-quantity" data-entity="quantity-limit-value"></span>
										</div>
									</div>
								<? }
							} else {
								if (
									$measureRatio
									&& (float)$actualItem['CATALOG_QUANTITY'] > 0
									&& $actualItem['CATALOG_QUANTITY_TRACE'] === 'Y'
									&& $actualItem['CATALOG_CAN_BUY_ZERO'] === 'N'
								) { ?>
									<div class="product-item-info-container product-item-hidden" id="<?= $itemIds['QUANTITY_LIMIT'] ?>">
										<div class="product-item-info-container-title">
											<?= $arParams['MESS_SHOW_MAX_QUANTITY'] ?>:
											<span class="product-item-quantity">
												<?
												if ($arParams['SHOW_MAX_QUANTITY'] === 'M') {
													if ((float)$actualItem['CATALOG_QUANTITY'] / $measureRatio >= $arParams['RELATIVE_QUANTITY_FACTOR']) {
														echo $arParams['MESS_RELATIVE_QUANTITY_MANY'];
													} else {
														echo $arParams['MESS_RELATIVE_QUANTITY_FEW'];
													}
												} else {
													echo $actualItem['CATALOG_QUANTITY'] . ' ' . $actualItem['ITEM_MEASURE']['TITLE'];
												}
												?>
											</span>
										</div>
									</div>
							<?
								}
							}
						}
					}
					break;

					// TODO Quantity
				case 'quantity':
					if (!$haveOffers) {
						if ($actualItem['CAN_BUY'] && $arParams['USE_PRODUCT_QUANTITY']) {
							?>
							<?php if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] == "false") : ?>
								<div class="product-item-info-container product-item-hidden quantity-block" data-entity="quantity-block">

									<div class="product-item-amount">
										<div class="product-item-amount-field-container" <?php if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "style='display:none;'"; ?>>
											<span class="product-item-amount-field-btn-minus no-select fade-out" id="<?= $itemIds['QUANTITY_DOWN'] ?>">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
												</svg>
											</span>
											<input class="product-item-amount-field" id="<?= $itemIds['QUANTITY'] ?>" type="number" name="<?= $arParams['PRODUCT_QUANTITY_VARIABLE'] ?>" value="<?= $measureRatio ?>">
											<span class="product-item-amount-field-btn-plus no-select fade-out" id="<?= $itemIds['QUANTITY_UP'] ?>">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
													<path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
												</svg>
											</span>
										</div>
										<span class="product-item-amount-description-container">
											<!--<span id="<? //= $itemIds['QUANTITY_MEASURE'] 
																?>">-->
											<? //= $actualItem['ITEM_MEASURE']['TITLE'] 
											?>
											<!--</span>-->
											<span id="<?= $itemIds['PRICE_TOTAL'] ?>"></span>
										</span>
									</div>

								</div>
							<?php endif; ?>
						<?
						}
					} elseif ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y') {
						if ($arParams['USE_PRODUCT_QUANTITY']) {
						?>
							<div class="product-item-info-container product-item-hidden quantity-block" data-entity="quantity-block">
								<div class="product-item-amount">
									<div class="product-item-amount-field-container" <?php if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "style='display:none;'"; ?>>
										<span class="product-item-amount-field-btn-minus no-select" id="<?= $itemIds['QUANTITY_DOWN'] ?>">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
												<path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
											</svg>
										</span>
										<input class="product-item-amount-field" id="<?= $itemIds['QUANTITY'] ?>" type="number" name="<?= $arParams['PRODUCT_QUANTITY_VARIABLE'] ?>" value="<?= $measureRatio ?>">
										<span class="product-item-amount-field-btn-plus no-select" id="<?= $itemIds['QUANTITY_UP'] ?>">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
												<path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
											</svg>
										</span>
									</div>
									<span class="product-item-amount-description-container">
										<!--<span id="<? //= $itemIds['QUANTITY_MEASURE'] 
															?>">-->
										<? //= $actualItem['ITEM_MEASURE']['TITLE'] 
										?>
										<!--</span>-->
										<span id="<?= $itemIds['PRICE_TOTAL'] ?>"></span>
									</span>
								</div>
							</div>
						<?
						}
					}
					break;

					// TODO Props
				case 'props':
					if (!$haveOffers) {
						if (!empty($item['DISPLAY_PROPERTIES'])) {
						?>
							<div class="product-item-info-container product-item-hidden" data-entity="props-block">
								<dl class="product-item-properties">
									<?
									foreach ($item['DISPLAY_PROPERTIES'] as $code => $displayProperty) {
									?>
										<dt<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
											<?= $displayProperty['NAME'] ?>
											</dt>
											<dd<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
												<?= (is_array($displayProperty['DISPLAY_VALUE'])
													? implode(' / ', $displayProperty['DISPLAY_VALUE'])
													: $displayProperty['DISPLAY_VALUE']) ?>
												</dd>
											<?
										}
											?>
								</dl>
							</div>
						<?
						}

						if ($arParams['ADD_PROPERTIES_TO_BASKET'] === 'Y' && !empty($item['PRODUCT_PROPERTIES'])) {
						?>
							<div id="<?= $itemIds['BASKET_PROP_DIV'] ?>" style="display: none;">
								<?
								if (!empty($item['PRODUCT_PROPERTIES_FILL'])) {
									foreach ($item['PRODUCT_PROPERTIES_FILL'] as $propID => $propInfo) {
								?>
										<input type="hidden" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]" value="<?= htmlspecialcharsbx($propInfo['ID']) ?>">
									<?
										unset($item['PRODUCT_PROPERTIES'][$propID]);
									}
								}

								if (!empty($item['PRODUCT_PROPERTIES'])) {
									?>
									<table>
										<?
										foreach ($item['PRODUCT_PROPERTIES'] as $propID => $propInfo) {
										?>
											<tr>
												<td><?= $item['PROPERTIES'][$propID]['NAME'] ?></td>
												<td>
													<?
													if (
														$item['PROPERTIES'][$propID]['PROPERTY_TYPE'] === 'L'
														&& $item['PROPERTIES'][$propID]['LIST_TYPE'] === 'C'
													) {
														foreach ($propInfo['VALUES'] as $valueID => $value) {
													?>
															<label>
																<? $checked = $valueID === $propInfo['SELECTED'] ? 'checked' : ''; ?>
																<input type="radio" name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]" value="<?= $valueID ?>" <?= $checked ?>>
																<?= $value ?>
															</label>
															<br />
														<?
														}
													} else {
														?>
														<select name="<?= $arParams['PRODUCT_PROPS_VARIABLE'] ?>[<?= $propID ?>]">
															<?
															foreach ($propInfo['VALUES'] as $valueID => $value) {
																$selected = $valueID === $propInfo['SELECTED'] ? 'selected' : '';
															?>
																<option value="<?= $valueID ?>" <?= $selected ?>>
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
					} else {
						$showProductProps = !empty($item['DISPLAY_PROPERTIES']);
						$showOfferProps = $arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $item['OFFERS_PROPS_DISPLAY'];

						if ($showProductProps || $showOfferProps) {
						?>
							<div class="product-item-info-container product-item-hidden" data-entity="props-block">
								<dl class="product-item-properties">
									<?
									if ($showProductProps) {
										foreach ($item['DISPLAY_PROPERTIES'] as $code => $displayProperty) {
									?>
											<dt<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
												<?= $displayProperty['NAME'] ?>
												</dt>
												<dd<?= (!isset($item['PROPERTY_CODE_MOBILE'][$code]) ? ' class="hidden-xs"' : '') ?>>
													<?= (is_array($displayProperty['DISPLAY_VALUE'])
														? implode(' / ', $displayProperty['DISPLAY_VALUE'])
														: $displayProperty['DISPLAY_VALUE']) ?>
													</dd>
												<?
											}
										}

										if ($showOfferProps) {
												?>
												<span id="<?= $itemIds['DISPLAY_PROP_DIV'] ?>" style="display: none;"></span>
											<?
										}
											?>
								</dl>
							</div>
						<?
						}
					}
					break;

					// TODO Sku
				case 'sku':
					if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y' && $haveOffers && !empty($item['OFFERS_PROP'])) { ?>
						<div class="product-item-hidden sku-block" id="<?= $itemIds['PROP_DIV'] ?>">
							<? foreach ($arParams['SKU_PROPS'] as $skuProperty) {
								$propertyId = $skuProperty['ID'];
								$skuProperty['NAME'] = htmlspecialcharsbx($skuProperty['NAME']);
								if (!isset($item['SKU_TREE_VALUES'][$propertyId]))
									continue; ?>
								<div class="product-item-info-container" data-entity="sku-block">
									<div class="product-item-scu-container <?php if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") echo "offline-scu"; ?>" data-entity="sku-line-block">
										<? //= $skuProperty['NAME'] 
										?>
										<div class="product-item-scu-block">
											<div class="product-item-scu-list">
												<ul class="product-item-scu-item-list">
													<? foreach ($skuProperty['VALUES'] as $value) {
														if (!isset($item['SKU_TREE_VALUES'][$propertyId][$value['ID']]))
															continue;

														$value['NAME'] = htmlspecialcharsbx($value['NAME']);

														if ($skuProperty['SHOW_MODE'] === 'PICT') { ?>
															<li class="product-item-scu-item-color-container fade-out" title="<?= $value['NAME'] ?>" data-treevalue="<?= $propertyId ?>_<?= $value['ID'] ?>" data-onevalue="<?= $value['ID'] ?>">
																<div class="product-item-scu-item-color-block">
																	<div class="product-item-scu-item-color" title="<?= $value['NAME'] ?>" style="background-image: url('<?= $value['PICT']['SRC'] ?>');">
																	</div>
																</div>
															</li>
														<? } else { ?>
															<li class="product-item-scu-item-text-container fade-out" title="<?= $value['NAME'] ?>" data-treevalue="<?= $propertyId ?>_<?= $value['ID'] ?>" data-onevalue="<?= $value['ID'] ?>">
																<div class="product-item-scu-item-text-block">
																	<div class="product-item-scu-item-text"><?= $value['NAME'] ?></div>
																</div>
															</li>
													<? }
													} ?>
												</ul>

											</div>
										</div>
									</div>
								</div>
							<? } ?>
						</div>

	<? foreach ($arParams['SKU_PROPS'] as $skuProperty) {
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

						if ($item['OFFERS_PROPS_DISPLAY']) {
							foreach ($item['JS_OFFERS'] as $keyOffer => $jsOffer) {
								$strProps = '';

								if (!empty($jsOffer['DISPLAY_PROPERTIES'])) {
									foreach ($jsOffer['DISPLAY_PROPERTIES'] as $displayProperty) {
										$strProps .= '<dt>' . $displayProperty['NAME'] . '</dt><dd>'
											. (is_array($displayProperty['VALUE'])
												? implode(' / ', $displayProperty['VALUE'])
												: $displayProperty['VALUE'])
											. '</dd>';
									}
								}

								$item['JS_OFFERS'][$keyOffer]['DISPLAY_PROPERTIES'] = $strProps;
							}
							unset($jsOffer, $strProps);
						}
					}
					break;
			}
		}
	} ?>
	<? if ($arResult["ITEM"]["PROPERTIES"]["NE_DLYA_PRODAZHI"]["VALUE"] != "false") {
		echo "<div class='offline-only'>Товар доступен только в оффлайн-магазинах</div>";
	} ?>

	<!-- TODO сравнение -->
	<? if ($arParams['DISPLAY_COMPARE'] && (!$haveOffers || $arParams['PRODUCT_DISPLAY_MODE'] === 'Y')) { ?>
		<div class="product-item-block product-item-compare-container">
			<div class="product-item-compare">
				<div class="checkbox">
					<label id="<?= $itemIds['COMPARE_LINK'] ?>">
						<input type="checkbox" data-entity="compare-checkbox">
						<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 14.667V9.66699" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M13 14.6673V6.33398" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M7 14.6673V1.33398" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</label>
				</div>
			</div>
		</div>
	<? } ?>
</div>