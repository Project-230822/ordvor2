<? if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();

/**
 * @var array $arResult
 * @var array $arParams
 * @var array $templateData
 */
 
//echo "<pre>"; var_dump($templateData['ITEM']["CODES"]); echo "</pre>";

// check compared state

/* if(!function_exists('array_usearch')){
	
	function array_usearch($ids, $haystack)
	{
		foreach ($haystack as $key => $value) {
			if ( strpos($value['ID'], $needle)!==false) {
				return $key;
			}
			
			if ( in_array($value['ID'], $ids)) {
				return $key;
			}
		}
		return false;
	}
} */

 

if ($arParams['DISPLAY_COMPARE'])
{
	$compared = false;
	$comparedIds = array();
	$item = $templateData['ITEM'];

	if (!empty($_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS']))
	{
		if (!empty($item['JS_OFFERS']))
		{
			foreach ($item['JS_OFFERS'] as $key => $offer)
			{
				if (array_key_exists($offer['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS']))
				{
					if ($key == $item['OFFERS_SELECTED'])
					{
						$compared = true;
					}

					$comparedIds[] = $offer['ID'];
				}
			}
		}
		elseif (array_key_exists($item['ID'], $_SESSION[$arParams['COMPARE_NAME']][$item['IBLOCK_ID']]['ITEMS']))
		{
			$compared = true;
		}
	}

	if ($templateData['JS_OBJ'])
	{
		?>
		<script>
			BX.ready(BX.defer(function(){
				if (!!window.<?=$templateData['JS_OBJ']?>)
				{
					window.<?=$templateData['JS_OBJ']?>.setCompared('<?=$compared?>');

					<? if (!empty($comparedIds)): ?>
						window.<?=$templateData['JS_OBJ']?>.setCompareInfo(<?=CUtil::PhpToJSObject($comparedIds, false, true)?>);
					<? endif ?>
				}
			}));
		</script>
		<?
	}
}


//$offerCode = trim($this->request->get('q'));

//var_dump($templateData['ITEM']['CODES']);

/* global $searchFilter;

$ids = isset($searchFilter[0][0]["=ID"]) ? $searchFilter[0][0]["=ID"]  : array();

if($ids && $templateData['ITEM']['CODES']){
	 $offerNum = array_usearch($ids, $templateData['ITEM']['CODES']);
}



if (!empty($offerNum))
	{
		?>
		<script>
			BX.ready(function(){
				if (!!window.<?=$templateData['JS_OBJ']?>)
				{
					window.<?=$templateData['JS_OBJ']?>.setOffer(<?=$offerNum?>);
				}
			});
		</script>
		<?
	} */