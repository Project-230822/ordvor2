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

<div class="event-detail">
	<h1 class="event-title"><?=$arResult["NAME"]?></h1>
	<div class="event-date"><?=$arResult["DISPLAY_ACTIVE_FROM"]?></div>
	<div id="event-description">
		<?=$arResult["DETAIL_TEXT"]?>
	</div>
</div>
