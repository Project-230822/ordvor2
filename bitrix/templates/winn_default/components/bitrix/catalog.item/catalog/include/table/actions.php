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

if ($arParams['SECTION_ADD_TO_BASKET_ACTION'] == 'FEEDBACK')
{
	?>
	<a class="btn btn-primary btn-icon <?=$buttonSizeClass?> mb-4" href="<?=$item['DETAIL_PAGE_URL']?>">
		<?=$arParams['MESS_BTN_DETAIL']?>
	</a>
	<?
}
else
{
	if (!$haveOffers)
	{
		if ($actualItem['CAN_BUY'])
		{
			?>
			<div id="<?=$itemIds['BASKET_ACTIONS']?>">
				<?php
				if ($arParams['ADD_TO_BASKET_ACTION'] == 'FEEDBACK')
				{
/*
					?>
					<a class="btn btn-primary btn-icon <?=$buttonSizeClass?>" id="<?=$itemIds['ACTION_FEEDBACK_LINK']?>"
						data-popup="catalog-feedback" data-type="ajax"
						href="<?=str_replace('#ELEMENT_ID#', $actualItem['ID'], $arParams['LINK_BTN_FEEDBACK'])?>">
						<?=$arParams['MESS_BTN_FEEDBACK']?>
					</a>
					<?php
*/
				}
				else
				{
					?>
					<a class="btn btn-primary btn-icon <?=$buttonSizeClass?>" id="<?=$itemIds['BUY_LINK']?>"
						href="javascript:void(0)" rel="nofollow" title="<?=strip_tags($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>">
						<?=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>
					</a>
					<?php
				}
				?>
			</div>
			<?
		}
		else
		{
			if ($showSubscribe)
			{
				$APPLICATION->IncludeComponent(
					'bitrix:catalog.product.subscribe',
					'',
					array(
						'PRODUCT_ID' => $actualItem['ID'],
						'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
						'BUTTON_CLASS' => 'btn btn-secondary btn-icon '.$buttonSizeClass,
						'DEFAULT_DISPLAY' => true,
						'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
						'MESS_BTN_SUBSCRIBED' => $arParams['~MESS_BTN_SUBSCRIBED'],
						'USE_CAPTCHA' => 'Y',
					),
					$component,
					array('HIDE_ICONS' => 'Y')
				);
			}
			else
			{
				?>
				<a class="btn btn-primary btn-icon <?=$buttonSizeClass?> invisible" href="<?=$item['DETAIL_PAGE_URL']?>">
					<?=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>
				</a>
				<?
			}
/*
			if ($arParams['ADD_TO_BASKET_ACTION'] == 'FEEDBACK')
			{
				?>
				<a class="btn btn-primary btn-icon <?=$buttonSizeClass?>" id="<?=$itemIds['ACTION_FEEDBACK_LINK']?>"
					data-popup="catalog-feedback" data-type="ajax"
					href="<?=str_replace('#ELEMENT_ID#', $actualItem['ID'], $arParams['LINK_BTN_FEEDBACK'])?>">
					<?=$arParams['MESS_BTN_FEEDBACK']?>
				</a>
				<?php
			}
*/
		}
	}
	else
	{
		if ($arParams['PRODUCT_DISPLAY_MODE'] === 'Y')
		{
			if ($showSubscribe)
			{
				$APPLICATION->IncludeComponent(
					'bitrix:catalog.product.subscribe',
					'',
					array(
						'PRODUCT_ID' => $item['ID'],
						'BUTTON_ID' => $itemIds['SUBSCRIBE_LINK'],
						'BUTTON_CLASS' => 'btn btn-secondary btn-icon '.$buttonSizeClass,
						'DEFAULT_DISPLAY' => !$actualItem['CAN_BUY'],
						'MESS_BTN_SUBSCRIBE' => $arParams['~MESS_BTN_SUBSCRIBE'],
						'MESS_BTN_SUBSCRIBED' => $arParams['~MESS_BTN_SUBSCRIBED'],
						'USE_CAPTCHA' => 'Y',
					),
					$component,
					array('HIDE_ICONS' => 'Y')
				);
			}
			?>
			<div id="<?=$itemIds['BASKET_ACTIONS']?>" style="display:none<?//=($actualItem['CAN_BUY'] ? '' : 'none')?>;">
				<a class="btn btn-primary btn-icon <?=$buttonSizeClass?>" id="<?=$itemIds['BUY_LINK']?>"
					href="javascript:void(0)" rel="nofollow" title="<?=strip_tags($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>">
					<?=($arParams['ADD_TO_BASKET_ACTION'] === 'BUY' ? $arParams['MESS_BTN_BUY'] : $arParams['MESS_BTN_ADD_TO_BASKET'])?>
				</a>
			</div>
			<?
		}
		else
		{
			?>
			<a class="btn btn-primary btn-icon <?=$buttonSizeClass?>" href="<?=$item['DETAIL_PAGE_URL']?>">
				<?=$arParams['MESS_BTN_DETAIL']?>
			</a>
			<?
		}
	}
}
