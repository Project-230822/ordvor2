<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

use \Bitrix\Main\Localization\Loc;

$skipProperties = isset($arParams['SKIP_PROPERTIES']) ? $arParams['SKIP_PROPERTIES']: array();
$commentField = null;
?>

<?if ($arResult['ORDER_SUCCESS'] == 'Y'):?>
	<?$APPLICATION->SetTitle(Loc::getMessage('RS_LIGHTBASKET_ORDER_SUCCESS'));?>
		<div class="b-cart b-cart--empty pt-1 kol">
			<svg class="b-cart__icon mx-0 my-5 mb-1 icon-svg text-primary"><use xlink:href="#svg-check-mark"></use></svg>
			<h3 class="my-2"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_SUCCESS_TITLE');?></h3>
			<div class="accent mt-2 mb-2 pb-1"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_SUCCESS_NOTE');?></div>
		</div>
	<?if (!empty($arParams['RS_VK_ID']) || !empty($arParams['RS_FB_PAGE'])):?>
			<div class="l-community-widgets">
				<h3 class="l-community-widgets__title"><?=Loc::getMessage('RS_LIGHTBASKET_COMMUNITY_WIDGET_TITLE');?></h3>
				<?if (!empty($arParams['RS_VK_ID'])):?>
				<div class="b-community-widget mb-4">
					<?$this->addExternalJS('//vk.com/js/api/openapi.js');?>
					<div id="vk_groups" style="width: 46%;"></div>
					<script type="text/javascript">
						VK.Widgets.Group("vk_groups", {mode: 0, width: 'auto', height: '205'}, <?=$arParams['RS_VK_ID']?>);
					</script>
				</div>
				<?endif;?>
				<?if (!empty($arParams['RS_FB_PAGE'])):?>
					<div class="b-community-widget">
						<script>(function(d, s, id) {
						var js, fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) return;
						js = d.createElement(s); js.id = id;
						js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.9";
						fjs.parentNode.insertBefore(js, fjs);
						}(document, 'script', 'facebook-jssdk'));</script>
						<div class="fb-page" data-href="<?=$arParams['RS_FB_PAGE']?>" data-height="225" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/redsignRU/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/redsignRU/">Facebook</a></blockquote></div>
					</div>
				<?endif;?>
			</div>
	<?endif;?>
<?else:?>
	<div class="b-order mb-6 mt-n5">
		<?if (count($arResult['MESSAGES']['ERROR']) > 0):?>
			<div class="alert alert-danger">
				<?
				foreach ($arResult['MESSAGES']['ERROR'] as $arError):
					if (empty($arError)) {
						continue;
					}
				?><?=$arError?><br><?endforeach;?>
			</div>
		<?endif;?>
		<?if (!empty($arResult['ITEMS'])):?>
            <p><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_TOP_SUBTITLE');?></p>
			<div class="b-order-cart mb-3 KOL">
				<h3 class="b-order-cart__title mb-4"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_ORDER_LIST')?></h3>	
				<?$i = 0;foreach($arResult['ITEMS'] as $id => $arItem):$i++?>
					<div class="row py-4 border-top" data-id="<?=$arItem['ID']?>" data-product-id="<?=$arItem['PRODUCT_ID']?>">
						<div class="col-12">
							<div class="row">
								<div class="ml-4 mr-4 d-none d-sm-flex align-self-center">
									<div class="font-weight-bolder b-order-cart-table__index-cell"><?=$i?></div>
								</div>
								<?if(!empty($arItem['PREVIEW_PICTURE']['SRC'])):?>
								<div class="col-sm-2 col-lg-1">
									<img class="b-cart__product-image" src="<?=$arItem['PREVIEW_PICTURE']['SRC']?>" alt="<?=$arItem['PREVIEW_PICTURE']['ALT']?>" title="<?=$arItem['PREVIEW_PICTURE']['TITLE']?>">
								</div>
								<?endif;?>
								<?if(!empty($arItem['PREVIEW_TEXT'])):?>
								<div class="col-sm-4 align-self-center">
									<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="b-cart__item-name"><?=$arItem['NAME']?></a>
									<?if(!empty($arItem['PREVIEW_TEXT'])):?>
										<div class="small text-wrap"><?=$arItem['PREVIEW_TEXT']?></div>
									<?endif;?>
								</div>
								<?elseif(!empty($arItem['PREVIEW_PICTURE'])):?>
								<div class="col-sm-5">
									<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="align-self-center b-cart__item-name"><?=$arItem['NAME']?></a>
								</div>
								<?else:?>
								<div class="col-sm-5">
									<a href="<?=$arItem['DETAIL_PAGE_URL']?>" class="align-self-center pt-5 pb-5 b-cart__item-name"><?=$arItem['NAME']?></a>
								</div>
								<?endif;?>
								<div class="row flex-lg-row flex-sm-column ml-1 ml-sm-6 ml-lg-0">
									<div class="col-lg-5">
										<div class="align-self-center ml-lg-4 mr-lg-6 pt-lg-5 mt-lg-2">
										<?if($arItem['DISCOUNT'] > 0):?>
											<div class="b-cart__product-item-price-current text-nowrap font-weight-bolder discount"><?=str_replace('#', $arItem['DISCOUNT_PRICE_FORMATTED'], $arItem['CURRENCY'])?></div>
