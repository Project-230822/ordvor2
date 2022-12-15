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

<div class="catalog-section-list">
	<div class="row row-inline">
        
        <?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>
        
			<div class="col-md-4 col-xs-12 col-inline">
				<div class="section-item">
					<div class="image">
						<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>">
							<img src="<?=$sectionTop["PICTURE"] ? $sectionTop["PICTURE"] : SITE_TEMPLATE_PATH . "/img/no_photo.png"?>" alt="<?=$sectionTop["NAME"]?>">
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
