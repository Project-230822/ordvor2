<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

use \Bitrix\Main\Localization\Loc;

global $RS_BASKET_DATA; // from sale.basket.basket.line -> global

if (isset($RS_BASKET_DATA))
{
	$rs = new \Bitrix\Main\Type\RandomSequence();
	$id = $rs->randString();

	$sPathToCart = $RS_BASKET_DATA['PATH_TO_BASKET'];

	if ($arParams['AJAX_LOAD'] == 'Y') {
		$sCurrentPage = strtolower(\Bitrix\Main\Context::getCurrent()->getRequest()->getRequestedPage());
		$sPathToOrder = strtolower($RS_BASKET_DATA['PATH_TO_ORDER']);

		if (
			strncmp($sCurrentPage, $sPathToCart, strlen($sPathToCart)) == 0
			|| strncmp($sCurrentPage, $sPathToOrder, strlen($sPathToOrder)) == 0
		) {
			$arParams['AJAX_LOAD'] = 'N';
		}
	}

	$frame = new \Bitrix\Main\Page\FrameBuffered($id);

	$frame->begin();

		$arPopupOptions = [
			'popupClass' => 'panel-block--cart',
			'scrollContent' => false,
		];
		?>
		<a class="cart-button btn btn-opacity-dark js-global-cart no-barba" href="<?=$sPathToCart?>" <?
		 	?> data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arPopupOptions))?>" <?php
			if ($arParams['AJAX_LOAD'] == 'Y')
			{
				?> data-src="<?=SITE_DIR.'ajax/cart.php';?>" data-popup="" data-type="ajax" data-popup-type="side" data-need-cache="Y"<?php
			}
			?> title="<?=Loc::getMessage('RS_WINN_CART')?>">
			<span class="c-icon-count<?=($RS_BASKET_DATA['NUM_PRODUCTS'] > 0 ? ' has-items' : '')?>">
				<svg class="icon-svg h4 m-0"><use xlink:href="#svg-cart"></use></svg>
				<span class="c-icon-count__quantity js-global-cart__count"><?//=$RS_BASKET_DATA['NUM_PRODUCTS'] > 0 ? $RS_BASKET_DATA['NUM_PRODUCTS'] : ''?></span>
			</span>
		</a>
		<?php

	$frame->beginStub();

		?>
		<a class="cart-button btn btn-opacity-dark js-global-cart no-barba" href="<?=$RS_BASKET_DATA['PATH_TO_BASKET'];?>">
			<svg class="icon-svg h4 m-0"><use xlink:href="#svg-cart"></use></svg>
			<span class="c-icon-count__quantity js-global-cart__count"></span>
		</a>
		<?php

	$frame->end();
}
