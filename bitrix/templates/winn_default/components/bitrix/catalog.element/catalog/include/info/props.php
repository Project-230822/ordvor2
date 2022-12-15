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

if ($showDisplayProperties || $arResult['SHOW_OFFERS_PROPS'])
{
	?>
	<div class="product--detail__props">
		<?php
		$iDisplayPropCount = 0;

		if ($showDisplayProperties)
		{
			?>
			<dl class="product__properties font-size-sm mb-0">
				<?
				foreach ($arDisplayProperties as $property)
				{
					if (isset($arParams['MAIN_BLOCK_PROPERTY_CODE'][$property['CODE']]))
					{
    				    if($property['DESCRIPTION']) {
    				        $i = 0;
    					    foreach($property['VALUE'] as $key=>$value) {
    					        if($i>6) break;
    					        ?>
            					<dt><?=$value;?>:</dt>
            					<dd><?=$property['DESCRIPTION'][$key]?></dd>
        			            <?$i++;
    			            }
        			    } else {
    						?>
    						<dt><?=$property['NAME']?>:</dt>
    						<dd><?=(is_array($property['DISPLAY_VALUE'])
    								? implode(' / ', $property['DISPLAY_VALUE'])
    								: $property['DISPLAY_VALUE'])?>
    						</dd>
    						<?
    						$iDisplayPropCount++;
    					}
					}
				}
				unset($property);
				?>
			</dl>
			<?
		}

		if ($arResult['SHOW_OFFERS_PROPS'])
		{
			?>
			<dl class="product__properties font-size-sm mb-0" id="<?=$itemIds['DISPLAY_MAIN_PROP_DIV']?>"></dl>
			<?
		}
		
		if ($iDisplayPropCount > 0)
		{
			?>
			<div class="font-size-sm pb-2 pt-4 border-top">
				<a class="js-link-scroll" href="#<?=$itemIds['ELEMENT_PROPS']?>"><?=Loc::getMessage('RS_WINN_BCE_CATALOG_ALL_PROPS')?></a>
			</div>
			<?php
		}
		?>
	</div>
	<?php
}
