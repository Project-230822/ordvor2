<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arResult
 * @var array $arParams
 * @var array $templateData
 */

use Bitrix\Sale;

// check compared state
if ($arParams['DISPLAY_COMPARE']) {
	$compared = false;
	$comparedIds = array();
	$item = $templateData['ITEM'];

	if (!empty($_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS'])) {
		if (!empty($item['JS_OFFERS'])) {
			foreach ($item['JS_OFFERS'] as $key => $offer) {
				if (array_key_exists($offer['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS'])) {
					if ($key == $item['OFFERS_SELECTED']) {
						$compared = true;
					}

					$comparedIds[] = $offer['ID'];
				}
			}
		} elseif (array_key_exists($item['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS'])) {
			$compared = true;
		}
	}

	if ($templateData['JS_OBJ']) {
?>
		<script>
			BX.ready(BX.defer(function() {

				if (!!window.<?= $templateData['JS_OBJ'] ?>) {
					window.<?= $templateData['JS_OBJ'] ?>.setCompared('<?= $compared ?>');
					<? if (!empty($comparedIds)) : ?>
						window.<?= $templateData['JS_OBJ'] ?>.setCompareInfo(<?= CUtil::PhpToJSObject($comparedIds, false, true) ?>);
					<? endif ?>
				}
			}));
		</script>
	<?
	}
}

$fuser = Sale\Fuser::getId();
$basketRes = Sale\Internals\BasketTable::getList(array(
	'filter' => array(
		'FUSER_ID' => $fuser,
		'ORDER_ID' => null,
		'LID' => SITE_ID,
		'CAN_BUY' => 'Y',
	)
));

while ($item = $basketRes->fetch()) {
	if ($item["PRODUCT_ID"] == $templateData['ITEM']["ID"]) {
	?>
		<script>
			BX.ready(BX.defer(function() {
				if (!!window.<?= $templateData['JS_OBJ'] ?>) {
					window.<?= $templateData['JS_OBJ'] ?>.itemInCart();
				}
			}));
		</script>

	<? } ?>
	<? if ($templateData['ITEM']["JS_OFFERS"]) {
		foreach ($templateData['ITEM']["JS_OFFERS"] as $key => $value) {
			if ($item["PRODUCT_ID"] == $value['ID']) { ?>
				<script>
					BX.ready(BX.defer(function() {
						if (!!window.<?= $templateData['JS_OBJ'] ?>) {
							window.<?= $templateData['JS_OBJ'] ?>.itemInCart();
						}
					}));
				</script>
			<? } ?>
		<? } ?>
	<? } ?>
<? } ?>