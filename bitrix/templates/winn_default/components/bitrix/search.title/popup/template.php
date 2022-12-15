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

use \Bitrix\Main\Localization\Loc;

$this->setFrameMode(true);

$INPUT_ID = trim($arParams["~INPUT_ID"]);
if(strlen($INPUT_ID) <= 0)
	$INPUT_ID = "title-search-input";
$INPUT_ID = CUtil::JSEscape($INPUT_ID);

$CONTAINER_ID = trim($arParams["~CONTAINER_ID"]);
if(strlen($CONTAINER_ID) <= 0)
	$CONTAINER_ID = "title-search";
$CONTAINER_ID = CUtil::JSEscape($CONTAINER_ID);

$arParams['INPUT_LABEL_TEXT'] = $arParams['INPUT_LABEL_TEXT'] ?: Loc::getMessage('CT_BST_SEARCH_BUTTON');
?>

<div class="d-flex align-items-start h-100">
	<form action="<?echo $arResult["FORM_ACTION"]?>" class="search-form w-100 mx-auto" style="max-width:60rem" id="<?echo $CONTAINER_ID?>">
		<div class="form-group bmd-form-group">
			<?php if ($arParams['SHOW_INPUT_LABEL'] == 'Y'): ?>
				<label for="<?echo $INPUT_ID?>" class="bmd-label-floating"><?=$arParams['INPUT_LABEL_TEXT']?></label>
			<?php endif; ?>
			<input id="<?echo $INPUT_ID?>" class="form-control" type="text" name="q" value="" maxlength="50" autocomplete="off" />
		</div>
		<button name="s" type="submit" class="search-form__button p-0">
			<svg class="icon-svg d-block"><use xlink:href="#svg-search"></use></svg>
		</button>
	</form>
</div>

<script>
	BX.ready(function(){
		var searchTitle = new JCTitleSearch({
			'AJAX_PAGE' : '<?echo CUtil::JSEscape(POST_FORM_ACTION_URI)?>',
			'CONTAINER_ID': '<?echo $CONTAINER_ID?>',
			'INPUT_ID': '<?echo $INPUT_ID?>',
			'MIN_QUERY_LEN': 2
		});
	});
</script>
