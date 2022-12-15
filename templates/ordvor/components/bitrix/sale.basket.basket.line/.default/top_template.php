<?if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED!==true) die();
/**
 * @global array $arParams
 * @global CUser $USER
 * @global CMain $APPLICATION
 * @global string $cartId
 */
$compositeStub = (isset($arResult['COMPOSITE_STUB']) && $arResult['COMPOSITE_STUB'] == 'Y');
?>

<?php /* ?>

<div class="basket-block">
	<noindex> 
		<a href="<?=$arParams['PATH_TO_BASKET']?>" id="main_recycle">
			<div class="basket-top js-basket-small">
				<span id="main_recycle_title" class="title">Корзина</span><br>
				<span class="basket-sum js-basket-sum"><?=$arResult["TOTAL_PRICE_RAW"] ? $arResult['TOTAL_PRICE'] : ""?></span>
				<span class="counter js-basket-quantity"><?=$arResult['NUM_PRODUCTS']?></span>
			</div>
		</a> 
	</noindex>
</div>

<?php */ ?>

<div class="bx-hdr-profile">
<?if (!$compositeStub && $arParams['SHOW_AUTHOR'] == 'Y'):?>
	<div class="bx-basket-block">
		<i class="fa fa-user"></i>
		<?if ($USER->IsAuthorized()):
			$name = trim($USER->GetFullName());
			if (! $name)
				$name = trim($USER->GetLogin());
			if (strlen($name) > 15)
				$name = substr($name, 0, 12).'...';
			?>
			<a href="<?=$arParams['PATH_TO_PROFILE']?>"><?=htmlspecialcharsbx($name)?></a>
			&nbsp;
			<a href="?logout=yes"><?=GetMessage('TSB1_LOGOUT')?></a>
		<?else:
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
			if ($arParams['AJAX'] == 'N')
			{
				?><script type="text/javascript"><?=$cartId?>.currentUrl = '<?=$currentUrl?>';</script><?
			}
			else
			{
				$currentUrl = '#CURRENT_URL#';
			}
			
			$pathToAuthorize = $arParams['PATH_TO_AUTHORIZE'];
			$pathToAuthorize .= (stripos($pathToAuthorize, '?') === false ? '?' : '&');
			$pathToAuthorize .= 'login=yes&backurl='.$currentUrl;
			?>
			<a href="<?=$pathToAuthorize?>">
				<?=GetMessage('TSB1_LOGIN')?>
			</a>
			<?
			if ($arParams['SHOW_REGISTRATION'] === 'Y')
			{
				$pathToRegister = $arParams['PATH_TO_REGISTER'];
				$pathToRegister .= (stripos($pathToRegister, '?') === false ? '?' : '&');
				$pathToRegister .= 'register=yes&backurl='.$currentUrl;
				?>
				<a href="<?=$pathToRegister?>">
					<?=GetMessage('TSB1_REGISTER')?>
				</a>
				<?
			}
			?>
		<?endif?>
	</div>
<?endif?>

	<div class="bx-basket-block basket-block">
		<noindex> 
		<a href="<?=$arParams['PATH_TO_BASKET']?>" id="main_recycle">
			<div class="basket-top js-basket-small">
				<?
				if (!$arResult["DISABLE_USE_BASKET"])
				{
					?>
					<span id="main_recycle_title" class="title">Корзина</span>
					<span class="counter js-basket-quantity"><?=$arResult['NUM_PRODUCTS']?></span><?
				}
		
				if (!$compositeStub)
				{
					if ($arParams['SHOW_NUM_PRODUCTS'] == 'Y' && ($arResult['NUM_PRODUCTS'] > 0 || $arParams['SHOW_EMPTY_VALUES'] == 'Y'))
					{
						/*echo $arResult['NUM_PRODUCTS'].' '.$arResult['PRODUCT(S)'];*/
		
						if ($arParams['SHOW_TOTAL_PRICE'] == 'Y')
						{
							?>
							
							<span class="basket-sum js-basket-sum"><?=$arResult["TOTAL_PRICE_RAW"] ? $arResult['TOTAL_PRICE'] : ""?></span>
							<?
						}
					}
				}
		
				if ($arParams['SHOW_PERSONAL_LINK'] == 'Y'):?>
					<div style="padding-top: 4px;">
					<span class="icon_info"></span>
					<a href="<?=$arParams['PATH_TO_PERSONAL']?>"><?=GetMessage('TSB1_PERSONAL')?></a>
					</div>
				<?endif?>
			</div>
		</a> 
		</noindex>
		<?php 
		if(floatval($arParams['SUM_FOR_FREE_DELIVERY'])>0) {
    		$forFreeDelivery = floatval($arParams['SUM_FOR_FREE_DELIVERY'] - $arResult["TOTAL_PRICE_RAW"]);
    		if($forFreeDelivery>0) {
    	    ?>
    			<div class="free-delivery-wrap">до <a href="/delivery/">бесплатной доставки</a> не хватает <?php echo $forFreeDelivery;?> р.</div>
    		<?php 
    		} else {
    		?>
    			<div class="free-delivery-wrap">доступна <a href="/delivery/">бесплатная доставка</a></div>
    		<?php 
    		}
		}
		?>
	</div>
</div>


