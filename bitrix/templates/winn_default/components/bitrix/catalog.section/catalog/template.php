<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Application;
use \Bitrix\Main\Web\Uri;

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

$this->setFrameMode(true);
$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/catalog-item.css');
$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/banners.css');

$request = Application::getInstance()->getContext()->getRequest();

if (!empty($arResult['NAV_RESULT']))
{
	$navParams =  array(
		'NavPageCount' => $arResult['NAV_RESULT']->NavPageCount,
		'NavPageNomer' => $arResult['NAV_RESULT']->NavPageNomer,
		'NavNum' => $arResult['NAV_RESULT']->NavNum
	);
}
else
{
	$navParams = array(
		'NavPageCount' => 1,
		'NavPageNomer' => 1,
		'NavNum' => $this->randString()
	);
}

$showTopPager = false;
$showBottomPager = false;
$showLazyLoad = false;
// $showFilter = is_array($arParams['FILTER_PROPS']) && count($arParams['FILTER_PROPS']) > 0;

if ($arParams['PAGE_ELEMENT_COUNT'] > 0 && $navParams['NavPageCount'] > 1)
{
	$showTopPager = $arParams['DISPLAY_TOP_PAGER'];
	$showBottomPager = $arParams['DISPLAY_BOTTOM_PAGER'];
	$showLazyLoad = $arParams['LAZY_LOAD'] === 'Y' && $navParams['NavPageNomer'] != $navParams['NavPageCount'];
}

$templateLibrary = array('popup', 'ajax', 'fx');
$currencyList = '';

if (!empty($arResult['CURRENCIES']))
{
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
	'left' => 'product-label-left',
	'center' => 'product-label-center',
	'right' => 'product-label-right',
	'bottom' => 'product-label-bottom',
	'middle' => 'product-label-middle',
	'top' => 'product-label-top'
);

$discountPositionClass = '';
if ($arParams['SHOW_DISCOUNT_PERCENT'] === 'Y' && !empty($arParams['DISCOUNT_PERCENT_POSITION']))
{
	foreach (explode('-', $arParams['DISCOUNT_PERCENT_POSITION']) as $pos)
	{
		$discountPositionClass .= isset($positionClassMap[$pos]) ? ' '.$positionClassMap[$pos] : '';
	}
}

$labelPositionClass = '';
if (!empty($arParams['LABEL_PROP_POSITION']))
{
	foreach (explode('-', $arParams['LABEL_PROP_POSITION']) as $pos)
	{
		$labelPositionClass .= isset($positionClassMap[$pos]) ? ' '.$positionClassMap[$pos] : '';
	}
}

