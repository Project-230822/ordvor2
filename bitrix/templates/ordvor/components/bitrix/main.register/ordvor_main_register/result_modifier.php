<?php if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<?php 

foreach ($arResult["SHOW_FIELDS"] as $field)
{
	if ($field == "LOGIN")
	{
		$newSortShowFields[0] = $field;
	}
	elseif ($field == "PASSWORD")
	{
		$newSortShowFields[2] = $field;
	}
	elseif ($field == "CONFIRM_PASSWORD")
	{
		$newSortShowFields[3] = $field;
	}
	elseif ($field == "PERSONAL_PHONE")
	{
		$newSortShowFields[1] = $field;
	}
}

ksort($newSortShowFields);

$arResult["SHOW_FIELDS"] = $newSortShowFields;

?>