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

<div class='banners-wrap<?=$arParams['IN_DETAIL']=="Y"?" in-detail":"";?>'>
	<div class="row">
    	<?foreach($arResult["ITEMS"] as $arItem):?>
    		<?
    		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
    		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
    		?>
    		<div class="<?=$arParams['IN_DETAIL']=="Y"?"col-md-12 col-sm-6 col-xs-12":"col-sm-6";?>">
    			<?if($arItem['PROPERTIES']['LINK']['VALUE']) {?>
        		<a href="<?=$arItem['PROPERTIES']['LINK']['VALUE'];?>"<?=$arItem['PROPERTIES']['TARGET']['VALUE']?" target='_blank'":"";?> class="banner-wrap">
    			<?} else {?>
        		<div class="banner-wrap">
        		<?}?>
        			<img src="<?=$arItem['DETAIL_PICTURE']['SRC'];?>" title="<?=$arItem['NAME']?>" alt="<?=$arItem['NAME']?>" />
    			<?if($arItem['PROPERTIES']['LINK']['VALUE']) {?>
        		</a>
    			<?} else {?>
        		</div>
        		<?}?>
    		</div>
    	<?endforeach;?>
	</div>
</div>
