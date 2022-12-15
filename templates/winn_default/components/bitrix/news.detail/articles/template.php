<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

$this->setFrameMode(true);

use \Bitrix\Main\Localization\Loc;


?>

<div class="pb-5 b-news-detail">
	<div class="row">
		<div class="pb-4">
			<div class="d-block d-sm-flex col-12">
			<?if($arParams["DISPLAY_DATE"]!="N" && $arResult["DISPLAY_ACTIVE_FROM"]):?>
				<div class="pt-1 pb-1 b-news-detail__topline b-news-detail__topline-block-date js-animated js-lock-animated beforeAnimation duration-450ms" data-animatecss="fadeInUp">
					<time class="text-secondary text-lowercase pl-0 pr-3 b-news-detail__date"><?=$arResult["DISPLAY_ACTIVE_FROM"]?></time>
				</div>
			<?endif;?>
			<?if(isset($arResult['READING_TIME'])):?>
				<div class="text-secondary mt-1 pl-0 pl-sm-3 b-news-detail__reading-time"><?=Loc::getMessage('RS_ND_ARTICLE_READING_TIME')?><span itemprop="timeRequired"><?=$arResult['READING_TIME']?></span></div>
			<?endif;?>
			</div>
		</div>
	</div>
	<div class="js-animated js-lock-animated beforeAnimation duration-450ms" data-animatecss="fadeInUp">
		<?if($arParams["DISPLAY_PICTURE"]!="N" && is_array($arResult["DETAIL_PICTURE"])):?>
			<div class="row">
				<div class="col-12">
					<div class="b-news-detail__img">
						<img class="d-inline-block w-100 mw-100 h-auto b-news-detail__img-photo"    
							src="<?=$arResult["DETAIL_PICTURE"]["SRC"]?>"
							alt="<?=$arResult["DETAIL_PICTURE"]["ALT"]?>"
							title="<?=$arResult["DETAIL_PICTURE"]["TITLE"]?>"
							/>
					</div>
				</div>
			</div>
		<?elseif($arParams["DISPLAY_PICTURE"]!="N" && is_array($arResult["PREVIEW_PICTURE"])):?>
			<div class="row">
				<div class="col-12">
					<div class="b-news-detail__img">
						<img class="d-inline-block w-100 mw-100 h-auto b-news-detail__img-photo"    
							src="<?=$arResult["PREVIEW_PICTURE"]["SRC"]?>"
							alt="<?=$arResult["PREVIEW_PICTURE"]["ALT"]?>"
							title="<?=$arResult["PREVIEW_PICTURE"]["TITLE"]?>"
							/>
					</div>
				</div>
			</div>
		<?endif;?>
		<?if(!empty($arResult["DISPLAY_PROPERTIES"]["NEWS_BACKGROUND_PHOTO"]["FILE_VALUE"])):?>
			<div class="row">
				<div class="col-12">
					<div class="b-news-detail__img">
						<img class="d-inline-block w-100 mw-100 h-auto b-news-detail__img-photo"    
							src="<?=$arResult["DISPLAY_PROPERTIES"]["NEWS_BACKGROUND_PHOTO"]["FILE_VALUE"]["SRC"]?>"
							alt=""
							title=""
							/>
					</div>
				</div>
			</div>
		<?endif;?>
		<?if(!empty($arResult["DISPLAY_PROPERTIES"]["NEWS_PHOTO_DESCRIPTION"])):?>
			<div class="row">
				<div class="col-10">
					<div class="pt-2 pb-4 b-news-detail__photo-description">
						<span class="text-secondary" itemprop="description"><?=$arResult["DISPLAY_PROPERTIES"]["NEWS_PHOTO_DESCRIPTION"]["DISPLAY_VALUE"]?></span>
						<div class="mt-5 b-news-detail__photo-description-line"></div>
					</div>
				</div>
			</div>
		<?endif;?>
		<div class="b-news-detail__content">
			<div class="row">
				<div class="lead col-12 col-lg-10">
				<?if(!empty($arResult['DETAIL_TEXT'])):?>
					<?echo $arResult["DETAIL_TEXT"];?>
				<?else:?>
					<?echo $arResult["PREVIEW_TEXT"];?>
				<?endif;?>
				</div>
			</div>
		</div>
		<hr class="mt-6 title-delimiter">
	</div>
</div>
