<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

use \Bitrix\Main\Application;
use \Bitrix\Main\Localization\Loc;

$skipProperties = array();

CJSCore::Init('rs_lightbasket');

Loc::loadMessages(__FILE__);

$request = Application::getInstance()->getContext()->getRequest();

$isAjax = $request->get('ajax_basket') == 'Y' && isset($arParams['AJAX']) && $arParams['AJAX'] == 'Y' ? true : false;

if ($isAjax) {
    $content = '';
    $mobileCart = '';
}

$jsParams = array(
    'ID' => 'flycart',
    'TEMPLATE_NAME' => $templateName,
    'TEMPLATE_PARAMS' => $arParams,
    'AJAX_PATH' => $componentPath.'/ajax.php',
    'SITE_ID' => SITE_ID
);

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/catalog-item.css');
// load css
$APPLICATION->IncludeComponent(
	'bitrix:catalog.item',
	'catalog',
	array(),
	$component,
	array('HIDE_ICONS' => 'Y')
);
?>

<div class="b-cart b-cart--popup mb-6 h-100 d-flex flex-column" id="<?=$jsParams['ID']?>">
	<?php
	if ($isAjax)
	{
		ob_start();
	}
	else
	{
		$frame = $this->createFrame($jsParams['ID'])->begin('');
	}

	if (count($arResult['ITEMS']) > 0)
	{
		?>
		<div class="overflow-auto js-cart__products" data-scrollbar="">
			<?php
			foreach ($arResult['ITEMS'] as $id => $arItem)
			{
				?>
				<div class="row product-item-line-list" data-id="<?=$arItem['ID']?>" data-product-id="<?=$arItem['PRODUCT_ID']?>">
					<div class="col-12 product-table-card">
						<div class="product product--table border-top border-bottom">
							<div class="row py-4 px-lg-4 align-items-center">
								<div class="col-12">
									<div class="row">
										<?php
										if (!empty($arItem['PREVIEW_PICTURE']))
										{
											?>
											<div class="col-auto mb-3">
												<div class="product-image-wrapper mr-md-4">
													<a class="product-image-canvas" href="<?=$arItem['DETAIL_PAGE_URL']?>">
														<img class="product-image" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>">
													</a>
												</div>
											</div>
											<?php
										}
										?>
										<div class="col">
											<div class="product-head">
												<h6 class="product-title font-weight-bold lead">
													<a class="text-body" href="<?=$arItem['DETAIL_PAGE_URL']?>"><?=$arItem['NAME']?></a>
												</h6>
											</div>
											<?php
											if (!empty($arItem['PREVIEW_TEXT']))
											{
												?>
												<div class="product-info-container small">
													<?=$arItem['PREVIEW_TEXT']?>
												</div>
												<?php
											}
											?>
										</div>
									</div>
								</div>

								<div class="col-12">
									<div class="row pt-4 pb-3 align-items-center">
										<div class="col-auto position-relative">
											<div class="product-price-container">
												<?php
												if ($arItem['DISCOUNT'] > 0)
												{
	/*
													?>
													<div class="product-price-old lead m-0 font-weight-bold">
														<?=str_replace('#', $arItem['PRICE_FORMATTED'], $arItem['CURRENCY'])?>
													</div>
	*/
	?>
													<div class="product-price-current lead m-0 font-weight-bold discount">
														<?=str_replace('#', $arItem['DISCOUNT_PRICE_FORMATTED'], $arItem['CURRENCY'])?>
													</div>
													<div class="text-secondary font-size-sm font-weight-bold position-absolute text-nowrap top-100" style="top:100%"><?=Loc::getMessage('RS_LIGHTBASKET_TABLE_FOR_1_PIECE')?></div>
													<?php
												}
												else
												{
													?>
													<span class="product-price-current h5 m-0 font-weight-bolder discount">
														<?=str_replace('#', $arItem['PRICE_FORMATTED'], $arItem['CURRENCY'])?>
													</span>
													<div class="text-secondary font-size-sm font-weight-bold position-absolute text-nowrap top-100"><?=Loc::getMessage('RS_LIGHTBASKET_TABLE_FOR_1_PIECE')?></div>
													<?php
												}
												?>
											</div>
										</div>
										<div class="col-auto position-relative">
											<div class="product-amount d-inline-block text-center">
												<div class="product-amount-field-container d-flex align-items-center">
													<svg class="product-amount-field-btn-minus no-select icon-svg mx-1"><use xlink:href="#svg-minus"></use></svg>
													<input class="product-amount-field form-control px-1" id="QUANTITY_INPUT_<?=$arItem['ID']?>" type="number" value="<?=$arItem['QUANTITY']?>">
													<svg class="product-amount-field-btn-plus no-select icon-svg mx-1"><use xlink:href="#svg-plus"></use></svg>
												</div>
												<div class="product-amount-measure text-secondary font-size-sm font-weight-bold position-absolute top-100 left-0 right-0"><?=Loc::getMessage('RS_LIGHTBASKET_MEASURE_NAME');?></div>
											</div>
										</div>
										<div class="col-auto position-relative">
											<div class="text-secondary font-size-sm font-weight-bold position-absolute text-nowrap bottom-100"><?=Loc::getMessage('RS_LIGHTBASKET_TABLE_SUM');?></div>
											<div class="lead m-0 font-weight-bold" id="FULL_PRICE_<?=$arItem['ID']?>"><?=str_replace('#', $arItem['FULL_PRICE_FORMATTED'], $arItem['CURRENCY'])?></div>
										</div>
										<div class="col-auto">
											<a href="<?=$arItem['URL_TO_DELETE']?>" class="d-block b-cart__tools-remove no-barba js-cart__remove">
												<svg class="icon-svg mt-3 ml-3"><use xlink:href="#svg-trash-2"></use></svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php
			}
			?>
		</div>
		<div class="d-flex flex-column pt-4 mt-1 pb-3 b-cart__summary">
			<?php
			/*
			<div class="ml-n1 ml-sm-n2 text-left text-sm-right b-cart__summary-clear d-inline-block"><a href="<?=$arResult['PATH_TO_CLEAR']?>" class="js-cart__clear"><svg class="icon-svg mt-n1 mr-1 align-middle b-cart__cross"><use xlink:href="#svg-cross"></use></svg><?=Loc::getMessage('RS_LIGHTBASKET_CLEAR_BASKET')?></a></div>
			*/
			?>
			<div class="b-cart__summary-price d-inline-block">
				<div class="b-cart__summary-price-total lead m-0"><?=Loc::getMessage('RS_LIGHTBASKET_SUMMARY')?></div>
				<div class="b-cart__summary-price-value lead font-weight-bolder my-2" id="SUMMARY_PRICE">
				<?php
				foreach($arResult['PRICE'] as $arPrice)
				{
					?>
					<div><?=str_replace('#', $arPrice['DISCOUNT_PRICE_FORMATTED'], $arPrice['CURRENCY'])?></div>
					<?php
				}
				?>
				</div>
			</div>
		</div>
		<div class="b-cart__bottom">
			<a href="<?=$arParams['PATH_TO_ORDER']?>" class="btn btn-primary b-cart__bottom-link mb-2 mb-sm-0"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER');?></a>
			<a class="btn btn-link ml-0 ml-sm-4 font-weight-bold" href="<?=$arParams['PATH_TO_CATALOG']?>" class="js-cart-close"><?=Loc::getMessage('RS_LIGHTBASKET_CONTINUE');?></a>
		</div>
		<?php
	}
	else
	{
		?>
		<div class="b-cart--empty pt-1 pb-6 mb-6">
			<svg class="b-cart__icon mx-0 my-5 mb-1 icon-svg text-primary"><use xlink:href="#svg-cart"></use></svg>
			<h3 class="mt-2 mb-2"><?=Loc::getMessage('RS_LIGHTBASKET_YOUR_CART_EMPTY');?></h3>
			<div class="accent mt-2 mb-2 pb-1"><?=Loc::getMessage('RS_LIGHTBASKET_CART_EMPTY_NOTE');?></div>
			<a class="accent text-link" href="<?=$arParams['PATH_TO_CATALOG']?>"><?=Loc::getMessage('RS_LIGHTBASKET_CART_CATALOG');?></a>	
		</div>
		<?php
	}
	if ($isAjax)
	{
		$content = ob_get_clean();

		$APPLICATION->restartBuffer();

		echo CUtil::PhpToJSObject(array(
			'CONTENT' => $content,
			'COUNT' => count($arResult['ITEMS'])
		));

		// echo Asset::getInstance()->getJs();
		CMain::FinalActions();
		die();
	}
	else
	{
		?>
		<script>RS.FlyingCart = new RSFlyingCart(<?=CUtil::PhpToJSObject ($jsParams)?>);</script>
		<?php
	}
	?>
</div>