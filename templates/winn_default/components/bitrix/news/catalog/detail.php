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

use \Bitrix\Main\Loader;

if (!function_exists('getSiteSectionHeader'))
{
	function getSiteSectionHeader()
	{
		global $APPLICATION;

		if ($APPLICATION->GetProperty('hide_title') != 'Y')
		{
			return;
		}
		
		$sPageTitle = $APPLICATION->GetTitle(false, false);
		$sBreadcrums = $APPLICATION->GetNavChain(
			$path = false,
			$iNumFrom = 0,
			$sNavChainPath = SITE_TEMPLATE_PATH.'/components/bitrix/breadcrumb/standart/template.php',
			$bIncludeOnce = true,
			$bShowIcons = false
		);
		$sPageDescription = $APPLICATION->GetViewContent('after-title');
		$sBackgroundImage = $APPLICATION->GetProperty('backgroundImage');
		$sBackgroundClass = $APPLICATION->GetViewContent('backgroundClass');

		$layout = new \Redsign\Winn\Layouts\Section();
		$layout->addModifier('header-compensator')
			->addModifier('vh100')
			->addData('SECTION_ATTRIBUTES', 'data-section=""');

		$sBannerClass = 'rs-banner';

		
		if (strpos($sBackgroundClass, 'rs-banner--light') !== false)
		{
			$sBannerClass .= ' rs-banner--light';
			$layout->addModifier('light');
		}
		else
		{
			$sBannerClass .= ' rs-banner--dark';
		}
		
		ob_start();
		$layout->start();
		$sHTML .= ob_get_clean();

		$sHTML .= <<<CONTENT
		<div class="rs-banner-wrapper">
			<div class="rs-banner-area">
				<div class="$sBannerClass"$sBackgroundImage>
					<div class="rs-banner-container">
						<div class="container">
							<div class="row">
								<div class="col-xs-10 mx-xs-auto col-xl-10 mx-xl-auto ml-xxl-0 mr-xxl-auto" data-aos="fade-up" data-aos-duration="500">$sBreadcrums</div>
								<div class="col-xs-10 mx-xs-auto col-xl-10 mx-xl-auto col-xxl-9 ml-xxl-0 mr-xxl-auto">
									<h1 class="rs-banner__title h1 mt-0" data-aos="fade-up" data-aos-duration="500">$sPageTitle</h1>
									<div class="rs-banner__text accent font-weight-light" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">$sPageDescription</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
CONTENT;

		ob_start();
		$layout->end();
		$sHTML .= ob_get_clean();

		// $sHTML .= '<div class="container">';

		return $sHTML;
	}
}
/*
if (!function_exists('getSiteSectionFooter'))
{
	function getSiteSectionFooter()
	{
		global $APPLICATION;

		if ($APPLICATION->GetProperty('hide_title') != 'Y')
		{
			return;
		}

		$sHTML = '</div>';

		return $sHTML;
	}
}
*/

$APPLICATION->AddBufferContent('getSiteSectionHeader');

// $APPLICATION->SetPageProperty('hide_section', 'Y');
$APPLICATION->SetPageProperty('wide_page', 'N');
?>

