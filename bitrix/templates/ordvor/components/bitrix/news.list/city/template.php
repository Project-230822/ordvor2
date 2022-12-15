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

$url = trim(strip_tags(urldecode($_REQUEST['url'])));
?>

<div class="city_selector">
	<noindex>
		<div class="city_selector_header">
			<div class="city_selector_header_item">Выбор города</div>
			<?/*<div class="city_selector_close"></div>*/?>
		</div>
		<div class="city_selector_search">
			<input placeholder="Введите название своего города" class="city_selector_search_item">
		</div>
		<div class="city_selector_change_list"></div>
		
		
		
		<div class="row row-inline cities-items">
			
			<?
			$prev_letter = "";
			$first = reset($arResult["ITEMS"]);

			$name = trim($first['NAME']);		
			$letter = mb_strtoupper(mb_substr($name,0,1,"UTF-8"));
			$prev_letter = $letter;
			?>
		
			<div class="col-xs-12 col-sm-12 col-md-4  col-inline city_selector_cities_block">
				<div class="letter-title-wrap">
					<span class="letter-title city_list_block_header"><?=$letter?></span>
				</div>
				<div class="cities-list">
				<?

				foreach ($arResult["ITEMS"] as $key => $city){
					$name = trim($city['NAME']);		
					$letter = mb_strtoupper(mb_substr($name,0,1,"UTF-8"));
          
					$city['URL'] = "https://{$city['CODE']}.ordvor.ru".$url;
          
          if($city['CODE'] == 'shop'){
            $city['URL'] = "https://ordvor.ru".$url;            
          } 
          
					if( $letter != $prev_letter ){
						?>			
							</div></div><div class="col-xs-12 col-sm-12 col-md-4  col-inline city_selector_cities_block">
							<div class="letter-title-wrap"><span class="letter-title city_list_block_header"><?=$letter?></span></div>
							<div class="cities-list">
						<?
					}								
					?>
					
					<div class="city-item city_item"><a href="<?=$city['URL']?>"><?=$city['NAME']?> </a> </div>	
					
					
					<?
					$prev_letter = $letter;		
				}
				?>
				</div>				
				
			</div>
		
			
			
		</div>
	
		<?/*
		<div class="city_selector_cities not_all_city">

			<?php
			$i = 0;
			$index = 1;
			$onesymbol['last'] = '';
			$city_index = 0;
			foreach ($arResult["ITEMS"] as $k => $arCity):
				if ($city_index == 0) 
				{
					echo '<div class="city_selector_cities_column"><div class="city_selector_cities_block">';
				}
				$onesymbol[$k] = substr($arCity['NAME'], 0, 1);
				if ($onesymbol[$k] <> $onesymbol['last']) 
				{
					if ($city_index > 0) 
					{
						echo '</div>';
					}
					if ($city_index == 4 or $city_index == 7 or $city_index == 9 or $city_index == 12 or $city_index == 15) 
					{
						echo '</div><div class="city_selector_cities_column">';
					}
					if ($city_index > 0) 
					{
						echo '<div class="city_selector_cities_block">';
					}
					$city_index++;
					$onesymbol['last'] = $onesymbol[$k];
					echo '<div class="city_list_block_header">' . $onesymbol[$k] . '</div>';
				}
				?>
				<div class="city_item">
					<?if($url):?>
					<a href="https://<?=$arCity['CODE']?>.ordvor.ru<?=$url?>"><?=$arCity['NAME']?></a>
					<?else:?>
					<a href="https://<?=$arCity['CODE']?>.ordvor.ru<?=$_SERVER['REQUEST_URI']?>"><?=$arCity['NAME']?></a>
					<?endif?>
				</div>
				<?php
				endforeach;
				echo "</div>";
				?>
			</div>
		</div>
		*/?>
	
		
		
		
	</noindex>
</div>