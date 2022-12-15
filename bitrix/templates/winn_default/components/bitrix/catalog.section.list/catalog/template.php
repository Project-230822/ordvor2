<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

// $arViewModeList = $arResult['VIEW_MODE_LIST'];

// $arViewStyles = array(
	// 'LINE' => array(
		// 'CONT' => 'catalog_sections catalog_sections-line',
		// 'TITLE' => 'catalog_sections__title h3',
		// 'DESCRIPTION' => 'catalog_sections__descr',
		// 'LIST' => 'catalog_sections__list-line row',
		// 'EMPTY_IMG' => $this->GetFolder().'/images/no_photo.png'
	// ),
	// 'BANNER' => array(
		// 'CONT' => 'catalog_sections',
		// 'TITLE' => 'catalog_sections__title h3',
		// 'DESCRIPTION' => 'catalog_sections__descr',
		// 'LIST' => 'catalog_sections__list-banners row',
		// 'EMPTY_IMG' => $this->GetFolder().'/images/no_photo.png'
	// ),
	// 'TILE' => array(
		// 'CONT' => 'catalog_sections',
		// 'TITLE' => 'catalog_sections__title h3',
		// 'DESCRIPTION' => 'catalog_sections__descr',
		// 'LIST' => 'catalog_sections__list row',
		// 'EMPTY_IMG' => $this->GetFolder().'/images/no_photo.png'
	// ),
	// 'THUMB' => array(
		// 'CONT' => 'catalog_sections',
		// 'TITLE' => 'catalog_sections__title h3',
		// 'DESCRIPTION' => 'catalog_sections__descr',
		// 'LIST' => 'catalog_sections__list-banners row',
		// 'EMPTY_IMG' => $this->GetFolder().'/images/no_photo.png'
	// ),
// );
// $arCurView = $arViewStyles[$arParams['SECTIONS_VIEW_MODE']];

$strSectionEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strSectionDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arSectionDeleteParams = array("CONFIRM" => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));

