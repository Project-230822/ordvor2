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
//echo "<pre>"; var_dump($arResult["SECTIONS"]); echo "</pre>";
?>

<div class="catalog-section-list">
	<div class="row row-inline">
        
        <?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>

			<div class="col-lg-4 col-md-6 col-xs-6 col-inline">
				<div class="section-item">
					<div class="image">
						<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>">
							<img src="<?=$sectionTop["PICTURE"] ? GetImageResized($sectionTop["PICTURE"], 200, 150, 1) : SITE_TEMPLATE_PATH . "/img/no_photo.png"?>" alt="<?=$sectionTop["NAME"]?>">
						</a>
					</div>
					<div class="title">
						<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>"><?=$sectionTop["NAME"]?></a>
					</div>
				</div>
			</div>
			
    	<?php endforeach; ?>
    	    
	</div>
</div>
