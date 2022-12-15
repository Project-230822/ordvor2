<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

use \Bitrix\Main\Localization\Loc;

?>

<div class="vcard">
    <table style="border-collapse: separate; width: 73%; border-spacing: 0px 30px;" class="vcard__table">
        <tbody>
            
            <h2 class="pt-3"><?=Loc::getMessage('RS_HCARD_ADDRESS');?></h2>
            

            <?php
            if (!empty($arParams['ORGANIZATION']))
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_INN_ORG'); ?></b></td>
                    <td style="padding-right: 10px;"><span class="vcard__org"><?=$arParams['ORGANIZATION']?></span></td>
                </tr>
                <?php
            }

            if (!empty($arParams['INN_KPP']))
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_INN_KPP'); ?></b></td>
                    <td style="padding-right: 10px;"><span class="vcard__inn-kpp"><?=$arParams['INN_KPP']?></span></td>
                </tr>
                <?php
            }

            if (!empty($arParams['OGRN']))
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_OGRN')?></b></td>
                    <td style="padding-right: 10px;"><span class="vcard__ogrn"><?=$arParams['OGRN']?></span></td>
                </tr>
                <?php
            }

            if (is_array($arResult['ADR_LEGAL']) && count($arResult['ADR_LEGAL']) > 0)
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_LEGAL_ADRESS')?></b></td>
                    <td style="padding-right: 10px;" class="adr">
                        <span class="vcard__legal-adress">
                            <?php
                            foreach ($arResult['ADR_LEGAL'] as $adr)
                            {
                                ?><span class="<?=$adr['CLASS']?>"><?=$adr['VALUE']?></span><?
                                if ($adr != end($arResult['ADR_LEGAL']))
                                    echo ', ';
                            }
                            ?>
                        </span>
                    </td>
                </tr>
                <?php
            }

            if (is_array($arResult['ADR']) && count($arResult['ADR']) > 0)
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_FACT_ADRESS')?></b></td>
                    <td style="padding-right: 10px;" class="adr">
                        <span class="vcard__legal-adress">
                            <?php
                            foreach ($arResult['ADR'] as $adr)
                            {
                                ?><span class="<?=$adr['CLASS']?>"><?=$adr['VALUE']?></span><?
                                if ($adr != end($arResult['ADR']))
                                    echo ', ';
                            }
                            ?>
                        </span>
                    </td>
                </tr>
                <?php
            }
            
            
            if (!empty($arParams['WORKHOURS']))
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_WORKHOURS')?></b></td>
                    <td style="padding-right: 10px;"><span class="workhours"><?=$arParams['WORKHOURS']?></span></td>
                </tr>
                <?php
            }

            if (!empty($arParams['PHONE']))
            {
                $sPhoneUrl = preg_replace('/[^0-9\+]/', '', $arParams['PHONE']);
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_PHONE')?></b></td>
                    <td style="padding-right: 10px;">
                        <a class="vcard__phone" href="tel: <?=$sPhoneUrl?>"><?=$arParams['PHONE']?></a>
                    </td>
                </tr>
                <?php
            }

            if (!empty($arParams['EMAIL']))
            {
                ?>
                <tr>
                    <td style="padding-right: 10px;" valign="top"><b><?=Loc::getMessage('RS_HCARD_EMAIL')?></b></td>
                    <td style="padding-right: 10px;">
                        <a class="vcard__email" href="mailto: <?=$arParams['EMAIL']?>"><?=$arParams['EMAIL']?></a>
                    </td>
                </tr>
                <?php
            }
            ?>
        </tbody>
    </table>    
</div>
