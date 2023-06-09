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
$this->setFrameMode(true); ?>
<div class='main-actions'>
	<div class='main-actions-slidebox'>
		<? foreach ($arResult["ITEMS"] as $arItem) : ?>
			<? $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM'))); ?>
			<a href='<?= $arItem["PROPERTIES"]["LINK"]["VALUE"] ?>' class="fade-out" title='<?= $arItem["NAME"] ?>' id="<?= $this->GetEditAreaId($arItem['ID']); ?>">
				<div class="image lazy" style='background-image: url(<?= $arItem["DETAIL_PICTURE"]["SRC"] ?>)'></div>
			</a>
		<? endforeach; ?>
	</div>
</div>