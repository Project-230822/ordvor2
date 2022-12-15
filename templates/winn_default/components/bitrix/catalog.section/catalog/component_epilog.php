<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arParams
 * @var array $templateData
 * @var string $templateFolder
 * @var CatalogSectionComponent $component
 */

global $APPLICATION;

if (!empty($templateData['TEMPLATE_LIBRARY']))
{
	$loadCurrency = false;
	if (!empty($templateData['CURRENCIES']))
	{
		$loadCurrency = \Bitrix\Main\Loader::includeModule('currency');
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

if ($arParams['USE_FAVORITE'] == 'Y' && \Bitrix\Main\Loader::includeModule('redsign.favorite'))
{
	CJSCore::Init('rs_favorite');
}

if (!empty($arResult['BACKGROUND_COLOR']))
{
	$APPLICATION->SetPageProperty(
		'backgroundImage',
		'style="background-color:'.$arResult['BACKGROUND_COLOR'].'"'
	);

	if (\Bitrix\Main\Loader::includeModule('redsign.devfunc'))
	{
		$oColor = new RSColor($arResult['BACKGROUND_COLOR']);

		ob_start();

		if ($oColor->yiq())
		{
			echo ' l-main__head--dark';
		}
		else
		{
			echo ' l-main__head--light';
		}

		$sHeadClass = ob_get_clean();
		$APPLICATION->AddViewContent('backgroundClass', $sHeadClass, 100);
		unset($sHeadClass);
	}
}

if ($arResult['BACKGROUND_COLOR'] || $arResult['BACKGROUND_IMAGE'])
{
	ob_start();

	echo ' l-main__head--bg';

	$sHeadClass = ob_get_clean();
	$APPLICATION->AddViewContent('backgroundClass', $sHeadClass, 100);
	unset($sHeadClass);

	ob_start();
	
	echo $arResult['DESCRIPTION'];

	$sHtmlContent = ob_get_clean();
	$APPLICATION->AddViewContent('after-title', $sHtmlContent, 100);
	unset($sHtmlContent);

	$APPLICATION->SetPageProperty('hide_title', 'Y');
	$APPLICATION->SetPageProperty('wide_page', 'Y');
	$APPLICATION->SetPageProperty("dark_page", "Y");
}

//	lazy load and big data json answers
$request = \Bitrix\Main\Context::getCurrent()->getRequest();

if (
	$request->isAjaxRequest()
	&& (
		$request->get('action') === 'updateItems'
	)
	&& $request->get('AJAX_ID') == $arResult['AJAX_ID']
)
{
	$content = ob_get_contents();
	ob_end_clean();

	list(, $sectionContainer) = explode('<!-- section-container -->', $content);
	list(, $filterContainer) = explode('<!-- filter-container -->', $content);

	if ($arParams['AJAX_MODE'] === 'Y')
	{
		$component->prepareLinks($filterContainer);
	}
	
	$component::sendJsonAnswer(array(
		'section' => $sectionContainer,
		'filter' => $filterContainer,
		'sorter' => $APPLICATION->GetViewContent($arResult['AJAX_ID'].'_sorter'),
	));
}

if ($request->isAjaxRequest() && ($request->get('action') === 'showMore' || $request->get('action') === 'deferredLoad'))
{
	$content = ob_get_contents();
	ob_end_clean();

	list(, $itemsContainer) = explode('<!-- items-container -->', $content);
	list(, $paginationContainer) = explode('<!-- pagination-container -->', $content);
	// list(, $filterContainer) = explode('<!-- filter-container -->', $content);


	if ($arParams['AJAX_MODE'] === 'Y')
	{
		$component->prepareLinks($paginationContainer);
		// $component->prepareLinks($filterContainer);
	}

	$component::sendJsonAnswer(array(
		'items' => $itemsContainer,
		'pagination' => $paginationContainer,
//		'filter' => $filterContainer,
		'sorter' => $APPLICATION->GetViewContent($arResult['AJAX_ID'].'_sorter'),
	));
}