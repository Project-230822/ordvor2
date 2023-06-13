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
$this->setFrameMode(true); ?>
<? $i = 0; ?>
<section class="categories-list categories-list_additional-class_<?= $arParams['ADD_CLASS'] ?>">
	<? if ($arParams["SHOW_PAGE_TITLE"] === "Y") : ?>
		<h1>
			<?= ($arParams['ENTER_NAME_FOR_PAGE'] ?: $APPLICATION->ShowTitle(false)); ?>
		</h1>
	<? endif; ?>
	<div class="categories-list__shell">
		<?php foreach ($arResult["SECTIONS"] as $sectionTop) : ?>
			<div class="categories-list__row">
				<div class="categories-list__title-block fade-out">
					<div class="categories-list__image">
						<a href="<?= $sectionTop["SECTION_PAGE_URL"] ?>">
							<img src="<?= $sectionTop["PICTURE"] ? $sectionTop["PICTURE"] : SITE_TEMPLATE_PATH . "/img/no_foto_list.jpg" ?>" alt="<?= $sectionTop["NAME"] ?>">
						</a>
					</div>
					<? if ($arParams["SHOW_PARENT_NAME"] === "Y") : ?>
						<div class="categories-list__title">
							<a href="<?= $sectionTop["SECTION_PAGE_URL"] ?>"><?= $sectionTop["NAME"] ?></a>
						</div>
					<? endif; ?>
				</div>
				<? if ($arParams['HIDE_SUBSECTIONS'] !== "Y") : ?>
					<ul class="categories-list__sections-list">
						<?php foreach ($sectionTop["CHILDREN"] as $sectionSecond) : ?>
							<li class="categories-list__sub-category">
								<a class="fade-out" href="<?= $sectionSecond["SECTION_PAGE_URL"] ?>"><?= $sectionSecond["NAME"] ?></a>
							</li>
							<? $i++; ?>
						<?php endforeach; ?>
					</ul>
					<? if ($i >= 14) : ?>
						<span class="categories-list__show-all-sections fade-out">
							Еще <?= $i - 14 ?>
							<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 1.5L4 4.5L7 1.5" stroke="#2A65AE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</span>
					<? endif; ?>
				<? endif; ?>
				<? $i = 0; ?>
			</div>
		<? endforeach; ?>
	</div>
</section>