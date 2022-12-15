<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

use \Bitrix\Main\Localization\Loc;
?>
<a href="<?=SITE_DIR.'ask/'?>" title="<?=Loc::getMessage('RS_WINN_HEADER_RECALL')?>" class="recall-button btn btn-opacity-dark no-barba" data-src="<?=SITE_DIR.'ask/'?>" data-popup="" data-type="ajax" data-popup-type="side" data-barbajs-prevent>
	<svg class="icon-svg h4 m-0"><use xlink:href="#svg-question-mark"></use></svg>
</a>