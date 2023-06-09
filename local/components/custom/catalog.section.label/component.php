<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Iblock;

if (!isset($arParams["CACHE_TIME"])) {
	$arParams["CACHE_TIME"] = 3600;
}

CPageOption::SetOptionString("main", "nav_page_in_session", "N");

if ($arParams["IBLOCK_ID"] < 1) {
	ShowError("IBLOCK_ID IS NOT DEFINED");
	return false;
}

if ($this->StartResultCache(false, [])) {

	if (!CModule::IncludeModule("iblock")) {
		$this->AbortResultCache();
		ShowError("IBLOCK_MODULE_NOT_INSTALLED");
		return false;
	}
	$iblock = CIBlock::GetByID($arParams['IBLOCK_ID'])->Fetch();

	// Получаем объект свойства инфоблока
	$property = CIBlockProperty::GetList(
		array('SORT' => 'ASC'),
		array('IBLOCK_ID' => $arParams["IBLOCK_ID"], 'CODE' => 'LABEL_LIST') // добавляем фильтр по коду свойства
	);

	if ($prop_fields = $property->GetNext()) {
		if ($prop_fields['PROPERTY_TYPE'] == 'L') {

			// Получаем список значений свойства инфоблока типа список
			$enum = CIBlockPropertyEnum::GetList(
				array("SORT" => "ASC", "VALUE" => "ASC"),
				array("IBLOCK_ID" => $arParams["IBLOCK_ID"], "CODE" => $prop_fields["CODE"])
			);

			// Заносим значения в массив
			$property_values = array();
			while ($enum_fields = $enum->GetNext()) {
				$property_values[$enum_fields['ID']]['VALUE'] = $enum_fields['VALUE'];
				$property_values[$enum_fields['ID']]['XML_ID'] = $enum_fields['XML_ID'];
			}
		}
	}

	$arResult['LABEL_LIST'] = $property_values;
	$arResult["IBLOCK_ID"] = $arParams["IBLOCK_ID"];
	$arResult["IBLOCK_TYPE"] = $arParams["IBLOCK_TYPE"];

	unset($property_valuesб, $enum_fields, $prop_fields, $property, $iblock);

	$this->SetResultCacheKeys([
		"IBLOCK_ID",
		"IBLOCK_TYPE",
		"LABEL_LIST",
	]);

	$this->IncludeComponentTemplate();
}
