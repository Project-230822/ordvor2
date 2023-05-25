<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
$zipInputValue = $arResult["ZIP"] ? $arResult["ZIP"] : $arResult["GEOLOCATION"] ? $arResult["GEOLOCATION"]["ZIP"]["XML_ID"] : "";
?>
<div class="popup-form-wrapper">
	<div class="row">
		<? if ($arResult["LOCATION"]) : ?>
			<div class="col-sm-12 delivery-calc-city">
				<h4 class="tac">
					Стоимость доставки 1 кг. в:
					<br>"<?= $arResult["LOCATION"] ?>"
				</h4>
			</div>
			<? if ($arResult["DELIVERY"]) : ?>
				<div class="col-sm-12">
					<? foreach ($arResult["DELIVERY"] as $delivery) : ?>
						<div class="delivery-price-row">
							<div class="row">
								<div class="col-xs-6"><?= $delivery["NAME"] ?></div>
								<div class="col-xs-3"><?= $delivery["PERIOD_TEXT"] ?></div>
								<div class="col-xs-3"><?= $delivery["PRICE_FORMATED"] ?></div>
							</div>
						</div>
					<? endforeach ?>
					<div class="delivery-price-row">
						<div class="row">
							<div class="col-xs-12 tac">
								При заказе от 3000
								рублей доставка бесплатно.
								<a href="/actions/free-delivery/" target="_blank" rel="noreferrer">Подробнее</a>
							</div>
						</div>
					</div>
				</div>
			<? else : ?>
				<div class="col-sm-12">
					<? ShowError("Не удалось расчитать стоимость доставки") ?>
				</div>
			<? endif ?>
		<? else : ?>
			<div class="col-sm-12">
				<form action="<?= POST_FORM_ACTION_URI ?>">
					<div class="form-group">
						<label for="delivery-zip">Индекс</label>
						<input type="text" id="delivery-zip" class="form-control" name="zip" value="<?= $zipInputValue ?>" required>
					</div>
					<? if ($arResult["GEOLOCATION"] && ($arResult["GEOLOCATION"]["ZIP"]["XML_ID"] == $zipInputValue)) : ?>
						<div class="form-group">
							Населенный пункт определен автоматически:<br>
							<i><?= $arResult["GEOLOCATION"]["NAME"] ?></i><br>
							При необходимости измените и нажмите кнопку <b>Посчитать</b>
						</div>
					<? endif ?>

					<div class="form-group">
						<button class="btn btn-default">Посчитать</button>
					</div>
				</form>
			</div>
		<? endif ?>
		<? if ($arResult["ERRORS"]) : ?>
			<div class="col-sm-12">
				<?
				foreach ($arResult["ERRORS"] as $error) {
					ShowError($error);
				}
				?>
			</div>
		<? endif ?>
	</div>
</div>


<script>
	BX = top.BX;
	$ = top.$;
	var currentPopup = BX.PopupWindowManager.getCurrentPopup();
	currentPopup.adjustPosition();
	currentPopup.resizeOverlay();
</script>