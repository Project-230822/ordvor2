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

	$lastPartitionId = "0";
	$entity = Iblock\Model\Section::compileEntityByIblock((int)$arParams['IBLOCK_ID']);
	$objectSections = $entity::getList([
		'select' => ['ID', 'NAME', 'IBLOCK_ID', 'DEPTH_LEVEL'],
		'filter' => ['IBLOCK_ID' => $arParams["IBLOCK_ID"], 'UF_SHOW_OUR_STORE_ON_PAGE' => 1, "ACTIVE" => "Y"],
		'order' => ['DATE_CREATE' => 'DESC'],
	]);
	while ($arraySections = $objectSections->Fetch()) {
		if ($lastPartitionId === $arraySections['IBLOCK_SECTION_ID']) {
			$finalArray[$arraySections['IBLOCK_SECTION_ID']][$arraySections['ID']] = $arraySections;
		} else {
			$finalArray[$arraySections['ID']] = $arraySections;
		}
		$lastPartitionId = $arraySections['ID'];
	}

	$arSort = ["SORT" => "ASC", "DATE_ACTIVE_FROM" => "DESC", "ID" => "DESC"];
	$arFilter = ["IBLOCK_ID" => $arParams["IBLOCK_ID"], "ACTIVE" => "Y", "ACTIVE_DATE" => "Y"];
	$arSelect = ["ID", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM", "PREVIEW_TEXT", "PREVIEW_PICTURE", "IBLOCK_SECTION_ID", "PROPERTY_ADDRESS", "PROPERTY_PHONE", "PROPERTY_EMAIL", "PROPERTY_MAP"];

	$rsElement = CIBlockElement::GetList($arSort, $arFilter, false, false, $arSelect);
	while ($obElement = $rsElement->GetNextElement()) {
		$arElement = $obElement->GetFields();
		if ($finalArray[$arElement['IBLOCK_SECTION_ID']]) {
			$finalArray[$arElement['IBLOCK_SECTION_ID']]['LIST_OF_STORES'][] = $arElement;
		}
	}
	$arResult = $finalArray;

	$this->SetResultCacheKeys(array(
		"ID",
		"IBLOCK_ID",
		"NAV_CACHED_DATA",
		"NAME",
		"IBLOCK_SECTION_ID",
		"IBLOCK",
		"LIST_PAGE_URL",
		"~LIST_PAGE_URL",
		"SECTION",
		"PROPERTIES",
	));

	$this->IncludeComponentTemplate();
}
