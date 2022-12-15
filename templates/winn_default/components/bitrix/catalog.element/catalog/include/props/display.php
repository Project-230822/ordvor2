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

if ($arResult['MODULES']['sale'] && $arResult['MODULES']['redsign.grupper'])
{
	$APPLICATION->IncludeComponent('redsign:grupper.list',
		'catalog',
		array(
			'DISPLAY_PROPERTIES' => $arDisplayProperties,
			'CACHE_TYPE' => 'N',
		),
		$component,
		array('HIDE_ICONS' => 'Y')
	);
}
else	
{
	?>
	<div class="mb-4">
		<dl class="product-properties font-size-sm">
			<?
			foreach ($arDisplayProperties as $property)
			{
			    if($property['DESCRIPTION']) {
			        foreach($property['VALUE'] as $key=>$value) {
			            ?>
    					<dt><?=$value;?>:</dt>
    					<dd><?=$property['DESCRIPTION'][$key]?></dd>
			            <?
			        }
			    } else {
    				?>
    				<dt><?=$property['NAME']?>:</dt>
    				<dd><?=(
    					is_array($property['DISPLAY_VALUE'])
    						? implode(' / ', $property['DISPLAY_VALUE'])
    						: $property['DISPLAY_VALUE']
    					)?>
    				</dd>
    				<?
			    }
			}
			unset($property);
			?>
		</dl>
	</div>
	<?
}

if ($arResult['SHOW_OFFERS_PROPS'])
{
	?>
	<dl class="product-properties" id="<?=$itemIds['DISPLAY_PROP_DIV']?>"></dl>
	<?
}
?>
