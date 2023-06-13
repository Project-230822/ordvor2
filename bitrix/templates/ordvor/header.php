<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();


IncludeTemplateLangFile($_SERVER["DOCUMENT_ROOT"] . "/bitrix/templates/" . SITE_TEMPLATE_ID . "/header.php");

//var_dump($_SERVER['PATH_TRANSLATED']);

$curPage = $APPLICATION->GetCurPage(true);

$obCity = OrdvorCity::getInstance();

$obCity->cityRedirect();

global $arrFilterSect;

$hideSections = $obCity->getSectionToHide();

if ($hideSections) {
	$arrFilterSect["!=ID"] = $hideSections;
}

global $USER;

?>

<?php


if ($curPage == "/index.php") {
	$title = "Товары для охоты, рыбалки, спорта, активного отдыха - интернет-магазин в {{city|предложный}}";
	$description = "Интернет-магазин с широчайшим ассортиментом товаров, по направлениям: рыбалка, охота, ружья, спорт, туризм и просто активный отдых. Доступные цены в {{city|предложный}}";
	$APPLICATION->SetPageProperty("title", $title);
	$APPLICATION->SetPageProperty("description", $description);
}

?>

<!DOCTYPE html>
<html xml:lang="<?= LANGUAGE_ID ?>" lang="<?= LANGUAGE_ID ?>">

