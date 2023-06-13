<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
/**
 * @global array $arParams
 * @global CUser $USER
 * @global CMain $APPLICATION
 * @global string $cartId
 */
$compositeStub = (isset($arResult['COMPOSITE_STUB']) && $arResult['COMPOSITE_STUB'] == 'Y');
?>

<div class="bx-hdr-profile">
	<? if (!$compositeStub && $arParams['SHOW_AUTHOR'] == 'Y') : ?>
		<div class="bx-basket_block">
			<i class="fa fa-user"></i>
			<? if ($USER->IsAuthorized()) :
				$name = trim($USER->GetFullName());
				if (!$name)
					$name = trim($USER->GetLogin());
				if (strlen($name) > 15)
					$name = substr($name, 0, 12) . '...'; ?>
				<a href="<?= $arParams['PATH_TO_PROFILE'] ?>"><?= htmlspecialcharsbx($name) ?></a>
				&nbsp;
				<a href="?logout=yes"><?= GetMessage('TSB1_LOGOUT') ?></a>
				<? else :
				$arParamsToDelete = array(
					"login",
					"login_form",
					"logout",
					"register",
					"forgot_password",
					"change_password",
					"confirm_registration",
					"confirm_code",
					"confirm_user_id",
					"logout_butt",
					"auth_service_id",
					"clear_cache",
					"backurl",
				);

				$currentUrl = urlencode($APPLICATION->GetCurPageParam("", $arParamsToDelete));
				if ($arParams['AJAX'] == 'N') { ?>
					<script type="text/javascript">
						<?= $cartId ?>.currentUrl = '<?= $currentUrl ?>';
					</script>
				<? } else {
					$currentUrl = '#CURRENT_URL#';
				}

				$pathToAuthorize = $arParams['PATH_TO_AUTHORIZE'];
				$pathToAuthorize .= (stripos($pathToAuthorize, '?') === false ? '?' : '&');
				$pathToAuthorize .= 'login=yes&backurl=' . $currentUrl;
				?>
				<a href="<?= $pathToAuthorize ?>">
					<?= GetMessage('TSB1_LOGIN') ?>
				</a>
				<? if ($arParams['SHOW_REGISTRATION'] === 'Y') {
					$pathToRegister = $arParams['PATH_TO_REGISTER'];
					$pathToRegister .= (stripos($pathToRegister, '?') === false ? '?' : '&');
					$pathToRegister .= 'register=yes&backurl=' . $currentUrl; ?>
					<a href="<?= $pathToRegister ?>">
						<?= GetMessage('TSB1_REGISTER') ?>
					</a>
				<? } ?>
			<? endif ?>
		</div>
	<? endif ?>

	<div class="bx-basket-block basket-block">
		<noindex>
			<a href="<?= $arParams['PATH_TO_BASKET'] ?>" id="main_recycle" class="basket_sum">
				<div class="basket_icon">
					<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.25 3.25007H5.56833C5.82959 3.24712 6.08312 3.33868 6.2822 3.5079C6.48128 3.67712 6.61249 3.91258 6.65167 4.1709L7.17167 7.5834L8.66667 17.3334L20.5833 16.2501L22.75 7.5834H7.17167" stroke="#050505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M7.96289 22.2085H8.07122" stroke="#050505" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
						<path d="M19.6631 22.2085H19.7714" stroke="#050505" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
					<? if (!$arResult["DISABLE_USE_BASKET"]) { ?>
						<!--<span id="main_recycle_title" class="title">Корзина</span>-->
						<span class="basket_count"><?= $arResult['NUM_PRODUCTS'] ?></span>
					<? } ?>
				</div>
				<div class="b_sum">
					<? if (!$compositeStub) {
						if ($arParams['SHOW_NUM_PRODUCTS'] == 'Y' && ($arResult['NUM_PRODUCTS'] > 0 || $arParams['SHOW_EMPTY_VALUES'] == 'Y')) {
							if ($arParams['SHOW_TOTAL_PRICE'] == 'Y') { ?>
								<span class="basket-sum js-basket-sum">
									<?= $arResult["TOTAL_PRICE_RAW"] ? $arResult['TOTAL_PRICE'] : "" ?>
								</span>
					<? }
						}
					} ?>
				</div>
				<? if ($arParams['SHOW_PERSONAL_LINK'] == 'Y') : ?>
					<div style="padding-top: 4px;">
						<span class="icon_info"></span>
						<a href="<?= $arParams['PATH_TO_PERSONAL'] ?>"><?= GetMessage('TSB1_PERSONAL') ?></a>
					</div>
				<? endif ?>
			</a>
		</noindex>
		<? if (floatval($arParams['SUM_FOR_FREE_DELIVERY']) > 0) {
			$forFreeDelivery = floatval($arParams['SUM_FOR_FREE_DELIVERY'] - $arResult["TOTAL_PRICE_RAW"]);
			if ($forFreeDelivery > 0) { ?>
				<div class="basket_delivery"><?php echo $forFreeDelivery; ?> р. до <a href="/delivery/">бесплатной доставки</a></div>
			<? } else { ?>
				<div class="basket_delivery">доступна <a href="/delivery/">бесплатная доставка</a></div>
		<? }
		} ?>
	</div>
</div>