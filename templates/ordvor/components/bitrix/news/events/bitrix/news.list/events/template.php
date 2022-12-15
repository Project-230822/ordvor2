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


<div class="events">

	<h1 class="page-title"><?=$arResult["NAME"]?></h1>
	
	<div class="events-list row row-inline">
	
		<?php foreach($arResult["ITEMS"] as $arItem):?>
		
			<div class="col-md-4 col-sm-6 col-xs-12 col-inline">
				<div class="events-item">
					<div class="events-image">
						<a class="events-detail-link" href="<?=$arItem["DETAIL_PAGE_URL"]?>" title="<?=$arItem["NAME"]?>" style="background-image: url(<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>);"></a>
					</div>
					<div class="events-date"><?=$arItem["DISPLAY_ACTIVE_FROM"]?></div>
					<div class="events-title">
						<a class="events-detail-link" href="<?=$arItem["DETAIL_PAGE_URL"]?>" title="<?=$arItem["NAME"]?>"><?=$arItem["NAME"]?></a>
					</div>
				</div>
			</div>
			
		<?php endforeach; ?>

		<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
			<br /><?=$arResult["NAV_STRING"]?>
		<?endif;?>

	</div>
</div>

