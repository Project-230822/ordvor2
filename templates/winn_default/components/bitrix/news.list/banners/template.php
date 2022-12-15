<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

use \Bitrix\Main\Loader;

$this->setFrameMode(true);

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/banners.css');

$bUseSlider = count($arResult["ITEMS"]) > 1;

$containerName = 'rs-banner-'.randString(5);

if ($bUseSlider)
{
	$arSliderOptions = [
		'items' => 1,
		'progressLine' => true,
		'loop' => true,
		'nav' => false,
		'margin' => 0,
		'dotsData' => true,
		'animateIn' => 'fadeIn',
		'animateOut' => 'fadeOut',
		'responsive' => array(
			0 => array(
				'dots' => false,
			),
			1280 => array(
				'mouseDrag' => false,
				'touchDrag' => false,
				'dots' => true,
			),
		)
	];
	
	if (isset($arParams['OWL_CHANGE_DELAY']) && (int)$arParams['OWL_CHANGE_DELAY'] > 0)
	{
		$arSliderOptions['autoplay'] = true;
		$arSliderOptions['autoplayTimeout'] = $arParams['OWL_CHANGE_DELAY'];
	
		if (isset($arParams['OWL_CHANGE_SPEED']) && (int)$arParams['OWL_CHANGE_SPEED'] >= 0)
		{
			$arSliderOptions['autoplaySpeed'] = $arParams['OWL_CHANGE_SPEED'];
			$arSliderOptions['smartSpeed'] = $arParams['OWL_CHANGE_SPEED'];
		}
		else
		{
			$arSliderOptions['autoplaySpeed'] = 1000;
			$arSliderOptions['smartSpeed'] = 1000;
		}
	}
	
	$number = 1;
}
// $arSliderOptions['progressLine'] = false;
// $arSliderOptions['autoplay'] = false;
// $arSliderOptions['autoplayTimeout'] = 0;
// $arSliderOptions['autoplaySpeed'] = 0;
// $arSliderOptions['smartSpeed'] = 0;

