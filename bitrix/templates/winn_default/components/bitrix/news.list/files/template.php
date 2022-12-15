<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$this->setFrameMode(true);

use \Bitrix\Main\IO;
use \Bitrix\Main\Application;

$this->addExternalCss(SITE_TEMPLATE_PATH.'/assets/styles/components/docs.css');
?>
<div class="row mt-5 mb-5 pb-6">
	<?php
	if ($arParams['DISPLAY_TOP_PAGER'])
	{
		echo $arResult['NAV_STRING'];
	}
	
	foreach($arResult['ITEMS'] as $arItem)
	{
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
		$namFile = $arItem['DISPLAY_PROPERTIES']['FILE']['FILE_VALUE']['ORIGINAL_NAME'];
		$fileExt = substr(strrchr($namFile, '.'), 1 );
		?>
		<div class="pt-3 col-sm-6 col-lg-4 pl-3">
			<div class="d-flex doc" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<div class="d-flex doc__block">
					<?php
					foreach ($arItem['DISPLAY_PROPERTIES'] as $pid => $arProperty)
					{
						?>
						<a href="<?=$arProperty['FILE_VALUE']['SRC']?>" target="_blank" download>
							<div class="d-flex align-items-center flex-column position-relative align-middle doc__icon icon-<?=$fileExt?>">
								<svg class="icon-svg"><use xlink:href="#svg-file-icon"></use></svg>
								<div class="position-absolute doc__type"><?=$fileExt?></div>
							</div>
						</a>
						<?php
					}
					?>
					<div class="pl-3 align-self-center doc__text">
						<?php
						foreach ($arItem['DISPLAY_PROPERTIES'] as $pid => $arProperty)
						{
							?>
							<p class="m-0 text-break doc__text-title"><?=$arItem['NAME']?></p>
							<a href="<?=$arProperty['FILE_VALUE']['SRC']?>" target="_blank" class="text-body doc__text-cont">
								<?php
								echo \CFile::FormatSize($arItem['DISPLAY_PROPERTIES']['FILE']['FILE_VALUE']['FILE_SIZE'], 1);
								if ($fileExt != '')
								{
									echo '.'.$fileExt;
								}
								?>
							</a>
							<?php
						}
						?>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
	
	if ($arParams['DISPLAY_BOTTOM_PAGER'])
	{
		echo $arResult['NAV_STRING'];
	}
	?>
</div>
