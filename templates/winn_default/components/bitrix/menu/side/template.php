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

$menuBlockId = 'side-menu-'.$this->randString();
$obName = 'ob'.preg_replace("/[^a-zA-Z0-9_]/", "x", $menuBlockId);
?>
<ul class="side-menu side-menu--expand l-contrast" id="<?=$menuBlockId?>">
	<?php
	$previousLevel = 0;
	foreach ($arResult as $index => $arItem)
	{
		if ($arItem['DEPTH_LEVEL'] > 1)
		{
			continue;
		}
		
		if ($previousLevel && $arItem["DEPTH_LEVEL"] < $previousLevel)
		{
			echo str_repeat("</ul></li>", ($previousLevel - $arItem["DEPTH_LEVEL"]));
		}

		if ($arItem["IS_PARENT"])
		{
			?>
			<li class="side-menu__item<?php if ($arItem['SELECTED']) echo ' is-active'; ?>">
				<a href="<?=$arItem['LINK']?>" class="side-menu__link" data-entity="menu-link">
					<?=$arItem['TEXT']?>
				</a>
				<ul class="side-menu__submenu">
			<?php
		}
		else
		{
			?>
			<li class="side-menu__item<?php if ($arItem['SELECTED']) echo ' is-active'; ?>"><a href="<?=$arItem['LINK']?>" class="side-menu__link" data-entity="menu-link"><?=$arItem['TEXT']?></a></li>
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
<?php
$jsParams = array(
	'ID' => $menuBlockId,
);
?>
<script>
	var <?=$obName?> = new SideMenu(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<?php
