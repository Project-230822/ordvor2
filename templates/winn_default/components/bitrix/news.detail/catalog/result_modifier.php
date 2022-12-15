<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogSectionComponent $component
 */

use \Bitrix\Main\Loader;
use \Bitrix\Iblock;
use \Bitrix\Main\Localization\Loc;
use \Redsign\Winn\ParametersUtils;

$component = $this->getComponent();

$arResult['MODULES']['redsign.winn'] = Loader::includeModule('redsign.winn');

$arBanner = [];

if ($arResult['PROPERTIES']['BACKGROUND_IMAGE']['VALUE'] > 0 || strlen($arResult['PROPERTIES']['BACKGROUND_COLOR']['VALUE']) > 0)
{
	if ($arResult['PROPERTIES']['BACKGROUND_IMAGE']['VALUE'] > 0)
	{
		$arBanner['BACKGROUND_IMAGE'] = \CFile::GetPath($arResult['PROPERTIES']['BACKGROUND_IMAGE']['VALUE']);
	}

	if (strlen($arResult['PROPERTIES']['BACKGROUND_COLOR']['VALUE']) > 0)
	{
		$arBanner['BACKGROUND_COLOR'] = $arResult['PROPERTIES']['BACKGROUND_COLOR']['VALUE'];
	}

	if (strlen($arResult['PROPERTIES']['BACKGROUND_TEXT']['VALUE']) > 0)
	{
		$arBanner['TEXT'] = $arResult['PROPERTIES']['BACKGROUND_TEXT']['VALUE'];
	}
}

if (!empty($arBanner))
{
	$this->__component->arResult['BANNER'] = $arBanner;
}


if (is_array($arResult['PROPERTIES']) && count($arResult['PROPERTIES']) > 0)
{
	foreach ($arResult['PROPERTIES'] as $sPropCode => $arProp)
	{
		if ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_FILE)
		{
			if (is_array($arProp['VALUE']))
			{
				foreach ($arProp['VALUE'] as $iPropValKey => $iPropVal)
				{
					$rsFile = CFile::GetByID($iPropVal);
					if ($arFile = $rsFile->Fetch())
					{
						$arResult['PROPERTIES'][$sPropCode]['VALUE'][$iPropValKey] = $arFile;
						$arFile['FULL_PATH'] = '/upload/'.$arFile['SUBDIR'].'/'.$arFile['FILE_NAME'];
						$tmp = explode('.', $arFile['FILE_NAME']);
						$arFile['FILE_EXT'] = end($tmp);
						switch($arFile['FILE_EXT'])
						{
							case 'docx':
							case 'doc':
								$arFile['FILE_ICON'] = 'doc';
								break;
							case 'xls':
							case 'xlsx':
								$arFile['FILE_ICON'] = 'xls';
								break;
							case 'pdf':
								$arFile['FILE_ICON'] = 'pdf';
								break;
							default:
								$arFile['FILE_ICON'] = 'txt';
								break;
						}
						$arFile['SIZE'] = \CFile::FormatSize($arFile['FILE_SIZE'], 1);

						$arResult['PROPERTIES'][$sPropCode]['VALUE'][$iPropValKey] = $arFile;
					}
				}
			}
		}
		elseif ($arProp['PROPERTY_TYPE'] == Iblock\PropertyTable::TYPE_ELEMENT)
		{
			if (!isset($arResult['IBLOCKS'][$arProp['LINK_IBLOCK_ID']]))
			{
				
				$arOrder = [];
				$arFilter = [
					'SITE_ID' => SITE_ID,
					'ACTIVE' => 'Y',
					'ID' => $arProp['LINK_IBLOCK_ID']
				];
				$bIncCnt = false;

				$dbRes = \CIBlock::GetList($arOrder, $arFilter, $bIncCnt);

				if ($arIblock = $dbRes->Fetch())
				{
					$arResult['IBLOCKS'][$arProp['LINK_IBLOCK_ID']] = $arIblock;
				}
			}
			
			if (isset($arResult['IBLOCKS'][$arProp['LINK_IBLOCK_ID']]))
			{
				$arResult['PROPERTIES'][$sPropCode]['LINK_IBLOCK_TYPE_ID'] = $arResult['IBLOCKS'][$arProp['LINK_IBLOCK_ID']]['IBLOCK_TYPE_ID'];
			}
			
		}
	}
}

// add cache keys
if (is_object($component))
{
	$component->SetResultCacheKeys(['BANNER']);
}
