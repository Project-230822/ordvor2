<?php
define("STOP_STATISTICS", true);
define('NO_AGENT_CHECK', true);
define("STATISTIC_SKIP_ACTIVITY_CHECK", true);

# подключаем bitrix
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");

$ib_id = 18;
$section_id = 4080;
$import_file = $_SERVER['DOCUMENT_ROOT'].'/import_section.xml';

$xml = simplexml_load_string(file_get_contents($import_file));

$arItems = $arTemp = $arProps = array();

foreach ($xml as $import_item):
    $item_id = (int) $import_item->ID;//(string) $import_item->CODE;
    if ($item_id > 0):
        $arItems[$item_id]['FIELDS'] = array('ID' => $item_id, 'DETAIL_TEXT' => (string) $import_item->DETAIL_TEXT);

        foreach ($import_item->properties->property as $property):
            foreach ($property as $fieldKey => $fieldValue) {
                $arTemp[$fieldKey] = (string) $fieldValue;
            }
            $arItems[$item_id]['PROPS'][$arTemp['CODE']] = $arTemp;
            unset($arTemp);
        endforeach;
    endif;
endforeach;

if (count($arItems) > 0):
    foreach ($arItems as $arItem):
        $PRODUCT_ID = $arItem['FIELDS']['ID'];

        foreach ($arItem['PROPS'] as $prop) {
            if (empty($prop['VALUE'])) continue;
            switch ($prop['PROPERTY_TYPE']):
                case 'S': // строка
                    $arProps[$prop['CODE']] = $prop['VALUE'];
                    break;
                case 'L': // список
                    $property_enums = CIBlockPropertyEnum::GetList(Array(), Array("CODE"=>$prop['CODE']));
                    while($enum_fields = $property_enums->GetNext())
                    {
                        if ($prop['VALUE'] == $enum_fields['VALUE']) {
                            $arProps[$prop['CODE']] = $enum_fields["ID"];
                        }
                    }
                    break;
            endswitch;
        }

        CIBlockElement::SetPropertyValuesEx($PRODUCT_ID, false, $arProps);

        $el = new CIBlockElement;
        $res = $el->Update($PRODUCT_ID, array('DETAIL_TEXT' => $arItem['FIELDS']['DETAIL_TEXT']));
    endforeach;
endif;