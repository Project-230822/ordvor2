
<?php
$arSearchTitleOptions = [
	'slideClass' => 'fullscreen fancybox-slide--dark',
	'animationEffect' => 'fade',
	'animationDuration' => 400,
];
?>
<a class="search-button btn btn-opacity-dark no-barba" href="<?=SITE_DIR.'ajax/search.php';?>" data-type="ajax" data-popup="<?=$INPUT_ID?>" data-popup-type="fullscreen" data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arSearchTitleOptions))?>">
	<svg class="icon-svg m-0"><use xlink:href="#svg-search"></use></svg>
</a>