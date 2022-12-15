<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use \Bitrix\Main\Application;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Bitrix\Main\Page\Asset;

Loc::loadMessages(__FILE__);

if (!Loader::includeModule('redsign.winn'))
{
	ShowError(Loc::getMessage('RS_WINN_ERROR_MODULE_NOT_INSTALLED'));
	die();
}

$documentRoot = Application::getDocumentRoot();
$request = Application::getInstance()->getContext()->getRequest();
$curPage = $APPLICATION->GetCurPage(true);

// get site data
$cacheTime = 86400;
$cacheId = 'CSiteGetByID'.SITE_ID;
$cacheDir = '/siteData/'.SITE_ID.'/';

$cache = Bitrix\Main\Data\Cache::createInstance();
if ($cache->initCache($cacheTime, $cacheId, $cacheDir)) {
	$arSiteData = $cache->getVars();
} elseif ($cache->startDataCache()) {

	$arSiteData = array();

	$rsSites = CSite::GetByID(SITE_ID);
	if ($arSite = $rsSites->Fetch()) {
		$arSiteData['SITE_NAME'] = $arSite['SITE_NAME'];
	}

	if (empty($arSiteData)) {
		$cache->abortDataCache();
	}

	$cache->endDataCache($arSiteData);
}

// Global constans
$APPLICATION->IncludeFile(
	'include/globals/constants.php',
	array(),
	array(
		'SHOW_BORDER' => false
	)
);

$sBodyClass = 'js-body';
// $sBodyClass .= ' '.RS_WINN_CONTAINER_MAX_WIDTH;

$sDocumentClass .= '';
$sDocumentClass .= ' ff-'.RS_WINN_USE_FONT_FAMILY;
$sDocumentClass .= ' fs-'.RS_WINN_FONT_SIZE;

$arJsOptions = [
    'siteDir' => SITE_DIR,
	'usePageLoadAnimation' => RS_WINN_USE_PAGE_LOAD_ANIMATION == 'Y',
	// 'defaultPopupType' => RS_WINN_POPUP_TYPE
];

