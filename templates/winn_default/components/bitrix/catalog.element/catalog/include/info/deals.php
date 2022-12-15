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

if (is_array($arResult['PRODUCT_DEALS']) && count($arResult['PRODUCT_DEALS']) > 0)
{
	foreach ($arResult['PRODUCT_DEALS'] as $arDeal)
	{
		?>
		<div class="product--detail__sale">
			<img class="product--detail__sale-icon" src="<?=$this->GetFolder().'/images/flame.png'?>" alt="">
			<div class="product--detail__sale-body">
				<div class="product--detail__sale-title"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_PRODUCT_DEAL')?></div>
				<a class="product--detail__sale-name" href="<?=$arDeal['DETAIL_PAGE_URL']?>"><?=$arDeal['NAME']?></a>
			</div>
		</div>
		<?php
	}
	unset($arDeal);
}
