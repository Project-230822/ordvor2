<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

/**
 * @global CMain $APPLICATION
 * @var array $arParams
 * @var array $arResult
 * @var CatalogSectionComponent $component
 * @var CBitrixComponentTemplate $this
 * @var string $templateName
 * @var string $componentPath
 */
?>

<!-- Координаты карты можно привязать к кнопке -->

<div class="store-listings">
	<div class="custom-component__title">
		<?= $arParams['WRITE_YOUR_TITLE'] ?>
	</div>
	<div class="store-listings__list-of-cities">
		<? foreach ($arResult as $keyCity => $valueCity) : ?>
			<? if ($valueCity['LIST_OF_STORES']) : ?>
				<div class="store-listings__city" data-id="<?= $valueCity['ID'] ?>">
					<?= $valueCity['NAME'] ?>
				</div>
			<? endif; ?>
		<? endforeach; ?>
	</div>

	<div class="store-listings__store-wrap">
		<? foreach ($arResult as $keyCity => $valueCity) : ?>
			<? if ($valueCity['LIST_OF_STORES']) : ?>
				<div class="store-listings__list-of-store" <?= ($valueCity['ID'] ? "data-id='" . $valueCity['ID'] . "'" : '') ?>>
					<? foreach ($valueCity['LIST_OF_STORES'] as $keyStore => $valueStore) : ?>
						<div class="store-listings__store">
							<svg class="store-listings__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12.6629 1.97313L9.00011 12.5546C8.96562 12.6542 8.90051 12.7404 8.81409 12.8008C8.72767 12.8612 8.62436 12.8928 8.51893 12.891C8.4135 12.8891 8.31135 12.854 8.22708 12.7906C8.14281 12.7273 8.08074 12.6389 8.04973 12.5381L6.5775 7.75335C6.55352 7.6754 6.51083 7.6045 6.45317 7.54684C6.3955 7.48917 6.3246 7.44648 6.24665 7.4225L1.46192 5.95027C1.36114 5.91927 1.27274 5.85719 1.20937 5.77292C1.14599 5.68865 1.11087 5.5865 1.10904 5.48107C1.10721 5.37564 1.13875 5.27234 1.19917 5.18592C1.25958 5.09949 1.34577 5.03438 1.44541 4.99989L12.0269 1.33708C12.1155 1.30638 12.2111 1.30126 12.3025 1.32229C12.394 1.34333 12.4776 1.38967 12.544 1.45602C12.6103 1.52237 12.6567 1.60605 12.6777 1.69749C12.6987 1.78894 12.6936 1.88446 12.6629 1.97313V1.97313Z" stroke="#EE332A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
							<div class="store-listings__information">
								<div class="store-listings__address">
									<?= $valueStore['PROPERTY_ADDRESS_VALUE'] ?>
								</div>
								<? if ($valueStore['PROPERTY_PHONE_VALUE']) : ?>
									<div class="store-listings__list-of-phone-numbers">
										<? foreach ($valueStore['PROPERTY_PHONE_VALUE'] as $keyPhoneNumber => $valuePhoneNumber) : ?>
											<a class="store-listings__phone-numbers" href="<?= format_phone_number($valuePhoneNumber); ?>"><?= $valuePhoneNumber ?></a>
										<? endforeach; ?>
									</div>
								<? endif; ?>
								<div class="store-listings__name-of-shop"><?= $valueStore['NAME'] ?></div>
								<div class="store-listings__link-top-map">Посмотреть на карте</div>
							</div>
						</div>
					<? endforeach; ?>
				</div>
			<? endif; ?>
		<? endforeach; ?>
	</div>
</div>