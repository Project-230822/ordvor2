<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Application;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 */

$this->setFrameMode(true);

$templateLibrary = array('popup', 'ajax', 'fx');
$templateData = array(
	'TEMPLATE_LIBRARY' => $templateLibrary,
);

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/catalog-item.css');

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

$elementEdit = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_EDIT');
$elementDelete = CIBlock::GetArrayByID($arParams['IBLOCK_ID'], 'ELEMENT_DELETE');
$elementDeleteParams = array('CONFIRM' => GetMessage('CT_BCS_TPL_ELEMENT_DELETE_CONFIRM'));

$generalParams = array(
);

$obName = 'ob'.preg_replace('/[^a-zA-Z0-9_]/', 'x', $this->GetEditAreaId($navParams['NavNum']));
$containerName = 'container-'.$navParams['NavNum'];
?>

<?php if (!empty($arResult['ITEMS'])): ?>
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

if ($arParams['SHOW_SECTION_DESCRIPTION'] == 'top' && strlen($arResult['PARENT_SECTION']['DESCRIPTION']) > 0)
{
	?>
	<div class="block-spacing"><?=$arResult['PARENT_SECTION']['DESCRIPTION']?></div>
	<?
}
?>

<div class="catalog-section" data-entity="<?=$containerName?>">
	<?

	$areaIds = array();

	foreach ($arResult['ITEMS'] as $item)
	{
		$uniqueId = $item['ID'].'_'.md5($this->randString());
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
		$sGridClass = '';
		if ($arResult['MODULES']['redsign.winn'])
		{
			$sGridClass = ParametersUtils::gridToString($arParams['GRID_RESPONSIVE_SETTINGS']);
		}
		?>
		<div class="row">

			<?php
			foreach ($arResult['ITEMS'] as $item)
			{
				?>
				<div class="<?=$sGridClass?> my-3 my-md-4">
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
			unset($generalParams, $rowItems);
			?>
		</div>
		<?php
	}
	?>
	<!-- items-container -->
</div>


<?
if ($showBottomPager)
{
	?>
	<div data-pagination-num="<?=$navParams['NavNum']?>" class=" py-5" data-entity="pagination">
		<!-- pagination-container -->
		<?=$arResult['NAV_STRING']?>
		<!-- pagination-container -->
	</div>
	<?
}

if ($arParams['SHOW_SECTION_DESCRIPTION'] == 'bottom' && strlen($arResult['PARENT_SECTION']['DESCRIPTION']) > 0)
{
	?>
	<div class="block-spacing"><?=$arResult['PARENT_SECTION']['DESCRIPTION']?></div>
	<?
}
?>
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
