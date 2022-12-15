<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?php if (!empty($arResult)):?>

<section class="section-bottom menu-about">
    <div class="sect-title">Компании</div>
    <div class="section-content bottom-menu">
		<ul>
			<?php foreach($arResult as $arItem): ?>
				<li>
					<a title="<?=$arItem["TEXT"]?>" href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a>
				</li>
			<?php endforeach; ?>
		</ul>
    </div>
</section>
<?php endif; ?>