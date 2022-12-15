<?php
if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true)
    die();

$this->setFrameMode(true);
?>
<div class="d-xl-flex">
    <div class="d-xl-none select-insert-city align-items-center justify-content-between">
        Выбор города
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.586L16.95 5.636L18.364 7.05L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.05L7.04999 5.636L12 10.586Z"
                  fill="black"/>
        </svg>
    </div>
    <?php if (is_array($arResult['SECTIONS']) && count($arResult['SECTIONS']) > 0): ?>
        <div class="cities w-100 flex-column flex-wrap justify-content-start">
            <?php foreach ($arResult['SECTIONS'] as $codeCity => $arCity):
                $isOzon = $codeCity == 'nash-magazin-na-ozon-ru'; ?>

                <nobr>
                    <a
                      class="city-item<?= $arCity == $arResult['ACTIVE_CITY'] ? " active" : ""; ?> <?= $isOzon ? ' city-item--market' : '' ?>"
                      href="<?= $isOzon ? 'https://www.ozon.ru/seller/ice-cube-271023/products/?miniapp=seller_271023' : '/where-buy/?city=' . $codeCity; ?>"
                      <?= $isOzon ? 'target="_blank"' : '' ?>
                    >
                        <?= $arCity ?>
                    </a>
                </nobr>

            <?php endforeach; ?>
        </div>
    <?php endif; ?>
    <span class="d-xl-none">Город</span>
    <div class="d-xl-none d-flex align-items-center justify-content-between select-city">
        <?= $arResult['ACTIVE_CITY']; ?>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.172 12L8.22205 7.05L9.63605 5.636L16 12L9.63605 18.364L8.22205 16.95L13.172 12Z" fill="black"/>
        </svg>
    </div>
    <div id="map"></div>
</div>
<?php if (is_array($arResult['ITEMS']) && count($arResult['ITEMS']) > 0): ?>
    <div class="shops">
        <h2><?= "г." . $arResult['ACTIVE_CITY']; ?></h2>
        <?php foreach ($arResult['ITEMS'] as $key => $arItem):
            $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_EDIT'));
            $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem['IBLOCK_ID'], 'ELEMENT_DELETE'), array('CONFIRM' => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
            ?>
            <? $Yandex = explode(",", $arItem['PROPERTIES']['MAP']['VALUE']);
            $Yandex_X = $Yandex[0];
            $Yandex_Y = $Yandex[1]; ?>
            <div class="map-data d-none<? echo $key === 0 ? " active" : ""; ?>"
                 data-index="<?= $arItem['ID'] ?>"
                 data-yandex-x="<?= $Yandex_X; ?>"
                 data-yandex-y="<?= $Yandex_Y; ?>"
            ></div>

            <div class="shop_item d-xl-flex" id="<?= $this->GetEditAreaId($arItem['ID']) ?>">
                <div class="info-wrap">
                    <span><?= $arItem['NAME']; ?></span>
                    <?= $arItem['PROPERTIES']['ADDRESS']['VALUE']; ?>
                </div>
                <? if (is_array($arItem['PROPERTIES']['PHONE']['VALUE']) && count($arItem['PROPERTIES']['PHONE']['VALUE'])) { ?>
                    <div class="info-wrap">
                        <? foreach ($arItem['PROPERTIES']['PHONE']['VALUE'] as $phone) { ?>
                            <nobr><a href="tel:<?= $phone; ?>"><?= $phone; ?></a></nobr>
                        <? } ?>
                    </div>
                <? } ?>
                <div class="info-wrap align-self-center">
                    <? foreach ($arItem['PROPERTIES']['EMAIL']['VALUE'] as $email) { ?>
                        <nobr><a href="mailto:<?= $email; ?>"><?= $email; ?></a></nobr>
                    <? } ?>
                    <? foreach ($arItem['PROPERTIES']['SITE']['VALUE'] as $site) { ?>
                        <nobr><a href="http://<?= $site; ?>" target="_blank"><?= $site; ?></a></nobr>
                    <? } ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
