<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

use \Bitrix\Main\Localization\Loc;


if(!empty($arResult["CATEGORIES"])): ?>
<div class="w-100">
    <div class="title-search-overflow">
    <?php
    $showCatagoryAll = false;
    foreach($arResult["CATEGORIES"] as $nCategoryId => $arCategory)
    {
        if ($nCategoryId !== 'all')
        {
            ?>
            <div class="title-search-cat">

                <?php
                if (strlen($arCategory['TITLE']) > 0)
                {
                    ?>
                    <div class="title-search-item h5 m-4 pl-0">
                        <b><?=$arCategory['TITLE']?></b>
                    </div>
                    <?php
                }

                foreach ($arCategory['ITEMS'] as $arItem)
                {
                    if ($arItem['TYPE'] == 'all') continue;

                    if (isset($arResult["ELEMENTS"][$arItem["ITEM_ID"]]))
                    {
                        $arIblockItem = $arResult["ELEMENTS"][$arItem["ITEM_ID"]];
                        ?>
                        <div class="title-search-item mx-4 py-1<?php if (is_array($arIblockItem['PICTURE'])): ?> pl-0<?php endif; ?>">    
                            <?php
                            if (is_array($arIblockItem['PICTURE']))
                            {
                                ?>
                                <a class="title-search-item__picture mr-5" href="<?=$arItem['URL']?>">
                                    <img src="<?=$arIblockItem["PICTURE"]["src"]?>">
                                </a>
                                <?php
                            }
                            ?>

                            <div class="title-search-item__data py-3">
                                <a href="<?=$arItem['URL']?>" class="title-search-item__name font-size-lg text-body"><?=$arItem["NAME"]?></a>
                                                <?php
                                
                                if (!empty($arIblockItem['MIN_PRICE']))
                                {
                                    ?>
                                    <div class="title-search-item__price">
                                        <?=Loc::getMessage('RS_ST_PRICE_FROM');?>
                                        <span class="title-search-item__price-current"><?=$arIblockItem["MIN_PRICE"]["PRINT_DISCOUNT_VALUE"]?></span>
                                        <?php if (isset($arIblockItem["MIN_PRICE"]['DISCOUNT_VALUE']) && $arIblockItem["MIN_PRICE"]["DISCOUNT_VALUE"] < $arIblockItem["MIN_PRICE"]["VALUE"]): ?>
                                            <span class="title-search-item__price-discount"><?=$arIblockItem["MIN_PRICE"]["PRINT_VALUE"]?></span>
                                        <?php endif; ?>
                                    </div>
                                    <?php
                                }
                                ?>
                            </div>
                        </div>
                        <?php
                    }
                    else
                    {
                        ?>
                        <div class="title-search-item mx-4 py-1">
                            <div class="title-search-item__data py-3">
                                <a class="title-search-item__name font-size-lg text-body" href="<?=$arItem["URL"]?>"><?=$arItem["NAME"]?></a>
                            </div>
                        </div>
                        <?php
                    }
                }
                ?>
            </div>
            <?php
        }
        else
        {
            $showCatagoryAll = true;
            ?>
            </div> <?php // .title-search-overflow ?>
            <div class="title-search-cat mt-5">
                <?php
                foreach ($arCategory['ITEMS'] as $arItem)
                {
                    ?>
                    <div class="title-search-item mx-4 py-1 pl-0">
                        <div class="title-search-item__data py-3"><a href="<?=$arItem["URL"]?>"><?=$arItem["NAME"]?></a></div>
                    </div>
                    <?php
                }
                ?>
            </div>
            <?php
        }
    }
    if (!$showCatagoryAll)
    {
        ?>
        </div> <?php // .title-search-overflow ?>
        <?php
    }
    ?>
</div>
<?php
endif;