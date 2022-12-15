<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arParams
 * @var array $templateData
 * @var string $templateFolder
 * @var CBitrixComponentTemplate $component
 */

use \Bitrix\Main\Loader;

global $APPLICATION;

if (!empty($arResult['BANNER']))
{
	if (!empty($arResult['BANNER']['BACKGROUND_COLOR']))
	{
		$APPLICATION->SetPageProperty(
			'backgroundImage',
			'style="background-color:'.$arResult['BANNER']['BACKGROUND_COLOR'].'"'
		);
	
		if (Loader::includeModule('redsign.devfunc'))
		{
			$oColor = new RSColor($arResult['BANNER']['BACKGROUND_COLOR']);
	
			ob_start();
			if ($oColor->yiq())
			{
				echo ' rs-banner--dark';
				$APPLICATION->SetPageProperty('dark_page', 'N');
			}
			else
			{
				echo ' rs-banner--light';
				$APPLICATION->SetPageProperty('dark_page', 'Y');
			}
	
			$sHeadClass = ob_get_clean();
			$APPLICATION->AddViewContent('backgroundClass', $sHeadClass, 100);
			unset($sHeadClass);
		}
	}
	
	if ($arResult['BANNER']['BACKGROUND_IMAGE'])
	{
		$APPLICATION->SetPageProperty(
			'backgroundImage',
			'style="background-image: url(\''.\CHTTP::urnEncode($arResult['BANNER']['BACKGROUND_IMAGE'], 'UTF-8').'\')"'
		);
	}

	if ($arResult['BANNER']['BACKGROUND_COLOR'] || $arResult['BANNER']['BACKGROUND_IMAGE'])
	{
		ob_start();
	
		echo ' l-main__head--bg';
	
		$sHeadClass = ob_get_clean();
		$APPLICATION->AddViewContent('backgroundClass', $sHeadClass, 100);
		unset($sHeadClass);

		$APPLICATION->SetPageProperty('hide_title', 'Y');
		$APPLICATION->SetPageProperty('wide_page', 'Y');
	}


	if (strlen($arResult['BANNER']['TEXT']) > 0)
	{
		ob_start();
		
		echo $arResult['BANNER']['TEXT'];

		$sHtmlContent = ob_get_clean();
		$APPLICATION->AddViewContent('after-title', $sHtmlContent, 100);
		unset($sHtmlContent);
	}
}
