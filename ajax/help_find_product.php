<?php
define("NO_KEEP_STATISTIC", true);
define('NOT_CHECK_PERMISSIONS',true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");

$request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();

if ($request->isAjaxRequest())
{
    $arPost = $request->getPostList();
    $arProps = array();
    foreach($arPost as $key => $value)
    {
        $arProps[$key] = trim(strip_tags($value));
    }
    
    $secret = "6Le9YA0bAAAAANEr9k0WRxfBbkr0UpeR8pt-p33B";    
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret ."&response=".$arProps["g-recaptcha-response"]."&remoteip=".$_SERVER['REMOTE_ADDR'];
    if(!empty($arProps["g-recaptcha-response"])) {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        curl_setopt($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.16) Gecko/20110319 Firefox/3.6.16");
        $curlData = curl_exec($curl);
        curl_close($curl);
        $curlData = json_decode($curlData, true);
        if($curlData['success']) {
            $arProps['STATUS'] = 3185; //Статус заявки "Не обработан"
            
            $arFields = array(
                "IBLOCK_ID" => 36,
                "NAME" => "Заявка от ".date("d.m.Y H:i:s"),
                "DETAIL_TEXT" => $arProps["FIND"],
                "PROPERTY_VALUES" => $arProps
            );
            $oElement = new CIBlockElement();
            $idElement = $oElement->Add($arFields);
        } else {
            echo "Подтвердите, что вы не робот.";
        }
    } else {
        echo "Подтвердите, что вы не робот.";
    }
}
?>