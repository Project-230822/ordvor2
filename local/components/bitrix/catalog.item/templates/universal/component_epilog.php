<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arResult
 * @var array $arParams
 * @var array $templateData
 */

use Bitrix\Sale;
use \Bitrix\Main;

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


$basket = Sale\Basket::loadItemsForFUser(
	Sale\Fuser::getId(),
	Main\Context::getCurrent()->getSite()
);

if ($templateData['ITEM']['JS_OFFERS']) {
	foreach ($templateData['ITEM']['JS_OFFERS'] as $keyOffer => $valueOffer) {
		foreach ($basket as $basketItem) {
			if ($valueOffer['ID'] == $basketItem->getField('PRODUCT_ID')) {
				$productItemId = $basketItem->getField('ID');
				$currentQuantity = $basket->getItemById($productItemId)->getQuantity();
				$valueOffer['QUANTITY_IN_BASKET'] = $currentQuantity; ?>
				<script>
					BX.ready(BX.defer(function() {
						if (!!window.<?= $templateData['JS_OBJ'] ?>) {
							window.<?= $templateData['JS_OBJ'] ?>.addDataSku(
								<?= CUtil::PhpToJSObject($valueOffer, false, true) ?>,
								<?= $keyOffer ?>
							);
						}
					}));
				</script>

				<? if ($keyOffer === 0) { ?>
					<script>
						BX.ready(BX.defer(function() {
							if (!!window.<?= $templateData['JS_OBJ'] ?>) {
								window.<?= $templateData['JS_OBJ'] ?>.setQuantity(<?= $currentQuantity ?>);
								window.<?= $templateData['JS_OBJ'] ?>.itemInCart();
							}
						}));
					</script>
			<? }
			}
		}
	}
} else {
	foreach ($basket as $basketItem) {
		if ($item['ID'] == $basketItem->getField('PRODUCT_ID')) {
			$productItemId = $basketItem->getField('ID');
			$price['CURRENT_QUANTITY'] = $basket->getItemById($productItemId)->getQuantity(); ?>
			<script>
				BX.ready(BX.defer(function() {
					if (!!window.<?= $templateData['JS_OBJ'] ?>) {
						window.<?= $templateData['JS_OBJ'] ?>.itemInCart();
						window.<?= $templateData['JS_OBJ'] ?>.setQuantity(<?= $price['CURRENT_QUANTITY'] ?>);
					}
				}));
			</script>
<? }
	}
}
