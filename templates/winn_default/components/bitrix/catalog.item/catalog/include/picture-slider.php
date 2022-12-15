<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $item
 * @var array $actualItem
 * @var array $minOffer
 * @var array $itemIds
 * @var array $price
 * @var array $measureRatio
 * @var bool $haveOffers
 * @var bool $showSubscribe
 * @var array $morePhoto
 * @var bool $showSlider
 * @var string $imgTitle
 * @var string $productTitle
 * @var string $buttonSizeClass
 * @var CatalogSectionComponent $component
 */

use \Bitrix\Main\Localization\Loc;
?>
<span class="product-image-slider slide" id="<?=$itemIds['PICT_SLIDER']?>"
	<?=($showSlider ? '' : 'style="display: none;"')?>>
	<?
	if ($showSlider)
	{
		foreach ($morePhoto as $key => $photo)
		{
			?>
			<span class="product-image-slide item<?=($key == 0 ? ' active' : '')?>">
				<?php
				if ($arParams['RS_LAZY_IMAGES_USE'] == 'Y')
				{
					?>
					<img class="product-image lazy-anim-img" data-src="<?=$photo['SRC']?>" src="<?=\Redsign\Winn\LazyloadUtils::getEmptyImage(1, 1);?>" alt="">
					<?php
				}
				else
				{
					?>
					<img class="product-image" src="<?=$photo['SRC']?>" alt="">
					<?php
				}
				
				if ($key > $arParams['SLIDER_SLIDE_COUNT'] - 1 && count($morePhoto) > $arParams['SLIDER_SLIDE_COUNT'])
				{
					?>
					<span class="product-image-slider-more">
						<span class="product-image-slider-more-wrapper">
							<span class="product-image-slider-more-icon">
								<svg class="icon-svg"><use xlink:href="#svg-camera"></use></svg>
							</span>
							<span class="product-image-slider-more-text">
								<?=Loc::getMessage('RS_WINN_BCI_CATALOG_SLIDER_MORE_MESSAGE',  array('#NUMBER#' => count($morePhoto) - $arParams['SLIDER_SLIDE_COUNT']))?>
							</span>
						</span>
					</span>
					<?php
				}
				?>
			</span>
			<?php
		}
	}
	?>
</span>

<span class="product-image-slider-control-container" id="<?=$itemIds['PICT_SLIDER']?>_indicator"
	<?=($showSlider ? '' : 'style="display: none;"')?>>
	<?
	if ($showSlider)
	{
		foreach ($morePhoto as $key => $photo)
		{
			?>
			<span class="product-image-slider-control<?=($key == 0 ? ' active' : '')?>" data-go-to="<?=$key?>"></span>
			<?
		}
	}
	?>
</span>