<?$ElementID = $APPLICATION->IncludeComponent(
	"bitrix:news.detail",
	"catalog",
	Array(
		"DISPLAY_DATE" => $arParams["DISPLAY_DATE"],
		"DISPLAY_NAME" => $arParams["DISPLAY_NAME"],
		"DISPLAY_PICTURE" => $arParams["DISPLAY_PICTURE"],
		"DISPLAY_PREVIEW_TEXT" => $arParams["DISPLAY_PREVIEW_TEXT"],
		"IBLOCK_TYPE" => $arParams["IBLOCK_TYPE"],
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"FIELD_CODE" => $arParams["DETAIL_FIELD_CODE"],
		"PROPERTY_CODE" => $arParams["DETAIL_PROPERTY_CODE"],
		"DETAIL_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["detail"],
		"SECTION_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["section"],
		"META_KEYWORDS" => $arParams["META_KEYWORDS"],
		"META_DESCRIPTION" => $arParams["META_DESCRIPTION"],
		"BROWSER_TITLE" => $arParams["BROWSER_TITLE"],
		"SET_CANONICAL_URL" => $arParams["DETAIL_SET_CANONICAL_URL"],
		"DISPLAY_PANEL" => $arParams["DISPLAY_PANEL"],
		"SET_LAST_MODIFIED" => $arParams["SET_LAST_MODIFIED"],
		"SET_TITLE" => $arParams["SET_TITLE"],
		"MESSAGE_404" => $arParams["MESSAGE_404"],
		"SET_STATUS_404" => $arParams["SET_STATUS_404"],
		"SHOW_404" => $arParams["SHOW_404"],
		"FILE_404" => $arParams["FILE_404"],
		"INCLUDE_IBLOCK_INTO_CHAIN" => $arParams["INCLUDE_IBLOCK_INTO_CHAIN"],
		"ADD_SECTIONS_CHAIN" => $arParams["ADD_SECTIONS_CHAIN"],
		"ACTIVE_DATE_FORMAT" => $arParams["DETAIL_ACTIVE_DATE_FORMAT"],
		"CACHE_TYPE" => $arParams["CACHE_TYPE"],
		"CACHE_TIME" => $arParams["CACHE_TIME"],
		"CACHE_GROUPS" => $arParams["CACHE_GROUPS"],
		"USE_PERMISSIONS" => $arParams["USE_PERMISSIONS"],
		"GROUP_PERMISSIONS" => $arParams["GROUP_PERMISSIONS"],
		"DISPLAY_TOP_PAGER" => $arParams["DETAIL_DISPLAY_TOP_PAGER"],
		"DISPLAY_BOTTOM_PAGER" => $arParams["DETAIL_DISPLAY_BOTTOM_PAGER"],
		"PAGER_TITLE" => $arParams["DETAIL_PAGER_TITLE"],
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => $arParams["DETAIL_PAGER_TEMPLATE"],
		"PAGER_SHOW_ALL" => $arParams["DETAIL_PAGER_SHOW_ALL"],
		"CHECK_DATES" => $arParams["CHECK_DATES"],
		"ELEMENT_ID" => $arResult["VARIABLES"]["ELEMENT_ID"],
		"ELEMENT_CODE" => $arResult["VARIABLES"]["ELEMENT_CODE"],
		"SECTION_ID" => $arResult["VARIABLES"]["SECTION_ID"],
		"SECTION_CODE" => $arResult["VARIABLES"]["SECTION_CODE"],
		"IBLOCK_URL" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"],
		"USE_SHARE" => $arParams["USE_SHARE"],
		"SHARE_HIDE" => $arParams["SHARE_HIDE"],
		"SHARE_TEMPLATE" => $arParams["SHARE_TEMPLATE"],
		"SHARE_HANDLERS" => $arParams["SHARE_HANDLERS"],
		"SHARE_SHORTEN_URL_LOGIN" => $arParams["SHARE_SHORTEN_URL_LOGIN"],
		"SHARE_SHORTEN_URL_KEY" => $arParams["SHARE_SHORTEN_URL_KEY"],
		"ADD_ELEMENT_CHAIN" => (isset($arParams["ADD_ELEMENT_CHAIN"]) ? $arParams["ADD_ELEMENT_CHAIN"] : ''),
		'STRICT_SECTION_CHECK' => (isset($arParams['STRICT_SECTION_CHECK']) ? $arParams['STRICT_SECTION_CHECK'] : ''),
	),
	$component
);?>
<?php
/*
<p><a href="<?=$arResult["FOLDER"].$arResult["URL_TEMPLATES"]["news"]?>"><?=GetMessage("T_NEWS_DETAIL_BACK")?></a></p>
*/

// $APPLICATION->AddBufferContent('getSiteSectionFooter');
