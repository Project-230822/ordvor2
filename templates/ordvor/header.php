<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die ();


IncludeTemplateLangFile($_SERVER ["DOCUMENT_ROOT"] . "/bitrix/templates/" . SITE_TEMPLATE_ID . "/header.php");

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
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width">

    <link rel="shortcut icon" type="image/x-icon" href="<?= htmlspecialcharsbx(SITE_DIR) ?>favicon.ico"/>

    <meta name='RATING' content='General'>
    <meta name='ROBOTS' content='ALL'>
    <meta name="viewport" content="width=device-width"/>
    <meta name="MobileOptimized" content="device"/>


    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/16.png" sizes="16x16">
    <link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/32.png" sizes="32x32">
    <link rel="icon" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/48.png" sizes="48x48">
    <link rel="apple-touch-icon-precomposed" sizes="180x180" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/180.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/152.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/144.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/120.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/114.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/76.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/72.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/57.png"/>
    <link rel="apple-touch-icon-precomposed" sizes="48x48" href="<?= SITE_TEMPLATE_PATH; ?>/img/favicons/48.png"/>

    <meta property="og:image" content="http://188.225.75.22/bitrix/templates/ordvor/img/favicons/miniature.png">

    <meta property="og:title"
          content="Товары для охоты, рыбалки, спорта, активного отдыха - интернет-магазин в {{city|предложный}}"/>
    <meta property="og:type" content="article"/>
    <meta property="og:url" content="https://ordvor.ru"/>
    <meta property="og:site_name"
          content="Товары для охоты, рыбалки, спорта, активного отдыха - интернет-магазин в {{city|предложный}}"/>
    <meta property="og:description"
          content="Интернет-магазин с широчайшим ассортиментом товаров, по направлениям: рыбалка, охота, ружья, спорт, туризм и просто активный отдых. Доступные цены в {{city|предложный}}"/>

    <? if (!isLighthouse()) { ?>
        <script src='https://www.google.com/recaptcha/api.js?hl=ru'></script>
    <? } ?>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script type="text/javascript">window.dataLayer = window.dataLayer || []; </script>

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
        <script>(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-WPFMNLV');</script>
        <!-- End Google Tag Manager -->

        <meta name='yandex-verification' content='4e9c9b25efa60ff2'/>
        <meta name="google-site-verification" content="ShGsQhyRtzKArG85N8yEiAQNJve5QU0bCvymGaUQk4A"/>
        <meta name="google-site-verification" content="d1A-0Qofkcd04njq9o0VyWIpI9zZs6rQlWYSgcqhTpk"/>

        <!-- Yandex.Metrika counter -->
        <script type="text/javascript">
            (function (d, w, c) {
                (w[c] = w[c] || []).push(function () {
                    try {
                        w.yaCounter31129606 = new Ya.Metrika({
                            id: 31129606,
                            clickmap: true,
                            trackLinks: true,
                            accurateTrackBounce: true,
                            webvisor: true,
                            ecommerce: "dataLayer"
                        });
                    } catch (e) {
                    }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function () {
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

<body>

<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPFMNLV"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->

<header class='main-header'>
    <div class="top-line">
        <div class="container">
            <? $APPLICATION->IncludeComponent(
                "bitrix:menu",
                "top_menu",
                array(
                    "ALLOW_MULTI_SELECT" => "N",
                    "CHILD_MENU_TYPE" => "top",
                    "COMPONENT_TEMPLATE" => ".default",
                    "DELAY" => "N",
                    "MAX_LEVEL" => "1",
                    "MENU_CACHE_GET_VARS" => "",
                    "MENU_CACHE_TIME" => "360000",
                    "MENU_CACHE_TYPE" => "A",
                    "MENU_CACHE_USE_GROUPS" => "Y",
                    "ROOT_MENU_TYPE" => "top",
                    "USE_EXT" => "N"
                )
            ); ?>

            <div class="shop-all">
                <?php
                $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    array(
                        "AREA_FILE_RECURSIVE" => "Y",
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => SITE_DIR . "include/shop_all.php"
                    )
                ); ?>
            </div>

            <div id='private_office' class="personal-block">


                <noindex>

                    <?php if ($USER->IsAuthorized()): ?>

                        <a href="/personal/">
                            <div class="item"><?= $USER->GetEmail(); ?></div>
                        </a>
                        <a href="<?= $APPLICATION->GetCurPageParam('logout=yes') ?>">
                            <div class="item">
                                <img src="<?= SITE_TEMPLATE_PATH ?>/img/logout.svg">
                            </div>
                        </a>

                    <?php else: ?>
                        <a href="/login/">
                            <div class="item">Вход</div>
                        </a>
                        <a href="/login/index.php?register=yes">
                            <div class="item">Регистрация</div>
                        </a>
                    <?php endif; ?>

                </noindex>


            </div>
        </div>
    </div>

    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col logo-col">
                    <div class="city-selector">

                        <? $url = urlencode($_SERVER['REQUEST_URI']);
                        global $USER;

                        $page = (CMain::IsHTTPS()) ? "https://" : "http://";
                        $page .= $_SERVER["SERVER_NAME"];
                        $page .= $APPLICATION->GetCurUri();

                        ?>
                        <noindex>
                            <a href="/ajax/cities.php?url=<?= $url ?>" onclick="return false;"
                               class="current ajax-popup"><?= $obCity->getDeclination("CITY") ?></a>
                            <? /*<div class="current"><?=$obCity->getDeclination("CITY")?></div>*/ ?>
                        </noindex>

                        <div id="city_question">
                            <? Bitrix\Main\Page\Frame::getInstance()->startDynamicWithID("city_question"); ?>

                            <? if (!$_SESSION['IS_SHOWED_FORM']): ?>
                                <div class="question-city" data-redirect="<?= $_SESSION['cityRedirectedUrl'] ?>"
                                     data-url="<?= $page ?>">
                                    <div class="question-city-label">Ваш город</div>
                                    <div class="question-city-title">
                                        <strong><?= $_SESSION['cityRedirectedName'] ? $_SESSION['cityRedirectedName'] : $obCity->getDeclination("CITY") ?></strong>
                                    </div>
                                    <div class="question-city-btn">
                                        <button type="button" class="btn-yes">Да</button>
                                        <button type="button" class="btn-no">Выбрать другой</button>
                                    </div>
                                </div>
                                <div class="bg-city-popup"></div>
                                <? $_SESSION['IS_SHOWED_FORM'] = 1 ?>
                            <? endif ?>

                            <? Bitrix\Main\Page\Frame::getInstance()->finishDynamicWithID("city_question", "", "city_question") ?>
                        </div>

                        <script>
                            $(function () {

                                $('body').on('click', '.question-city-btn .btn-no', function () {

                                    $(this).closest('.cities-row').find('.city-name').click();
                                    $(this).closest('.question-city').hide();

                                });

                                $('body').on('click', '.question-city-btn .btn-yes', function () {

                                    var question = $(this).closest('.question-city');
                                    var redirect = question.attr('data-redirect');
                                    var url = question.attr('data-url');

                                    $(this).closest('.question-city').hide();

                                    if (redirect != '' && url != '' && redirect != url) {
                                        location.href = redirect;
                                    }

                                });


                            });
                        </script>
                    </div>
                    <a href='/' title='Оружейный двор'>
                        <img src="<?= SITE_TEMPLATE_PATH ?>/img/logo-company.png" alt="logo" class="logo-company">
                    </a>
                </div>

                <div class="col phone-col">
                    <div class='contacts-phone'>
                        <?php

                        if ($obCity->getDeclination("CITY") == "Хабаровск") {
                            $APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                array(
                                    "AREA_FILE_RECURSIVE" => "Y",
                                    "AREA_FILE_SHOW" => "file",
                                    "AREA_FILE_SUFFIX" => "inc",
                                    "EDIT_TEMPLATE" => "",
                                    "PATH" => SITE_DIR . "include/contacts_phone.php"
                                )
                            );
                        } else {
                            $APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                array(
                                    "AREA_FILE_RECURSIVE" => "Y",
                                    "AREA_FILE_SHOW" => "file",
                                    "AREA_FILE_SUFFIX" => "inc",
                                    "EDIT_TEMPLATE" => "",
                                    "PATH" => SITE_DIR . "include/contacts_phone_another.php"
                                )
                            );
                        }


                        ?>
                        <div class="messengers pull-right" style="">
                            <a rel="nofollow" href="https://api.whatsapp.com/send?phone=79098787026" target="_blank"
                               class="m_whatsapp"></a>
                        </div>
                    </div>
                    <div class="time-working">
                        <?php
                        $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            array(
                                "AREA_FILE_RECURSIVE" => "Y",
                                "AREA_FILE_SHOW" => "file",
                                "AREA_FILE_SUFFIX" => "inc",
                                "EDIT_TEMPLATE" => "",
                                "PATH" => SITE_DIR . "include/time_working.php"
                            )
                        ); ?>
                    </div>
                </div>

                <div class="col search-col">
                    <? $APPLICATION->IncludeComponent(
                        "bitrix:search.title",
                        "ordvor_search_title",
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
                            "COMPONENT_TEMPLATE" => "ordvor_search_title"
                        ),
                        false
                    ); ?>

                    <noindex>
                        <a href="#find-product-popup" class="find-product-link popup-with-form">Не могу найти товар</a>
                    </noindex>
                </div>

                <div class="col personal-col">
                    <a href="/login/" class="link-login"></a>
                    <div class="compare-block-counter">

                        <a href="/catalog/compare.php" class="link-compare visible-xs">
								<span class="counter">
								<?php
                                $APPLICATION->IncludeComponent("bitrix:catalog.compare.list", "ordvor_catalog_compare_list",
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

                    <div class="search-toggle-mobile"></div>

                    <? $APPLICATION->IncludeComponent(
                        "bitrix:sale.basket.basket.line",
                        ".default",
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
                            "COMPONENT_TEMPLATE" => ".default",
                            "SUM_FOR_FREE_DELIVERY" => "10000"
                        ),
                        false
                    ); ?>

                </div>
            </div>
        </div>
    </div>


    <?

    global $arrFilterSect;


    // var_dump($arrFilterSect);

    ?>
    <?

    $APPLICATION->IncludeComponent(
        "bitrix:catalog.section.list",
        "rasa_main_menu",
        array(
            "ADD_SECTIONS_CHAIN" => "N",
            "CACHE_FILTER" => "N",
            "CACHE_GROUPS" => "Y",
            "CACHE_TIME" => "36000000",
            "CACHE_TYPE" => "A",
            "COMPONENT_TEMPLATE" => "rasa_main_menu",
            "COUNT_ELEMENTS" => "N",
            "FILTER_NAME" => "arrFilterSect",
            "HIDE_SECTION_NAME" => "N",
            "IBLOCK_ID" => "18",
            "IBLOCK_TYPE" => "1c_catalog",
            "SECTION_CODE" => "",
            "SECTION_FIELDS" => array(
                0 => "",
                1 => "",
            ),
            "SECTION_ID" => $_REQUEST["SECTION_ID"],
            "SECTION_URL" => "",
            "SECTION_USER_FIELDS" => array(
                0 => "",
                1 => "",
            ),
            "SHOW_PARENT_NAME" => "Y",
            "TOP_DEPTH" => "3",
            "VIEW_MODE" => "LIST"
        ),
        false
    );
    // }
    // else{
    //     $APPLICATION->IncludeComponent(
    //         "bitrix:catalog.section.list",
    //         "rasa_top_menu_catalog",
    //         Array(
    //             "ADD_SECTIONS_CHAIN" => "N",
    //             "CACHE_FILTER" => "N",
    //             "CACHE_GROUPS" => "Y",
    //             "CACHE_TIME" => "36000000",
    //             "CACHE_TYPE" => "N",
    //             "COMPONENT_TEMPLATE" => ".default",
    //             "COUNT_ELEMENTS" => "N",
    //             "FILTER_NAME" => "sectionsFilter",
    //             "HIDE_SECTION_NAME" => "N",
    //             "IBLOCK_ID" => "18",
    //             "IBLOCK_TYPE" => "1c_catalog",
    //             "SECTION_CODE" => "",
    //             "SECTION_FIELDS" => array(0=>"",1=>"",),
    //             "SECTION_ID" => $_REQUEST["SECTION_ID"],
    //             "SECTION_URL" => "",
    //             "SECTION_USER_FIELDS" => array(0=>"",1=>"",),
    //             "SHOW_PARENT_NAME" => "Y",
    //             "TOP_DEPTH" => "3",
    //             "VIEW_MODE" => "LIST",
    //             "FILTER_NAME" => 'arrFilterSect'
    //         )
    //         );
    // }
    ?>

</header>


<div class="mobile-menu-padding"></div>

<? /*
	<div class="city_selector_overlay"></div>
	<?$APPLICATION->IncludeComponent(
	"bitrix:news.list", 
	"city", 
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "N",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "N",
		"DISPLAY_PICTURE" => "N",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "NAME",
			1 => "DETAIL_TEXT",
			2 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "21",
		"IBLOCK_TYPE" => "service",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "999",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "",
			1 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "NAME",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N",
		"COMPONENT_TEMPLATE" => "city"
	),
	false
);?>

*/ ?>

<?php if ($curPage !== "/index.php"): ?>
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
