<?
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/php_interface/include/sortprops.php");

// Проставляем характеристики товара из свойств в торговый каталок
AddEventHandler('iblock', 'OnAfterIBlockElementUpdate', 'setOfferParams');
AddEventHandler('iblock', 'OnAfterIBlockElementAdd', 'setOfferParams');
function setOfferParams(&$arFields)
{

    if ($arFields['IBLOCK_ID'] == 18) {
        $res = CIBlockElement::GetList(array(), array("IBLOCK_ID" => 18, "ID" => $arFields['ID']), false, false, array("ID", "PROPERTY_GABARITY_VES", "PROPERTY_GABARITY_KOEFFITSIENT_PERESCHETA", "PROPERTY_GABARITY_DLINA", "PROPERTY_GABARITY_SHIRINA", "PROPERTY_GABARITY_VYSOTA", "XML_ID"));
        while ($arItem = $res->fetch()) {
            if (
                $arItem["PROPERTY_GABARITY_VES_VALUE"] > 0 ||
                $arItem["PROPERTY_GABARITY_KOEFFITSIENT_PERESCHETA_VALUE"] > 0 ||
                $arItem["PROPERTY_GABARITY_DLINA_VALUE"] > 0 ||
                $arItem["PROPERTY_GABARITY_SHIRINA_VALUE"] > 0 ||
                $arItem["PROPERTY_GABARITY_VYSOTA_VALUE"] > 0
            ) {
                if (!$arItem["PROPERTY_GABARITY_VES_VALUE"] || $arItem["PROPERTY_GABARITY_VES_VALUE"] < 1) {
                    $item["PROPERTY_GABARITY_VES_VALUE"] = $arItem["PROPERTY_GABARITY_KOEFFITSIENT_PERESCHETA_VALUE"];
                } else {
                    $item["PROPERTY_GABARITY_VES_VALUE"] = $arItem["PROPERTY_GABARITY_VES_VALUE"];
                }

                $item["PROPERTY_GABARITY_DLINA_VALUE"] = $arItem["PROPERTY_GABARITY_DLINA_VALUE"];
                $item["PROPERTY_GABARITY_SHIRINA_VALUE"] = $arItem["PROPERTY_GABARITY_SHIRINA_VALUE"];
                $item["PROPERTY_GABARITY_VYSOTA_VALUE"] = $arItem["PROPERTY_GABARITY_VYSOTA_VALUE"];
            }

            if ($arItem["XML_ID"]) {
                $productXML_ID = $arItem["XML_ID"];
            }
        }

        if ($item) {
            CModule::IncludeModule('catalog');
            $arFieldsUpdate = array(
                'WEIGHT' => $item["PROPERTY_GABARITY_VES_VALUE"],
                'LENGTH' => $item["PROPERTY_GABARITY_DLINA_VALUE"],
                'WIDTH' => $item["PROPERTY_GABARITY_SHIRINA_VALUE"],
                'HEIGHT' => $item["PROPERTY_GABARITY_VYSOTA_VALUE"],
            );
            $updateResult = CCatalogProduct::Update($arFields['ID'], $arFieldsUpdate);
        }

        if ($productXML_ID) {
            $updateResult = CIBlockElement::SetPropertyValuesEx(intval($arFields['ID']), false, array('SEARCH_XML_ID' => $productXML_ID));
        }

        $arInfo = CCatalogSKU::GetInfoByProductIBlock(18);
        if (is_array($arInfo)) {
            $rsOffers = CIBlockElement::GetList(array(), array('IBLOCK_ID' => $arInfo['IBLOCK_ID'], 'PROPERTY_' . $arInfo['SKU_PROPERTY_ID'] => $arFields['ID']));
            while ($arOffer = $rsOffers->GetNext()) {
                $searchOffersCodesString .= $arOffer["XML_ID"] . ", ";
                // $updateResult = CIBlockElement::SetPropertyValuesEx(intval($arOffer["ID"]), false, array('SEARCH_XML_ID' => $arOffer["XML_ID"]));
            }
            $searchOffersCodesString = substr($searchOffersCodesString, 0, -2);
            $updateResult = CIBlockElement::SetPropertyValuesEx(intval($arFields['ID']), false, array('SEARCH_OFFERS_CODES' => $searchOffersCodesString));
            $searchOffersCodesString = false; // Не обязатлеьно так делать. но пускай будет.
        }
    }
}
function pre($val, $dev = false)
{
    if ($dev && !isset($_GET['dev'])) {
        return false;
    }

    echo '<pre style="background: #fff;">';
    print_r($val);
    echo '</pre>';
}

const SYNONYMS_IBLOCK_ID = 37;