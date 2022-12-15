<? include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

/* if (CModule::IncludeModule("iblock")) {
    $bs = new CIBlockSection;

    $arFields = array("UF_PROPSORT" => "a:3:{i:158;i:1;i:159;i:2;i:175;i:3;}");
    pre($arFields);
    $res = $bs->Update(4005, $arFields);

    $arFields = array("UF_HIDEPROP" => "a:3:{i:158;i:1;i:159;i:1;i:175;i:1;}");
    pre($arFields);
    $res = $bs->Update(4005, $arFields);
} */





/* AddMessage2Log("IBLOCK = {$arArgs['IBLOCK']['ID']}");
AddMessage2Log("ID = {$arArgs['ID']}");
AddMessage2Log("_POST \n" . print_r($_POST, 1)); */






/* if ($_POST['orPostSort'] && !empty($_POST['orPostSort'])) {
    if (is_array($_POST['orPostSort'])) {
        foreach ($_POST['orPostSort'] as $sKey => $sValue) {
            if (!empty($sValue)) {
                $sortComplite[$sKey] = $sValue;
            }
        }
    } else {
        //Если только 1 значение, то не массив
        $sortComplite = $_POST['orPostSort'];
    }
    $sortComplite = serialize($sortComplite);
    $arSection = \Bitrix\Iblock\Model\Section::compileEntityByIblock(IntVal($arArgs['IBLOCK']['ID']))::update(IntVal($arArgs['ID']), array("UF_PROPSORT" => 'a:3:{i:158;i:1;i:159;i:2;i:175;i:3;}'));
}

if ($_POST['orPostHide']) {
    if (is_array($_POST['orPostHide'])) {
        foreach ($_POST['orPostHide'] as $sKey => $sValue) {
            if (!empty($sValue)) {
                $hideComplite[$sKey] = $sValue;
            }
        }
    } else {
        //Если только 1 значение, то не массив
        $hideComplite = $_POST['orPostHide'];
    }
    $hideComplite = serialize($hideComplite);
    $arSection = \Bitrix\Iblock\Model\Section::compileEntityByIblock(IntVal($arArgs['IBLOCK']['ID']))::update(IntVal($arArgs['ID']), array("UF_HIDEPROP" => 'a:3:{i:158;i:1;i:159;i:1;i:175;i:1;}'));
} else {
    $arSection = \Bitrix\Iblock\Model\Section::compileEntityByIblock(IntVal($arArgs['IBLOCK']['ID']))::update(IntVal($arArgs['ID']), array("UF_HIDEPROP" => 'a:3:{i:158;i:1;i:159;i:1;i:175;i:1;}'));
} */
