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

<div class="main-nav done">
	<div class="container">
		<div class="toggle-container">
			<div class="mobile-menu-btn toggle-content-btn">
				<button class="cmn-toggle-switch cmn-toggle-switch__htx">
					<span>Меню</span>
				</button>
			</div>

			<div class="toggle-content" data-test="test">
				<ul class="top-level">
					<li class="top-item parent-item">
						<a href="/catalog/">Каталог товаров<span class="arrow top-arrow"></span></a>
						<ul class="submenu level2">
							<?php foreach ($arResult as $section2): ?>

								<?php 
									$i = 0;
									
									// первый переход — после 1\3 из всех элементов
									$firstOffset = round($section2["COUNT"] / 3);
									$firstOffsetSuccess = false;
									
									// Второй переход — после 2\3 всех элементов
									$secondOffset = round($firstOffset * 2);
									$secondOffsetSuccess = false
								?>
								<li class="submenu-item parent-item left rerender">
									<a href="<?=$section2["SECTION_PAGE_URL"]?>"><?=$section2["NAME"]?>
										<?php if(!empty($section2['CHILDREN'])){?><span class="arrow"></span><?php }?>
									</a>
	
									<div class="submenu-container">
										<ul class="submenu level3">
										
											<?php foreach ($section2["CHILDREN"] as $section3): ?>
												<?php $i++; ?>
												<li class="submenu-item parent-item">
													<a href="<?=$section3["SECTION_PAGE_URL"]?>"><?=$section3["NAME"]?>
                										<?php if(!empty($section3['CHILDREN'])){?><span class="arrow"></span><?php }?>
                									</a>
                									<?if($section3["CHILDREN"]):?>
													<ul class="submenu level4">
														
														<?php foreach ($section3["CHILDREN"] as $section4): ?>
															<?php $i++; ?>
															<li class="submenu-item">
																<a href="<?=$section4["SECTION_PAGE_URL"]?>"><?=$section4["NAME"]?></a>
															</li>
		
														<?php endforeach; ?>

													</ul>
													<?endif; ?>

												</li>

														
	 										<?php 
												if ($i >= $firstOffset && $firstOffsetSuccess == false)
												{
													$firstOffsetSuccess = true;
													echo '</ul><ul class="submenu level3">';
												}
												if ($i >= $secondOffset && $secondOffsetSuccess == false)
												{
													$secondOffsetSuccess = true;
													echo '</ul><ul class="submenu level3">';
												}
											?>
												
											<?php endforeach; ?>
											<div class="picture">
											<?if($section2["PHOTO"]): ?>
												<a href="<?=$section2["PATH"]?>">
													<img class="lazy" data-src="<?=$section2["PHOTO"]?>" src="<?=SITE_TEMPLATE_PATH?>/lazy.png" style="display:none;">
												</a>
											<?endif;?>
											</div>	
										</ul>
									</div>
								</li>
								
							<?php endforeach; ?>
						<li class="submenu-item parent-item left"><a class="link" title="Распродажа" href="/sale/">%</a></li>	
						</ul>
					</li>
					<li class="top-item"><a class="link" title="Акции" href="/actions/">Акции</a></li>
					<li class="top-item"><a class="link" title="Распродажа" href="/sale/">Распродажа</a></li>
					
					
<!-- 			Вопрос-ответ		/faq/ -->
					<li class="top-item"><a class="link" title="Контакты" href="/address/">Контакты</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>