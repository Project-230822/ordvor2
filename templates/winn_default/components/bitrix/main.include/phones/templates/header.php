<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

if (!empty($arResult['PHONES']) && is_array($arResult['PHONES'])):?><div class="d-flex align-items-center">
	<div class="d-block">
		<?php
		foreach ($arResult['PHONES'] as $sPhone):
			$sPhoneUrl = preg_replace('/[^0-9\+]/', '', $sPhone);
		?>
		<a href="tel:<?=$sPhoneUrl?>" class="d-block text-decoration-none"><?=$sPhone?></a>
		<?php endforeach; ?>
	</div>
</div><?php
endif;
