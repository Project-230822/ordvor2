<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
?>

<div class="catalog-menu">
	<div class="menu-title">Категории</div>
	<ul>
		<?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>
		
			<?php if (($sectionTop["ID"]) && ($sectionTop["ID"] == $arResult["THIS_SECTION_ID"])): ?>
				<li class="active"><a href="<?=$sectionTop["SECTION_PAGE_URL"]?>"><?=$sectionTop["NAME"]?></a></li>
			<?php else: ?>
				<li><a href="<?=$sectionTop["SECTION_PAGE_URL"]?>"><?=$sectionTop["NAME"]?></a></li>
			<?php endif; ?>
			
		<?php endforeach; ?>
	</ul>
</div>
