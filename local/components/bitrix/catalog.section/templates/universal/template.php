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
 *
 *  _________________________________________________________________________
 * |	Attention!
 * |	The following comments are for system use
 * |	and are required for the component to work correctly in ajax mode:
 * |	<!-- items-container -->
 * |	<!-- pagination-container -->
 * |	<!-- component-end -->
 */

use Bitrix\Sale;

$this->setFrameMode(true);
$this->addExternalCss('/bitrix/css/main/bootstrap.css');

//$fuser = Sale\Fuser::getId();
//$basketRes = Sale\Internals\BasketTable::getList(array(
//	'filter' => array(
//		'FUSER_ID' => $fuser,
//		'ORDER_ID' => null,
//		'LID' => SITE_ID,
//		'CAN_BUY' => 'Y',
//	)
//));

//while ($item = $basketRes->fetch()) {
//	$itemsInCart[] = $item["PRODUCT_ID"];
//}
$fuser = Sale\Fuser::getId();
$basketRes = Sale\Internals\BasketTable::getList(array(
	'filter' => array(
		'FUSER_ID' => $fuser,
		'ORDER_ID' => null,
		'LID' => SITE_ID,
		'CAN_BUY' => 'Y',
	)
));

while ($item = $basketRes->fetch()) {
	$itemsInCart[] = $item["PRODUCT_ID"];
}

if (!empty($arResult['NAV_RESULT'])) {
	$navParams =  array(
		'NavPageCount' => $arResult['NAV_RESULT']->NavPageCount,
		'NavPageNomer' => $arResult['NAV_RESULT']->NavPageNomer,
		'NavNum' => $arResult['NAV_RESULT']->NavNum
	);
} else {
	$navParams = array(
		'NavPageCount' => 1,
		'NavPageNomer' => 1,
		'NavNum' => $this->randString()
	);
}

$showTopPager = false;
$showBottomPager = false;
$showLazyLoad = false;

if ($arParams['PAGE_ELEMENT_COUNT'] > 0 && $navParams['NavPageCount'] > 1) {
	$showTopPager = $arParams['DISPLAY_TOP_PAGER'];
	$showBottomPager = $arParams['DISPLAY_BOTTOM_PAGER'];
	$showLazyLoad = $arParams['LAZY_LOAD'] === 'Y' && $navParams['NavPageNomer'] != $navParams['NavPageCount'];
}

$templateLibrary = array('popup', 'ajax', 'fx');
$currencyList = 'universal';

if (!empty($arResult['CURRENCIES'])) {
	$templateLibrary[] = 'currency';
	$currencyList = CUtil::PhpToJSObject($arResult['CURRENCIES'], false, true, true);
}

$templateData = array(
	'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
	'TEMPLATE_LIBRARY' => $templateLibrary,
	'CURRENCIES' => $currencyList
);
unset($currencyList, $templateLibrary);

$elementEdit = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_EDIT');
$elementDelete = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_DELETE');
$elementDeleteParams = array('CONFIRM' => GetMessage('CT_BCS_TPL_ELEMENT_DELETE_CONFIRM'));

$positionClassMap = array(
	'left' => 'product-item-label-left',
	'center' => 'product-item-label-center',
	'right' => 'product-item-label-right',
	'bottom' => 'product-item-label-bottom',
	'middle' => 'product-item-label-middle',
	'top' => 'product-item-label-top'
);

$discountPositionClass = 'universal';
if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && !empty($arParams['DISCOUNT_PERCENT_POSITION'])) {
	foreach (explode('-', $arParams['DISCOUNT_PERCENT_POSITION']) as $pos) {
		$discountPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : 'universal';
	}
}

$labelPositionClass = 'universal';
if (!empty($arParams['LABEL_PROP_POSITION'])) {
	foreach (explode('-', $arParams['LABEL_PROP_POSITION']) as $pos) {
		$labelPositionClass .= isset($positionClassMap[$pos]) ? ' ' . $positionClassMap[$pos] : 'universal';
	}
}

