<?
define("NO_KEEP_STATISTIC", true);
define('NOT_CHECK_PERMISSIONS',true);
include($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php"); 
use Bitrix\Main\Web\Cookie;
?>

<?if($USER->GetID()>0) {
    $rsUser = CUser::GetByID($USER->GetID());
    $arUser = $rsUser->Fetch();
    $userName = $arUser['NAME'];
    $userEmail = $arUser['EMAIL'];
}?>

<?
$productId = intval($_POST["PRODUCT_ID"]);
$rateId = intval($_POST["RATE_ID"]);
$REVIEW_IBLOCK_ID = 22;
$cookieName = 'RATE_REVIEW';
CModule::IncludeModule("iblock"); 

if($productId>0) {
    
    $name = htmlspecialcharsEx($_POST["NAME"]);
    $email = htmlspecialcharsEx($_POST["EMAIL"]);
    $star = intval($_POST["STAR"]);
    $message = htmlspecialcharsEx($_POST["MESSAGE"]);
    
    $arFields = array();
    $arFields['ACTIVE'] = "N";
    $arFields['NAME'] = $name;
    $arFields['IBLOCK_ID'] = $REVIEW_IBLOCK_ID;
    $arFields['DETAIL_TEXT'] = $message;
    $arFields['PROPERTY_VALUES']['EMAIL'] = $email;
    $arFields['PROPERTY_VALUES']['STAR']= $star;
    $arFields['PROPERTY_VALUES']['PRODUCT_ID']= $productId;
    
    $el = new CIBlockElement();
    if($el->Add($arFields)) {
        echo 1;
        $arEventFields = array();
        if($userName)
            $arEventFields['NAME'] = $userName;
        else
            $arEventFields['NAME'] = $name;
        
        if($userEmail)
            $arEventFields['EMAIL'] = $userEmail.', '.$email;
        else
            $arEventFields['EMAIL'] = $email;
        
        CEvent::Send("NEW_REVIEW", SITE_ID, $arEventFields);
    } else {
        echo $el->LAST_ERROR;
    }
} 


if($rateId>0) {
    $countRate = intval($_POST["COUNT_RATE"]);
    
    if($_COOKIE[$cookieName]) {
        $arReviewId = unserialize($_COOKIE[$cookieName]);
    } else {
        $arReviewId = array();
    }
    
    if(!in_array($rateId, $arReviewId)) {
        echo '1';
        $arReviewId[] = $rateId;
        $countRate++;
        CIBlockElement::SetPropertyValuesEx($rateId, $REVIEW_IBLOCK_ID, array('RATE' => $countRate));
        $timeCookieReview = time() + 60*60*24*60;
        setcookie($cookieName, serialize($arReviewId), $timeCookieReview , '/');
    } else {
        echo 'Уже голосовали';
    }
    
}
?>