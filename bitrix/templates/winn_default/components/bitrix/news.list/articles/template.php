<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$this->setFrameMode(true);

$arPopupOptions = [
	'popupClass' => 'panel-block--news-detail',
	'scrollBlock' => true,
	'scrollContent' => false,
];


if (!empty($arResult['NAV_RESULT']))
{
	$navParams =  array(
		'NavPageCount' => $arResult['NAV_RESULT']->NavPageCount,
		'NavPageNomer' => $arResult['NAV_RESULT']->NavPageNomer,
		'NavNum' => $arResult['NAV_RESULT']->NavNum
	);
}
else
{
	$navParams = array(
		'NavPageCount' => 1,
		'NavPageNomer' => 1,
		'NavNum' => $this->randString()
	);
}

$showTopPager = false;
$showBottomPager = false;

if ($arParams['NEWS_COUNT'] > 0 && $navParams['NavPageCount'] > 1)
{
	$showTopPager = $arParams['DISPLAY_TOP_PAGER'];
	$showBottomPager = $arParams['DISPLAY_BOTTOM_PAGER'];
}

?>
<div class="b-newslist">
	<?php
	if ($showTopPager)
	{
		?>
		<div class="d-flex flex-column align-items-start">
			<?=$arResult["NAV_STRING"]?>
		</div>
		<?php
	}

	foreach($arResult['ITEMS'] as $arItem)
	{
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));

		if (!empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
		{
			?>
			<div class="position-relative overflow-hidden mt-4 mb-sm-4 b-newslist__item b-newslist__item-background" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<div class="overflow-hidden b-newslist__item-background-image-container">
					<img class="b-newslist__item-background-image" src="<?=$arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']['SRC']?>" alt="">
				</div>						
			<?php
		}
		else
		{
			?>
			<div class="mt-3 mb-4 d-flex b-newslist__item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
			<?php
		}

			if (is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
			{
				?>
				<div class="d-none d-sm-block align-self-stretch col-4 b-newslist__pic">
				<?php
			}
			else
			{
				?>
				<div class="d-none d-sm-block b-newslist__pic">
				<?php
			}

				if (is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
				{
					if (!$arParams['HIDE_LINK_WHEN_NO_DETAIL'] || ($arItem['DETAIL_TEXT'] && $arResult['USER_HAVE_ACCESS']))
					{
						if (is_array($arItem['PREVIEW_PICTURE']) && empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
						{
							?>
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>">
								<div class="b-newslist__picture" style="background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>);"></div>
							</a>
							<?php
						}
						elseif (is_array($arItem['DETAIL_PICTURE']) && empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
						{
							?>
							<a href="<?=$arItem['DETAIL_PAGE_URL']?>">
								<div class="b-newslist__picture" style="background-image: url(<?=$arItem['DETAIL_PICTURE']['SRC']?>);"></div>
							</a>
							<?php
						}
					}
					else
					{
						if (is_array($arItem['PREVIEW_PICTURE']) && empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
						{
							?>
							<div class="b-newslist__picture" style="background-image: url(<?=$arItem['PREVIEW_PICTURE']['SRC']?>);"></div>
							<?php
						}
						elseif (is_array($arItem['DETAIL_PICTURE']) && empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
						{
							?>
							<div class="b-newslist__picture" style="background-image: url(<?=$arItem['DETAIL_PICTURE']['SRC']?>);"></div>
							<?php
						}
					}
				}
				?>
				</div>

			<?php
			if (is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
			{
				?>
				<div class="row">
					<div class="col-12 col-sm-8">
						<div class="b-newslist__data">
				<?
			}
			else
			{
				if (!empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
				{
					?>
					<div class="row">
						<div class="col-12">
							<div class="b-newslist__data-background ml-3 ml-sm-0 d-flex align-items-center">
					<?
				}
				else
				{
					?>
					<div class="row flex-grow-1">
						<div class="col-12">
							<div class="b-newslist__data py-4 ml-3 ml-sm-0">
					<?
				}
			}
			?>
			
			<div class="row align-items-center flex-grow-1">
				<?php
				if ($arParams['DISPLAY_DATE'] != 'N' && $arItem['DISPLAY_ACTIVE_FROM'])
				{
					if (is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
					{
						?>
						<div class="col-12 col-sm-1 offset-sm-1 b-newslist__date">
							<?php
							$datetime = $arItem['DISPLAY_ACTIVE_FROM']; 
							$arr = ParseDateTime($datetime, FORMAT_DATETIME);
							?>
							<div class="h4 mb-0 mt-xl-6 pb-sm-0 b-newslist__time-day"><?=$arr['DD']?></div>
							<div class="pb-1 text-lowercase b-newslist__time-month"><?=$arr['MM']?></div>
							<div class="mb-n1 mb-sm-2 b-newslist__line"></div>
						</div>
						<?php
					}
					else
					{
						if (!empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
						{
							?>
							<div class="col-12 col-sm-1 offset-sm-1 text-lowercase b-newslist__date-background">
								<?php
								$datetime = $arItem['DISPLAY_ACTIVE_FROM']; 
								$arr = ParseDateTime($datetime, FORMAT_DATETIME);
								?>
								<div class="h4 mb-0 mt-4 mt-sm-n2 pb-sm-0 b-newslist__time-day"><?=$arr['DD']?></div>
								<div class="pb-1 text-lowercase b-newslist__time-month"><?=$arr['MM']?></div>
								<div class="mb-2 b-newslist__line-background"></div>
							</div>
							<?php
						}
						else
						{
							?>
							<div class="col-12 col-sm-1 offset-sm-1 text-lowercase b-newslist__date">
								<?php
								$datetime = $arItem['DISPLAY_ACTIVE_FROM']; 
								$arr = ParseDateTime($datetime, FORMAT_DATETIME);
								?>
								<div class="h4 mb-0 mt-n2 pb-sm-0 b-newslist__time-day"><?=$arr['DD']?></div>
								<div class="pb-1 text-lowercase b-newslist__time-month"><?=$arr['MM']?></div>
								<div class="mb-2 b-newslist__line"></div>
							</div>
							<?php
						}
					}
				}
					
				if ($arParams['DISPLAY_NAME'] != 'N' && $arItem['NAME'])
				{
					if (!$arParams['HIDE_LINK_WHEN_NO_DETAIL'] || ($arItem['DETAIL_TEXT'] && $arResult['USER_HAVE_ACCESS']))
					{
						$sDataInnerClass = '';

						if (is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
						{
							$sDataInnerClass .= ' col-12 col-sm-10 col-md-10 col-xl-8 b-newslist__datainner';
						}
						else
						{
							if (!empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
							{
								$sDataInnerClass .= ' col-12 col-sm-10 b-newslist__datainner-background';
								}
							else
							{
								$sDataInnerClass .= ' col-12 col-sm-10 b-newslist__datainner';

							}
						}
						?>
						<div class="<?=$sDataInnerClass?>">
							<?php
							if (!empty($arItem['DISPLAY_PROPERTIES']['NEWS_BACKGROUND_PHOTO']['FILE_VALUE']))
							{
								?>
								<h4 class="mt-0">
									<a data-barbajs-prevent data-popup-type="side" data-popup="" data-type="ajax" data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arPopupOptions))?>" data-src="<?=$arItem['DETAIL_PAGE_URL']?>" class="d-block text-break overflow-hidden mt-4 mt-sm-2 pl-0 pl-sm-5 no-barba b-newslist__name-background" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
								</h4>
								<?
							}
							elseif(is_array($arItem['DETAIL_PICTURE']) || $arParams['DISPLAY_PICTURE'] != 'N' && is_array($arItem['PREVIEW_PICTURE']))
							{
								?>
								<h4 class="mt-0">
									<a data-barbajs-prevent data-popup-type="side" data-popup="" data-type="ajax" data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arPopupOptions))?>" data-src="<?=$arItem['DETAIL_PAGE_URL']?>" class="d-block text-break mt-3 mt-md-5 pt-1 ml-5 ml-sm-0 ml-sm-n3 pl-sm-n1 no-barba position-relative b-newslist__name b-newslist__name-overlay" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
								</h4>
								<?
							}
							else
							{
								?>
								<h4 class="mt-0">
									<a data-barbajs-prevent data-popup-type="side" data-popup="" data-type="ajax" data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arPopupOptions))?>" data-src="<?=$arItem['DETAIL_PAGE_URL']?>" class="d-block text-break mt-2 pl-0 pl-sm-5 no-barba position-relative b-newslist__name" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
								</h4>
								<?
							}
							?>
						</div>
						<?php
					}
					else
					{
						?>
						<b><?=$arItem['NAME']?></b><br/>
						<?php
					}
				}
				?>
				</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}

	if ($showBottomPager)
	{
		?>
		<div class="d-flex flex-column align-items-start">
			<hr class="mb-sm-5 title-delimiter w-100">
			<?=$arResult['NAV_STRING']?>
		</div>
		<?php
	}
	?>
</div>
