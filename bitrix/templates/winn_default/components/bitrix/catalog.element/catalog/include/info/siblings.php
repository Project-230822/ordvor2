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
use \Bitrix\Main\ModuleManager;

if ($arResult['NEXT_ELEMENT'] || $arResult['PREVIOUS_ELEMENT'])
{
	?>
	<div class="product--detail__siblings flex-grow-1 text-right">
		<?php
		if ($arResult['PREVIOUS_ELEMENT'])
		{
			?>
			<a class="text-secondary text-decoration-none" href="<?=$arResult['PREVIOUS_ELEMENT']['DETAIL_PAGE_URL']?>">
				<svg class="icon-svg"><use xlink:href="#svg-arrow-left"></use></svg>
			</a>
			<?php
		}
		
		if ($arResult['NEXT_ELEMENT'])
		{
			?>
			<a class="text-secondary text-decoration-none" href="<?=$arResult['NEXT_ELEMENT']['DETAIL_PAGE_URL']?>">
				<svg class="icon-svg"><use xlink:href="#svg-arrow-right"></use></svg>
			</a>
			<?php
		}
		?>
	</div>
	<?php
}