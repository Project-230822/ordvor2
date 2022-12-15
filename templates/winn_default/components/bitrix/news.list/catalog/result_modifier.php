<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogSectionComponent $component
 */

use \Bitrix\Main\Loader;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

$component = $this->getComponent();

$arResult['MODULES']['redsign.winn'] = Loader::includeModule('redsign.winn');

$arParams['SHOW_ERROR_SECTION_EMPTY'] = isset($arParams['SHOW_ERROR_SECTION_EMPTY']) && $arParams['SHOW_ERROR_SECTION_EMPTY'] === 'Y' ? 'Y' : 'N';
$arParams['MESS_ERROR_SECTION_EMPTY'] = $arParams['MESS_ERROR_SECTION_EMPTY'] ?: Loc::getMessage('RS_WINN_BCS_CATALOG_ERROR_EMPTY_ITEMS');

if (empty($arParams['AJAX_ID']) || strlen($arParams['AJAX_ID']) < 1)
{
	$arParams['AJAX_ID'] = CAjax::GetComponentID($component->componentName, $component->componentTemplate, $arParams['AJAX_OPTION_ADDITIONAL']);
}

$component->arResult['AJAX_ID'] = $arResult['AJAX_ID'] = $arParams['AJAX_ID'];


if (isset($arParams['~GRID_RESPONSIVE_SETTINGS']))
{
	if ($arResult['MODULES']['redsign.winn'])
	{
		$arParams['GRID_RESPONSIVE_SETTINGS'] = ParametersUtils::prepareGridSettings($arParams['~GRID_RESPONSIVE_SETTINGS']);
	}
}

if (empty($arParams['RS_LAZY_IMAGES_USE']) || $arParams['RS_LAZY_IMAGES_USE'] == 'FROM_MODULE')
{
	$arParams['RS_LAZY_IMAGES_USE'] = \Bitrix\Main\Config\Option::get('redsign.winn', 'global_lazyload_images');
}

if (!empty($arResult['ITEMS']))
{
	$emptyPreview = false;
	$documentRoot = \Bitrix\Main\Application::getDocumentRoot();
	$emptyPreviewPath = $this->GetFolder().'/images/no_photo.png';

	$file = new \Bitrix\Main\IO\File($documentRoot.$emptyPreviewPath);
	if ($file->isExists())
	{
		$size = getimagesize($documentRoot.$emptyPreviewPath);
		if (!empty($size))
		{
			$emptyPreview = array(
				'ID' => 0,
				'SRC' => $emptyPreviewPath,
				'WIDTH' => (int)$size[0],
				'HEIGHT' => (int)$size[1]
			);
		}
	}

	foreach ($arResult['ITEMS'] as $key => $item)
	{
		if (!is_array($item['PREVIEW_PICTURE']))
		{
			$arResult['ITEMS'][$key]['PREVIEW_PICTURE'] = $emptyPreview;
		}
	}
	unset($key, $item);
}



if (intval($arParams['PARENT_SECTION']) > 0)
{
	if (is_array($arResult['SECTION']['PATH']) && count($arResult['SECTION']['PATH']) > 0)
	{
		foreach ($arResult['SECTION']['PATH'] as $iSectionKey => $arSection)
		{
			if ($arParams['PARENT_SECTION'] == $arSection['ID'])
			{
                $arResult['PARENT_SECTION'] = $arSection;
            }
        }
        unset($arSection);
    }
}

if (isset($arResult['PARENT_SECTION']))
{
    $this->__component->arResult['PARENT_SECTION'] = $arResult['PARENT_SECTION'];
    $this->__component->SetResultCacheKeys(array('PARENT_SECTION'));
}

