<?
die();
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/php_interface/libs/autoload.php");

use morphos\Russian\GeographicalNamesInflection;	

CModule::IncludeModule("iblock");

$rs = \CIBlockElement::GetList(
	 array(),
	 array("IBLOCK_ID" => 21),
	 false,
	 false,
	 array('ID', 'NAME', 'IBLOCK_ID', 'PROPERTY_REGION')	 

);


while ($ar = $rs->Fetch()) {
   
    $region = $ar['PROPERTY_REGION_VALUE'];
	
	$forms['родительный'] = GeographicalNamesInflection::getCase($region, 'родительный');
	$forms['дательный'] = GeographicalNamesInflection::getCase($region, 'дательный');
	$forms['винительный'] = GeographicalNamesInflection::getCase($region, 'винительный');
	$forms['творительный'] = GeographicalNamesInflection::getCase($region, 'творительный');
	$forms['предложный'] = GeographicalNamesInflection::getCase($region, 'предложный');
				
	CIBlockElement::SetPropertyValuesEx($ar['ID'], $ar['IBLOCK_ID'], 

		array(
			'REGION_ROD_FORM' => $forms['родительный'],
			'REGION_DAT_FORM' => $forms['дательный'],
			'REGION_VIN_FORM' => $forms['винительный'],
			'REGION_TVOR_FORM' => $forms['творительный'],
			'REGION_PREDL_FORM' => $forms['предложный']				
		)
		
	);
   
}