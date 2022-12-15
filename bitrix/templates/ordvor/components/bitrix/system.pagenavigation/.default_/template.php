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


?>

<div class="events_pg">
	<div>



	<?if ($arResult["NavPageNomer"] > 1):?>

		<?if($arResult["bSavePage"]):?>
			<a href="<?=$APPLICATION->GetCurPageParam('PAGEN_1=1', array("PAGEN_1"))?>" class="events_first">&lt;&lt;</a>
		<?else:?>
			<a href="<?=$APPLICATION->GetCurPageParam('PAGEN_1=1', array("PAGEN_1"))?>" class="events_first">&lt;&lt;</a>
		<?endif?>

	<?endif?>

	<?while($arResult["nStartPage"] <= $arResult["nEndPage"]):?>

		<?if ($arResult["nStartPage"] == $arResult["NavPageNomer"]):?>
			<span class="cur_pg"><?=$arResult["nStartPage"]?></span>
		<?elseif($arResult["nStartPage"] == 1 && $arResult["bSavePage"] == false):?>
			<a href="<?=$APPLICATION->GetCurPageParam('PAGEN_1=1', array("PAGEN_1"))?>" class="nocur_pg"><?=$arResult["nStartPage"]?></a>
		<?else:?>
			
			<a href="<?=$APPLICATION->GetCurPageParam('PAGEN_1='.$arResult["nStartPage"], array("PAGEN_1"))?>" class="nocur_pg"><?=$arResult["nStartPage"]?></a>
			
			<?php /* ?>
			<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>" class="nocur_pg"><?=$arResult["nStartPage"]?></a>
			<?php */ ?>
			
		<?endif?>
		<?$arResult["nStartPage"]++?>
	<?endwhile?>

	<?if($arResult["NavPageNomer"] < $arResult["NavPageCount"]):?>
		<a href="<?=$APPLICATION->GetCurPageParam('PAGEN_1='.$arResult["NavPageCount"], array("PAGEN_1"))?>" class="events_last">&gt;&gt;</a>
	<?endif?>





	</div>
</div>