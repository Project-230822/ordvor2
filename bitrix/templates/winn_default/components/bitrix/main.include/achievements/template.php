<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) {
	die();
}

$this->setFrameMode(true);

$arAchivements = CUtil::JsObjectToPhp($arParams['~COMPANY_ACHIVEMENTS']);

$templateId = 'achievements-'.$this->randString();
$obName = 'ob'.preg_replace("/[^a-zA-Z0-9_]/", "x", $templateId);
?>
<div class="row text-center mt-6 mb-4 b-about-achievement js-about-company" id="<?=$templateId?>">
	<?php if (count($arAchivements) > 0): ?>
		<?php foreach ($arAchivements as $arAchivement): ?>
			<div class="col-xs-12 col-sm-6 col-lg-3 mb-5">
				<div class="b-about-achievements">
					<div class="b-about-achievements__number js-about-company__number" data-number="<?=$arAchivement[0]?>">0</div>
					<div class="b-about-achievements__line"></div>
					<div class="b-about-achievements__desc"><?=$arAchivement[1]?></div>
				</div>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>
<?php
$jsParams = array(
	'ID' => $templateId,
);
?>
<script>
	var <?=$obName?> = new JCAchievments(<?=CUtil::PhpToJSObject($jsParams, false, true)?>);
</script>
<?php
