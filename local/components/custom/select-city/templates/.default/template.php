<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$url = urlencode($_SERVER['REQUEST_URI']); 
?>

11212
	<div class="cities-row">
		
		<?if($arResult['ACTIVE_CITY']['ID'] == 57719):?>
		
			<a href="/ajax/cities.php?url=<?=$url?>" class="city-name ajax-popup"><?=$arResult['ACTIVE_CITY']['NAME']?> - выберите город</a>

			<?$frame = $this->createFrame()->begin('');?>			
			
			<? if($arResult['SHOW_FORM']):?>
				<div class="question-city" data-redirect="<?=$arResult['REDIRECT']?>" data-url="<?=$arResult['URL']?>">
					<div class="question-city-label">Ваш город</div>
					<div class="question-city-title"><strong>Город не определен</strong></div>
					<div class="question-city-btn">
					   <button type="button" class="btn-yes">Выбрать потом</button>
					   <button type="button" class="btn-no">Выбрать город</button>				   
					</div>
				</div>
				<div class="bg-city-popup"></div>
			<?endif?>
			<?
			$frame->end();
			?>
		
		
		<?else:?>
		<a href="/ajax/cities.php?url=<?=$url?>" class="city-name ajax-popup"><?=$arResult['ACTIVE_CITY']['NAME']?></a>

		<?$frame = $this->createFrame()->begin('');?>
		
		
		
		<? if($arResult['SHOW_FORM']):?>
			<div class="question-city" data-redirect="<?=$arResult['REDIRECT']?>" data-url="<?=$arResult['URL']?>">
				<div class="question-city-label">Ваш город</div>
				<div class="question-city-title"><strong><?=$arResult['ACTIVE_CITY']['NAME']?></strong></div>
				<div class="question-city-btn">
				   <button type="button" class="btn-yes">Да, все верно</button>
				   <button type="button" class="btn-no">Выбрать другой</button>				   
				</div>
			</div>
			<div class="bg-city-popup"></div>
		<?endif?>
		<?
		$frame->end();
		?>
		<?endif?>
		
	</div>

<script>




$(function() {
	
   $('body').on('click', '.question-city-btn .btn-no', function(){
	   
	   $(this).closest('.cities-row').find('.city-name').click();	   
	   $(this).closest('.question-city').hide();
	   
	   $('.bg-city-popup').hide();
	   
   });
   
   $('body').on('click', '.question-city-btn .btn-yes', function(){
	   
	   var question = $(this).closest('.question-city');
	   var redirect = question.attr('data-redirect');
	   var url = question.attr('data-url');
	   
	   question.hide();
	   $('.bg-city-popup').hide();
		
	   if(redirect != '' && url != '' && redirect != url){
		   location.href = redirect;
	   }	
		
   });  
	
	
});



</script>