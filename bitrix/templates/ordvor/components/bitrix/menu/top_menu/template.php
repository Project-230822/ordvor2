<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
<nav class="top-menu">
	<ul>
		
		<?php foreach($arResult as $arItem): ?>
		
			<li class="top-item"><a class="link" title='<?=$arItem["TEXT"]?>' href='<?=$arItem["LINK"]?>'><?=$arItem["TEXT"]?></a></li>
		
		<?php endforeach; ?>

	</ul>
</nav>
<?endif?>