<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Iblock, \Bitrix\Highloadblock;

/**
 * @var CBitrixComponentTemplate $this
 * @var CatalogElementComponent $component
 */

$component = $this->getComponent();
$arParams = $component->applyTemplateModifications();


/**********БЛОК Внимание! С 18 апреля 2020 года этот товар можно приобрести в сети магазинов "Оружейный двор" только по предварительной записи*********/
/*function getParent($id, $getFitstLvl=true){
    $tt = CIBlockSection::GetList(array(), array('ID'=>$id, 'IBLOCK_ID'=>$arParams['IBLOCK_ID']), false, array('ID','IBLOCK_ID','IBLOCK_SECTION_ID','DEPTH_LEVEL'), false);
    $as=$tt->fetch();
    static $a;
    if(!$getFitstLvl || $as['DEPTH_LEVEL']==1) $a = $as['ID'];
    else{
        getParent($as['IBLOCK_SECTION_ID']);
    }
    return $a;
}
$idparsection = getParent($arResult["IBLOCK_SECTION_ID"]);
$arShowSections = array(4022,4128,4005,4640);
$arResult['SHOW_18_04_MESSAGE'] = in_array($idparsection, $arShowSections)?true:false;*/
/*******************/


$arSelect = array("ID", "IBLOCK_ID", "DETAIL_PAGE_URL");
$arFilter = array(
	"IBLOCK_ID" => $arParams['IBLOCK_ID'],
	"ID" => $arResult['ID']
);

$res = CIBlockElement::GetList(array(), $arFilter, false, array("nTopCount" => 1), $arSelect);


if ($arRes = $res->GetNext()) {

	$arResult['DETAIL_PAGE_URL'] = $arRes['DETAIL_PAGE_URL'];
}



$arResult["PATH"] = array();
$rsPath = CIBlockSection::GetNavChain(
	$arParams["IBLOCK_ID"],
	$arResult["IBLOCK_SECTION_ID"],
	array(
		"ID", "CODE", "XML_ID", "EXTERNAL_ID", "IBLOCK_ID",
		"IBLOCK_SECTION_ID", "SORT", "NAME", "ACTIVE",
		"DEPTH_LEVEL", "SECTION_PAGE_URL", "UF_H1"
	)
);


//$rsPath->SetUrlTemplates("", $arParams["SECTION_URL"]);
while ($arPath = $rsPath->GetNext()) {
	$ipropValues = new Iblock\InheritedProperty\SectionValues($arParams["IBLOCK_ID"], $arPath["ID"]);
	$arPath["IPROPERTY_VALUES"] = $ipropValues->getValues();
	$arResult["PATH"][] = $arPath;
	$sectIds[] = $arPath['ID'];
}


//echo "<pre>"; var_dump($arCurSection['ID']); echo "</pre>";

//echo "<pre>"; var_dump($arResult["PATH"]); echo "</pre>";

/* if($sectIds){
	
	$arFilter4 = array(
		"IBLOCK_ID" => $arParams["IBLOCK_ID"],
		"ID" => $sectIds
	);
	
	$dbRes = CIBlockSection::GetList(array(), $arFilter4, true, array("ID", "UF_H1"));
	
	while($arRes = $dbRes->GetNext())
	{
		$arSects[$arRes['ID']] = $arRes["UF_H1"];
	}
	
} */





if (isset($arResult["OFFERS"]) && $arResult["OFFERS"]) {

	foreach ($arResult["JS_OFFERS"] as $i => &$OFFER) {

		$OFFER['KOD'] = $arResult["OFFERS"][$i]["PROPERTIES"]["KOD"]["VALUE"];
	}
	unset($OFFER);
}


$cp = $this->__component;
$cp->arResult['META_TITLE'] = $arResult["META_TAGS"]["TITLE"];
$cp->arResult['BRAND'] = $arResult["PROPERTIES"]["CML2_MANUFACTURER"]["VALUE"];
$cp->SetResultCacheKeys(array(
	"META_TITLE",
	"BRAND",
	"DETAIL_PAGE_URL",
	"IBLOCK_SECTION_ID",
	"PATH"
));


/*** start CUSTOM SORT ***/
//Получаем родительские разделы в виде древа
$nav = CIBlockSection::GetNavChain(false, $arResult['SECTION']['ID']);
while ($arSectionPath = $nav->GetNext()) {
	$sectionParent[] = $arSectionPath['ID'];
}
//Запрашиваем данное поле для выбранных разделов
$arSection = \Bitrix\Iblock\Model\Section::compileEntityByIblock($arResult['IBLOCK_ID'])::getList(
	array(
		"select" => array("UF_PROPSORT", "NAME", "UF_HIDEPROP"),
		"filter" => array("ID" => $sectionParent, "IBLOCK_ID" =>  $arResult['IBLOCK_ID']),
	)
);
while ($section = $arSection->fetch()) {
	if (!empty(unserialize($section['UF_PROPSORT']))) {
		//Так мы оставляем только последнее заполненное значение
		// $propToSort['NAME'] = $section['NAME']; <- на случай определить откуда сортировка тянется
		$propToSort['SORT'] = unserialize($section['UF_PROPSORT']);
	}

	if (!empty(unserialize($section['UF_HIDEPROP']))) {

		$propToHide = unserialize($section['UF_HIDEPROP']);
	}
}

$arProps = array();



foreach ($arResult['DISPLAY_PROPERTIES'] as $propKey => $prop) {
	foreach ($propToSort['SORT'] as $customPropKey => $customProp) {
		if ($prop['ID'] == $customPropKey) {
			$arResult['DISPLAY_PROPERTIES'][$propKey]['SORT'] = $customProp;
		}
	}

	if (!$propToHide || !array_key_exists($prop['ID'], $propToHide)) {
		$arProps[$propKey] =  $arResult['DISPLAY_PROPERTIES'][$propKey];
	}
}


$arResult['DISPLAY_PROPERTIES'] = !empty($arProps) ? $arProps : [];

//Сортируем по значению сортировки
usort($arResult['DISPLAY_PROPERTIES'], function ($a, $b) {
	return ($a['SORT'] - $b['SORT']);
});
/*** end CUSTOM SORT ***/


function declensionOfNumbers($num, $titles = 0)
{
	if (empty($num)) return false;
	$cases = [2, 0, 1, 1, 1, 2];
	return $num . " " . $titles[($num % 100 > 4 && $num % 100 < 20) ? 2 : $cases[min($num % 10, 5)]];
}



$HLname = "Flags";
$entity = Highloadblock\HighloadBlockTable::compileEntity($HLname)->getDataClass();
$arrayValueData = $entity::getList(
	[
		'select' => ['UF_IMAGE'],
		"filter" => ['UF_NAME' => $arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["VALUE"]]
	]
)->fetch();
$arResult["PROPERTIES"]["STRANA_PROISKHOZHDENIYA"]["FLAG"] = CFile::GetPath($arrayValueData["UF_IMAGE"]);

$arrayValueData = $entity::getList(
	[
		'select' => ['UF_IMAGE'],
		"filter" => ['UF_NAME' => $arResult["PROPERTIES"]["PROIZVODITEL"]["VALUE"]]
	]
)->fetch();
$arResult["PROPERTIES"]["PROIZVODITEL"]["FLAG"] = CFile::GetPath($arrayValueData["UF_IMAGE"]);

unset($arrayValueData, $entity, $HLname);