?>
<div class="rs-banner-wrapper">
	<?php
	if ($bUseSlider)
	{
		?>
		<div class="owl-carousel owl-theme rs-banner-area show-items-1"  data-slider="<?=$containerName?>" data-slider-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arSliderOptions))?>">
		<?php

	}
	else
	{
		?>
		<div class="rs-banner-area">
		<?php
	}

		foreach ($arResult["ITEMS"] as $arItem)
		{
			$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
			$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

			$areaId = $this->GetEditAreaId($arItem['ID']);

			$sBannerItemClass = 'rs-banner';
			if (Loader::includeModule('redsign.devfunc'))
			{
				$oColor = new RSColor($arItem['PROPERTIES']['BACKGROUND_COLOR']['VALUE']);
				if ($oColor->getHex())
				{
					if ($oColor->yiq())
					{
						$sBannerItemClass .= ' rs-banner--dark';
					}
					else
					{
						$sBannerItemClass .= ' rs-banner--light';
					}
				}
			}

			if ($arItem["PREVIEW_PICTURE"]["SRC"])
			{
				$sBannerItemClass .= ' rs-banner--has-preview';
			}
			?>
			<div class="<?=$sBannerItemClass?>"<?if ($bUseSlider):?> data-dot="<span><?=str_pad($number++, 2, '0', STR_PAD_LEFT);?></span><button id='<?=$areaId?>_dot' class='owl-preview' style='transition: opacity .6s ease-in-out; background-image: url(<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>);'></button><label for='<?=$areaId?>_dot' class='owl-preview__icon btn btn-opacity-dark'><svg class='icon-svg'><use xlink:href='#svg-chevron-right'></use></svg></label>"<?endif;?> style="background-image: url(<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>);">
				<?php
				if (!empty($arItem['PROPERTIES']['VIDEO_FILE']['VALUE']))
				{
					$arPropVideoFiles = [];

					if (isset($arItem['DISPLAY_PROPERTIES']['VIDEO_FILE']))
					{
						$arPropVideoFiles = $arItem['DISPLAY_PROPERTIES']['VIDEO_FILE']['FILE_VALUE'];
					}
					else
					{
						foreach ($arItem['PROPERTIES']['VIDEO_FILE']['VALUE'] as $fileId)
						{
							$arPropVideoFiles[] =  CFile::GetFileArray($fileId);
						}
					}
					?>
					<video class="rs-banner__video" preload="metadata" loop="loop"<?=($bUseSlider ? '' : ' autoplay="autoplay"')?> muted="muted" poster="<?=$arItem["PREVIEW_PICTURE"]["SRC"]?>" playsinline>
						<?php
						foreach ($arPropVideoFiles as $arFile)
						{
							?>
							<source src="<?=$arFile['SRC']?>" type="<?=$arFile['CONTENT_TYPE']?>">
							<?php
						}
						?>
					</video>
					<?php
				}
				elseif (!empty($arItem['PROPERTIES']['VIDEO_LINK']['VALUE']))
				{
					if ($bUseSlider)
					{
						?><a class="owl-video" href="<?=$arItem['PROPERTIES']['VIDEO_LINK']['VALUE']?>"></a>
						<?php
					}
					else
					{
						if (
							preg_match(
								'/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/',
								$arItem['PROPERTIES']['VIDEO_LINK']['VALUE'],
								$arMatches
							)
						)
						{
							$sVideoType = '';
							$id = '';
							if (strpos($arMatches[3], 'youtu') > -1)
							{
								$sVideoType = 'youtube';
							}
							else if (strpos($arMatches[3], 'vimeo') > -1)
							{
								$sVideoType = 'vimeo';
							}
							else if (strpos($arMatches[3], 'vzaar') > -1)
							{
								$sVideoType = 'vzaar';
							}

							$sVideoId = $arMatches[6];

							if ($sVideoType === 'youtube')
							{
								?>
								<iframe class="rs-banner__video" width="100%" height="100%" src="//www.youtube.com/embed/<?=$sVideoId?>?autoplay=1&rel=0&v=<?=$sVideoId?>" frameborder="0" allowfullscreen=""></iframe>
								<?php
							}
							else if ($sVideoType === 'vimeo')
							{
								?>
								<iframe class="rs-banner__video" width="100%" height="100%" src="//player.vimeo.com/video/<?=$sVideoId?>?autoplay=1" frameborder="0" allowfullscreen=""></iframe>
								<?php
							}
							else if ($sVideoType === 'vzaar')
							{
								?>
								<iframe class="rs-banner__video" width="100%" height="100%" src="//view.vzaar.com/<?=$sVideoId?>/player?autoplay=true" frameborder="0" allowfullscreen=""></iframe>
								<?php
							}
						}
					}
				}
				?>
				<div class="rs-banner-container">
					<div class="container">
						<div class="row" id="<?=$areaId?>">
							<div class="<?/*col-xs-10 mx-xs-auto col-xl-10*/?> mx-xl-auto col-xxl-9 ml-xxl-0 mr-xxl-auto">
								<?php
								if ($arParams['DISPLAY_NAME'] != 'N' && $arItem['PROPERTIES']['TITLE']['VALUE'] != '')
								{
									?>
									<h2 class="rs-banner__title mt-0" data-aos="fade-up" data-aos-duration="500"><?=$arItem['PROPERTIES']['TITLE']['VALUE']?></h2>
									<?php
								}

								if ($arParams['DISPLAY_PREVIEW_TEXT'] == 'Y' && !empty($arItem['PREVIEW_TEXT']))
								{
									?>
									<div class="rs-banner__text accent font-weight-light" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150"><?=$arItem['PREVIEW_TEXT']?></div>
									<?php
								}
								
								if ($arItem['PROPERTIES']['BUTTONS']['VALUE'])
								{
									?>
									<div class="rs-banner_buttons mt-5 pt-5" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
										<?php
										foreach ($arItem['PROPERTIES']['BUTTONS']['VALUE'] as $nIndex => $sButtonSrc)
										{
											$sButtonText = $arItem['PROPERTIES']['BUTTONS']['DESCRIPTION'][$nIndex];
											$isAjax = false;

											if (preg_match('/^ajax:.+/', $sButtonSrc)) {
												$isAjax = true;
												$sButtonSrc = preg_replace('/^(ajax:)(.+)/', "$2", $sButtonSrc);
											}
											?>
											<a href="<?=$sButtonSrc?>" class="btn btn-outline-primary btn-decolor--light btn-lg<?php if ($isAjax): ?> no-barba<?php endif; ?>"<?php if ($isAjax): ?> data-popup="" data-src="<?=$sButtonSrc?>" data-type="ajax" data-popup-type="side"<?php endif; ?>><?=$sButtonText?></a>
											<?php
										}
										?>
									</div>
									<?php
								}
								?>
							</div>        
						</div>
					</div>
				</div>
			</div>
			<?php
		}
		?>	
	</div>
	<?php
	if ($bUseSlider)
	{
		?>
		<div class="rs-banner__dots position-absolute owl-carousel owl-loaded">
			<div class="owl-dots" data-slider-dots="<?=$containerName?>"></div>
		</div>
		<?php
	}
	?>
</div>
