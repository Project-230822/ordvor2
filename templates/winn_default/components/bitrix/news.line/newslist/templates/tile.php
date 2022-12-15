<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

// $this->addExternalCss(SITE_TEMPLATE_PATH.'/components/bitrix/news.list/list/style.css');

$strItemEdit = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_EDIT");
$strItemDelete = CIBlock::GetArrayByID($arParams["IBLOCK_ID"], "SECTION_DELETE");
$arItemDeleteParams = array('CONFIRM' => GetMessage('CT_BCSL_ELEMENT_DELETE_CONFIRM'));
?>

<?php if ($arParams['DISPLAY_TOP_PAGER']): ?>
	<?=$arResult['NAV_STRING']?>
<?php endif; ?>

<ul class="row list-unstyled mb-0">

<?php
foreach ($arResult['ITEMS'] as $arItem)
{
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], $strItemEdit);
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], $strItemDelete, $arItemDeleteParams);
	?>
	<li class="<?=$arParams['RS_GRID_CLASS']?> mb-6" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
		<div class="newslist-item px-md-6">
			
			<?php if (!empty($arItem['DISPLAY_ACTIVE_FROM'])): ?>
				<div class="newslist-item__info-date small font-weight-bolder text-lowercase">
					<div class="h4 m-0 lh-base"><?echo FormatDate('d', MakeTimeStamp($arItem['DISPLAY_ACTIVE_FROM']))?></div>
					<?echo FormatDate('F', MakeTimeStamp($arItem['DISPLAY_ACTIVE_FROM']))?>
				</div>
			<?php endif; ?>
			
			<h3 class="newslist-item__title mb-4 mt-5 pt-1">
				<?php if (!$arParams["HIDE_LINK_WHEN_NO_DETAIL"] || ($arItem["DETAIL_TEXT"] && $arResult["USER_HAVE_ACCESS"])): ?>
				<a href="<?=$arItem['DETAIL_PAGE_URL']?>" title="<?=$arItem['NAME']?>"><?=$arItem['NAME']?></a>
				<?php else: ?><?=$arItem['NAME']?><?php endif; ?>
			</h3>

			<?php if (!empty($arItem['PREVIEW_TEXT'])): ?>
				<div class="newslist-item__preview-text lead"><?=$arItem['PREVIEW_TEXT']?></div>
			<?php endif; ?>
		</div>

	</li>
	<?php
}
?>

</ul>

<?php if ($arParams['DISPLAY_BOTTOM_PAGER']): ?>
	<?=$arResult['NAV_STRING']?>
<?php endif; ?>
