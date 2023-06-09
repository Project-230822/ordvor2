<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
?>
<div class='main-slider'>
	<? foreach ($arResult["ITEMS"] as $arItem) : ?>
		<? $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM'))); ?>
		<div class="item lazy" <?/*style='background-image: url(<?=$arItem["DETAIL_PICTURE"]["SRC"]?>);'*/ ?> data-bg='<?= $arItem["DETAIL_PICTURE"]["SRC"] ?>' id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
			<div class="container">
				<div class="title"></div>
				<?php if ($arItem["PROPERTIES"]["LINK"]["VALUE"] && $arItem["PROPERTIES"]["BUTTON_TEXT"]["VALUE"]) : ?>
					<!--<a class="slider-link" href="<?= $arItem["PROPERTIES"]["LINK"]["VALUE"] ?>" tabindex="0">
						<?//= $arItem["PROPERTIES"]["BUTTON_TEXT"]["VALUE"] ?>
					</a>-->
				<?php endif; ?>
			</div>
		</div>
	<? endforeach; ?>
</div>