<head>

	<title><? $APPLICATION->ShowTitle() ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">

	<link rel="shortcut icon" type="image/x-icon" href="<?= htmlspecialcharsbx(SITE_DIR) ?>favicon.ico" />

	<meta name='RATING' content='General'>
	<meta name='ROBOTS' content='ALL'>
	<meta name="viewport" content="width=device-width" />
	<meta name="MobileOptimized" content="device" />


	<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/16.png" sizes="16x16">
	<link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/32.png" sizes="32x32">
	<link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/48.png" sizes="48x48">
	<link rel="apple-touch-icon-precomposed" sizes="180x180" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/180.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/152.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="48x48" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/48.png" />

	<meta property="og:image" content="http://188.225.75.22/bitrix/templates/ordvor/img/favicons/miniature.png">

	<meta property="og:title" content="Товары для охоты, рыбалки, спорта, активного отдыха - интернет-магазин в {{city|предложный}}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://ordvor.ru" />
	<meta property="og:site_name" content="Товары для охоты, рыбалки, спорта, активного отдыха - интернет-магазин в {{city|предложный}}" />
	<meta property="og:description" content="Интернет-магазин с широчайшим ассортиментом товаров, по направлениям: рыбалка, охота, ружья, спорт, туризм и просто активный отдых. Доступные цены в {{city|предложный}}" />

	<? if (!isLighthouse()) { ?>
		<script src='https://www.google.com/recaptcha/api.js?hl=ru'></script>
	<? } ?>

	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script type="text/javascript">
		window.dataLayer = window.dataLayer || [];
	</script>

	<?

	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/fonts.css");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/styles.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/jquery-3.4.1.min.js");

	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/bootstrap/css/bootstrap.min.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery.cookie.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jcarousellite.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery.blImageCenter.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery.json.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery.scrollTo.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery.placeholder.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/bootstrap/js/bootstrap.min.js");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/localization.js");

	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/chosen/chosen.css");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/chosen/chosen.jquery.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/jquery-ui.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/jquery-ui.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/fancybox/jquery.fancybox.pack.js?v=2.1.5");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/fancybox/jquery.fancybox.css?v=2.1.5");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/magnific-popup/jquery.magnific-popup.min.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/magnific-popup/magnific-popup.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/device.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/top.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/cat.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/cat.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/shopadd.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/shopadd.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/md5.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/reg.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/reg.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/checkmail.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/checkmail.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/regcheck.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/regcheck.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/remindme.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/remindme.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/checkmail2.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/checkmail2.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/remindmecheck.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/remindmecheck.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/auth.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/auth.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/archive.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/archive.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/error.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/error.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/shop.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/rotator.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/rotator.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/page.js");

	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/font-awesome.css");


	//rasa
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/rasa/menuv3.js");

	?>

	<?

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/slick/slick.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/slick/slick.css");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/custom.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/css/mombil.css");
	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/privacy.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/lazyload/lazyload.min.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/lib/owlcarousel/owl.carousel.js");
	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/owlcarousel/owl.carousel.css");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/js/jquery.mask.js");

	$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH . "/custom_rasa.js");

	$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH . "/lib/owlcarousel/owl.carousel.css");
	?>

	<? $APPLICATION->ShowHead(); ?>

	<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.css">

	<? if (!isLighthouse()) { ?>
		<!-- Google Tag Manager -->
		<script>
			(function(w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					'gtm.start': new Date().getTime(),
					event: 'gtm.js'
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-WPFMNLV');
		</script>
		<!-- End Google Tag Manager -->

		<meta name='yandex-verification' content='4e9c9b25efa60ff2' />
		<meta name="google-site-verification" content="ShGsQhyRtzKArG85N8yEiAQNJve5QU0bCvymGaUQk4A" />
		<meta name="google-site-verification" content="d1A-0Qofkcd04njq9o0VyWIpI9zZs6rQlWYSgcqhTpk" />

		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
			(function(d, w, c) {
				(w[c] = w[c] || []).push(function() {
					try {
						w.yaCounter31129606 = new Ya.Metrika({
							id: 31129606,
							clickmap: true,
							trackLinks: true,
							accurateTrackBounce: true,
							webvisor: true,
							ecommerce: "dataLayer"
						});
					} catch (e) {}
				});

				var n = d.getElementsByTagName("script")[0],
					s = d.createElement("script"),
					f = function() {
						n.parentNode.insertBefore(s, n);
					};
				s.type = "text/javascript";
				s.async = true;
				s.src = "https://mc.yandex.ru/metrika/watch.js";

				if (w.opera == "[object Opera]") {
					d.addEventListener("DOMContentLoaded", f, false);
				} else {
					f();
				}
			})(document, window, "yandex_metrika_callbacks");
		</script>


		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-73267927-4"></script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());

			gtag('config', 'UA-73267927-4');
		</script>
	<? } ?>
	<script charset="UTF-8" src="//web.webpushs.com/js/push/56b866006f8788309a491163f9f9311e_1.js" async></script>
	<script charset="UTF-8" src="//web.webpushs.com/js/push/a9fc422f6d3aceafb7412a6bf4ebb8e4_1.js" async></script>
	<script src="//code-ya.jivosite.com/widget/FaPHLZoZLM" async></script>
</head>


<div id="panel"><? $APPLICATION->ShowPanel(); ?></div>

<style>
	.top_block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 0;
	}

	.between_block {
		display: flex;
		align-items: center;
	}

	.city {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		cursor: pointer;
		color: #2a65ae;
		font-family: "Roboto";
		font-style: normal;
	}

	#city_question {
		position: relative;
	}

	.city a.current.ajax-popup {
		display: flex;
		align-items: center;
	}

	.city a.current.ajax-popup {
		display: flex;
		align-items: center;
	}

	.city svg {
		margin-left: 6px;
	}

	.work_time {
		margin-left: 35px;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #050505;
		display: flex;
	}

	.msk_plus {
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #050505;
		opacity: 0.4;
		margin-left: 15px;
	}

	.mobile-block__top-bottom>.work_time {
		margin: 0 0 24px;
		font-size: 15px;
	}

	.mobile-block__top-bottom {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.mobile-block__top-bottom>.city {
		font-size: 15px;
		line-height: 18px;
		margin-bottom: 16px;
	}

	.mobile-block__top-bottom .msk_plus {
		font-size: 15px;
		line-height: 18px;
		margin-left: 8px;
	}

	.mobile-block__top-bottom>.phone_numbers {
		align-items: flex-start;
		margin-bottom: 24px;
	}

	.mobile-block__top-bottom>.phone_numbers>.number {
		font-size: 16px;
		line-height: 19px;
	}

	.mobile-block__top-bottom>.phone_numbers>.number:first-child {
		margin-bottom: 10px;
	}

	.between_block.phone_numbers {
		flex-direction: column;
	}

	.between_block.profile-mobile {
		display: none;
	}

	.between_block.mobile-block {
		display: none;
	}

	.mobile_phone {
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
		display: none;
		text-align: right;
		color: #050505;
	}

	.links {
		justify-content: space-between;
	}

	.links_element {
		display: flex;
		text-decoration-line: unset;
	}

	.link-wa.links_element {
		margin-right: 10px;
	}

	.profile-desctop>noindex {
		display: flex;
		align-items: center;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #2c2c2c;
		margin-left: 32px;
	}

	.profile-desctop a {
		color: #2c2c2c;
	}

	.profile-desctop .item {
		display: flex;
	}

	.profile-desctop .exit {
		margin-left: 10px;
	}

	.top {
		border-bottom: 1px solid #eeeeee;
	}

	.down_block {
		justify-content: space-between;
		display: flex;
		align-items: center;
		padding: 24px 0px;
	}

	.mobile-block__button-show {
		margin-right: 28px;
		cursor: pointer;
	}

	.mobile-block__body {
		position: fixed;
		z-index: 101;
		background-color: #ffffff;
		bottom: 0;
		top: 0;
		left: -900px;
		padding: 30px 20px;
		width: 90%;
		transition: 0.4s ease-in-out;
	}

	.mobile-block_show>.mobile-block__body {
		left: 0;
	}

	.mobile-block_show>.mobile-block__background {
		opacity: 1;
		z-index: 100;
	}

	.mobile-block__background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #787878;
		z-index: -1;
		transition: 0.5s ease-out;
		overflow: hidden;
		opacity: 0;
	}

	.mobile-block__top-block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 36px;
	}

	.down__right-block {
		display: flex;
		justify-content: space-between;
		flex-basis: 100%;
		margin-left: 48px;
		align-items: center;
	}

	.phone_numbers .number {
		font-weight: 500;
		font-size: 15px;
		line-height: 26px;
		color: #050505;
		display: block;
	}

	span.mobile-block__hiding-button {
		position: relative;
		z-index: 1000;
		display: flex;
	}

	.compare-block-counter {
		display: inline-block;
		vertical-align: top;
		text-align: left;
		margin-left: 10px;
		float: left;
	}

	.compare-block-counter .link-compare {
		color: #000;
		text-transform: none;
		position: relative;
		display: block;
	}

	.compare-block-counter .link-compare:before {
		/* use !important to prevent issues with browser extensions that change fonts */
		display: inline-block;
		font-family: "icomoon" !important;
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		/* Better Font Rendering =========== */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.compare-block-counter .link-compare:before {
		content: "\e90b";
		font-size: 18px;
	}

	.compare-block-counter .link-compare .counter {
		width: 18px;
		height: 18px;
		line-height: 19px;
		display: inline-block;
		text-align: center;
		border-radius: 50%;
		background: #e3e3e3;
		position: absolute;
		top: -10px;
		left: 9px;
	}

	.compare-block-counter {
		display: none;
	}

	@media (max-width: 1200px) {
		.msk_plus {
			margin-left: 0;
			margin-top: 5px;
			display: inline-block;
		}

		.work_time {
			margin-left: 25px;
			font-size: 12px;
			flex-wrap: wrap;
		}

		.compare-block-counter {
			margin: 0;
		}
	}

	@media (max-width: 1199px) {
		.compare-block-counter {
			margin-right: 5px;
		}
	}

	@media (max-width: 991px) {
		.work_time {
			margin-left: 25px;
			font-size: 12px;
		}

		.profile-desctop {
			font-size: 12px;
		}

		.compare-block-counter {
			float: unset;
			margin-right: 20px;
		}
	}

	@media (max-width: 767px) {
		.icon svg {
			width: 120px;
			height: 32px;
		}

		.top_block {
			padding-bottom: 0;
		}

		.top_block>.between_block.links {
			display: none;
		}

		.top_block>.between_block.top-menu {
			display: none;
		}

		.top_block>.between_block.profile-desctop {
			display: none;
		}

		.top_block>.between_block.top-menu {
			display: none;
		}

		.top_block>.work_time {
			display: none;
		}

		.mobile_phone {
			display: block;
		}

		.top {
			border: 0;
		}

		.down_block {
			padding: 14px 0px;
		}

		.down__left-block {
			display: flex;
			align-items: center;
		}

		.msk_plus {
			margin-top: 0;
			margin-left: 20px;
		}

		.between_block.mobile-block {
			display: flex;
		}

		.down__right-block>.between_block {
			margin-left: 24px;
		}

		.down__right-block>.between_block:first-child {
			margin-left: 0;
		}

		.down__right-block {
			justify-content: right;
			margin-left: 20px;
		}

		.down__right-block .between_block.phone_numbers {
			display: none;
		}

		.between_block.profile-mobile {
			display: flex;
		}
	}

	@media (max-width: 365px) {
		.compare-block-counter {
			display: none !important;
		}
	}
</style>

<body>
	<!-- Google Tag Manager (noscript) -->
	<noscript>
		<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPFMNLV" height="0" width="0" style="display:none;visibility:hidden"></iframe>
	</noscript>
	<!-- End Google Tag Manager (noscript) -->
	<header>
		<div class="top">
			<div class="container">
				<div class="top_block">
					<div class="between_block">
						<div class="city">
							<? $APPLICATION->IncludeFile(SITE_DIR . "include/city-identifier.php", array(), array("MODE" => "php")); ?>
						</div>
						<div class="work_time">
							<? $APPLICATION->IncludeFile(SITE_DIR . "include/time_working.php", array(), array("MODE" => "php")); ?>
						</div>
					</div>
					<div class="between_block top-menu">
						<? $APPLICATION->IncludeComponent(
							"bitrix:menu",
							"top_menu_2",
							array(
								"ALLOW_MULTI_SELECT" => "N",
								"CHILD_MENU_TYPE" => "top",
								"COMPONENT_TEMPLATE" => "top_menu_2",
								"DELAY" => "N",
								"MAX_LEVEL" => "2",
								"MENU_CACHE_GET_VARS" => array(),
								"MENU_CACHE_TIME" => "360000",
								"MENU_CACHE_TYPE" => "A",
								"MENU_CACHE_USE_GROUPS" => "Y",
								"ROOT_MENU_TYPE" => "top",
								"USE_EXT" => "N"
							),
							false
						); ?>
					</div>
					<div class="between_block links">
						<? $APPLICATION->IncludeFile(SITE_DIR . "include/social-networks.php", array(), array("MODE" => "php")); ?>
					</div>
					<div class="between_block profile-desctop">
						<noindex class="profile-desctop">
							<?php if ($USER->IsAuthorized()) : ?>
								<a class="personal-area" href="/personal/">
									<div class="item"><?= $USER->GetEmail(); ?></div>
								</a>
								<a class="exit fade-out" href="<?= $APPLICATION->GetCurPageParam('logout=yes') ?>">
									<div class="item">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
											<path class="st0" d="M14.13 25.9H3.53c-.65 0-1.18-.53-1.18-1.18V3.53c0-.65.53-1.18 1.18-1.18h10.59c.65 0 1.18-.53 1.18-1.18C15.3.53 14.78 0 14.13 0H3.53C1.58 0 0 1.58 0 3.53v21.19c0 1.95 1.58 3.53 3.53 3.53h10.59c.65 0 1.18-.53 1.18-1.18 0-.65-.52-1.17-1.17-1.17z" fill="#000000" />
											<path class="st0" d="M28 13.29l-7.16-7.06c-.46-.46-1.21-.45-1.66.01-.46.46-.45 1.21.01 1.66l5.11 5.05H10.59c-.65 0-1.18.53-1.18 1.18s.53 1.18 1.18 1.18H24.3l-5.11 5.05c-.46.46-.47 1.2-.01 1.66.23.23.53.35.84.35.3 0 .6-.11.83-.34L28 14.96c.22-.22.35-.52.35-.84s-.13-.61-.35-.83z" fill="#000000" />
										</svg>
									</div>
								</a>
							<?php else : ?>
								<a href="/login/">
									<div class="join">Вход</div>
								</a>/
								<a href="/login/index.php?register=yes">
									<div class="register">Регистрация</div>
								</a>
							<?php endif; ?>
						</noindex>
					</div>
					<div class="between_block mobile_phone">
						<? $APPLICATION->IncludeFile(SITE_DIR . "include/contacts-phone-mobile.php", array(), array("MODE" => "php")); ?>
					</div>
				</div>
			</div>
		</div>
		<div class="down">
			<div class="container">
				<div class="down_block">
					<div class="down__left-block">
						<div class="between_block mobile-block">
							<div class="mobile-block__button-show">
								<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 1H17M1 9H17" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</div>
							<? $APPLICATION->IncludeFile(SITE_DIR . 'include/mobile-block.php', [], ['MODE' => 'php']); ?>
						</div>
						<div class="between_block">
							<div class="icon">
								<a href='/' title='Оружейный двор'>
									<? $APPLICATION->IncludeFile(SITE_DIR . "include/logotype-desctop.php", array(), array("MODE" => "php")); ?>
								</a>
							</div>
						</div>
					</div>
					<div class="down__right-block">
						<div class="between_block">
							<? $APPLICATION->IncludeComponent(
								"bitrix:search.title",
								"ordvor_search_title_2",
								array(
									"CATEGORY_0" => array(
										0 => "iblock_1c_catalog",
									),
									"CATEGORY_0_TITLE" => "",
									"CATEGORY_0_iblock_1c_catalog" => array(
										0 => "all",
									),
									"CHECK_DATES" => "N",
									"CONTAINER_ID" => "title-search",
									"INPUT_ID" => "title-search-input",
									"NUM_CATEGORIES" => "1",
									"ORDER" => "rank",
									"PAGE" => "#SITE_DIR#catalog/index.php",
									"SHOW_INPUT" => "Y",
									"SHOW_OTHERS" => "N",
									"TOP_COUNT" => "10",
									"USE_LANGUAGE_GUESS" => "Y",
									"COMPONENT_TEMPLATE" => "ordvor_search_title_2"
								),
								false
							); ?>
						</div>
						<div class="between_block phone_numbers">
							<? if ($obCity->getDeclination("CITY") == "Хабаровск") {
								$APPLICATION->IncludeFile(SITE_DIR . "include/contacts_phone.php", array(), array("MODE" => "php"));
							} else {
								$APPLICATION->IncludeFile(SITE_DIR . "include/contacts_phone_another.php", array(), array("MODE" => "php"));
							} ?>
						</div>
						<div class="between_block profile-mobile">
							<noindex>
								<a class="personal-area" <?= ($USER->IsAuthorized() ? 'href="/personal/"' : 'href="/login/"') ?>>
									<div class="item">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M3.12104 15.8037C5.15267 14.6554 7.4998 14 10 14C12.5002 14 14.8473 14.6554 16.879 15.8037M13 8C13 9.65685 11.6569 11 10 11C8.34315 11 7 9.65685 7 8C7 6.34315 8.34315 5 10 5C11.6569 5 13 6.34315 13 8ZM19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</div>
								</a>
							</noindex>
						</div>
						<div class="between_block">
							<div class="basket_block">
								<a href="/login/" class="link-login"></a>
								<div class="compare-block-counter">
									<a href="/catalog/compare.php" class="link-compare visible-xs">
										<span class="counter">
											<?php
											$APPLICATION->IncludeComponent(
												"bitrix:catalog.compare.list",
												"ordvor_catalog_compare_list",
												array(
													"AJAX_MODE" => "Y",
													"IBLOCK_ID" => "18",
													"POSITION_FIXED" => "N",
													"POSITION" => "top left",
													"DETAIL_URL" => "",
													"COMPARE_URL" => "/catalog/compare.php",
													"NAME" => "CATALOG_COMPARE_LIST",
													"AJAX_OPTION_JUMP" => "N",
													"AJAX_OPTION_STYLE" => "Y",
													"AJAX_OPTION_HISTORY" => "N",
													"ACTION_VARIABLE" => "action",
													"PRODUCT_ID_VARIABLE" => "id"
												)
											);
											?>
										</span>
									</a>
								</div>
								<? $APPLICATION->IncludeComponent(
									"bitrix:sale.basket.basket.line",
									"ordvor_2",
									array(
										"HIDE_ON_BASKET_PAGES" => "N",
										"PATH_TO_AUTHORIZE" => "",
										"PATH_TO_BASKET" => SITE_DIR . "personal/cart/",
										"PATH_TO_ORDER" => SITE_DIR . "personal/order/make/",
										"PATH_TO_PERSONAL" => SITE_DIR . "personal/",
										"PATH_TO_PROFILE" => SITE_DIR . "personal/",
										"PATH_TO_REGISTER" => SITE_DIR . "login/",
										"POSITION_FIXED" => "N",
										"SHOW_AUTHOR" => "N",
										"SHOW_EMPTY_VALUES" => "Y",
										"SHOW_NUM_PRODUCTS" => "Y",
										"SHOW_PERSONAL_LINK" => "N",
										"SHOW_PRODUCTS" => "N",
										"SHOW_REGISTRATION" => "N",
										"SHOW_TOTAL_PRICE" => "Y",
										"COMPONENT_TEMPLATE" => "ordvor_2",
										"SUM_FOR_FREE_DELIVERY" => "10000"
									),
									false
								); ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<? global $arrFilterSect; ?>
		<? $APPLICATION->IncludeComponent(
			"bitrix:menu",
			"ordvor_desctop_2",
			array(
				"ROOT_MENU_TYPE" => "main",
				"MAX_LEVEL" => "3",
				"CHILD_MENU_TYPE" => "main",
				"USE_EXT" => "Y",
				"DELAY" => "N",
				"ALLOW_MULTI_SELECT" => "Y",
				"MENU_CACHE_TYPE" => "N",
				"MENU_CACHE_TIME" => "3600",
				"MENU_CACHE_USE_GROUPS" => "Y",
				"MENU_CACHE_GET_VARS" => array(),
				"COMPONENT_TEMPLATE" => "ordvor_desctop_2",
				"MENU_THEME" => "site"
			),
			false
		); ?>
	</header>
	<?php if ($curPage !== "/index.php") : ?>
		<div class="main">
			<div class="container">

				<? $APPLICATION->IncludeComponent(
					"bitrix:breadcrumb",
					".default",
					array(
						"PATH" => "",
						"SITE_ID" => "s1",
						"START_FROM" => "0"
					)
				); ?>

			<?php endif; ?>