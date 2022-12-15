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

if (count($arResult) < 1)
{
	return;
}

$menuBlockId = 'main-menu-'.$this->randString();
$obName = 'ob'.preg_replace("/[^a-zA-Z0-9_]/", "x", $menuBlockId);
?>
<nav class="">
<ul class="main-menu" id="<?=$menuBlockId?>">
	<?php
	$previousLevel = 0;
	foreach ($arResult as $index => $arItem)
	{
		if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel)
		{
			echo str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));
		}

		$sMenuItemClass = 'main-menu__item';
		$sMenuLinkClass = 'main-menu__link';
		if ($arItem['DEPTH_LEVEL'] == 1)
		{
			$sMenuLinkClass .= ' d-inline-block h1 mb-2';

		}
		else
		{
			$sMenuLinkClass .= '';
			$sMenuItemClass .= ' list-inline-item my-2 pl-0 d-none d-lg-inline-block';
		}

		if ($arItem['SELECTED'])
		{
			$sMenuItemClass .= ' is-selected';
		}

		if ($arItem["IS_PARENT"])
		{
			?>
			<li class="<?=$sMenuItemClass?>">
					<a href="<?=$arItem['LINK']?>" class="<?=$sMenuLinkClass?>" data-entity="menu-link">
						<?=$arItem['TEXT']?>
					</a>
					<ul class="main-menu__submenu list-inline">
			<?php
		}
		else
		{
			?>
			<li class="<?=$sMenuItemClass?>">
				<a href="<?=$arItem['LINK']?>" class="<?=$sMenuLinkClass?>" data-entity="menu-link"><?=$arItem['TEXT']?></a>
			</li>
			<?php
		}
		$previousLevel = $arItem["DEPTH_LEVEL"];
	}

	if ($previousLevel > 1)
	{
		echo str_repeat("</ul></li>", ($previousLevel-1) );
	}
	?>
</ul>
</nav>
<?php
$jsParams = array(
	'ID' => $menuBlockId,
);
?>
<script>
	// var <?=$obName?> = new SideMenu(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<style>
	.main-menu__row {
		column-count: 2;
		column-width: 50%;
	}
	.main-menu__col {
		display: inline-block;
	}
</style>
<?php
