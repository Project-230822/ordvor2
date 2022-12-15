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

<section class="catalog-main">
    <h1 class="page-title">Каталог товаров</h1>
    <div class="categories-list">
        <div class="row ">
            <div class="col-sm-6 ">
					
				<?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>
					<?php $i++; ?>
				
					<div class="top-category">
						<div class="row">
							
							<div class="col-md-4">
								<div class="image">
									<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>">
										<img src="<?=$sectionTop["PICTURE"] ? $sectionTop["PICTURE"] : SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg"?>" alt="<?=$sectionTop["NAME"]?>">
									</a>
								</div>
							</div>
							
							<div class="col-md-8">
								<div class="title">
									<a href="<?=$sectionTop["SECTION_PAGE_URL"]?>"><?=$sectionTop["NAME"]?></a>
								</div>
								<ul class="sub-categories">
								
									<?php foreach ($sectionTop["CHILDREN"] as $sectionSecond): ?>
										<?php $i++; ?>
										
										<li class="sub-category">
											<a href="<?=$sectionSecond["SECTION_PAGE_URL"]?>"><?=$sectionSecond["NAME"]?></a>
										</li>
										
									<?php endforeach; ?>
									
								</ul>
							</div>
							
						</div>
					</div>
				
					<?php 
					if ($i >= round($arResult["COUNT"] / 2) && $offsetSuccess == false)
					{
						$offsetSuccess = true;
						echo '</div><div class="col-sm-6 ">';
					}
					?>
				
				<?php endforeach; ?>
				
            </div>
        </div>
    </div>
</section>
