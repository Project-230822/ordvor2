<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use \Bitrix\Main\Localization\Loc;

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

$this->setFrameMode(true);

$arStickySidebarOptions = array();

$mainId = $this->GetEditAreaId('props');
$itemIds = array(
	'ID' => $mainId,
	'NAV' => $mainId.'_nav',
);

$obName = 'ob'.preg_replace('/[^a-zA-Z0-9_]/', 'x', $mainId);
$bGroupShowed = false;
?>
<table class="table table-borderless table-striped">
<?php
if (is_array($arResult['GROUPED_ITEMS']) && count($arResult['GROUPED_ITEMS']) > 0)
{

	foreach($arResult['GROUPED_ITEMS'] as $arrValue)
	{
		if (is_array($arrValue['PROPERTIES']) && count($arrValue['PROPERTIES']) > 0)
		{
			?>
			<tr id="<?=$this->GetEditAreaId($arrValue['GROUP']['CODE'])?>">
				<td class="bg-white p-0" colspan="2"><h4><?=$arrValue['GROUP']['NAME']?></h4></td>
			</tr>
			<tbody>
				<?
				foreach ($arrValue['PROPERTIES'] as $property)
				{
					?>
					<tr>
					<td><?=$property['NAME']?>:</td>
					<td><?=(
						is_array($property['DISPLAY_VALUE'])
							? implode(' / ', $property['DISPLAY_VALUE'])
							: $property['DISPLAY_VALUE']
						)?>
					</td>
					</tr>
					<?
				}
				unset($property);
				?>
			</tbody>
			<?php

			$bGroupShowed = true;
		}
	}
}

if (is_array($arResult['NOT_GROUPED_ITEMS']) && count($arResult['NOT_GROUPED_ITEMS']) > 0)
{
	if ($bGroupShowed && is_array($arResult['GROUPED_ITEMS']) && count($arResult['GROUPED_ITEMS']) > 0)
	{
		?>
		<tr id="<?=$this->GetEditAreaId('OTHER_PROPS')?>">
			<td class="bg-white p-0" colspan="2"><h4><?=Loc::getMessage('RS_SLINE.RGL_AL.OTHER_PROPS')?></h4></td>
		</tr>
		<?php
	}
	?>
	<tbody>
	<?
	foreach ($arResult['NOT_GROUPED_ITEMS'] as $property)
	{
		?>
		<td><?=$property['NAME']?>:</td>
		<td><?=(
			is_array($property['DISPLAY_VALUE'])
				? implode(' / ', $property['DISPLAY_VALUE'])
				: $property['DISPLAY_VALUE']
			)?>
			</td>
			</tr>
			<?
		}
		unset($property);
		?>
	</tbody>
	<?php
}
?>
</table>