<?php
/*
											<div class="b-cart__product-item-price-old text-nowrap"><?=str_replace('#', $arItem['PRICE_FORMATTED'], $arItem['CURRENCY'])?></div>
*/
?>
											<div class="b-cart__product-item-price-for1piece text-secondary"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_FOR_1_PIECE')?></div>
										<?else:?>
											<div class="b-cart__product-item-price-current text-nowrap font-weight-bolder"><?=str_replace('#', $arItem['PRICE_FORMATTED'], $arItem['CURRENCY'])?></div>
											<div class="b-cart__product-item-price-for1piece text-secondary"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_FOR_1_PIECE')?></div>
										<?endif;?>
										</div>
									</div>
									<div class="col-lg-2 d-flex">
										<div class="mt-2 mt-sm-5 ml-lg-3 pt-2 b-order-cart-table__quantity-cell text-secondary text-nowrap">
											<?=$arItem['QUANTITY']?> <?=Loc::getMessage('RS_LIGHTBASKET_ORDER_MEASURE_NAME');?>
										</div>
									</div>
									<div class="col-lg-5">
										<span class="font-weight-bolder d-block pt-lg-5 ml-lg-6 mt-sm-4 pt-3 mt-lg-2 text-nowrap b-cart__product-item-price-current" id="FULL_PRICE_<?=$arItem['ID']?>"><?=str_replace('#', $arItem['FULL_PRICE_FORMATTED'], $arItem['CURRENCY'])?></span>
									</div>
								</div>

							</div>
						</div>
					</div>
				<?endforeach;?>
						
				<div class="b-order-cart__note border-top">
					<a href="<?=$arParams['PATH_TO_CART']?>"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_EDIT_CART');?></a>
				</div>
			</div>
		<?endif;?>
		<form class="b-order-form position-relative pb-6" name="ORDER_FORM" method="POST">
			<?=bitrix_sessid_post()?>
			<h3 class="b-order-form__title"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_HEADING_COSTUMER_DATA');?></h3>
			<div class="row">
				<?foreach ($arResult['FIELDS'] as $arField):?>
					<?
					if ($arField['PROPERTY_TYPE'] == 'S'):
						if ($arField['CODE'] == 'COMMENT') {
							$commentField = $arField;
							continue;
						}
					?>
					<div class="col-12 col-sm-6 form-group">
						<label for="FIELD_<?=$arField['CODE']?>" class="font-size-sm mb-0 b-order-form__label d-block">
							<?=$arField['NAME']?>
							<?if ($arField['IS_REQUIRED'] == 'Y'):?><span class="required">*</span><?endif;?>
							<?if ($arField['USER_TYPE'] == 'HTML'):?>
								<textarea <?if(!empty($arField['PATTERN'])) echo ' pattern="'.$arField['PATTERN'].'"';?> style="max-width: 100%;" id="FIELD_<?=$arField['CODE']?>" name="FIELD_<?=$arField['CODE']?>" class="form-control"<?if ($arField['IS_REQUIRED'] == 'Y') echo ' required';?>></textarea>
							<?else:?>
								<input type="<?=$arField['INPUT_TYPE']?>"<?if(!empty($arField['PATTERN'])) echo ' pattern="'.$arField['PATTERN'].'"';?>  id="FIELD_<?=$arField['CODE']?>" v name="FIELD_<?=$arField['CODE']?>" value="<?=$arField['CURRENT_VALUE']?>" class="form-control"<?if ($arField['IS_REQUIRED'] == 'Y') echo ' required';?><?if(isset($arField['MASK'])) echo ' data-inputmask="\'mask\': \''.$arField['MASK'].'\'"';?>>
							<?endif;?>
						</label>
					</div>
					<?elseif ($arField['PROPERTY_TYPE'] == 'L' && is_array($arField['VALUES'])):?>
						<div class="col-12 col-sm-6 form-group">
							<label for="FIELD_<?=$arField['CODE']?>" class="font-size-sm mb-0 b-order-form__label d-block">
								<?=$arField['NAME']?>
								<?if ($arField['IS_REQUIRED'] == 'Y'):?><span class="required">*</span><?endif;?>
								<select class="b-order-form__select form-control" name="FIELD_<?=$arField['CODE']?>" id="FIELD_<?=$arField['CODE']?>">
								<?foreach ($arField['VALUES'] as $i => $arValue):?>
									<option <?if ((empty($arField['CURRENT_VALUE']) && $i == 0) || $arField['CURRENT_VALUE'] == $arValue['ID']):?>selected="selected"<?endif;?> value="<?=$arValue['ID']?>"><?=$arValue['VALUE']?></option>
								<?endforeach;?>
								</select>
							</label>
						</div>
					<?endif;?>
				<?endforeach;?>
			</div>
			<?if ($commentField):?>
				<h3 class="b-order-form__title mt-4 mb-4"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_HEADING_COMMENT')?></h3>
				<textarea style="max-width: 100%; height: 210px; margin-bottom: 10px;" id="FIELD_<?=$commentField['CODE']?>" name="FIELD_<?=$commentField['CODE']?>" class="form-control" placeholder="<?=Loc::getMessage('RS_LIGHTBASKET_INPUT_PLACEHOLDER')?>"></textarea>
			<?endif;?>

			<div class="b-order-form__note-req py-3"><?=Loc::getMessage('RS_LIGHTBASKET_ORDER_REQ_NOTE');?></div>
			<div class="text-left b-order-form__foot">
				<?if ($arParams['SHOW_CONFIRM'] == 'Y'):?>
				<div class="b-order-form__confirm d-inline-block align-middle pt-6 mt-3 mb-1 pb-5">
					<?$APPLICATION->IncludeComponent(
						"bitrix:main.userconsent.request",
						"",
						array(
							"ID" => $arParams['USER_CONSENT_ID'],
							"IS_CHECKED" => 'Y',
							"AUTO_SAVE" => "Y",
							"IS_LOADED" => 'Y',
							"INPUT_NAME" => "ORDER_CONFIRM_PDP",
							// 'SUBMIT_EVENT_NAME' => '',
							'REPLACE' => array(
								'button_caption' => Loc::getMessage('RS_LIGHTBASKET_ORDER_CREATE_ORDER'),
								// 'fields' => array()
							)
						)
					);?>
				</div>
				<?endif;?>
				<input type="submit" class="d-block btn btn-primary" value="<?=Loc::getMessage('RS_LIGHTBASKET_ORDER_CREATE_ORDER');?>">
			</div>
		</form>
	</div>
<?endif;?>
