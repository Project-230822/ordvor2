<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\MyTemplate;

$arSliderOptions = array(
	'margin' => 0,
	'nav' => true,
	'navClass' => array('owl-prev btn btn-icon btn-opacity-dark', 'owl-next btn btn-icon btn-opacity-dark'),
	'navText' => array(
		'<svg class="icon icon-svg"><use xlink:href="#svg-chevron-left"></use></svg>',
		'<svg class="icon icon-svg"><use xlink:href="#svg-chevron-right"></use></svg>'
	),
	'dots' => true,
	'dotsData' => false,
/*
	'dotsData' => true,
	'dotsContainer' => '#'.$itemIds['BIG_SLIDER_DOTS_ID'],
*/
	'items' => 1,
	'responsive' => array(),
	'loop' => true,
);

if (!empty($actualItem['MORE_PHOTO']))
{
	if (is_array($actualItem['MORE_PHOTO']) && count($actualItem['MORE_PHOTO']) > 0)
	{
		?>
		<div class="product--detail__slider-zoom-btn btn btn-icon btn-opacity-dark" data-entity="images-zoom"><svg class="icon icon-svg"><use xlink:href="#svg-full_view"></use></svg></div>
		<div class="product--detail__slider-images-container show-items-1" id="<?=$itemIds['SLIDER_CONT_ID']?>"
			data-entity="images-container" data-slider="<?=$itemIds['BIG_SLIDER_ID']?>" data-slider-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arSliderOptions))?>"
		>
			<?php
			$iSlideIndex = 0;

			foreach ($actualItem['MORE_PHOTO'] as $key => $arPhoto)
			{
				?>
				<div class="product--detail__slider-image d-flex align-items-center justify-content-center no-barba"
					data-fancybox="gallery" 
					data-caption="<?=$strTitle?>"
					data-src="<?=$arPhoto['SRC']?>"
					data-entity="image" 
					data-index="<?=$iSlideIndex++?>"
					data-options='{"slideShow" : false}'
<?
/*
					data-dot="<button class='owl-preview' style='background-image:url(<?=isset($arPhoto['RESIZE']['small']['src']) ? $arPhoto['RESIZE']['small']['src'] : $arPhoto['SRC']?>)'></button>"
*/
?>
				><?php
					?><img src="<?=isset($arPhoto['RESIZE']['big']['src']) ? $arPhoto['RESIZE']['big']['src'] : $arPhoto['SRC']?>" alt="<?=$alt?>" title="<?=$title?>"<?=($key == 0 ? ' itemprop="image"' : '')?>><?php
				?></div>
				<?
			}
/*
			if(!empty($arResult["DISPLAY_PROPERTIES"]["HTML_VIDEO"]["VALUE"]["TEXT"])){
			?>
			
				<a class="product--detail__slider-image no-barba"
					data-fancybox="gallery" 
					data-caption="<?=$strTitle?>"
					href="<?=$arResult["DISPLAY_PROPERTIES"]["HTML_VIDEO"]["VALUE"]["TEXT"]?>"
					data-entity="image" 
					data-index="<?=$iSlideIndex++?>"
					data-options='{"slideShow" : false}'
					data-dot="<button class='owl-preview' style='background-image:url(<?=SITE_TEMPLATE_PATH?>/components/bitrix/catalog.element/catalog/images/play_icon.png)'></button>"
				>
					<img src="<?=SITE_TEMPLATE_PATH?>/components/bitrix/catalog.element/catalog/images/play_icon_652.png" alt="<?=$alt?>" >
					<?php
				?></a>
			<?}
*/
			?>
		</div>
		<?php
	}
}
