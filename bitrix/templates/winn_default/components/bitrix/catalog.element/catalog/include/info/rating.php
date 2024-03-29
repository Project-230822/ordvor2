<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */

use \Bitrix\Main\Localization\Loc;

if ($arParams['USE_VOTE_RATING'] === 'Y')
{
	?>
	<div class="product--detail__info-container">
		<?
		$APPLICATION->IncludeComponent(
			'bitrix:iblock.vote',
			'stars',
			array(
				'IBLOCK_TYPE' => $arParams['IBLOCK_TYPE'],
				'IBLOCK_ID' => $arParams['IBLOCK_ID'],
				'ELEMENT_ID' => $arResult['ID'],
				'ELEMENT_CODE' => '',
				'MAX_VOTE' => '5',
				'VOTE_NAMES' => array('1', '2', '3', '4', '5'),
				'SET_STATUS_404' => 'N',
				'DISPLAY_AS_RATING' => $arParams['VOTE_DISPLAY_AS_RATING'],
				'CACHE_TYPE' => $arParams['CACHE_TYPE'],
				'CACHE_TIME' => $arParams['CACHE_TIME']
			),
			$component,
			array('HIDE_ICONS' => 'Y')
		);
		?>
	</div>
	<?
}