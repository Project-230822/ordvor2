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

$priceCode = array_search($price['PRICE_TYPE_ID'], array_column($arResult['CAT_PRICES'], 'ID', 'CODE'));

if ($arParams['SHOW_CASHBACK'] == 'Y')
{
	?>
	<div class="product--detail__cashback mt-3 mb-4 py-2"  id="<?=$itemIds['PRICE_BONUS']?>" data-entity="cashback" style="display: <?=($price['RATIO_BONUS'] > 0 ? '' : 'none')?>;" >
		<img class="product--detail__cashback-icon mr-2" src="<?=$this->GetFolder().'/images/coins.png'?>" alt=""
		><span class="text-nowrap"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_CASHBACK_TITLE');?>: <span class="text-primary font-weight-bolder" data-entity="cashback-value"><?=$price['PRINT_RATIO_BONUS']?></span></span>
	</div>
	<?
}