$arParams['~MESS_BTN_BUY'] = $arParams['~MESS_BTN_BUY'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_BUY');
$arParams['~MESS_BTN_DETAIL'] = $arParams['~MESS_BTN_DETAIL'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_DETAIL');
$arParams['~MESS_BTN_COMPARE'] = $arParams['~MESS_BTN_COMPARE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_COMPARE');
$arParams['~MESS_BTN_SUBSCRIBE'] = $arParams['~MESS_BTN_SUBSCRIBE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_SUBSCRIBE');
$arParams['~MESS_BTN_ADD_TO_BASKET'] = $arParams['~MESS_BTN_ADD_TO_BASKET'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_ADD_TO_BASKET');
$arParams['~MESS_NOT_AVAILABLE'] = $arParams['~MESS_NOT_AVAILABLE'] ?: Loc::getMessage('CT_BCS_TPL_MESS_PRODUCT_NOT_AVAILABLE');
// $arParams['~MESS_SHOW_MAX_QUANTITY'] = $arParams['~MESS_SHOW_MAX_QUANTITY'] ?: Loc::getMessage('CT_BCS_CATALOG_SHOW_MAX_QUANTITY');
$arParams['~MESS_RELATIVE_QUANTITY_MANY'] = $arParams['~MESS_RELATIVE_QUANTITY_MANY'] ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_MANY');
$arParams['~MESS_RELATIVE_QUANTITY_FEW'] = $arParams['~MESS_RELATIVE_QUANTITY_FEW'] ?: Loc::getMessage('CT_BCS_CATALOG_RELATIVE_QUANTITY_FEW');
$arParams['~MESS_ECONOMY_INFO2'] = Loc::getMessage('RS_WINN_BCS_CATALOG_ECONOMY_INFO2');
$arParams['~MESS_ITEM_ARTNUMBER'] = Loc::getMessage('RS_WINN_BCS_CATALOG_ITEM_ARTNUMBER_MESSAGE');
$arParams['~MESS_BTN_FEEDBACK'] = $arParams['~MESS_BTN_FEEDBACK'] ?: Loc::getMessage('CT_BCS_TPL_MESS_BTN_BUY');

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
	'USE_PRODUCT_QUANTITY' => false, // $arParams['USE_PRODUCT_QUANTITY'],
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
	'MESS_BTN_FEEDBACK' => $arParams['~MESS_BTN_FEEDBACK'],
	'LINK_BTN_FEEDBACK' => $arParams['LINK_BTN_FEEDBACK'],

	// 'PRODUCT_BLOCKS' => $arParams['PRODUCT_BLOCKS'],
	'MESS_ECONOMY_INFO2' => $arParams['~MESS_ECONOMY_INFO2'],
	'MESS_ITEM_ARTNUMBER' => $arParams['~MESS_ITEM_ARTNUMBER'],
	'IS_USE_CART' => $arParams['IS_USE_CART'],
	'BASKET_URL' => $arParams['BASKET_URL'],
	'USE_VOTE_RATING' => $arParams['USE_VOTE_RATING'],
	'VOTE_DISPLAY_AS_RATING' => $arParams['VOTE_DISPLAY_AS_RATING'],
	'SHOW_RATING' => $arParams['SHOW_RATING'],
	'GRID_RESPONSIVE_SETTINGS' => $arParams['GRID_RESPONSIVE_SETTINGS'],
	'USE_FAVORITE' => $arParams['USE_FAVORITE'],
	'FAVORITE_COUNT_PROP' => $arParams['FAVORITE_COUNT_PROP'],
	'OFFER_TREE_DROPDOWN_PROPS' => $arParams['OFFER_TREE_DROPDOWN_PROPS'],
	'USE_GIFTS' => $arParams['USE_GIFTS'],
	'DISPLAY_PREVIEW_TEXT' => $arParams['DISPLAY_PREVIEW_TEXT'],
	'PREVIEW_TRUNCATE_LEN' => $arParams['PREVIEW_TRUNCATE_LEN'],
	'PRODUCT_PREVIEW' => $arParams['PRODUCT_PREVIEW'],
	'TEMPLATE_VIEW' => $arParams['TEMPLATE_VIEW'],
	'SHOW_ARTNUMBER' => $arParams['SHOW_ARTNUMBER'],
	'ARTNUMBER_PROP' => $arParams['ARTNUMBER_PROP'],
	// 'RS_LAZY_IMAGES_USE' => $arParams['RS_LAZY_IMAGES_USE'],
	'USE_FEEDBACK' => $arParams['USE_FEEDBACK'],
);

$obName = 'ob'.preg_replace('/[^a-zA-Z0-9_]/', 'x', $this->GetEditAreaId($navParams['NavNum']));
$containerName = 'container-'.$navParams['NavNum'];
?>
<div id="<?=$arParams['AJAX_ID']?>">
<?php if (!empty($arResult['ITEMS']) && !empty($arResult['ITEM_ROWS'])): ?>
<?php
$mainId = $this->GetEditAreaId($arResult['ID'] ?: 'section');
?>

<!-- section-container -->

<?php
if ($showTopPager)
{
	?>
	<div class="py-5" data-entity="pagination" data-pagination-num="<?=$navParams['NavNum']?>">
		<!-- pagination-container -->
		<?=$arResult['NAV_STRING']?>
		<!-- pagination-container -->
	</div>
	<?
}


if ($arParams['SHOW_SECTION_DESCRIPTION'] == 'top' && strlen($arResult['DESCRIPTION']) > 0)
{
	?>
	<div class="py-6"><?=$arResult['DESCRIPTION']?></div>
	<?
}
?>

<div class="catalog-section" data-entity="<?=$containerName?>">
	<?
	if (!empty($arResult['ITEMS']) && !empty($arResult['ITEM_ROWS']))
	{
		$areaIds = array();

		foreach ($arResult['ITEMS'] as $item)
		{
			$uniqueId = $item['ID'].'_'.md5($this->randString().$component->getAction());
			$areaIds[$item['ID']] = $this->GetEditAreaId($uniqueId);
			$this->AddEditAction($uniqueId, $item['EDIT_LINK'], $elementEdit);
			$this->AddDeleteAction($uniqueId, $item['DELETE_LINK'], $elementDelete, $elementDeleteParams);
		}
		?>
		<!-- items-container -->
		<?
		if ($arParams['USE_OWL'] == 'Y')
		{
			if (is_array($arParams['SLIDER_RESPONSIVE_SETTINGS']) && count($arParams['SLIDER_RESPONSIVE_SETTINGS']) > 0)
			{
				$arSliderOptions = array_merge(
					array(
						'responsive' => $arParams['SLIDER_RESPONSIVE_SETTINGS'],
					),
					array(
						'items' => 1,
						'margin' => 40,
						'dots' => false,
					)
				);
			}
			else
			{
				$arSliderOptions = array(
					'margin' => 40,
				);
			}

			if (isset($arParams['OWL_CHANGE_DELAY']) && (int)$arParams['OWL_CHANGE_DELAY'] > 0)
			{
				$arSliderOptions['autoplay'] = true;
				$arSliderOptions['autoplayTimeout'] = $arParams['OWL_CHANGE_DELAY'];

				if (isset($arParams['OWL_CHANGE_SPEED']) && (int)$arParams['OWL_CHANGE_SPEED'] >= 0)
				{
					$arSliderOptions['autoplaySpeed'] = $arParams['OWL_CHANGE_SPEED'];
					$arSliderOptions['smartSpeed'] = $arParams['OWL_CHANGE_SPEED'];
				}
				else
				{
					$arSliderOptions['autoplaySpeed'] = 2000;
					$arSliderOptions['smartSpeed'] = 2000;
				}
			}
			?>
			<div data-slider="<?=$containerName?>" data-slider-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arSliderOptions))?>" class="row show-items-xs-1 show-items-md-2 show-item-lg-3 show-items-xl-4">

				<?php
				foreach ($arResult['ITEMS'] as $item)
				{
					?>
					<div class="col col-12 col-md-6 col-lg-4 col-xl-3">
					<?php
					$APPLICATION->IncludeComponent(
						'bitrix:catalog.item',
						'catalog',
						array(
							'RESULT' => array(
								'ITEM' => $item,
								'AREA_ID' => $areaIds[$item['ID']],
								'TYPE' => 'CARD',
								'MODULES' => $arResult['MODULES'],
								// 'BIG_LABEL' => 'N',
								// 'BIG_DISCOUNT_PERCENT' => 'N',
								// 'BIG_BUTTONS' => 'N',
								// 'SCALABLE' => 'N'
							),
							'PARAMS' => $generalParams
								+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']])
						),
						$component,
						array('HIDE_ICONS' => 'Y')
					);
					?>
					</div>
					<?php
				}
				?>
			</div>
			<div data-slider-nav-sm="<?=$containerName?>" class="slider-nav-sm mt-1"></div>
			<?php
		}
		else
		{
			$skipRowSteps = 0;
		foreach ($arResult['ITEM_ROWS'] as $keyRowData => $rowData)
		{
			if ($skipRowSteps-- > 0)
			{
				continue;
			}

			$rowItems = array_splice($arResult['ITEMS'], 0, $rowData['COUNT']);
			?>
			<div class="row <?=$rowData['CLASS']?>" data-entity="items-row">
				<?
				switch ($rowData['VARIANT'])
				{
					case 0:
						if ($arResult['ITEM_ROWS'][$keyRowData + 1]['VARIANT'] === 0)
						{
							$skipRowSteps = 1;

							$rowItems = array_merge(
								$rowItems,
								array_splice($arResult['ITEMS'], 0, $rowData['COUNT'])
							);

							foreach ($rowItems as $item)
							{
								?>
								<div class="col-6 col-lg-12 my-3 my-lg-4">
									<?
									$APPLICATION->IncludeComponent(
										'bitrix:catalog.item',
										'catalog',
										array(
											'RESULT' => array(
												'ITEM' => $item,
												'AREA_ID' => $areaIds[$item['ID']],
												'TYPE' => 'LINE', // $rowData['TYPE'],
												'MODULES' => $arResult['MODULES'],
												// 'BIG_LABEL' => 'N',
												// 'BIG_DISCOUNT_PERCENT' => 'N',
												'BIG_BUTTONS' => 'Y',
												// 'SCALABLE' => 'N'
											),
											'PARAMS' => array('USE_PRODUCT_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'])
												+ $generalParams
												+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
											'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
										),
										$component,
										array('HIDE_ICONS' => 'Y')
									);
									?>
								</div>
								<?
							}
						}
						else
						{
							?>
							<div class="col-12 my-3 my-md-4">
								<?
								$item = reset($rowItems);
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => 'LINE', // $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											'BIG_BUTTONS' => 'Y',
											// 'SCALABLE' => 'N'
										),
										'PARAMS' => array('USE_PRODUCT_QUANTITY' => $arParams['USE_PRODUCT_QUANTITY'])
											+ $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

					case 1:
						foreach ($rowItems as $item)
						{
							?>
							<div class="col-6 my-3 my-md-4">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'N',
											// 'SCALABLE' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

					case 2:
						foreach ($rowItems as $key => $item)
						{
							?>
							<div class="<?=($key == 2 ? 'col-12' : 'col-6');?> col-sm-4 my-3 my-md-4">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'Y',
											// 'SCALABLE' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

					case 3:
						foreach ($rowItems as $item)
						{
							?>
							<div class="col-12 col-sm-6 col-lg-3 my-3 my-md-4">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'N',
											// 'SCALABLE' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

					case 4:
						$rowItemsCount = count($rowItems);
						?>
						<div class="col-12 col-sm-6 my-3 my-md-4">
							<?
							$item = array_shift($rowItems);
							$APPLICATION->IncludeComponent(
								'bitrix:catalog.item',
								'catalog',
								array(
									'RESULT' => array(
										'ITEM' => $item,
										'AREA_ID' => $areaIds[$item['ID']],
										'TYPE' => $rowData['TYPE'],
										'MODULES' => $arResult['MODULES'],
										// 'BIG_LABEL' => 'N',
										// 'BIG_DISCOUNT_PERCENT' => 'N',
										// 'BIG_BUTTONS' => 'Y',
										// 'SCALABLE' => 'Y'
									),
									'PARAMS' => $generalParams
										+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
									'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
								),
								$component,
								array('HIDE_ICONS' => 'Y')
							);
							unset($item);
							?>
						</div>
						<div class="col-12 col-sm-6 my-3 my-md-4">
							<div class="row">
								<?
								for ($i = 0; $i < $rowItemsCount - 1; $i++)
								{
									?>
									<div class="col-6">
										<?
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'catalog',
											array(
												'RESULT' => array(
													'ITEM' => $rowItems[$i],
													'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
													'TYPE' => $rowData['TYPE'],
													'MODULES' => $arResult['MODULES'],
													// 'BIG_LABEL' => 'N',
													// 'BIG_DISCOUNT_PERCENT' => 'N',
													// 'BIG_BUTTONS' => 'N',
													// 'SCALABLE' => 'N'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']]),
												'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
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
						<div class="col-12 col-sm-6 my-3 my-md-4">
							<div class="row">
								<?
								for ($i = 0; $i < $rowItemsCount - 1; $i++)
								{
									?>
									<div class="col-6">
										<?
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'catalog',
											array(
												'RESULT' => array(
													'ITEM' => $rowItems[$i],
													'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
													'TYPE' => $rowData['TYPE'],
													'MODULES' => $arResult['MODULES'],
													// 'BIG_LABEL' => 'N',
													// 'BIG_DISCOUNT_PERCENT' => 'N',
													// 'BIG_BUTTONS' => 'N',
													// 'SCALABLE' => 'N'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']]),
												'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
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
						<div class="col-12 col-sm-6 my-3 my-md-4">
							<?
							$item = end($rowItems);
							$APPLICATION->IncludeComponent(
								'bitrix:catalog.item',
								'catalog',
								array(
									'RESULT' => array(
										'ITEM' => $item,
										'AREA_ID' => $areaIds[$item['ID']],
										'TYPE' => $rowData['TYPE'],
										'MODULES' => $arResult['MODULES'],
										// 'BIG_LABEL' => 'N',
										// 'BIG_DISCOUNT_PERCENT' => 'N',
										// 'BIG_BUTTONS' => 'Y',
										// 'SCALABLE' => 'Y'
									),
									'PARAMS' => $generalParams
										+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
									'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
								),
								$component,
								array('HIDE_ICONS' => 'Y')
							);
							unset($item);
							?>
						</div>
						<?
						break;

					case 6:
						foreach ($rowItems as $item)
						{
							?>
							<div class="col-6 col-sm-4 col-lg-2 my-3 my-md-4">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'N',
											// 'SCALABLE' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}

						break;

					case 7:
						$rowItemsCount = count($rowItems);
						?>
						<div class="col-12 col-md-6 my-3 my-md-4">
							<?
							$item = array_shift($rowItems);
							$APPLICATION->IncludeComponent(
								'bitrix:catalog.item',
								'catalog',
								array(
									'RESULT' => array(
										'ITEM' => $item,
										'AREA_ID' => $areaIds[$item['ID']],
										'TYPE' => $rowData['TYPE'],
										'MODULES' => $arResult['MODULES'],
										// 'BIG_LABEL' => 'N',
										// 'BIG_DISCOUNT_PERCENT' => 'N',
										// 'BIG_BUTTONS' => 'Y',
										// 'SCALABLE' => 'Y'
									),
									'PARAMS' => $generalParams
										+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
									'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
								),
								$component,
								array('HIDE_ICONS' => 'Y')
							);
							unset($item);
							?>
						</div>
						<div class="col-12 col-md-6 my-3 my-md-4">
							<div class="row">
								<?
								for ($i = 0; $i < $rowItemsCount - 1; $i++)
								{
									?>
									<div class="col-6 col-md-4">
										<?
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'catalog',
											array(
												'RESULT' => array(
													'ITEM' => $rowItems[$i],
													'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
													'TYPE' => $rowData['TYPE'],
													'MODULES' => $arResult['MODULES'],
													// 'BIG_LABEL' => 'N',
													// 'BIG_DISCOUNT_PERCENT' => 'N',
													// 'BIG_BUTTONS' => 'N',
													// 'SCALABLE' => 'N'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']]),
												'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
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
						<div class="col-12 col-md-6 my-3 my-md-4">
							<div class="row">
								<?
								for ($i = 0; $i < $rowItemsCount - 1; $i++)
								{
									?>
									<div class="col-6 col-md-4">
										<?
										$APPLICATION->IncludeComponent(
											'bitrix:catalog.item',
											'catalog',
											array(
												'RESULT' => array(
													'ITEM' => $rowItems[$i],
													'AREA_ID' => $areaIds[$rowItems[$i]['ID']],
													'TYPE' => $rowData['TYPE'],
													'MODULES' => $arResult['MODULES'],
													// 'BIG_LABEL' => 'N',
													// 'BIG_DISCOUNT_PERCENT' => 'N',
													// 'BIG_BUTTONS' => 'N',
													// 'SCALABLE' => 'N'
												),
												'PARAMS' => $generalParams
													+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$rowItems[$i]['IBLOCK_ID']]),
												'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
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
						<div class="col-12 col-md-6 my-3 my-md-4">
							<?
							$item = end($rowItems);
							$APPLICATION->IncludeComponent(
								'bitrix:catalog.item',
								'catalog',
								array(
									'RESULT' => array(
										'ITEM' => $item,
										'AREA_ID' => $areaIds[$item['ID']],
										'TYPE' => $rowData['TYPE'],
										'MODULES' => $arResult['MODULES'],
										// 'BIG_LABEL' => 'N',
										// 'BIG_DISCOUNT_PERCENT' => 'N',
										// 'BIG_BUTTONS' => 'Y',
										// 'SCALABLE' => 'Y'
									),
									'PARAMS' => $generalParams
										+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
									'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
								),
								$component,
								array('HIDE_ICONS' => 'Y')
							);
							unset($item);
							?>
						</div>
						<?
						break;

					case 9:
						foreach ($rowItems as $item)
						{
							?>
							<div class="col-12 product-table-card">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => 'TABLE', // $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

					case 10:
					case 11:
						foreach ($rowItems as $item)
						{
							?>
							<div class="col-6 col-lg-5ths my-3 my-md-4">
								<?
								$APPLICATION->IncludeComponent(
									'bitrix:catalog.item',
									'catalog',
									array(
										'RESULT' => array(
											'ITEM' => $item,
											'AREA_ID' => $areaIds[$item['ID']],
											'TYPE' => $rowData['TYPE'],
											'MODULES' => $arResult['MODULES'],
											// 'BIG_LABEL' => 'N',
											// 'BIG_DISCOUNT_PERCENT' => 'N',
											// 'BIG_BUTTONS' => 'N'
										),
										'PARAMS' => $generalParams
											+ array('SKU_PROPS' => $arResult['SKU_PROPS'][$item['IBLOCK_ID']]),
										'SECTION_ADD_TO_BASKET_ACTION' => $arParams['SECTION_ADD_TO_BASKET_ACTION'],
									),
									$component,
									array('HIDE_ICONS' => 'Y')
								);
								?>
							</div>
							<?
						}
						break;

				}
				?>
			</div>
			<?
		}
		unset($generalParams, $rowItems);
		}
		?>
		<!-- items-container -->
		<?
	}
	else
	{
		// load css for bigData/deferred load
		$APPLICATION->IncludeComponent(
			'bitrix:catalog.item',
			'catalog',
			array(),
			$component,
			array('HIDE_ICONS' => 'Y')
		);
	}
	?>
</div>

<div data-entity="lazyload">
<?
if ($showLazyLoad)
{
	?>
	<!-- pagination-lazyload -->
	<div class="py-5 text-center">
		<div class="btn btn-outline-primary btn-decolor btn-lg ripple"
			data-use="show-more-<?=$navParams['NavNum']?>">
			<?=$arParams['MESS_BTN_LAZY_LOAD']?>
		</div>
	</div>
	<!-- pagination-lazyload -->
	<?
}?>
</div>

<?
if (!$showLazyLoad && $showBottomPager)
{
	?>
	<div data-pagination-num="<?=$navParams['NavNum']?>" class=" py-5" data-entity="pagination">
		<!-- pagination-container -->
		<?=$arResult['NAV_STRING']?>
		<!-- pagination-container -->
	</div>
	<?
}

if ($arParams['SHOW_SECTION_DESCRIPTION'] == 'bottom' && strlen($arResult['DESCRIPTION']) > 0)
{
	?>
	<div class="py-6"><?=$arResult['DESCRIPTION']?></div>
	<?
}

$signer = new \Bitrix\Main\Security\Sign\Signer;
$signedTemplate = $signer->sign($templateName, 'catalog.section');
$signedParams = $signer->sign(base64_encode(serialize($arResult['ORIGINAL_PARAMETERS'])), 'catalog.section');
?>
<script>
	BX.message({
		BTN_MESSAGE_BASKET_REDIRECT: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_BASKET_REDIRECT')?>',
		BASKET_URL: '<?=$arParams['BASKET_URL']?>',
		ADD_TO_BASKET_OK: '<?=GetMessageJS('ADD_TO_BASKET_OK')?>',
		TITLE_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_TITLE_ERROR')?>',
		TITLE_BASKET_PROPS: '<?=GetMessageJS('CT_BCS_CATALOG_TITLE_BASKET_PROPS')?>',
		TITLE_SUCCESSFUL: '<?=GetMessageJS('ADD_TO_BASKET_OK')?>',
		BASKET_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_BASKET_UNKNOWN_ERROR')?>',
		BTN_MESSAGE_SEND_PROPS: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_SEND_PROPS')?>',
		BTN_MESSAGE_CLOSE: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE')?>',
		BTN_MESSAGE_CLOSE_POPUP: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_CLOSE_POPUP')?>',
		COMPARE_MESSAGE_OK: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_OK')?>',
		COMPARE_UNKNOWN_ERROR: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_UNKNOWN_ERROR')?>',
		COMPARE_TITLE: '<?=GetMessageJS('CT_BCS_CATALOG_MESS_COMPARE_TITLE')?>',
		PRICE_TOTAL_PREFIX: '<?=GetMessageJS('CT_BCS_CATALOG_PRICE_TOTAL_PREFIX')?>',
		RELATIVE_QUANTITY_MANY: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_MANY'])?>',
		RELATIVE_QUANTITY_FEW: '<?=CUtil::JSEscape($arParams['MESS_RELATIVE_QUANTITY_FEW'])?>',
		BTN_MESSAGE_COMPARE_REDIRECT: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_COMPARE_REDIRECT')?>',
		BTN_MESSAGE_LAZY_LOAD: '<?=CUtil::JSEscape($arParams['MESS_BTN_LAZY_LOAD'])?>',
		BTN_MESSAGE_LAZY_LOAD_WAITER: '<?=GetMessageJS('CT_BCS_CATALOG_BTN_MESSAGE_LAZY_LOAD_WAITER')?>',
		BTN_COMPARE_DEL: '<?=GetMessageJS('RS_WINN_BCS_CATALOG_BTN_COMPARE_ADD')?>',
		BTN_COMPARE_ADD: '<?=GetMessageJS('RS_WINN_BCS_CATALOG_BTN_COMPARE_DEL')?>',
		ITEM_ARTNUMBER_MESSAGE: '<?=GetMessageJS('RS_WINN_BCS_CATALOG_ITEM_ARTNUMBER_MESSAGE')?>',
		SLIDER_MORE_MESSAGE: '<?=GetMessageJS('RS_WINN_BCS_CATALOG_SLIDER_MORE_MESSAGE')?>',
		ECONOMY_INFO_MESSAGE: '<?=GetMessageJS('RS_WINN_BCS_CATALOG_ECONOMY_INFO2')?>',
		SITE_ID: '<?=CUtil::JSEscape($component->getSiteId())?>'
	});
	var <?=$obName?> = new JCCatalogSectionComponent({
		siteId: '<?=CUtil::JSEscape($component->getSiteId())?>',
		componentPath: '<?=CUtil::JSEscape($componentPath)?>',
		navParams: <?=CUtil::PhpToJSObject($navParams)?>,
		deferredLoad: false, // enable it for deferred load
		initiallyShowHeader: '<?=!empty($arResult['ITEM_ROWS'])?>',
		bigData: <?=CUtil::PhpToJSObject($arResult['BIG_DATA'])?>,
		lazyLoad: !!'<?=$showLazyLoad?>',
		loadOnScroll: !!'<?=($arParams['LOAD_ON_SCROLL'] === 'Y')?>',
		template: '<?=CUtil::JSEscape($signedTemplate)?>',
		ajaxId: '<?=CUtil::JSEscape($arParams['AJAX_ID'])?>',
		parameters: '<?=CUtil::JSEscape($signedParams)?>',
		container: '<?=$containerName?>'
	});
</script>

<!-- section-container -->
<!-- component-end -->

<?php else: ?>

	<?php
	if ($arParams['SHOW_ERROR_SECTION_EMPTY'] == 'Y')
	{
		?>
		<div class="text-center">
			<div class="text-primary mb-5">
				<svg class="icon-svg" style="font-size:3.75rem"><use xlink:href="#svg-shop"></use></svg>
			</div>
			<div class="h3"><?=$arParams['MESS_ERROR_SECTION_EMPTY']?></div>
			<p class="mb-4 mb-md-7"><?=Loc::getMessage('RS_WINN_BCS_CATALOG_ERROR_EMPTY_ITEMS2')?></p>
			<a class="btn btn-primary btn-decolor btn-lg" href="<?=SITE_DIR?>"><?=Loc::getMessage('RS_WINN_BCS_CATALOG_HOME_PAGE')?></a>
		</div>
		<?php
	}
	?>
	<!-- items-container -->
	<!-- items-container -->
<?php endif; ?>
</div>
