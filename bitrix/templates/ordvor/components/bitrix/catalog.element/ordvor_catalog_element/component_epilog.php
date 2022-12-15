<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Loader, 
	Bitrix\Iblock;

/**
 * @var array $templateData
 * @var array $arParams
 * @var string $templateFolder
 * @global CMain $APPLICATION
 */

global $APPLICATION;



if ($arResult['DETAIL_PAGE_URL'] && ($APPLICATION->GetCurPage(false) !== $arResult['DETAIL_PAGE_URL']))
{		
	localredirect($arResult['DETAIL_PAGE_URL'], false, '301 Moved permanently'); 
	
	
}



if($arResult["PATH"]){
	
	foreach($arResult["PATH"] as $arPath)
	{
		if($arSects[$arPath['ID']] != ""){
			$APPLICATION->AddChainItem($arSects[$arPath['ID']], $arPath["~SECTION_PAGE_URL"]);
		}
		elseif ($arPath["IPROPERTY_VALUES"]["SECTION_PAGE_TITLE"] != "")
			$APPLICATION->AddChainItem($arPath["IPROPERTY_VALUES"]["SECTION_PAGE_TITLE"], $arPath["~SECTION_PAGE_URL"]);
		else
			$APPLICATION->AddChainItem($arPath["NAME"], $arPath["~SECTION_PAGE_URL"]); 
		
	} 
	
}



if (isset($templateData['TEMPLATE_THEME']))
{
	$APPLICATION->SetAdditionalCSS($templateFolder.'/themes/'.$templateData['TEMPLATE_THEME'].'/style.css');
	$APPLICATION->SetAdditionalCSS('/bitrix/css/main/themes/'.$templateData['TEMPLATE_THEME'].'/style.css', true);
}

if (!empty($templateData['TEMPLATE_LIBRARY']))
{
	$loadCurrency = false;

	if (!empty($templateData['CURRENCIES']))
	{
		$loadCurrency = Loader::includeModule('currency');
	}

	CJSCore::Init($templateData['TEMPLATE_LIBRARY']);
	if ($loadCurrency)
	{
		?>
		<script>
			BX.Currency.setCurrencies(<?=$templateData['CURRENCIES']?>);
		</script>
		<?
	}
}

if (isset($templateData['JS_OBJ']))
{
	?>
	<script>
		BX.ready(BX.defer(function(){
			if (!!window.<?=$templateData['JS_OBJ']?>)
			{
				window.<?=$templateData['JS_OBJ']?>.allowViewedCount(true);
			}
		}));
	</script>

	<?
	// check compared state
	if ($arParams['DISPLAY_COMPARE'])
	{
		$compared = false;
		$comparedIds = array();
		$item = $templateData['ITEM'];

		if (!empty($_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]))
		{
			if (!empty($item['JS_OFFERS']))
			{
				foreach ($item['JS_OFFERS'] as $key => $offer)
				{
					if (array_key_exists($offer['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS']))
					{
						if ($key == $item['OFFERS_SELECTED'])
						{
							$compared = true;
						}

						$comparedIds[] = $offer['ID'];
					}
				}
			}
			elseif (array_key_exists($item['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS']))
			{
				$compared = true;
			}
		}

		if ($templateData['JS_OBJ'])
		{
			?>
			<script>
				BX.ready(BX.defer(function(){
					if (!!window.<?=$templateData['JS_OBJ']?>)
					{
						window.<?=$templateData['JS_OBJ']?>.setCompared('<?=$compared?>');

						<? if (!empty($comparedIds)): ?>
						window.<?=$templateData['JS_OBJ']?>.setCompareInfo(<?=CUtil::PhpToJSObject($comparedIds, false, true)?>);
						<? endif ?>
					}
				}));
			</script>
			<?
		}
	}

	// select target offer
	$request = Bitrix\Main\Application::getInstance()->getContext()->getRequest();
	$offerNum = false;
	$offerId = (int)$this->request->get('OFFER_ID');
	$offerCode = $this->request->get('OFFER_CODE');

	if ($offerId > 0 && !empty($templateData['OFFER_IDS']) && is_array($templateData['OFFER_IDS']))
	{
		$offerNum = array_search($offerId, $templateData['OFFER_IDS']);
	}
	elseif (!empty($offerCode) && !empty($templateData['OFFER_CODES']) && is_array($templateData['OFFER_CODES']))
	{
		$offerNum = array_search($offerCode, $templateData['OFFER_CODES']);
	}

	if (!empty($offerNum))
	{
		?>
		<script>
			BX.ready(function(){
				if (!!window.<?=$templateData['JS_OBJ']?>)
				{
					window.<?=$templateData['JS_OBJ']?>.setOffer(<?=$offerNum?>);
				}
			});
		</script>
		<?
	}
}


global $intSectionID;
$intSectionID = $arResult['IBLOCK_SECTION_ID'];

$obCity = OrdvorCity::getInstance();
$hideSections = $obCity->getSectionToHide();

if($hideSections && in_array($intSectionID, $hideSections)){
  \Bitrix\Iblock\Component\Tools::process404(
				""
				,true
				,true
				,true
			);
}

/*
// SEO //
$obCity = OrdvorCity::getInstance();

$arResult["META_TITLE"] = preg_replace("/&#?[a-z0-9]+;/i","",$arResult["META_TITLE"]);
$arResult["BRAND"] = preg_replace("/&#?[a-z0-9]+;/i","",$arResult["BRAND"]); 


$title = "Купить " .  $arResult["META_TITLE"] . " по низкой цене в " . $obCity->getDeclination("IN_CITY");
$description = "Доступная цена на " . $arResult["META_TITLE"] . " в интернет магазине Оружейный двор. Купите " . $arResult["META_TITLE"] . " с доставкой в " . $obCity->getDeclination("IN_CITY");
$keywords = $arResult["BRAND"] . ", " . $arResult["META_TITLE"];

$APPLICATION->SetPageProperty("title", $title);
$APPLICATION->SetPageProperty("description", $description);
$APPLICATION->SetPageProperty("keywords", $keywords);
// End SEO //
*/