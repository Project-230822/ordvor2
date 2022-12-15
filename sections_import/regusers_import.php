<?php 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("test_product_import");
?>

<?php 
/*
include ("regusers.php");

CModule::IncludeModule('iblock');
CModule::IncludeModule('catalog');





$i = 0;

foreach ($regusers as $key => $user)
{
	if ($user["email"])
	{
		$i++;
		
		$fio = explode(" ", $user["name"]);
		
		$arUser[$key]["NAME"] = $fio[0];
		$arUser[$key]["LAST_NAME"] = $fio[1];
		$arUser[$key]["SECOND_NAME"] = $fio[2];
		
		$phoneFirstSymbol = $user["phone"][0];
		
		$user["phone"] = preg_replace('/[^0-9]/', '', $user["phone"]);
		
		if ($user["phone"])
		{
		
			if ($phoneFirstSymbol == "8")
			{
				$user["phone"] = substr_replace($user["phone"], "7", 0, 1);
			}
		
			if ($phoneFirstSymbol == "9")
			{
				$user["phone"] = substr_replace($user["phone"], "79", 0, 1);
			}
		
			$user["phone"] = substr_replace($user["phone"], "+", 0, 0);
			$user["phone"] = substr_replace($user["phone"], " ", 2, 0);
			$user["phone"] = substr_replace($user["phone"], "(", 3, 0);
			$user["phone"] = substr_replace($user["phone"], ")", 7, 0);
			$user["phone"] = substr_replace($user["phone"], " ", 8, 0);
			$user["phone"] = substr_replace($user["phone"], "-", 12, 0);
			$user["phone"] = substr_replace($user["phone"], "-", 15, 0);
		
		}
		
		$arUser[$key]["PHONE"] = $user["phone"];
		
		$arUser[$key]["EMAIL"] = $user["email"];

		
	}
}

$cuser = new CUser;
foreach ($arUser as $user)
{
	
	$new_password = randString(12);
	
	$arFields = Array(
			"LOGIN"             => $user["EMAIL"],
			"NAME"              => $user["NAME"],
			"LAST_NAME"         => $user["LAST_NAME"],
			"SECOND_NAME"       => $user["SECOND_NAME"],
			"PERSONAL_PHONE"    => $user["PHONE"],
			"EMAIL"             => $user["EMAIL"],
			"ACTIVE"            => "Y",
			"GROUP_ID"          => array(3, 4, 6),
			"PASSWORD"          => $new_password,
			"CONFIRM_PASSWORD"  => $new_password,
			);
	
	
	
	$ID = $cuser->Add($arFields);
	
	$arFieldsUsers = array(
			"ACTIVE" => "Y",
			"IBLOCK_ID" => 24,
			"NAME" => $user["EMAIL"]
	);
	$oElement = new CIBlockElement();
	$idElement = $oElement->Add($arFieldsUsers);
	
	CIBlockElement::SetPropertyValueCode($idElement, "NAME", $user["NAME"]);
	CIBlockElement::SetPropertyValueCode($idElement, "LAST_NAME", $user["LAST_NAME"]);
	CIBlockElement::SetPropertyValueCode($idElement, "SECOND_NAME", $user["SECOND_NAME"]);
	CIBlockElement::SetPropertyValueCode($idElement, "PHONE", $user["PHONE"]);
	CIBlockElement::SetPropertyValueCode($idElement, "PASSWORD", $new_password);
		
	if (intval($ID) > 0)
	{
		echo "Пользователь успешно добавлен.<br>";
	}
	else
	{
		echo $cuser->LAST_ERROR . "<br>";
	}

}

echo "<h1>" . $i . "</h1>";
*/
// +7 (924) 200-48-84

?>













<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php"); ?>