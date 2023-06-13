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

if (empty($arResult["ALL_ITEMS"]))
	return;

CUtil::InitJSCore();

$menuBlockId = "catalog_menu_" . $this->randString(); ?>
<div class="bx-top-nav bx-<?= $arParams["MENU_THEME"] ?>" id="<?= $menuBlockId ?>">
	<div class="container">
		<nav class="bx-top-nav-container" id="cont_<?= $menuBlockId ?>">
			<ul class="bx-nav-list-1-lvl" id="ul_<?= $menuBlockId ?>">
				<? foreach ($arResult["MENU_STRUCTURE"] as $itemID => $arColumns) {
					//--first level--
					$existPictureDescColomn = ($arResult["ALL_ITEMS"][$itemID]["PARAMS"]["picture_src"] || $arResult["ALL_ITEMS"][$itemID]["PARAMS"]["description"]) ? true : false;
					$class = "bx-nav-1-lvl bx-nav-list-" . (($existPictureDescColomn) ? count($arColumns) + 1 : count($arColumns)) . "-col";
					if ($arResult["ALL_ITEMS"][$itemID]["SELECTED"]) {
						$class .= " bx-active";
					}
					if (is_array($arColumns) && count($arColumns) > 0) {
						$class .= " bx-nav-parent";
					} ?>
					<li class="<?= $class ?>" <? if (is_array($arColumns) && count($arColumns) > 0) : ?> data-role="bx-menu-item" onclick="if (BX.hasClass(document.documentElement, 'bx-touch')) obj_<?= $menuBlockId ?>.clickInMobile(this, event);" <? endif ?>>
						<a class="fade-out bx-nav-1-lvl-link" href="<?= $arResult["ALL_ITEMS"][$itemID]["LINK"] ?>" <? if (is_array($arColumns) && count($arColumns) > 0 && $existPictureDescColomn) : ?> <? endif ?>>
							<?= htmlspecialcharsbx($arResult["ALL_ITEMS"][$itemID]["TEXT"], ENT_COMPAT, false) ?>
						</a>
						<? if (is_array($arColumns) && count($arColumns) > 0) { ?>
							<span class="bx-nav-parent-arrow" onclick="obj_<?= $menuBlockId ?>.toggleInMobile(this)">
							</span> <!-- for mobile -->
							<div class="bx-nav-2-lvl-container">
								<? foreach ($arColumns as $key => $arRow) { ?>
									<ul class="bx-nav-list-2-lvl">
										<? foreach ($arRow as $itemIdLevel_2 => $arLevel_3) : ?> <!-- second level-->
											<li class="bx-nav-2-lvl">
												<a class="bx-nav-2-lvl-link" href="<?= $arResult["ALL_ITEMS"][$itemIdLevel_2]["LINK"] ?>" <? if ($existPictureDescColomn) : ?> <? endif ?> data-picture="<?= $arResult["ALL_ITEMS"][$itemIdLevel_2]["PARAMS"]["picture_src"] ?>" <? if ($arResult["ALL_ITEMS"][$itemIdLevel_2]["SELECTED"]) : ?>class="bx-active" <? endif ?>>
													<span class="bx-nav-2-lvl-link-text"><?= $arResult["ALL_ITEMS"][$itemIdLevel_2]["TEXT"] ?></span>
													<? if (is_array($arLevel_3) && count($arLevel_3) > 0) : ?>
														<span class="arrow"></span>
													<? endif; ?>
												</a>
												<? if (is_array($arLevel_3) && count($arLevel_3) > 0) : ?>
													<ul class="bx-nav-list-3-lvl">
														<? foreach ($arLevel_3 as $itemIdLevel_3) : ?> <!-- third level-->
															<li class="bx-nav-3-lvl">
																<a class="bx-nav-3-lvl-link" href="<?= $arResult["ALL_ITEMS"][$itemIdLevel_3]["LINK"] ?>" <? if ($existPictureDescColomn) : ?> <? endif ?> data-picture="<?= $arResult["ALL_ITEMS"][$itemIdLevel_3]["PARAMS"]["picture_src"] ?>" <? if ($arResult["ALL_ITEMS"][$itemIdLevel_3]["SELECTED"]) : ?>class="bx-active" <? endif ?>>
																	<span class="bx-nav-3-lvl-link-text"><?= $arResult["ALL_ITEMS"][$itemIdLevel_3]["TEXT"] ?></span>
																</a>
															</li>
														<? endforeach; ?>
													</ul>
												<? endif ?>
											</li>
										<? endforeach; ?>
									</ul>
								<? } ?>
								<? if ($existPictureDescColomn) : ?>
									<div class="bx-nav-list-2-lvl bx-nav-catinfo dbg" data-role="desc-img-block">
										<a class="bx-nav-2-lvl-link-image" href="<?= $arResult["ALL_ITEMS"][$itemID]["LINK"] ?>">
											<img src="<?= $arResult["ALL_ITEMS"][$itemID]["PARAMS"]["picture_src"] ?>" alt="">
										</a>
									</div>
								<? endif ?>
							</div>
						<? } ?>
					</li>
				<? } ?>
			</ul>
		</nav>
	</div>
</div>