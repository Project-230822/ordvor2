<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

/**
 * @global CMain $APPLICATION
 */
global $APPLICATION;

$strReturn = '';
$strMinimize = '';

$itemSize = count($arResult);
// $canMinimize = $itemSize > 3;
$itemLast = end($arResult);
if ($itemLast['LINK'] <> '' && $itemLast['LINK'] != $APPLICATION->GetCurPage(false))
{
	$itemPrevIndex = ($itemSize - 1 > 0) ? $itemSize - 1 : 0;
}
else
{
	$itemPrevIndex = ($itemSize - 2 > 0) ? $itemSize - 2 : 0;
}

// $strReturn .= '<nav aria-label="breadcrumb"><ol class="breadcrumb mb-0'.($canMinimize ? ' can-minimize' : '').'" itemscope itemtype="http://schema.org/BreadcrumbList">';
$strReturn .= '<nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 mb-md-2" itemscope itemtype="http://schema.org/BreadcrumbList">';
/*
if ($canMinimize)
{

	$strMinimize .= '<div class="dropdown d-inline-block">';

		$strMinimize .= '<a href="#" class="dropdown-toggle" id="breadcrumbDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="viewport">';
			$strMinimize .= '<svg class="icon-svg "><use xlink:href="#svg-chevron-down"></use></svg>';
		$strMinimize .= '</a>';

		$strMinimize .= '<div class="dropdown-menu" aria-labelledby="breadcrumbDropdownButton">';
		for ($index = 1; $index < $itemSize - 1; $index++)
		{
			$title = htmlspecialcharsex($arResult[$index]['TITLE']);
			$strMinimize .= '<a class="dropdown-item" href="'.$arResult[$index]['LINK'].'">'.$title.'</a>';
		}
		$strMinimize .= '</div>';

	$strMinimize .= '</div>';
}
*/

for ($index = 0; $index < $itemSize; $index++)
{
	$title = htmlspecialcharsex($arResult[$index]['TITLE']);
/*
	if (($index == $itemSize - 1) && $canMinimize)
	{
		$strReturn .= '<li  class="breadcrumb-item breadcrumb-item-dropdown my-1">';
			$strReturn .= $strMinimize;
		$strReturn .= '</li>';
	}
*/
	if ($arResult[$index]['LINK'] <> '' && $arResult[$index]['LINK'] != $APPLICATION->GetCurPage(false))
	{
		$strReturn .= '<li class="breadcrumb-item my-1'.($index == $itemPrevIndex ? ' breadcrumb-item--prev' : ' d-none d-md-inline').'" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">'.
				'<a itemprop="item" href="'.$arResult[$index]['LINK'].'" title="'.$title.'">'.
					'<span itemprop="name">'.$title.'</span>'.
					'<meta itemprop="position" content="'.($index + 1).'">'.
				'</a>'.
			'</li>';
	}
	else
	{
		$strReturn .= '<li class="breadcrumb-item my-1'.($index == $itemPrevIndex ? ' breadcrumb-item--prev' : ' d-none d-md-inline').'">'.
				'<span>'.$title.'</span>'.
			'</li>';
	}
}

$strReturn .= '</ol></nav>';

return $strReturn;
