<?php 

include($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
//header('Content-Type: text/xml\r\n');

//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 0);
//ini_set('display_startup_errors', 0);

//$doman = 'https://shop.ordvor.ru';

$doman = 'https://ordvor.ru';

//echo "<pre>"; var_dump($_SERVER); echo "</pre>"; die();

$protocol = !empty($_SERVER['HTTPS']) ? 'https' : 'http';
$adress = $protocol.'://'.$_SERVER['SERVER_NAME'];

/* if($adress == $doman){
 	echo file_get_contents(__DIR__.'/sitemap_default.xml');
	die();
} */

$site_map = simplexml_load_file(__DIR__.'/sitemap.xml');




if(count($site_map->sitemap)){
	
	foreach ($site_map->sitemap as $item) {
	
	$url = str_replace($doman, __DIR__ , (string)$item->loc);		
	$map_item = simplexml_load_file($url);
	
	
	
	foreach ($map_item->url as $elem){			
		
			$loc = str_replace($doman, $adress ,(string)$elem->loc);		
			
			$itemsMap[] = array(
				'loc' => $loc,
				'lastmod' => (string)$elem->lastmod
			);		
		}	 
	}
	
}else{
	
	foreach ($site_map->url as $elem){			
		
			$loc = str_replace($doman, $adress ,(string)$elem->loc);		
			
			$itemsMap[] = array(
				'loc' => $loc,
				'lastmod' => (string)$elem->lastmod
			);		
		}	 
	
}

$obCity = OrdvorCity::getInstance();
$hideUrls = $obCity->getUrlsToHide();

//echo "<pre>"; var_dump($hideUrls); echo "</pre>"; die();


$xml = new \SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>');

foreach($itemsMap as $value){	

	$loc = trim(str_replace($adress, '' ,$value['loc']));	



	if($hideUrls && in_array($loc, $hideUrls))
		continue;

	$i = $xml->addChild('url');
	$i->addChild('loc', $value['loc']);
	$i->addChild('lastmod', $value['lastmod']);		
} 

$dom = dom_import_simplexml($xml)->ownerDocument;
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;

header('Content-Type: text/xml');

echo $dom->saveXML();

exit();