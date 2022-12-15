<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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


<div class="tabs-content active">
	<div class="shop-warehouse">
		<div class="bx_storege" id="catalog_store_amount_div">
			<?if(!empty($arResult["STORES"])):?>
			<ul id="c_store_amount">
				<?foreach($arResult["STORES"] as $pid => $arProperty):?>
				
					<li style="display: <? echo ($arParams['SHOW_EMPTY_STORE'] == 'N' && isset($arProperty['REAL_AMOUNT']) && $arProperty['REAL_AMOUNT'] <= 0 ? 'none' : ''); ?>;">
							<div class="warehouse-item">
								<div class="warehouse-name warehouse-field">
									<div class="warehouse-title"><?=$arProperty["DESCRIPTION"]?></div>
									<div class="warehouse-address">
										<a target="_blank" href="<?=$arProperty["USER_FIELDS"]["UF_ADDRESS_LINK"]["VALUE"]?>" title="<?=$arProperty["DESCRIPTION"]?>">
											<?=$arProperty["ADDRESS"]?>
										</a>
									</div>
								</div>
								<div class="warehouse-time warehouse-field">
									<?=$arProperty["SCHEDULE"]?>
								</div>
								<div class="warehouse-phone warehouse-field">
									<span><?=$arProperty["PHONE"]?></span>
								</div>
								<div class="warehouse-available warehouse-field">
									В наличии
								</div>
								<div class="warehouse-action warehouse-field">
									<a href="#" class="btn btn-default buy-btn">Купить</a>
								</div>
							</div>
						<span class="balance" style="display: none;" id="<?=$arResult['JS']['ID']?>_<?=$arProperty['ID']?>"><?=$arProperty["AMOUNT"]?></span><br />
						<?
						if (!empty($arProperty['USER_FIELDS']) && is_array($arProperty['USER_FIELDS']))
						{/*
							foreach ($arProperty['USER_FIELDS'] as $userField)
							{
								if (isset($userField['CONTENT']))
								{
									?><span><?=$userField['TITLE']?>: <?=$userField['CONTENT']?></span><br /><?
								}
							}
						*/}
						?>
					</li>
					
				<?endforeach;?>
				</ul>
			<?endif;?>
		</div>

	</div>
</div>

<?if (isset($arResult["IS_SKU"]) && $arResult["IS_SKU"] == 1):?>
	<script type="text/javascript">
		var obStoreAmount = new JCCatalogStoreSKU(<? echo CUtil::PhpToJSObject($arResult['JS'], false, true, true); ?>);
	</script>
	<?
endif;?>