$this->AddEditAction($arResult['SECTION']['ID'], $arResult['SECTION']['EDIT_LINK'], $strSectionEdit);
$this->AddDeleteAction($arResult['SECTION']['ID'], $arResult['SECTION']['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);

$layout = \Redsign\Winn\Layouts\Builder::createFromParams($arParams);
$layout->addData('SECTION_ATTRIBUTES', 'data-section=""');
$layout->start();

/*
	if (strlen($arResult['SECTION']['DESCRIPTION']) > 0): ?>
		<div class="<?=$arCurView['DESCRIPTION']?> row">
			<div class="col-md-8"><?=$arResult['SECTION']['DESCRIPTION']?></div>
		</div>
	<?php endif;
*/

if (0 < $arResult["SECTIONS_COUNT"])
{
?>
<ul class="row list-unstyled mb-0">
<?
	switch ($arParams['SECTIONS_VIEW_MODE'])
	{
		case 'TILE':
		default:
			$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/catalog-item.css');

			$iLvl1SectionCount = 0;

			$sGridClass = '';
			if (Loader::includeModule('redsign.winn'))
				$sGridClass = ParametersUtils::gridToString($arParams['GRID_RESPONSIVE_SETTINGS']);

			foreach ($arResult['SECTIONS'] as &$arSection)
			{
				$this->AddEditAction($arSection['ID'], $arSection['EDIT_LINK'], $strSectionEdit);
				$this->AddDeleteAction($arSection['ID'], $arSection['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);

				if ($intCurrentDepth < $arSection['RELATIVE_DEPTH_LEVEL'])
				{
					if (0 < $intCurrentDepth) {
						if ($arSection['RELATIVE_DEPTH_LEVEL'] == 2) {
							echo '<ul class="tile__sub list-inline">';
						} else {
							echo '<ul>';
						}
					}
				}
				elseif ($intCurrentDepth == $arSection['RELATIVE_DEPTH_LEVEL'])
				{
					if (!$boolFirst)
					{
						if ($arSection['RELATIVE_DEPTH_LEVEL'] == 1) {
							echo '</div>'; // .product
						}
						echo '</li>';
					}
				}
				else
				{
					while ($intCurrentDepth > $arSection['RELATIVE_DEPTH_LEVEL'])
					{
						echo '</li></ul>';
						$intCurrentDepth--;
					}
					if ($arSection['RELATIVE_DEPTH_LEVEL'] == 1)
					{
						if ($arSectionTop)
						{
							if ($arSectionTop['SECTIONS_COUNT'] > 0)
							{
								?>
								<a href="<?=$arSectionTop['SECTION_PAGE_URL']?>">
									<?=Loc::getMessage('RS_WINN_BCSL_CATALOG_SECTIONS_COUNT', array('#NUM#' => $arSectionTop['SECTIONS_COUNT']))?>
								</a>
								<?
							}
						}
						echo '</div>'; // .product 
					}
					echo '</li>';
				}
				?>
				<?php if ($arSection['RELATIVE_DEPTH_LEVEL'] == 1): ?>

					<?php
					$iLvl1SectionCount++;
					if ($arParams['LVL1_SECTION_COUNT'] > 0 && $arParams['LVL1_SECTION_COUNT'] < $iLvl1SectionCount)
					{
						$intCurrentDepth = 0;
						break;
					}
					if (empty($arSection['PICTURE']))
						$arSection['PICTURE'] = array(
							'SRC' => $this->GetFolder().'/images/no_photo.png',
							'ALT' => (
								'' != $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
								? $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_ALT"]
								: $arSection["NAME"]
							),
							'TITLE' => (
								'' != $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
								? $arSection["IPROPERTY_VALUES"]["SECTION_PICTURE_FILE_TITLE"]
								: $arSection["NAME"]
							)
						);

					$arSectionTop = $arSection;
					?><li class="<?=$sGridClass?> my-3 my-md-4" id="<?=$this->GetEditAreaId($arSection['ID']);?>">
						<div class="product product--card">
							<div class="product-image-wrapper mb-3">
								<a class="product-image-canvas" href="<?=$arSection['SECTION_PAGE_URL']?>">
									<?php
									if ($arParams['RS_LAZY_IMAGES_USE'] == 'Y')
									{
										?>
										<img class="product-image lazy-anim-bg"data-lazy-img data-src="<?=$arSection['PICTURE']['SRC']?>" src="<?=\Redsign\Winn\LazyloadUtils::getEmptyImage(1, 1);?>" alt="<?=$arSection['PICTURE']['ALT']?>" title="<?=$arSection['PICTURE']['TITLE']?>">
										<?php
									}
									else
									{
										?>
										<img class="product-image" data-aos="zoom-in" data-aos-duration="500" src="<?=$arSection['PICTURE']['SRC']?>" alt="<?=$arSection['PICTURE']['ALT']?>" title="<?=$arSection['PICTURE']['TITLE']?>">
										<?php
									}
									?>
								</a>
							</div>
							<?php if ('Y' != $arParams['HIDE_SECTION_NAME']): ?>
								<h4 class="product-title my-0 mb-md-2">
									<a class="text-body" href="<?=$arSection['SECTION_PAGE_URL']?>">
										<?php
										echo $arSection['NAME'];
										if ($arParams['COUNT_ELEMENTS'] && $arSection['ELEMENT_CNT'] > 0)
										{
											?> <span>(<?=$arSection['ELEMENT_CNT']?>)</span><?
										}
										?>
									</a>
								</h4>
							<?php endif; ?>

				<?php else: ?>
					<li id="<?=$this->GetEditAreaId($arSection['ID']);?>" class="list-inline-item">
						<a href="<?=$arSection["SECTION_PAGE_URL"]?>"><?=$arSection["NAME"];?><?
						if ($arParams['COUNT_ELEMENTS'] && $arSection['ELEMENT_CNT'] > 0)
						{
							?> <span>(<?=$arSection['ELEMENT_CNT']?>)</span><?
						}
						?></a>
				<?php endif; ?>

				<?php
				$intCurrentDepth = $arSection['RELATIVE_DEPTH_LEVEL'];
				$boolFirst = false;
			}
			unset($arSection);
			while ($intCurrentDepth > 1)
			{
				echo '</li></ul>';
				$intCurrentDepth--;
			}
			if ($intCurrentDepth > 0)
			{
				echo '</div></div>'; // .product,
				echo '</li>';
			}
			break;
	}
?>
</ul>
<?
}

$layout->end();