$arParams['~MESS_BTN_BUY'] = $arParams['~MESS_BTN_BUY'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_BUY');
$arParams['~MESS_BTN_DETAIL'] = $arParams['~MESS_BTN_DETAIL'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_DETAIL');
$arParams['~MESS_BTN_COMPARE'] = $arParams['~MESS_BTN_COMPARE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_COMPARE');
$arParams['~MESS_BTN_SUBSCRIBE'] = $arParams['~MESS_BTN_SUBSCRIBE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_SUBSCRIBE');
$arParams['~MESS_BTN_ADD_TO_BASKET'] = $arParams['~MESS_BTN_ADD_TO_BASKET'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_ADD_TO_BASKET');
$arParams['~MESS_NOT_AVAILABLE'] = $arParams['~MESS_NOT_AVAILABLE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_PRODUCT_NOT_AVAILABLE');
$arParams['~MESS_SHOW_MAX_QUANTITY'] = $arParams['~MESS_SHOW_MAX_QUANTITY'] ?: Loc::getMessage('CT_BCS_CATALOG_SHOW_MAX_QUANTITY');
$arParams['~MESS_RELATIVE_QUANTITY_MANY'] = $arParams['~MESS_RELATIVE_QUANTITY_MANY'] ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['~MESS_RELATIVE_QUANTITY_FEW'] = $arParams['~MESS_RELATIVE_QUANTITY_FEW'] ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_FEW');

$arParams['MESS_BTN_LAZY_LOAD'] = $arParams['MESS_BTN_LAZY_LOAD'] ?: Loc::getMessage('CT_BCS_CATALOG_MESS_BTN_LAZY_LOAD');

$generalParams = array(
	'SHOW_DISCOUNT_PERCENT' => $arParams['SHOW_DISCOUNT_PERCENT'],
	'PRODUCT_DISPLAY_MODE' => $arParams['PRODUCT_DISPLAY_MODE'],
	'SHOW_MAX_QUANTITY' => $arParams['SHOW_MAX_QUANTITY'],
	'RELATIVE_QUANTITY_FACTOR' => $arParams['RELATIVE_QUANTITY_FACTOR'],
	'MESS_SHOW_MAX_QUANTITY' => $arParams['~MESS_SHOW_MAX_QUANTITY'],
	'MESS_RELATIVE_QUANTITY_MANY' => $arParams['~MESS_RELATIVE_QUANTITY_MANY'],
	'MESS_RELATIVE_QUANTITY_FEW' => $arParams['~MESS_RELATIVE_QUANTITY_FEW'],
	'SHOW_OLD_PRICE' => $arParams['SHOW_OLD_PRICE'],
	'USE_PRODUCT_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'],
	'PRODUCT_QUANTITY_VARIABLE' => $arParams['PRODUCT_QUANTITY_VARIABLE'],
	'ADD_TO_BASKET_ACTION' => $arParams['ADD_TO_BASKET_ACTION'],
	'ADD_PROPERTIES_TO_BASKET' => $arParams['ADD_PROPERTIES_TO_BASKET'],
	'PRODUCT_PROPS_VARIABLE' => $arParams['PRODUCT_PROPS_VARIABLE'],
	'SHOW_CLOSE_POPUP' => $arParams['SHOW_CLOSE_POPUP'],
	'DISPLAY_COMPARE' => $arParams['DISPLAY_COMPARE'],
	'COMPARE_PATH' => $arParams['COMPARE_PATH'],
	'COMPARE_NAME' => $arParams['COMPARE_NAME'],
	'PRODUCT_SUBSCRIPTION' => $arParams['PRODUCT_SUBSCRIPTION'],
	'PRODUCT_BLOCKS_ORDER' => $arParams['PRODUCT_BLOCKS_ORDER'],
	'LABEL_POSITION_CLASS' => $labelPositionClass,
	'DISCOUNT_POSITION_CLASS' => $discountPositionClass,
	'SLIDER_INTERVAL' => $arParams['SLIDER_INTERVAL'],
	'SLIDER_PROGRESS' => $arParams['SLIDER_PROGRESS'],
	'~BASKET_URL' => $arParams['~BASKET_URL'],
	'~ADD_URL_TEMPLATE' => $arResult['~ADD_URL_TEMPLATE'],
	'~BUY_URL_TEMPLATE' => $arResult['~BUY_URL_TEMPLATE'],
	'~COMPARE_URL_TEMPLATE' => $arResult['~COMPARE_URL_TEMPLATE'],
	'~COMPARE_DELETE_URL_TEMPLATE' => $arResult['~COMPARE_DELETE_URL_TEMPLATE'],
	'TEMPLATE_THEME' => $arParams['TEMPLATE_THEME'],
	'USE_ENHANCED_ECOMMERCE' => $arParams['USE_ENHANCED_ECOMMERCE'],
	'DATA_LAYER_NAME' => $arParams['DATA_LAYER_NAME'],
	'BRAND_PROPERTY' => $arParams['BRAND_PROPERTY'],
	'MESS_BTN_BUY' => $arParams['~MESS_BTN_BUY'],
	'MESS_BTN_DETAIL' => $arParams['~MESS_BTN_DETAIL'],
	'MESS_BTN_COMPARE' => $arParams['~MESS_BTN_COMPARE'],
	'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
	'MESS_BTN_ADD_TO_BASKET' => $arParams['~MESS_BTN_ADD_TO_BASKET'],
	'MESS_NOT_AVAILABLE' => $arParams['~MESS_NOT_AVAILABLE'],
	'IBLOCK_ID' => $arParams['IBLOCK_ID'],
	'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
	'PARENT_COMPONENT_NAME' => $arParams["PARENT_COMPONENT_NAME"],
	//'ITEMS_IN_THE_CART' => $itemsInCart
);


$obName = 'ob' . preg_replace('/[^a-zA-Z0-9_]/', 'x', $this->GetEditAreaId($navParams['NavNum']));
$containerName = 'container-' . $navParams['NavNum'];

if ($showTopPager) {
?>
	<div data-pagination-num="<?= $navParams['NavNum'] ?>">
		<!-- pagination-container -->
		<?= $arResult['NAV_STRING'] ?>
		<!-- pagination-container -->
	</div>
<?
}

if ($arParams['HIDE_SECTION_DESCRIPTION'] !== 'Y') {
?>
	<div class="bx-section-desc bx-<?= $arParams['TEMPLATE_THEME'] ?>">
		<p class="bx-section-desc-post"><?= $arResult['DESCRIPTION'] ?></p>
	</div>
<?
}
?>
<?
if ($arParams['HIDE_SORTING'] !== 'Y') :
	$sort = $arParams["ELEMENT_SORT_FIELD"];
	$order = $arParams["ELEMENT_SORT_ORDER"];
	if ($sort == "SCALED_PRICE_1") {
		if ($order == "asc") {
			$sortValue = "возрастанию цены";
			$sort1 = "highlighted";
		} else {
			$sortValue = "убыванию цены";
			$sort2 = "highlighted";
		}
	} elseif ($sort == "NAME") {
		$sortValue = "названию";
		$sort3 = "highlighted";
	} elseif ($sort == "DATE_CREATE") {
		$sortValue = "дате поступления";
		$sort4 = "highlighted";
	} elseif ($sort == "SHOWS") {
		$sortValue = "популярности";
		$sort5 = "highlighted";
	} else {
		$sortValue = "возрастанию цены";
		$sort1 = "highlighted";
	}

	if ($_REQUEST["PAGE_ELEMENT_COUNT"]) {
		$arPageElementCount = array("30", "60", "90", "120");
		if (in_array($_REQUEST["PAGE_ELEMENT_COUNT"], $arPageElementCount)) {
			$countValue = $_REQUEST["PAGE_ELEMENT_COUNT"];
			${$count . $countValue} = "highlighted";
		}
	} else {
		$count30 = "highlighted";
		$countValue = "30";
	} ?>

	<div class="catalog-panel-view">
		<div class="catalog_filration_container">
			<div class="filter-toggle-container" style="display:none;"></div>
			<div id="catalog_sorttype" class="catalog-sorttype">
				<div class="chosen-container chosen-container-single sorttype" title="" id="catalog_sort_type_chosen">
					<a class="chosen-single" tabindex="-1">
						<span><?= $sortValue ?></span>
						<div><b></b></div>
					</a>
					<div class="chosen-drop">
						<div class="chosen-search">
							<input type="text" autocomplete="off">
						</div>
						<ul class="chosen-results">
							<a href="<?= $APPLICATION->GetCurPageParam('sort=SCALED_PRICE_1&order=asc', array("sort", "order")) ?>">
								<li class="active-result <?= $sort1 ?>">возрастанию цены</li>
							</a>
							<a href="<?= $APPLICATION->GetCurPageParam('sort=SCALED_PRICE_1&order=desc', array("sort", "order")) ?>">
								<li class="active-result <?= $sort2 ?>">убыванию цены</li>
							</a>
							<a href="<?= $APPLICATION->GetCurPageParam('sort=NAME&order=asc', array("sort", "order")) ?>">
								<li class="active-result <?= $sort3 ?>">названию</li>
							</a>
							<a href="<?= $APPLICATION->GetCurPageParam('sort=DATE_CREATE&order=asc', array("sort", "order")) ?>">
								<li class="active-result <?= $sort4 ?>">дате поступления</li>
							</a>
							<a href="<?= $APPLICATION->GetCurPageParam('sort=SHOWS&order=asc', array("sort", "order")) ?>">
								<li class="active-result <?= $sort5 ?>">популярности</li>
							</a>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="catalog-availble">
			<label class="styled-checkbox">
				<?php if ($_REQUEST["IN_STOCK"] == "Y") : ?>
					<a href="<?= $APPLICATION->GetCurPageParam('IN_STOCK=N', array("IN_STOCK")) ?>">
						<input type="checkbox" checked name="nal" value="2" id="catalog_availble">
						<span class="caption">В наличии.</span>
					</a>
				<?php else : ?>
					<a href="<?= $APPLICATION->GetCurPageParam('IN_STOCK=Y', array("IN_STOCK")) ?>">
						<input type="checkbox" name="nal" value="2" id="catalog_availble">
						<span class="caption">В наличии.</span>
					</a>
				<?php endif; ?>
			</label>
		</div>
		<div class="catalog-discount">
			<label class="styled-checkbox">
				<?php if ($_REQUEST["WITH_DISCOUNT"] == "Y") : ?>
					<a href="<?= $APPLICATION->GetCurPageParam('WITH_DISCOUNT=N', array("WITH_DISCOUNT")) ?>">
						<input type="checkbox" checked value="1" name="catalog_discount" id="catalog_discount">
						<span class="caption">Со скидкой</span>
					</a>
				<?php else : ?>
					<a href="<?= $APPLICATION->GetCurPageParam('WITH_DISCOUNT=Y', array("WITH_DISCOUNT")) ?>">
						<input type="checkbox" value="1" name="catalog_discount" id="catalog_discount">
						<span class="caption">Со скидкой</span>
					</a>
				<?php endif; ?>
			</label>
		</div>
		<div class="catalog-product-count">
			<span class="caption">Отображать по:</span>
			<div class="chosen-container chosen-container-single product-count" style="width: 80px;" title="" id="catalog_sort_prior_chosen">
				<a class="chosen-single" tabindex="-1">
					<span><?= $countValue ?></span>
					<div><b></b></div>
				</a>
				<div class="chosen-drop">
					<div class="chosen-search">
						<input type="text" autocomplete="off">
					</div>
					<ul class="chosen-results">
						<a href="<?= $APPLICATION->GetCurPageParam('PAGE_ELEMENT_COUNT=30', array("PAGE_ELEMENT_COUNT")) ?>">
							<li class="active-result <?= $count30 ?>">30</li>
						</a>
						<a href="<?= $APPLICATION->GetCurPageParam('PAGE_ELEMENT_COUNT=60', array("PAGE_ELEMENT_COUNT")) ?>">
							<li class="active-result <?= $count60 ?>">60</li>
						</a>
						<a href="<?= $APPLICATION->GetCurPageParam('PAGE_ELEMENT_COUNT=90', array("PAGE_ELEMENT_COUNT")) ?>">
							<li class="active-result <?= $count90 ?>">90</li>
						</a>
						<a href="<?= $APPLICATION->GetCurPageParam('PAGE_ELEMENT_COUNT=120', array("PAGE_ELEMENT_COUNT")) ?>">
							<li class="active-result <?= $count120 ?>">120</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	</div>
<? endif; ?>
<? if ($arParams['NUMBER_PRODUCTS_IN_ROW'] === 'ROW_4' && $arParams['DISPLAY_PRODUCTS_IN_SLIDER'] !== 'Y') {
	$classProductsRow = ' row-4';
} elseif ($arParams['NUMBER_PRODUCTS_IN_ROW'] === 'ROW_3' && $arParams['DISPLAY_PRODUCTS_IN_SLIDER'] !== 'Y') {
	$classProductsRow = ' row-3';
} else {
	unset($classProductsRow);
} ?>

<div class='<?= ($arParams['DISPLAY_PRODUCTS_IN_SLIDER'] === 'Y') ? 'universal_slider' : 'universal' ?><?= ($classProductsRow ?: '') ?>'>
	<ul class="items-list" data-entity="<?= $containerName ?>">
		<? if (!empty($arResult['ITEMS']) && !empty($arResult['ITEM_ROWS'])) {
			$areaIds = array();
			foreach ($arResult['ITEMS'] as $item) {
				$uniqueId = $item['ID'] . '_' . md5($this->randString() . $component->getAction());
				$areaIds[$item['ID']] = $this->GetEditAreaId($uniqueId);
				$this->AddEditAction($uniqueId, $item['EDIT_LINK'], $elementEdit);
				$this->AddDeleteAction($uniqueId, $item['DELETE_LINK'], $elementDelete, $elementDeleteParams);
			} ?>
			<!-- items-container -->
			<? foreach ($arResult['ITEM_ROWS'] as $rowData) {
				$rowItems = array_splice($arResult['ITEMS'], 0, $rowData['COUNT']); ?>
				<li class="item" data-entity="items-row">
					<? switch ($rowData['VARIANT']) {
						case 0: ?>
							<div class="inner-wrap">
								<? $item = reset($rowItems);
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'universal',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'BIG_LABEL' => 'N',
											'BIG_DISCOUNT_PERCENT' => 'N',
											'BIG_BUTTONS' => 'N',
											'SCALABLE' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								); ?>
							</div>
						<? break;

						case 1:
						?>
							<div class="col-xs-12 product-item-small-card">
								<div class="row">
									<?
									foreach ($rowItems as $item) {
									?>
										<div class="col-xs-6 product-item-big-card">
											<div class="row">
												<div class="col-md-12">
													<?
													$APPLICATION->IncludeComponent(
														'bitrix:catalog.item',
														'universal',
														array(
															'RESULT' => array(
																'ITEM' => $item,
																'AREA_ID' => $areaIds[$item['ID']],
																'TYPE' => $rowData['TYPE'],
																'BIG_LABEL' => 'N',
																'BIG_DISCOUNT_PERCENT' => 'N',
																'BIG_BUTTONS' => 'N',
																'SCALABLE' => 'N'
															),
															'PARAMS' => $generalParams
																+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
														),
														$component,
														array('HIDE_ICONS' => 'Y')
													);
													?>
												</div>
											</div>
										</div>
									<?
									}
									?>
								</div>
							</div>
						<?
							break;

						case 2:
						?>
							<div class="col-xs-12 product-item-small-card">
								<div class="row">
									<?
									foreach ($rowItems as $item) {
									?>
										<div class="col-sm-4 product-item-big-card">
											<div class="row">
												<div class="col-md-12">
													<?
													$APPLICATION->IncludeComponent(
														'bitrix:catalog.item',
														'universal',
														array(
															'RESULT' => array(
																'ITEM' => $item,
																'AREA_ID' => $areaIds[$item['ID']],
																'TYPE' => $rowData['TYPE'],
																'BIG_LABEL' => 'N',
																'BIG_DISCOUNT_PERCENT' => 'N',
																'BIG_BUTTONS' => 'Y',
																'SCALABLE' => 'N'
															),
															'PARAMS' => $generalParams
																+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
														),
														$component,
														array('HIDE_ICONS' => 'Y')
													);
													?>
												</div>
											</div>
										</div>
									<?
									}
									?>
								</div>
							</div>
						<?
							break;

						case 3:
						?>
							<div class="col-xs-12 product-item-small-card">
								<div class="row">
									<?
									foreach ($rowItems as $item) {
									?>
										<div class="col-xs-6 col-md-3">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $item,
														'AREA_ID' => $areaIds[$item['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
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
						<?
							break;

						case 4:
							$rowItemsCount = count($rowItems);
						?>
							<div class="col-sm-6 product-item-big-card">
								<div class="row">
									<div class="col-md-12">
										<?
										$item = array_shift($rowItems);
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'universal',
											array(
												'RESULT' => array(
													'ITEM' => $item,
													'AREA_ID' => $areaIds[$item['ID']],
													'TYPE' => $rowData['TYPE'],
													'BIG_LABEL' => 'N',
													'BIG_DISCOUNT_PERCENT' => 'N',
													'BIG_BUTTONS' => 'Y',
													'SCALABLE' => 'Y'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
										unset($item);
										?>
									</div>
								</div>
							</div>
							<div class="col-sm-6 product-item-small-card">
								<div class="row">
									<?
									for ($i = 0; $i < $rowItemsCount - 1; $i++) {
									?>
										<div class="col-xs-6">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $rowItems[$i],
														'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']])
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
						<?
							break;

						case 5:
							$rowItemsCount = count($rowItems);
						?>
							<div class="col-sm-6 product-item-small-card">
								<div class="row">
									<?
									for ($i = 0; $i < $rowItemsCount - 1; $i++) {
									?>
										<div class="col-xs-6">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $rowItems[$i],
														'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']])
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
							<div class="col-sm-6 product-item-big-card">
								<div class="row">
									<div class="col-md-12">
										<?
										$item = end($rowItems);
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'universal',
											array(
												'RESULT' => array(
													'ITEM' => $item,
													'AREA_ID' => $areaIds[$item['ID']],
													'TYPE' => $rowData['TYPE'],
													'BIG_LABEL' => 'N',
													'BIG_DISCOUNT_PERCENT' => 'N',
													'BIG_BUTTONS' => 'Y',
													'SCALABLE' => 'Y'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
										unset($item);
										?>
									</div>
								</div>
							</div>
						<?
							break;

						case 6:
						?>
							<div class="col-xs-12 product-item-small-card">
								<div class="row">
									<?
									foreach ($rowItems as $item) {
									?>
										<div class="col-xs-6 col-sm-4 col-md-2">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $item,
														'AREA_ID' => $areaIds[$item['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
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
						<?
							break;

						case 7:
							$rowItemsCount = count($rowItems);
						?>
							<div class="col-sm-6 product-item-big-card">
								<div class="row">
									<div class="col-md-12">
										<?
										$item = array_shift($rowItems);
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'universal',
											array(
												'RESULT' => array(
													'ITEM' => $item,
													'AREA_ID' => $areaIds[$item['ID']],
													'TYPE' => $rowData['TYPE'],
													'BIG_LABEL' => 'N',
													'BIG_DISCOUNT_PERCENT' => 'N',
													'BIG_BUTTONS' => 'Y',
													'SCALABLE' => 'Y'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
										unset($item);
										?>
									</div>
								</div>
							</div>
							<div class="col-sm-6 product-item-small-card">
								<div class="row">
									<?
									for ($i = 0; $i < $rowItemsCount - 1; $i++) {
									?>
										<div class="col-xs-6 col-md-4">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $rowItems[$i],
														'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']])
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
						<?
							break;

						case 8:
							$rowItemsCount = count($rowItems);
						?>
							<div class="col-sm-6 product-item-small-card">
								<div class="row">
									<?
									for ($i = 0; $i < $rowItemsCount - 1; $i++) {
									?>
										<div class="col-xs-6 col-md-4">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $rowItems[$i],
														'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N',
														'SCALABLE' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']])
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
							<div class="col-sm-6 product-item-big-card">
								<div class="row">
									<div class="col-md-12">
										<?
										$item = end($rowItems);
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'universal',
											array(
												'RESULT' => array(
													'ITEM' => $item,
													'AREA_ID' => $areaIds[$item['ID']],
													'TYPE' => $rowData['TYPE'],
													'BIG_LABEL' => 'N',
													'BIG_DISCOUNT_PERCENT' => 'N',
													'BIG_BUTTONS' => 'Y',
													'SCALABLE' => 'Y'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
											),
											$component,
											array('HIDE_ICONS' => 'Y')
										);
										unset($item);
										?>
									</div>
								</div>
							</div>
						<?
							break;

						case 9:
						?>
							<div class="col-xs-12">
								<div class="row">
									<?
									foreach ($rowItems as $item) {
									?>
										<div class="col-xs-12 product-item-line-card">
											<?
											$APPLICATION->IncludeComponent(
												'bitrix:catalog.item',
												'universal',
												array(
													'RESULT' => array(
														'ITEM' => $item,
														'AREA_ID' => $areaIds[$item['ID']],
														'TYPE' => $rowData['TYPE'],
														'BIG_LABEL' => 'N',
														'BIG_DISCOUNT_PERCENT' => 'N',
														'BIG_BUTTONS' => 'N'
													),
													'PARAMS' => $generalParams
														+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
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
					<?
							break;
					}
					?>
				</li>
			<?
			}
			unset($generalParams, $rowItems);
			?>
			<!-- items-container -->
		<?
		} else {
			// load css for bigData/deferred load
			$APPLICATION->IncludeComponent(
				'bitrix:catalog.item',
				'universal',
				array(),
				$component,
				array('HIDE_ICONS' => 'Y')
			);
		}
		?>
	</ul>
</div>
<?
if ($showLazyLoad) {
?>
	<div class="universal-lazzy-load-button row bx-<?= $arParams['TEMPLATE_THEME'] ?>">
		<div class="btn btn-default btn-lg center-block" style="margin: 15px;" data-use="show-more-<?= $navParams['NavNum'] ?>">
			<?= $arParams['MESS_BTN_LAZY_LOAD'] ?>
		</div>
	</div>
<?
}

if ($showBottomPager) {
?>
	<div data-pagination-num="<?= $navParams['NavNum'] ?>">
		<!-- pagination-container -->
		<?= $arResult['NAV_STRING'] ?>
		<!-- pagination-container -->
	</div>
<?
}

$signer = new \Bitrix\Main\Security\Sign\Signer;
$signedTemplate = $signer->sign($templateName, 'catalog.section');
$signedParams = $signer->sign(base64_encode(serialize($arResult['ORIGINAL_PARAMETERS'])), 'catalog.section');
?>
<script>
	BX.message({
		BTN_MESSAGE_BASKET_REDIRECT: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_BASKET_REDIRECT') ?>',
		BASKET_URL: '<?= $arParams['BASKET_URL'] ?>',
		ADD_TO_BASKET_OK: '<?= GetMessageJS('ADD_TO_BASKET_OK') ?>',
		TITLE_ERROR: '<?= GetMessageJS('CT_BCS_CATALOG_TITLE_ERROR') ?>',
		TITLE_BASKET_PROPS: '<?= GetMessageJS('CT_BCS_CATALOG_TITLE_BASKET_PROPS') ?>',
		TITLE_SUCCESSFUL: '<?= GetMessageJS('ADD_TO_BASKET_OK') ?>',
		BASKET_UNKNOWN_ERROR: '<?= GetMessageJS('CT_BCS_CATALOG_BASKET_UNKNOWN_ERROR') ?>',
		BTN_MESSAGE_SEND_PROPS: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_SEND_PROPS') ?>',
		BTN_MESSAGE_CLOSE: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE') ?>',
		BTN_MESSAGE_CLOSE_POPUP: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE_POPUP') ?>',
		COMPARE_MESSAGE_OK: '<?= GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_OK') ?>',
		COMPARE_UNKNOWN_ERROR: '<?= GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_UNKNOWN_ERROR') ?>',
		COMPARE_TITLE: '<?= GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_TITLE') ?>',
		PRICE_TOTAL_PREFIX: '<?= GetMessageJS('CT_BCS_CATALOG_PRICE_TOTAL_PREFIX') ?>',
		RELATIVE_QUANTITY_MANY: '<?= CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY']) ?>',
		RELATIVE_QUANTITY_FEW: '<?= CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW']) ?>',
		BTN_MESSAGE_COMPARE_REDIRECT: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT') ?>',
		BTN_MESSAGE_LAZY_LOAD: '<?= CUtil::JSEscape($arParams['MESS_BTN_LAZY_LOAD']) ?>',
		BTN_MESSAGE_LAZY_LOAD_WAITER: '<?= GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_LAZY_LOAD_WAITER') ?>',
		SITE_ID: '<?= CUtil::JSEscape($component->getSiteId()) ?>'
	});
	var <?= $obName ?> = new JCCatalogSectionComponent({
		siteId: '<?= CUtil::JSEscape($component->getSiteId()) ?>',
		componentPath: '<?= CUtil::JSEscape($componentPath) ?>',
		navParams: <?= CUtil::PhpToJSObject($navParams) ?>,
		deferredLoad: false, // enable it for deferred load
		initiallyShowHeader: '<?= !empty($arResult['ITEM_ROWS']) ?>',
		bigData: <?= CUtil::PhpToJSObject($arResult['BIG_DATA']) ?>,
		lazyLoad: !!'<?= $showLazyLoad ?>',
		loadOnScroll: !!'<?= ($arParams['LOAD_ON_SCROLL'] === 'Y') ?>',
		template: '<?= CUtil::JSEscape($signedTemplate) ?>',
		ajaxId: '<?= CUtil::JSEscape($arParams['AJAX_ID']) ?>',
		parameters: '<?= CUtil::JSEscape($signedParams) ?>',
		displayProductsInSlider: '<?= $arParams['DISPLAY_PRODUCTS_IN_SLIDER'] ?>',
		container: '<?= $containerName ?>',
		//itemsInCart: <?//= CUtil::PhpToJSObject($itemsInCart) ?>,
		numberSlidesToShow: '<?= $arParams["NUMBER_SLIDES_TO_SHOW"] ?>'
	});
</script>
<!-- component-end -->