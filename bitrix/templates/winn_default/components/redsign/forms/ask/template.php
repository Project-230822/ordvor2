<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
	die();
}

use \Bitrix\Main\Application;
use \Bitrix\Main\Localization\Loc;

$request = Application::getInstance()->getContext()->getRequest();

if ($request->get('backurl') && strlen($request->get('backurl')) > 0)
{
	$arResult['BACKURL'] = htmlspecialchars($request->get('backurl'));
}


$arParams['DISABLED_FIELDS'] = is_array($arParams['DISABLED_FIELDS']) ? $arParams['DISABLED_FIELDS'] : [];

$arParams['SUCCESS_MESSAGE'] = $arParams['SUCCESS_MESSAGE'] ?: Loc::getMessage('MSG_SUCCESS_MESSAGE');

$sBtnSubmitText = isset($arParams['~MESS_SUBMIT'])
	? $arParams['~MESS_SUBMIT']
	: Loc::getMessage('MSG_SUBMIT');
?>
<div class="rsform mb-6 pb-6">
	<?php
	if (count($arResult['MESSAGES']['ERRORS']) > 0)
	{
		?>
		<script>
			<?php
			foreach ($arResult['MESSAGES']['ERRORS'] as $msg)
			{
				?>
				toastr && toastr.error('<?=CUtil::JSEscape($msg)?>');
				<?php
			}
			?>
			$(document).trigger("rs_forms.error");
		</script>
		<?php
	}
	
	if (count($arResult['MESSAGES']['SUCCESS']) > 0)
	{
		?>
		<div class="alert alert-success">
		<?php
		if (!empty($arParams['SUCCESS_MESSAGE']))
		{
			echo $arParams['SUCCESS_MESSAGE'];
		}
		else
		{
			foreach ($arResult['MESSAGES']['SUCCESS'] as $msg)
			{
				echo $msg.'<br>';
			}
		}
		?>
		</div>
		<script>
			<?php
			if (!empty($arParams['SUCCESS_MESSAGE']))
			{
				?>
				toastr && toastr.success('<?=CUtil::JSEscape($arParams['SUCCESS_MESSAGE'])?>');
				<?php
			}
			else
			{
				foreach ($arResult['MESSAGES']['SUCCESS'] as $msg)
				{
					?>
					toastr && toastr.success('<?=CUtil::JSEscape($msg)?>');
					<?php
				}
			}
			?>
			if (RS.Panel && RS.Panel.isOpened())
			{
				RS.Panel.close();
			}
			else
			{
				setTimeout(function(){
					var backurl = '<?=(strlen($arResult['BACKURL']) > 0 ? $arResult['BACKURL'] : '')?>';
					if (backurl != window.top.location.href.replace(window.top.location.origin, ''))
					{
						window.top.location.href = backurl;
					}
				}, 3000);
			}
		</script>
		<?php
	}
	?>
	<form action="<?=$arResult['REQUEST_URI']?>" method="POST" id="<?=$arResult['FORM_NAME']?>" novalidate>
		<?=bitrix_sessid_post()?>
		<div class="rsform__all-field clearfix">
		
			<?/*поле проверки пользователей*/?>
			<div class="form-group bmd-form-group" id="input_LAST_NAME">
				<label for="FIELD_LAST_NAME" class="bmd-label-floating">
					Ваша фамилия<span>*</span>
				</label>
					<input type="text" id="FIELD_LAST_NAME" name="FIELD_LAST_NAME" value class="form-control">
			</div>
			<?/* если поле заполнят, форма будет отклонена*/?>
			<?php
			foreach ($arResult['FIELDS'] as $key => $arField)
			{

				$disabled = in_array($arField['CODE'], $arParams['DISABLED_FIELDS']) ? ' readonly' : '';
				
				if ($arField['PROPERTY_TYPE'] == 'S')
				{
					?>
					<div class="form-group bmd-form-group" id="input_<?=$arField['CODE']?>">
						<label for="FIELD_<?=$arField['CODE']?>" class="bmd-label-floating">
							<?=$arField['NAME']?>:  <?php if ($arField['IS_REQUIRED'] == 'Y'): ?><span>*</span><?php endif; ?>
						</label>
						<?php if ($arField['USER_TYPE'] == 'HTML'): ?>
							<?php $arUserTypeSettings = unserialize($arField['USER_TYPE_SETTINGS']); ?>
							<textarea id="FIELD_<?=$arField['CODE']?>" name="FIELD_<?=$arField['CODE']?>" class="form-control<?=$disabled?>" style="height: <?=$arUserTypeSettings['height']?>px"<?php if ($arField['IS_REQUIRED'] == 'Y') echo ' required'?>><?=$arField['CURRENT_VALUE']?></textarea>
						<?php else: ?>
							<input <?php if(isset($arField['MASK'])) echo 'data-mask="'.$arField['MASK'].'"'; ?> type="<?=$arField['INPUT_TYPE']?>"<?php if(!empty($arField['PATTERN'])) echo ' pattern="'.$arField['PATTERN'].'"'; ?> id="FIELD_<?=$arField['CODE']?>" name="FIELD_<?=$arField['CODE']?>" value="<?=$arField['CURRENT_VALUE']?>" class="form-control<?=$disabled?>"<?=$disabled?><?php if ($arField['IS_REQUIRED'] == 'Y') echo ' required'?>>
						<?php endif; ?>
						<?php if(!empty($arField['HINT'])): ?>
						<div class="invalid-feedback"><?=$arField['HINT']?></div>
						<?php endif; ?>
					</div>
				<?php
				}
				elseif ($arField['PROPERTY_TYPE'] == 'L' && is_array($arField['VALUES']))
				{
					?>
					<div class="form-group bmd-form-group">
						<label for="FIELD_<?=$arField['CODE']?>"><?=$arField['NAME']?>:</label>
						<select class="form-control" id="FIELD_<?=$arField['CODE']?>">
							<?php foreach ($arField['VALUES'] as $i => $arValue): ?>
								<option <?php if ((empty($arField['CURRENT_VALUE']) && $i == 0) || $arField['CURRENT_VALUE'] == $arValue['ID']): ?>selected="selected"<?php endif; ?> value="<?=$arValue['ID']?>"><?=$arValue['VALUE']?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<?php
				}
			}
			?>
			
		</div>

		<?php
		if ($arResult['USE_CAPTCHA'] == 'Y')
		{
			?>
			<div class="d-block captcha-wrap mt-5">
				<label for="<?=$arResult['FORM_NAME']?>_captcha_word" class="small text-extra"><?=Loc::getMessage('MSG_CAPTHA'); ?> (<a href="javacsript::void();" class="no-barba" data-captcha-update-code><?=Loc::getMessage('MSG_UPDATE_CAPTCHA')?></a>) <span class="text-danger">*</span></label>
				<div class="d-flex flex-column flex-sm-row">
					<div class="d-block pr-0 pr-sm-5">
						<input type="hidden" name="captcha_sid" value="<?=$arResult['CAPTCHA_CODE']?>">
						<span class="bmd-form-group">
							<input class="form-control" type="text" name="captcha_word" id="<?=$arResul['FORM_NAME']?>_captcha_word" size="20" maxlength="5" value="" required autocomplete="off" >
							<div class="invalid-feedback"><?=Loc::getMessage('MSG_CAPTCHA_HINT');?></div>
						</span>
					</div>
					<div class="d-block">
						<img class="mt-3 mw-none" src="/bitrix/tools/captcha.php?captcha_sid=<?=$arResult['CAPTCHA_CODE']?>" alt="CAPTCHA">
					</div>
				</div>
			</div>
			<?php
		}

		if ($arParams['USER_CONSENT'] === 'Y')
		{
			?>
			<div class="my-5">
				<?$APPLICATION->IncludeComponent(
					"bitrix:main.userconsent.request",
					"",
					array(
						"ID" => $arParams["USER_CONSENT_ID"],
						"IS_CHECKED" => $arParams["USER_CONSENT_IS_CHECKED"],
						"IS_LOADED" => $arParams["USER_CONSENT_IS_LOADED"],
						"AUTO_SAVE" => "Y",
						// "ORIGINATOR_ID" => $arResult["AGREEMENT_ORIGINATOR_ID"],
						// "ORIGIN_ID" => $arResult["AGREEMENT_ORIGIN_ID"],
						"INPUT_NAME" => "CONSENT",
						// 'SUBMIT_EVENT_NAME' => '',
						'REPLACE' => array(
							'button_caption' => $sBtnSubmitText,
							// 'fields' => array()
						)
					)
				);?>
			</div>
			<?php
		}
		?>

		<div class="d-block mt-5">
			<input type="hidden" name="PARAMS_HASH" value="<?=$arResult['PARAMS_HASH']?>">
			
			<?php
			if (strlen($arResult["BACKURL"]) > 0)
			{
				?>
				<input type="hidden" name="backurl" value="<?=$arResult["BACKURL"]?>">
				<?php
			}
			?>
			<button type="submit" class="btn btn-primary" name="submit" value=""><?=$sBtnSubmitText?></button>
		</div>

	</form>

<script data-skip-moving="true">
(function() {
	'use strict';

	var form = document.forms['<?=$arResult['FORM_NAME']?>'];
	var lastName = document.getElementById('FIELD_LAST_NAME');
	  
	if (form)
	{
		form.addEventListener('submit', function (event)
		{
			var existslastName = lastName.value.length;
			console.log(existslastName);
			if (form.checkValidity() === false || existslastName > 0)
			{
				event.preventDefault();
				event.stopPropagation();
				toastr && toastr.error('<?=GetMessageJS('MSG_ERROR_REQUIRED_FIELDS')?>');
			}

			BX.closeWait();

			form.classList.add('was-validated');
		});

		<?php
		if ($arParams['AJAX_MODE'] == 'Y')
		{
			?>
			if (RS.Init)
			{
				RS.Init(form);
			}
			<?php
		}
		?>
	}
})();
</script>
</div>

