<?php

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

use \Bitrix\Main\Localization\Loc;

if (CSite::InDir(SITE_DIR.'cart/'))
{
  return;
}

global $RS_BASKET_DATA;

if (!isset($RS_BASKET_DATA))
{
	$RS_BASKET_DATA = [
		'NUM_PRODUCTS' => count($arResult['ITEMS']),
		'PATH_TO_ORDER' => $arParams['PATH_TO_ORDER'],
		'PATH_TO_BASKET' => $arParams['PATH_TO_CART']
	];
}


CJSCore::Init('rs_lightbasket');

Loc::loadMessages(__FILE__);

$isAjax = isset($arParams['AJAX']) && $arParams['AJAX'] == 'Y' ? true : false;

if (!$isAjax)
{
  if (is_array($arResult['ITEMS']) && count($arResult['ITEMS']) > 0)
  {
      $arrIDs = array();
      foreach ($arResult['ITEMS'] as $arItem)
      {
          $arrIDs[] = $arItem['PRODUCT_ID'];
      }
  }

  // $frame = $this->createFrame()->begin('');
  ?>
  <script>
  Basket.inbasket(<?=json_encode($arrIDs)?>, true);

  // BX.onCustomEvent('OnBasketChange', [{}, 'ADD2CART']);

  if ((window.RS || {}).GlobalBasket) {
    RS.GlobalBasket.init(
      '<?=SITE_ID?>',
      '<?=$templateName?>',
      '<?=$componentPath?>/ajax.php',
      <?=CUtil::PhpToJSObject($arParams) ?>
    );
  }
  </script>
  <?php
}
else
{
  // $content = ob_get_clean();

  echo CUtil::PhpToJSObject(array(
    // 'CONTENT' => $content,
    'COUNT' => count($arResult['ITEMS'])
));
}
