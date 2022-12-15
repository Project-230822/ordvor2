<?php
if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true)die();

use \Bitrix\Main\Application;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Page\Asset;

$request = Application::getInstance()->getContext()->getRequest();
$sCurPage = $APPLICATION->GetCurPage(true);

// if ($curPage == SITE_DIR.'index.php') {
// 	$APPLICATION->IncludeFile(
// 		"include/index.php",
// 		array(),
// 		array('SHOW_BORDER' => false)
// 	);
// }

if ($request->isAjaxRequest())
{
	// echo Asset::getInstance()->getJs();
	// CMain::FinalActions();
	?><!-- ajax-content --><?php
	// die();
}

if (Loader::includeModule('redsign.winn'))
{
// $APPLICATION->AddBufferContent(function () use ($APPLICATION) {
	echo \Redsign\Winn\MyTemplate::getSiteFooter();
//});
}
?>
<?/*
		</div><?php // l-page__main ?>
*/?>
		
		<div class="l-page__footer l-footer l-footer--dark pt-4" data-section="interstitial">
			<div class="container">
				<div class="d-flex flex align-items-start align-items-md-center justify-content-between text-secondary mb-4">
					<div class="">
						<?php
						$APPLICATION->IncludeFile(
							SITE_DIR.'/include/footer/menu.php',
							array(),
							array(
								'SHOW_BORDER' => false
							)
						);
						?>
					</div>
					<div class="up-float-button js-link-up btn btn-sm btn-link">
						<svg class="icon-svg"><use xlink:href="#svg-chevron-up"></use></svg>
					</div>
				</div>
				<hr class="mt-4 mb-6">
				<div class="mt-6 mb-4">
					<?/*<div class="d-block my-4 py-2 py-md-0">
						<?php
						$APPLICATION->IncludeFile(
							SITE_DIR.'/include/footer/address.php',
							array(),
							array(
								'SHOW_BORDER' => false
							)
						);
						?>
					</div>*/?>
					<div class="d-block my-4 py-2 py-md-0">
						<?php
						$APPLICATION->IncludeFile(
							SITE_DIR.'/include/footer/phones.php',
							array(),
							array(
								'SHOW_BORDER' => false
							)
						);
						?>
					</div>
					<div class="d-sm-flex align-items-center justify-content-between my-4 py-2 py-md-0">
						<?php
						$APPLICATION->IncludeFile(
							SITE_DIR.'/include/footer/emails.php',
							array(),
							array(
								'SHOW_BORDER' => false
							)
						);
						?>
						
    					<div class="font-size-sm pt-5 pt-sm-0">
    						<?php #REDSIGN_COPYRIGHT# ?>
    						<?=Loc::getMessage('RS_FOOTER_COPYRIGHT', array('#CURRENT_YEAR#' => date('Y')))?>
    					</div>
					</div>
				</div>
				<div class="d-flex flex justify-content-between text-secondary flex-column flex-md-row">
					<div class="d-flex justify-content-between mb-5 pb-4 mb-md-0 pb-md-0">
						<div class="">
							<?php
							$APPLICATION->IncludeFile(
								SITE_DIR.'/include/footer/socnet_links.php',
								array(),
								array(
									'SHOW_BORDER' => false
								)
							);
							?>
						</div>
						<div class="d-md-none">
							<?php
							$APPLICATION->IncludeFile(
								SITE_DIR.'/include/footer/site_selector.php',
								array(),
								array(
									'SHOW_BORDER' => false
								)
							);
							?>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div><?php // l-page ?>

	<div class="scroll-notify js-scroll-hidden-compensate" data-scroll-notify="" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="1000">
		<div class="scroll-notify__toddler"></div>
	</div>
	<?php $APPLICATION->IncludeFile(SITE_DIR."include/template/body_end.php", array(), array("MODE"=>"html")); ?>
	
		</div> <? /* /.js-smooth-content */ ?>
	</div></div> <? /* /#barba-wrapper && /.barba-container */ ?>
	<?php
	$APPLICATION->IncludeFile(
		"include/panels/side-panel.php",
		array(),
		array('SHOW_BORDER' => false)
	);
	?>
</body>
</html>
