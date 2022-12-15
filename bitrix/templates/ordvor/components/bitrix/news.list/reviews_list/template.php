<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);

//$this->addExternalCss($this->GetFolder()."/style.css");
?>
<?if(count($arResult["ITEMS"])>0):?>
<?$midRate = round($arResult['COUNT_STAR']/$arResult['ALL_COUNT'],1); //Средний рейтинг?>

<div class="row d-flex">
	
	<div class="col-lg-8 col-md-7">
        <div class="reviews-wrap">

        	<?foreach($arResult["ITEMS"] as $key=>$arItem):?>
            	<div class="review">
            	
        			<div class="review-name"><?=$arItem["NAME"];?></div>
        			
        			<div class="review-star">
            			<?$countStar = intval($arItem["PROPERTIES"]["STAR"]["VALUE"]);
            			for($i=1;$i<6;$i++) {
            			    ?><i class="fa fa-star<?if($i<=$countStar) echo " active";?>" aria-hidden="true"></i><?
            			}
            			?>
            			<span><?=$countStar?></span>
        			</div>
        			
        			<div class="review-text"><?=$arItem["DETAIL_TEXT"];?></div>
        			
        			<div class="review-footer">
        				<div class="review-date"><?=date("d.m.Y",strtotime($arItem["DATE_CREATE"]));?></div>
        				
        				<div class="review-rate">
        					<span>Отзыв полезен?</span>
        					<span data-id="<?=$arItem['ID']?>" class="bttn-rate<?if(intval($arItem["PROPERTIES"]["RATE"]["VALUE"])>99999) echo " max";?>"><i class="fa fa-thumbs-up" aria-hidden="true"></i> <span id="count-rate-<?=$arItem['ID']?>"><?=intval($arItem["PROPERTIES"]["RATE"]["VALUE"]);?></span></span>
        				</div>
        			</div>
        		</div>
            <?endforeach;?>

        </div>
        <?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
        	<?=$arResult["NAV_STRING"]?>
        <?endif;?>
    </div>
    
    <div class="col-lg-4 col-md-5">
        <div class="rating-board-wrap">
            <div class="rating-board-title">Средний рейтинг</div>
            <div class="rating-board-value"><?=$midRate;?></div>
            <?for($i=1;$i<6;$i++) {
                ?><i class="fa fa-star<?if($i<=$midRate) echo " active";?>" aria-hidden="true"></i><?
			}
			?>
            <p class="rating-board_description">
                На основе <?=$arResult['ALL_COUNT'];?> 
            </p>
            <ul class="rating-board-diagram">
            	<?for($i=5;$i>0;$i--) {?>
            		<?$width = $arResult['COUNT_REVIEW'][$i] / $arResult['ALL_COUNT'] * 100;?>
                    <li class="rating-diagram-item">
                        <div class="rating-diagram-label"><?=$i;?></div>
                        <div class="rating-diagram-value">
                            <div class="rating-diagram-range" style="width: <?=$width;?>%;"></div>
                        </div>
                        <div class="rating-diagram-count">
                            (<?=intval($arResult['COUNT_REVIEW'][$i]);?>)
                        </div>
                    </li>
                <?}?>
        	</ul>
        </div>
        
        <div class="add-review" onclick="$(this).hide();$('form.add-review-form').show();">
			<span>Написать отзыв</span>
		</div>
		
		<div class="success-message-error">
			<i class="fa fa-exclamation-circle" aria-hidden="true"></i><br>
			<span>Произошла ошибка. Попробуйте обновить страницу</span>
		</div>
		
		<form class="add-review-form" id="add-review-form">
			<input type="hidden" name="PRODUCT_ID" value="<?=$arParams['PRODUCT_ID'];?>" />
			<div class="mf-name">
    			<div class="mf-text">
    				Имя
    			</div>
    			<input type="text" name="NAME" class="need" value="<?=$arParams['USER_NAME'];?>" />
    		</div>
    		<div class="mf-name email">
    			<div class="mf-text">
    				E-mail
    			</div>
    			<input type="email" name="EMAIL" class="need" id="review-email" value="<?=$arParams['USER_EMAIL'];?>" />
    		</div>
			<div class="mf-name">
    			<div class="mf-text text-center">
    				Ваша оценка
    			</div>
				<input type="hidden" name="STAR" class="need" id="star-value" value="" />
    		</div>
			<div class="star-wrap">
    			<?for($i=1;$i<6;$i++) {
                    ?><i class="fa fa-star" id="star-<?=$i;?>" count="<?=$i;?>" aria-hidden="true"></i><?
    			}
    			?>
			</div>
			
			<div class="mf-name">
    			<div class="mf-text">
    				Отзыв
    			</div>
    			<textarea name="MESSAGE" rows="5" class="need" cols="40"></textarea>
    		</div>
    		
    		<div class="text-center">
				<a href="javascript:void(0);" class="privacy" style="text-decoration: underline;">Отправляя отзыв, вы даёте согласие<br>на обработку персональных данных</a><br><br>
			</div>
			
			<div class="add-review">
    			<span>Отправить</span>
    		</div>
		</form>
		
		<div class="success-message-ok">
			<i class="fa fa-check" aria-hidden="true"></i><br>
			<span>Отзыв отправлен на модерацию и скоро появится!</span>
		</div>
		
    </div>
</div>
<?else:?>

	<div class="first-review">
		<br>
        <h3 class="text-center">Никто еще не оставил отзыва о товаре,<br>вы будете первым!</h3>
        <br>
        <div class="add-review" onclick="$(this).hide();$('form.add-review-form').show();">
    		<span>Написать отзыв</span>
    	</div>
	</div>
	
	<div class="success-message-error">
		<i class="fa fa-exclamation-circle" aria-hidden="true"></i><br>
		<span>Произошла ошибка. Попробуйте обновить страницу</span>
	</div>
	
	<form class="add-review-form" id="add-review-form" style="max-width: 480px;margin: 10px auto 0;">
		<input type="hidden" name="PRODUCT_ID" value="<?=$arParams['PRODUCT_ID'];?>" />
		<div class="mf-name">
			<div class="mf-text">
				Имя
			</div>
			<input type="text" name="NAME" class="need" value="<?=$arParams['USER_NAME'];?>" />
		</div>
		<div class="mf-name email">
			<div class="mf-text">
				E-mail
			</div>
			<input type="email" name="EMAIL" class="need" id="review-email" value="<?=$arParams['USER_EMAIL'];?>" />
		</div>
		<div class="mf-name">
			<div class="mf-text text-center">
				Ваша оценка
			</div>
			<input type="hidden" name="STAR" class="need" id="star-value" value="" />
		</div>
		<div class="star-wrap">
			<?for($i=1;$i<6;$i++) {
                ?><i class="fa fa-star" id="star-<?=$i;?>" count="<?=$i;?>" aria-hidden="true"></i><?
			}
			?>
		</div>
		
		<div class="mf-name">
			<div class="mf-text">
				Отзыв
			</div>
			<textarea name="MESSAGE" rows="5" class="need" cols="40"></textarea>
		</div>
		
		<div class="text-center">
			<a href="javascript:void(0);" class="privacy" style="text-decoration: underline;">Отправляя отзыв, вы даёте согласие<br>на обработку персональных данных</a><br><br>
		</div>
		
		<div class="add-review">
			<span>Отправить</span>
		</div>
	</form>
	
	<div class="success-message-ok">
		<i class="fa fa-check" aria-hidden="true"></i><br>
		<span>Отзыв отправлен на модерацию и скоро появится!</span>
		<br>
	</div>
		
    
<?endif;?>