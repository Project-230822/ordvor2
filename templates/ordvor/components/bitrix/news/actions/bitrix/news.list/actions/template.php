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


<div class="page-actions">
                
	<div class="actions-list">
	
		<?foreach($arResult["ITEMS"] as $arItem):?>
			<a href="<?=$arItem["PROPERTIES"]["LINK"]["VALUE"]?>" title="<?=$arItem["NAME"]?>" class="action-item">
				<img class="img-responsive" src="<?=$arItem["DETAIL_PICTURE"]["SRC"]?>" alt="<?=$arItem["NAME"]?>">
				<div class="title"><?=$arItem["NAME"]?></div>
			</a>
		<?endforeach;?>
		
	</div>
</div>

