<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

// Колиечство элементов в оригинальном массиве минус 1. Для сравнения с ключем, который начинается с нуля
$allElementsCount = ($arResult["SECTIONS_COUNT"] - 1);

// Разбираем все разделы
foreach ($arResult["SECTIONS"] as $key => $section)
{
	// Если раздел первого уровня
	if ($section["RELATIVE_DEPTH_LEVEL"] == 1)
	{
		// Строим массив
		$arSections[$section["ID"]] = array(
				"NAME" => $section["NAME"],
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
				"COUNT" => '',
		);
		
		// Если не первая итерация добавляем количество вложенных разделов в прошлую итерацию
		if ($key > 0)
		{
			$arSections[$topSectionID]["COUNT"] = $i;
		}
		
		// Записываем ID раздела 1 уровня в переменную, будем использовать несколько раз
		$topSectionID = $section["ID"];
		
		// Будем считать количество разделов 2 и 3 уровня, записывать к данным о 1 уровне
		$i = 0;
		
	}
	
	// Если второу уровень — дополняем массив
	if ($section["RELATIVE_DEPTH_LEVEL"] == 2)
	{
		$arSections[$section["IBLOCK_SECTION_ID"]]["CHILDREN"][$section["ID"]] = array(
				"NAME" => $section["NAME"],
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
		);
		$i++;
	}
	
	// Если третий уровень — дополняем массив
	if ($section["RELATIVE_DEPTH_LEVEL"] == 3)
	{
		$arSections[$topSectionID]["CHILDREN"][$section["IBLOCK_SECTION_ID"]]["CHILDREN"][$section["ID"]] = array(
				"NAME" => $section["NAME"],
				"CODE" => $section["CODE"],
				"PICTURE" => $section["PICTURE"]["SRC"],
		);
		$i++;
	}
	
	// Последняя итерация, пишем количество
	if ($allElementsCount == $key)
	{
		$arSections[$topSectionID]["COUNT"] = $i;
	}
	
}

// Заменяем $arResult
$arResult = $arSections;
?>