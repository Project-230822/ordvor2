<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */

use \Bitrix\Main\Application;
use \Bitrix\Main\Localization\Loc;

$config = \Bitrix\Main\Web\Json::encode($arResult['CONFIG']);
$inputId = 'CONSTENT_'.$arParams['ID'].'_'.htmlspecialcharsbx($arParams['INPUT_NAME']);

$arMessages = Loc::loadLanguageFile(__DIR__.'/user_consent.php');

$request = Application::getInstance()->getContext()->getRequest();
?>
<div data-bx-user-consent="<?=htmlspecialcharsbx($config)?>">
	<div class="checkbox bmd-custom-checkbox">
		<label class="mb-0">
			<input type="checkbox" value="Y" <?=($arParams['IS_CHECKED'] ? 'checked' : '')?> name="<?=htmlspecialcharsbx($arParams['INPUT_NAME'])?>" id="<?=$inputId?>"> <?=$arResult['INPUT_LABEL']?>
			<div class="invalid-feedback"><?=Loc::getMessage('RS_MUR_CONSENT_HINT'); ?></div>
		</label>
	</div>
</div>
<script type="text/html" data-bx-template="main-user-consent-request-loader">
	<div>
		<div data-bx-loader="" class="fancybox-loading"></div>
		<div data-bx-content="">
			<div class="rsform">
				<div data-bx-textarea="" class="text-pre-wrap"></div>
				<div class="d-block mt-5">
					<span data-bx-btn-accept="" class="btn btn-primary mb-4">Y</span>
					<span data-bx-btn-reject="" class="btn btn-link font-weight-bold mb-4">N</span>
				</div>
			</div>
		</div>
	</div>
</script>
<script>BX.message(<?=CUtil::PhpToJSObject($arMessages);?>);</script>
<?php if ($request->isAjaxRequest()): ?>
<script>
if (!!BX.UserConsent)
{  
	BX.UserConsent.loadFromForms();
}
else
{
  BX.loadScript('<?=$templateFolder?>/user_consent.js', function(){
	BX.message(<?=CUtil::PhpToJSObject($arMessages);?>);
    BX.UserConsent.loadFromForms();
  });
}
</script>
<?php endif; ?>