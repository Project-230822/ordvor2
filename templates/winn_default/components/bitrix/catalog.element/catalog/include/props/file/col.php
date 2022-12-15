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
?>
<div class="row">
	<?php
	foreach ($arResult['PROPERTIES'][$sPropCode]['VALUE'] as $arFile)
	{
		?>
		<div class="pt-3 col-sm-6 col-lg-4 pl-3">
			<div class="d-flex doc">
				<div class="d-flex doc__block">
					<a href="<?=$arFile['FULL_PATH']?>" target="_blank" download>
						<div class="d-flex align-items-center flex-column position-relative align-middle doc__icon icon-<?=$arFile['FILE_EXT']?>">
							<svg class="icon-svg"><use xlink:href="#svg-file-icon"></use></svg>
							<div class="position-absolute doc__type"><?=$arFile['FILE_EXT']?></div>
						</div>
					</a>
					<div class="pl-3 align-self-center doc__text">
						<p class="m-0 doc__text-title">
							<?=($arFile['DESCRIPTION'] == '' ? $arFile['ORIGINAL_NAME'] : $arFile['DESCRIPTION'])?>
						</p>
						<a class="text-body doc__text-cont" href="<?=$arFile['FULL_PATH']?>" target="_blank" download>
							<?php
							echo $arFile['SIZE'];
							if ($arFile['FILE_EXT'] != '')
							{
								echo '.'.$arFile['FILE_EXT'];
							}
							?>
						</a>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	unset($arFile);
	?>
</div>
