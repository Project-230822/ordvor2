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
?>

<p>На этой странице мы даем ответы на часто задаваемые вопросы. Ваши вопросы вы можете отсылать на e-mail: <a href="mailto:sales@ordvor.ru">sales@ordvor.ru</a>.</p>

<?php 
$i = 0;
foreach($arResult["ITEMS"] as $arItem)
{
	$i++;
	echo "<p>" . $i . ". " . "<a href='#" . $i . "'>" . $arItem['NAME'] . "</a></p>";
}
?>

<?php 
$i = 0;
foreach($arResult["ITEMS"] as $arItem)
{
	
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>  
	
	<div id="<?=$this->GetEditAreaId($arItem['ID']);?>">
	
		<?php 
		
		$i++;
		echo "<hr>";
		echo "<a id='" . $i . "' name='" . $i . "'></a>";
		echo "<p><strong>" . $arItem['NAME'] . "</strong></p>";
		echo "<p>" . $arItem["DETAIL_TEXT"] . "</p>";
		
	echo "</div>";
}
?>
