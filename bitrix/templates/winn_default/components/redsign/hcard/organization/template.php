<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true)
{
	die();
}

use \Bitrix\Main\Localization\Loc;

?>
<div class="vcard mb-5">
    <?php if (!empty($arParams['ORGANIZATION'])): ?>
        <h2><?=$arParams['ORGANIZATION']?></h2>
    <?php endif; ?>
    <div class="row mb-6 pb-6 flex-row align-items-stretch justify-content-center">
        <div class="justify-content-center align-items-stretch position-relative overflow-hidden d-flex col-12 col-sm-4">
            <?php if (!empty($arParams['PHOTO'])):?>
                <div class="position-relative w-100">
                    <img class="vcard__photo" src="<?=$arParams['PHOTO']?>" alt="<?=Loc::getMessage('RS_HCARD_ALT_DIRECTOR_PHOTO')?>">
                </div>
            <?php endif; ?>   
        </div>
        <div class="col-12 col-sm-8">
            <div class="vcard__descr">
                <div class="vcard__inner d-flex flex-column">
                    <?php
                    if (!empty($arParams['DIRECTOR_LAST_NAME']) && !empty($arParams['DIRECTOR_FIRST_NAME']))
                    {
                        ?>   
                        <h4 class="mt-1 vcard__director"><?=$arParams['DIRECTOR_LAST_NAME']?><br><?=$arParams['DIRECTOR_FIRST_NAME']?></h4>
                        <?php
                    }

                    if (!empty($arParams['POSITION']))
                    {
                        ?>
                        <p class="mt-2 pb-5 vcard__position"><?=$arParams['POSITION']?></p>
                        <?php
                    }

                    if (!empty($arParams['WORKHOURS']))
                    {
                        ?>
                        <p class="mt-2 pb-5 vcard__org"><?=$arParams['WORKHOURS']?></p>
                        <?php
                    }
                    
                    if (!empty($arParams['PHONE']))
                    {
                        $sPhoneUrl = preg_replace('/[^0-9\+]/', '', $arParams['PHONE']);
                        ?>
                        <a class="ml-6 pb-5 position-relative vcard__phone" href="tel: <?=$sPhoneUrl?>">
                            <svg class="icon-svg d-block text-primary"><use xlink:href="#svg-phone-call"></use></svg><?=$arParams['PHONE']?>
                        </a>
                        <?php
                    }

                    if (!empty($arParams['EMAIL']))
                    {
                        ?>
                        <a class="ml-6 position-relative vcard__email" href="mailto:<?=$arParams['EMAIL']?>">
                            <svg class="icon-svg d-block text-primary"><use xlink:href="#svg-email"></use></svg><?=$arParams['EMAIL']?>
                        </a>
                        <?php
                    }

                    if (!empty($arParams['WORKHOURS']))
                    {
                        ?>
                        <p class="mt-2 pb-5 workhours"><?=$arParams['WORKHOURS']?></p>
                        <?php
                    }

                    if (!empty($arResult['ADR']))
                    {
                        ?>
                        <p class="mt-2 pb-5 adr">
                            <?php
                            foreach ($arResult['ADR'] as $adr)
                            {
                                ?><span class="<?=$adr['CLASS']?>"><?=$adr['VALUE']?></span><?
                                if ($adr != end($arResult['ADR']))
                                    echo ', ';
                            }
                            ?>
                        </p>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
