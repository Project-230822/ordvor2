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

$i = 0;
$offsetSuccess = false;
?>

<section class="catalog-section-main">
	<div class="header-sect">
		<h1 class="header-title">Каталог товаров</h1>
		<a class="catalog-link" href="/catalog/">Перейти в полный каталог</a>
	</div>
	<div class="categories-list">
		<div class="row row-inline">
			
			<?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>
				<div class="col-lg-3 col-sm-4 col-xs-6 col-inline">
					
					<div class="top-category">
						<div class="image">
							<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>">
								<img class="lazy" src="<?=SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg"?>" data-src="<?=$sectionTop["PICTURE"] ? $sectionTop["PICTURE"] : SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg"?>" alt=<?=$sectionTop["NAME"]?>>
							</a>
						</div>
		
						<div class="title">
							<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>"><?=$sectionTop["NAME"]?></a>
						</div>
		
						<ul class="sub-categories">
						
							<?php foreach ($sectionTop["CHILDREN"] as $sectionSecond): ?>
							
								<li class="sub-category">
									<a href="<?=$sectionSecond["SECTION_PAGE_URL"]?>"><?=$sectionSecond["NAME"]?></a>
								</li>
	
							<?php endforeach; ?>
						
						</ul>
		
						<div class="all-categories">
							<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>">Все разделы</a>
						</div>
					</div>
				</div>
				
			<?php endforeach; ?>
				
		</div>
	</div>
	<a href="/catalog/" class="catalog-link-bottom hidden-lg hidden-md">Перейти в полный каталог</a>
</section>
