<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogSectionComponent $component
 */

function format_phone_number($phone)
{
	$formatted_phone = '';
	// Проходим по символам номера телефона
	for ($i = 0; $i < strlen($phone); $i++) {
		$digit = $phone[$i];
		// Пропускаем все символы, кроме цифр
		if (ctype_digit($digit)) {
			$formatted_phone .= $digit;
		}
	}
	// Если номер начинается с 8, меняем на +7
	if (substr($formatted_phone, 0, 1) == '8') {
		$formatted_phone = '7' . substr($formatted_phone, 1);
	}
	// Форматируем номер телефона
	if (strlen($formatted_phone) == 11) {
		$formatted_phone = '+' . substr($formatted_phone, 0, 1) . substr($formatted_phone, 1, 3) . substr($formatted_phone, 4, 3) . substr($formatted_phone, 7, 2) . substr($formatted_phone, 9, 2);
	} elseif (strlen($formatted_phone) == 10) {
		$formatted_phone = '+7' . substr($formatted_phone, 0, 3) . substr($formatted_phone, 3, 3) . substr($formatted_phone, 6, 2) . substr($formatted_phone, 8, 2);
	}
	return $formatted_phone;
}