<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
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
<section class="main-catalog-section">
	<div class="header-sect">
		<h1 class="header-sect__title">Каталог товаров</h1>
		<a class="header-sect__link" href="/catalog/">Весь каталог</a>
	</div>
	<div class="categories-list">
		<div class="row row-inline">

			<? foreach ($arResult["SECTIONS"] as $sectionTop) : ?>
		
				<? if ($sectionTop["UF_SHOW_ON_MAIN"]) : ?>
					<div class="col-xs-12 col-sm-4 col-lg-4 col-inline">
						<div class="top-category">
							<div class="image fade-out">
								<div class="title">
									<a href="<?= $sectionTop["SECTION_PAGE_URL"] ?>">
										<?= $sectionTop["NAME"] ?>
									</a>
								</div>
								<a href="<?= $sectionTop["SECTION_PAGE_URL"] ?>">
									<img class="lazy" src="<?= SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg" ?>" data-src="<?= $sectionTop["MAIN_PICTURE"] ? $sectionTop["MAIN_PICTURE"] : SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg" ?>" alt=<?= $sectionTop["NAME"] ?>>
								</a>
							</div>
							<ul class="sub-categories">
								<?
								$iSubSection = 0;
								foreach ($sectionTop["CHILDREN"] as $sectionSecond) : ?>
									<? if ($sectionSecond["UF_SHOW_ON_MAIN"] == 1) : ?>
										<li class="sub-category">
											<a href="<?= $sectionSecond["SECTION_PAGE_URL"] ?>">
												<?= $sectionSecond["NAME"] ?>
											</a>
										</li>
										<? $iSubSection++ ?>
									<? endif; ?>
								<? endforeach; ?>
								<? $otherSection = count($sectionTop["CHILDREN"]) - $iSubSection ?>
								<? if (!empty($otherSection)) : ?>
									<li class="sub-category all-categories">
										<a href="<?= $sectionTop["SECTION_PAGE_URL"] ?>">
											Еще <?= $otherSection ?>
										</a>
									</li>
								<? endif; ?>
							</ul>
						</div>
					</div>
				<? endif; ?>
			<? endforeach; ?>
		</div>
	</div>
	<a href="/catalog/" class="catalog-link-bottom hidden-lg hidden-md">Перейти в полный каталог</a>
</section>