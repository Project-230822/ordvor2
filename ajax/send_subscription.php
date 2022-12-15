<?php 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule("iblock");

// Получение ответа через API
$request = \Bitrix\Main\Application::getInstance()->getContext()->getRequest();

// Если Ajax, то продолжаем
if ($request->isAjaxRequest())
{
	// Получаем POST через API
	$arValue = $request->getPostList();

	// Перебираем полученный POST, стрипим, тримим
	foreach($arValue as $key => $value)
	{
		$post[$key] = trim(strip_tags($value));
	}

	$arFields = array(
			"ACTIVE" => "Y",
			"IBLOCK_ID" => 23,
			"NAME" => $post["name"],
			"DETAIL_TEXT" => $post["email"]
	);
	$oElement = new CIBlockElement();
	$idElement = $oElement->Add($arFields);
}

?>