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

<div class="main-nav brand-nav">

			<div class="toggle-content">
				<ul class="top-level">
					<li class="top-item parent-item">
						<a>Каталог товаров<span class="arrow top-arrow"></span></a>
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
								<li class="submenu-item parent-item">
									<a href="/brand/?section=<?=$section2["CODE"]?>"><?=$section2["NAME"]?><span class="arrow"></span></a>
	
									<div class="submenu-container">
										<ul class="submenu level3">
										
											<?php foreach ($section2["CHILDREN"] as $section3): ?>
												<?php $i++; ?>
												<li class="submenu-item parent-item">
													<a href="/brand/?section=<?=$section3["CODE"]?>"><?=$section3["NAME"]?><span class="arrow"></span></a>
														<ul class="submenu level4">
														
														<?php foreach ($section3["CHILDREN"] as $section4): ?>
															<?php $i++; ?>
															<li class="submenu-item">
																<a href="/brand/?section=<?=$section4["CODE"]?>"><?=$section4["NAME"]?></a>
															</li>
		
														<?php endforeach; ?>
	
													</ul>
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
											
										</ul>
									</div>
								</li>
								
							<?php endforeach; ?>
							
						</ul>
					</li>
				</ul>
			</div>
		</div>
