<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/**
 * @global CMain $APPLICATION
 */

global $APPLICATION;

//delayed function must return a string
if(empty($arResult))
	return "";

$strReturn = '';



$page = $_SERVER["REQUEST_URI"];



$strReturn .= '<ol class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList">';

$itemSize = count($arResult);

$position = 0;

for($index = 0; $index < $itemSize; $index++)
{
	$position++;
	$title = htmlspecialcharsex($arResult[$index]["TITLE"]);
	$match = ($page == $arResult[$index]["LINK"]);

	if($arResult[$index]["LINK"] <> "" && (($index != $itemSize-1) ||  !$match ))
	{
		$strReturn .= '
			<li itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
				'.$arrow.'
				<a href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="item">
					'.$title.'
					<meta itemprop="position" content="'.$position.'">
				</a>
			</li>';
	}
	elseif($arResult[$index]["LINK"] <> "")
	{
		$strReturn .= '
			<li itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
				'.$arrow.'
				<noindex><a href="'.$arResult[$index]["LINK"].'" title="'.$title.'" itemprop="item" rel="nofollow">
					'.$title.'
					<meta itemprop="position" content="'.$position.'">
				</a></noindex>
			</li>';
	}
	else
	{
		$strReturn .= '
			<li class="active" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">'.$title.'
				<meta itemprop="position" content="'.$position.'">
			</li>';
	}
}

$strReturn .= '</ol>';

return $strReturn;
