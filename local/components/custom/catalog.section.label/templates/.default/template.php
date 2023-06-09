<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 * @var string $templateFolder
 */
?>
<?
$obName = "ob_" . $arResult["IBLOCK_ID"] . '_' . md5($this->randString());

if (\Bitrix\Main\Loader::includeModule('currency')) {
	\CJSCore::Init(['currency']);
} ?>
<? $parentComponentObject = \Bitrix\Main\Component\ParameterSigner::signParameters($component->__name, $component); ?>
<? $arParams['ADD_URL_TEMPLATE'] = $APPLICATION->GetCurPage(false);
$arParamsCleared = array_filter($arParams,  function ($key) {
	return strpos($key, '~') === false;
}, ARRAY_FILTER_USE_KEY);
$arParamsSigned = \Bitrix\Main\Component\ParameterSigner::signParameters($component->__name, $arParamsCleared); ?>

<div class="catalog-section-tab">
	<div class="catalog-section-tab__label-list label-list">
		<? foreach ($arResult['LABEL_LIST'] as $keyLabel => $valueLabel) : ?>
			<div class="label-list__item label-list__item-<?= $valueLabel['XML_ID'] ?>" data-key="<?= $keyLabel ?>" data-code="<?= $valueLabel['XML_ID'] ?>">
				<?= $valueLabel['VALUE'] ?>
			</div>
		<? endforeach;  ?>
	</div>

	<div class="catalog-section-tab__section-containers section-containers">
		<? foreach ($arResult['LABEL_LIST'] as $keyLabel => $valueLabel) : ?>
			<div class="section-containers__element-list section-container__<?= $valueLabel['XML_ID'] ?>" data-key="<?= $keyLabel ?>" data-code="<?= $valueLabel['XML_ID'] ?>"></div>
		<? endforeach;
		?>
	</div>
</div>

<script>
	let <?= $obName ?> = new JCCatalogSectionComponentTab({
		componentName: '<?= $component->__name ?>',
		arParamsSigned: '<?= $arParamsSigned ?>',
		templateFolder: '<?= $templateFolder ?>',
		parentComponentObject: '<?= $parentComponentObject ?>',
	});
</script>