$asset = Asset::getInstance();
?><!DOCTYPE html>
<html class="<?=$sDocumentClass?>" xml:lang="<?=LANGUAGE_ID?>" lang="<?=LANGUAGE_ID?>">
<head>
	<?php $APPLICATION->IncludeFile(SITE_DIR."include/template/head_start.php", array(), array("MODE"=>"html"))?>
	<?php
	$asset->addString('<link href="'.CHTTP::URN2URI('/favicon.ico').'" rel="shortcut icon"  type="image/x-icon">');
	$asset->addString('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
	$asset->addString('<meta name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit">');

	CJSCore::Init(array('ajax', 'ls'));
	$asset->addString('<script data-skip-moving="true">
	(function () {
		window.RS = window.RS || {};
			window.RS.Options = '.CUtil::PhpToJSObject($arJsOptions).'
		})();
	</script>', true);
	$asset->addJs(SITE_TEMPLATE_PATH.'/assets/scripts/manifest.js');
	$asset->addJs(SITE_TEMPLATE_PATH.'/assets/scripts/vendor.js');
	// $asset->addJs('//unpkg.com/imask', 2);
	$asset->addJs(SITE_TEMPLATE_PATH.'/assets/scripts/main.js');
	$asset->addJs(SITE_TEMPLATE_PATH.'/assets/styles/custom.js');
	$asset->addJs(SITE_DIR.'assets/styles/custom.js');

	$asset->addCss(SITE_TEMPLATE_PATH.'/assets/styles/main.css');
	$asset->addCss(SITE_TEMPLATE_PATH.'/assets/styles/print.css');
	$asset->addCss(SITE_TEMPLATE_PATH.'/assets/styles/custom.css');
	$asset->addCss(SITE_DIR.'assets/styles/custom.css');
	$asset->addString('<link href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,700,700i&amp;subset=cyrillic-ext" rel="stylesheet">');

	$APPLICATION->ShowHead();

	// TODO moving in template class
	function sHtmlBodyColor() {
		global $APPLICATION;
		$isDarkPage = $APPLICATION->GetProperty('dark_page') == 'Y';
		if ($isDarkPage) {
			$sHtml = ' body--dark';
		} else {
			$sHtml = ' body--light';
		}
		return $sHtml;
	}
	function sHtmlBodyAnimation() {
		global $APPLICATION;
		$sHtml = '';
		if ($page_hide_effect_first_screen = $APPLICATION->GetProperty('page_hide_effect_first_screen')) {
			$sHtml.= ' data-page_hide_effect_first_screen="'.$page_hide_effect_first_screen.'"';
		}
		if ($page_hide_effect_second_screen = $APPLICATION->GetProperty('page_hide_effect_second_screen')) {
			$sHtml.= ' data-page_hide_effect_second_screen="'.$page_hide_effect_second_screen.'"';
		}
		if ($page_show_effect = $APPLICATION->GetProperty('page_show_effect')) {
			$sHtml.= ' data-page_show_effect="'.$page_show_effect.'"';
		}
		return $sHtml;
	}
	// TODO moving in template class

	?>

	<!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

       ym(69586987, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
       });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/69586987" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-57P9VKB');</script>
    <!-- End Google Tag Manager -->
	<title><?php
	    $APPLICATION->ShowTitle();
	?></title>
	<?php $APPLICATION->IncludeFile(SITE_DIR."include/template/head_end.php", array(), array("MODE"=>"html")); ?>
	<meta name="yandex-verification" content="4d5e19b2a947c3c0" />
</head>
<body class="<?=$sBodyClass?><?=$APPLICATION->AddBufferContent("sHtmlBodyColor");?>"<?$APPLICATION->ShowViewContent('bodyAttributes')?>>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57P9VKB"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
	<?php $APPLICATION->IncludeFile(SITE_DIR."include/template/body_start.php", array(), array("MODE"=>"html")); ?>
	<div id="panel"><?php $APPLICATION->ShowPanel(); ?></div>
	<div id="svg-icons" class="d-none"></div>
	<script>
		<?php $sIconsFileHash = \Bitrix\Main\Config\Option::get('redsign.winn', 'icons_rand'); ?>
		$('#svg-icons').setHtmlByUrl({url:'<?=SITE_DIR?>include/icons.svg?<?=$sIconsFileHash?>'});
	</script>
	<?php
	$APPLICATION->IncludeFile(
		"include/globals/init.php",
		array(),
		array(
			'SHOW_BORDER' => false
		)
	);
	?>
	<div id="barba-wrapper" class="min-vh-100"><div class="barba-container min-vh-100">
		<div class="smooth__content min-vh-100 js-smooth-content">
			<div class="js-smoothData" data-body-class="<?=$sBodyClass?><?=$APPLICATION->AddBufferContent("sHtmlBodyColor");?>" <?=$APPLICATION->AddBufferContent("sHtmlBodyAnimation");?>></div>
	<?php
	$sPageClass = 'l-page min-vh-100';
	if ($curPage == SITE_DIR.'index.php')
	{
		$sPageClass .= ' l-page--index';
	}
	?>

	<div class="<?=$sPageClass?>">
			<header class="l-page__header l-header">
				<div class="l-header__left d-flex align-items-center">
					<?php
					$arMenuMainOptions = [
						'slideClass' => 'fullscreen fancybox-slide--dark',
						'animationEffect' => 'fade',
						'animationDuration' => 400,
					];
					?>
					<div class="l-header__hamburger btn btn-primary mr-5" data-popup="menu" data-type="ajax" data-popup-type="fullscreen" data-src="<?=SITE_DIR.'ajax/menu-main.php'?>" data-popup-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arMenuMainOptions))?>">
						<div class="hamburger">
							<div class="hamburger__box">
								<div class="hamburger__inner" data-compact-menu-toggle=""></div>
							</div>
						</div>
					</div>
					<div class="l-header__logo">
						<?php
						if ($curPage != SITE_DIR.'index.php')
						{
							?>
							<a href="<?=SITE_DIR?>" class="text-decoration-none"><?php
								?><?$APPLICATION->IncludeFile(
									SITE_DIR."include/company_logo.php",
									Array(),
									Array("MODE"=>"html")
								);?><?php
							?></a>
							<?php
						}
						else
						{
							?>
							<h1 class="m-0 p-0"><?php
								?><?$APPLICATION->IncludeFile(
									SITE_DIR."include/company_logo.php",
									Array(),
									Array("MODE"=>"html")
								);?><?php
							?></h1>
							<?php
						}
						?>
					</div>
    				<div class="header-menu d-flex flex align-items-start align-items-md-center justify-content-between" <?if ($curPage == SITE_DIR.'index.php') echo "style='color:#fff;'";?>>
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
    				</div>
				</div>
				<div class="l-header__right l-contrast">
					<?php
					$arMenuFabOptions = [
						'hoverEnabled' => false,
					];
					?>
					<div class="l-header__fab fab direction-left direction-bottom active" data-fab="MENU" data-fab-options="<?=htmlspecialcharsbx(\Bitrix\Main\Web\Json::encode($arMenuFabOptions))?>">
						<?/*<svg class="fab__btn" data-fab-btn=""  version="1.1" id="el_Vu2EXMZMj" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 88 88" style="enable-background:new 0 0 88 88;" xml:space="preserve">
							<g id="el_EG_tJm4X9N_an_13QSRu9Sb" data-animator-group="true" data-animator-type="2"><rect width="88" height="88" id="el_EG_tJm4X9N"></rect></g>
							<g id="el_7sHj_bLzhD_an_q8FjWEzm4" data-animator-group="true" data-animator-type="2"><path id="el_7sHj_bLzhD" d="M45,35.5h-2V43h-7.5v2H43v7.5h2V45h7.5v-2H45V35.5z"></path></g>
							<g id="el_hHOWikO_MJ_an_6OT5D_c0G4" data-animator-group="true" data-animator-type="2"><path d="M67,21H21v46h46V21z M20,20v48h48V20H20z" id="el_hHOWikO_MJ"></path></g>
							<g id="el_fsR_ha0RD2_an_LPFi9J1At" data-animator-group="true" data-animator-type="2"></g>
							<g id="el_5WD6QrId_l_an_5_yZMECis2" data-animator-group="true" data-animator-type="2"></g>
							
							<g id="el_74uqoS6kke_an_5r05hrJ8X" data-animator-group="true" data-animator-type="2"><rect id="el_74uqoS6kke" width="43" height="43"></rect></g>
							<g id="el_glUNmLclcy_an_qVbp79TTc" data-animator-group="true" data-animator-type="2"><rect id="el_glUNmLclcy" x="45" width="43" height="43"></rect></g>
							<g id="el_4WUeMceZzt_an_jKt0vo4Nk" data-animator-group="true" data-animator-type="2"><rect id="el_4WUeMceZzt" y="45" width="43" height="43"></rect></g>
							<g id="el_EYUxxo3eSS_an_pYOHFwEKl" data-animator-group="true" data-animator-type="2"><rect id="el_EYUxxo3eSS" x="45" y="45" width="43" height="43"></rect></g>
						</svg>
						<ul class="fab__menu--horizontal" data-fab-menu-horizontal="">
							<li class="mr-4">
								<div class="fab__menu-btn" data-fab-menu-btn="">
									<?php
									$APPLICATION->IncludeFile(
										SITE_DIR.'/include/header/site_selector.php',
										array(),
										array(
											'SHOW_BORDER' => false
										)
									);
									?>
								</div>
							</li>
							<li class="mr-4">
								<div class="fab__menu-btn" data-fab-menu-btn="">
									<?php
									$APPLICATION->IncludeFile(
										SITE_DIR.'/include/header/phones.php',
										array(),
										array(
											'SHOW_BORDER' => false
										)
									);
									?>
								</div>
							</li>
							<li class="mr-4">
								<div class="fab__menu-btn" data-fab-menu-btn="">
									<?php
									$APPLICATION->IncludeFile(
										'include/globals/search-icon.php',
										array(),
										array(
											'SHOW_BORDER' => false
										)
									);
									?>
								</div>
							</li>
						</ul>*/?>
						<ul class="fab__menu--vertical<?=(isset($RS_BASKET_DATA) && $RS_BASKET_DATA['NUM_PRODUCTS'] > 0 ? ' fab__menu--visible' : '')?>" data-fab-menu-vertical="">
							<?/*<li class="mt-1">
								<div class="fab__menu-btn" data-fab-menu-btn="">
									<?php
									$APPLICATION->IncludeFile(
										'include/globals/recall-icon.php',
										array()
									);
									?>
								</div>
							</li>*/?>
							<li class="">
								<div style="opacity:1" class="fab__menu-btn<?=(isset($RS_BASKET_DATA) && $RS_BASKET_DATA['NUM_PRODUCTS'] > 0 ? ' fab__menu-btn--visible' : '')?>" data-fab-menu-btn="">
									<?php
									$APPLICATION->IncludeFile(
										'include/globals/cart-icon.php',
										array(
											'AJAX_LOAD' => 'Y',
										),
										array(
											'SHOW_BORDER' => false
										)
									);
									?>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<?php
/*
			$sPageMainClass = '';
			?>
			<div class="<?=$sPageMainClass?>">
				<?php
*/
//            global $USER;
//            if ($USER->IsAdmin()) {
//                $APPLICATION->AddBufferContent('getSiteHead');
//            } else {
//                if (Loader::includeModule('redsign.winn')) {
//                    $APPLICATION->AddBufferContent(array('\Redsign\Winn\MyTemplate', 'getSiteHead'));
//                }
//            }
            $APPLICATION->AddBufferContent('getSiteHead');

				if ($request->isAjaxRequest())
				{
					// $APPLICATION->restartBuffer();
					?><!-- ajax-content --><?php
				}
?>