<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

if (!empty($arResult['EMAILS']) && is_array($arResult['EMAILS'])):?><div class="d-flex align-items-center">
	<div class="d-block mr-3">
		<svg class="icon-svg text-primary"><use xlink:href="#svg-email"></use></svg>
	</div>
	<div class="d-block">
		<?php foreach ($arResult['EMAILS'] as $sEmail): ?>
		<a href="mailto:<?=$sEmail?>" class="d-block"><?=$sEmail?></a>
		<?php endforeach; ?>
	</div>
</div><?php
endif;
