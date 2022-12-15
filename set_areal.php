<?

die();

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");


/* \Bitrix\Main\Loader::includeModule('sale');
$obCity = \Bitrix\Sale\Location\LocationTable::getList(array(
	'filter' => array('=NAME.LANGUAGE_ID' => LANGUAGE_ID, 'NAME_RU' => $arCityNames),
	'select' => array('*', 'NAME_RU' => 'NAME.NAME')
));

while($arCityName = $obCity->fetch())
{
	$arCityIDs[$arCityName["NAME_RU"]] = $arCityName["ID"];
	$arCityCodess[$arCityName["NAME_RU"]] = $arCityName["CODE"];
} */


if(\Bitrix\Main\Loader::includeModule('iblock') && \Bitrix\Main\Loader::includeModule('sale'))
{
	$res = CIBlockElement::GetList(
			Array(),
			Array("IBLOCK_ID" => OrdvorCity::CITY_IBLOCK),
			false,
			false,
			Array("CODE", "NAME", "ID")
			);
	while ($arItem = $res->fetch())
	{
		$arAllCityCodes[] = $arItem["NAME"];
		
		$obCity = \Bitrix\Sale\Location\LocationTable::getList(array(
			'filter' => array('=NAME.LANGUAGE_ID' => LANGUAGE_ID, 'NAME_RU' => $arItem["NAME"]),
			'select' => array('NAME_RU' => 'NAME.NAME', 'CODE', "ID")
		));

		if($arCityName = $obCity->fetch())
		{
			
			$arVal = CSaleLocation::GetByID( $arCityName['ID'], "ru"); // параметр ru необязательный. По умолчанию текущий язык.
			
			if($arVal["REGION_NAME_ORIG"]){
				CIBlockElement::SetPropertyValuesEx($arItem['ID'], false, array('REGION' => $arVal["REGION_NAME_ORIG"]));
			}
			
		}
		
	
	}
	
	

}