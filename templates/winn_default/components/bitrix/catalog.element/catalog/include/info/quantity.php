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

if ($arParams['USE_PRODUCT_QUANTITY'])
{
	?>
	<div class="product-amount d-inline-block text-center mr-1 mr-lg-3" style="<?=(!$actualItem['CAN_BUY'] ? 'display: none;' : '')?>"
		data-entity="quantity-block">
		<div class="product-amount-field-container d-flex align-items-center">
			<svg class="product-amount-field-btn-minus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_DOWN_ID']?>"><use xlink:href="#svg-minus"></use></svg>
				<input class="product-amount-field form-control px-1" id="<?=$itemIds['QUANTITY_ID']?>" type="number"
					name="<?=$arParams['PRODUCT_QUANTITY_VARIABLE']?>"
					value="<?=$measureRatio?>">
			<svg class="product-amount-field-btn-plus no-select icon-svg mx-1" id="<?=$itemIds['QUANTITY_UP_ID']?>"><use xlink:href="#svg-plus"></use></svg>
		</div>
		<div id="<?=$itemIds['QUANTITY_MEASURE']?>" class="product-amount-measure"><?=$actualItem['ITEM_MEASURE']['TITLE']?></div>
	</div>
	<?
}