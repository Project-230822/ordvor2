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

<section class="section-bottom">
	<div class="sect-title">Каталог товаров</div>
	<div class="section-content bottom-menu bottom-catalog-menu">
		<div class="row">
			
			<div class="col-md-6">
				<ul>
					<?php foreach ($arResult["SECTIONS"] as $sectionTop): ?>
						<?php $i++; ?>
						
						<li class="item">
							<a href="/catalog/<?=$sectionTop["CODE"]?>/"><?=$sectionTop["NAME"]?></a>
						</li>
						
						<?php 
						if ($i >= round($arResult["COUNT"] / 2) && $offsetSuccess == false)
						{
							$offsetSuccess = true;
							echo '</ul></div><div class="col-sm-6"><ul>';
						}
						?>
						
					<?php endforeach; ?>
				</ul>
			</div>
			
		</div>
	</div>
</section>
