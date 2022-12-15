<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>
<title>js-notice-popup</title>
<?php if ($curPage !== "/index.php"):?>
		</div> <!-- .container -->
	</div> <!-- .main -->
<?php endif; ?>


<footer class="main-footer">
    <div class="container">

        <div class="footer1">
            <div class="row">
                <div class="col-md-3 col-sm-4">

                    <a href='/' title='Оружейный двор' class='footer-logo'>
                        <img src="<?=SITE_TEMPLATE_PATH?>/img/company_logo.png" alt="logo">
                    </a>

                    
                        <div class="social-block hidden-xs">
                            <div class="social-title">Присоединяйтесь:</div>

                            <ul><noindex>
                                                            <li>
                                    <a rel="nofollow" href='http://amur-bereg.ru/threads/set-magazinov-mir-prikljuchenij.8039/page-43' title='Мирприключений.рф на форуме Амурский Берег' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/amur-icon.png);'></a>
                                </li>
                                                            <li>
                                    <a rel="nofollow" href='http://vk.com/shop.ordvor' title='Наша группа Вконтакте' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/vk-icon.png);'></a>
                                </li>
                                                            <li>
                                    <a rel="nofollow" href='http://www.youtube.com/user/ORDVOR' title='Наш канал на Youtube' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/youtube-icon.png);'></a>
                                </li>
                                                        </noindex></ul>
                        </div>
                    
<!-- 	<div class="rambler"> -->
	                <!-- begin of Top100 code -->
<!--                                             <script id="top100Counter" type="text/javascript" -->
<!--                         src="//counter.rambler.ru/top100.jcn?3119132"></script> -->
<!--                         <noscript> -->
<!--                         <a class='top1' href="//top100.rambler.ru/navi/3119132/"> -->
<!--                         <img src="//counter.rambler.ru/top100.cnt?3119132" alt="Rambler's Top100" -->
<!--                         border="0" /></a> -->
<!--                         </noscript> -->
                                        <!-- end of Top100 code -->
	
<!-- 	</div> -->
    
                </div>

                <div class="col-md-7 col-sm-4">

                    <div class="row">
                        <div class="col-md-8 hidden-sm hidden-xs">
                
                <?
                
                  /* global $arrFilterSect;
                  global $sectionsFilter;
                  
                  if(is_array($sectionsFilter) && $arrFilterSect){
                    array_merge($sectionsFilter, $arrFilterSect);
                  }else */
                  
                ?>      

						    <?$APPLICATION->IncludeComponent(
	"bitrix:catalog.section.list", 
	"footer_menu_catalog", 
	array(
		"ADD_SECTIONS_CHAIN" => "N",
		"CACHE_FILTER" => "Y",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"COMPONENT_TEMPLATE" => "footer_menu_catalog",
		"COUNT_ELEMENTS" => "N",
		"FILTER_NAME" => "arrFilterSect",
		"IBLOCK_ID" => "18",
		"IBLOCK_TYPE" => "1c_catalog",
		"SECTION_CODE" => "",
		"SECTION_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SECTION_ID" => $_REQUEST["SECTION_ID"],
		"SECTION_URL" => "",
		"SECTION_USER_FIELDS" => array(
			0 => "",
			1 => "",
		),
		"SHOW_PARENT_NAME" => "N",
		"TOP_DEPTH" => "1",
		"VIEW_MODE" => "LINE"
	),
	false
);?>

                        </div>
                        <div class="col-md-4">
							<?$APPLICATION->IncludeComponent(
								"bitrix:menu",
								"footer_company_menu",
								Array(
									"ALLOW_MULTI_SELECT" => "N",
									"CHILD_MENU_TYPE" => "bottom",
									"DELAY" => "N",
									"MAX_LEVEL" => "1",
									"MENU_CACHE_GET_VARS" => array(0=>"",),
									"MENU_CACHE_TIME" => "360000",
									"MENU_CACHE_TYPE" => "A",
									"MENU_CACHE_USE_GROUPS" => "Y",
									"ROOT_MENU_TYPE" => "bottom",
									"USE_EXT" => "N"
								)
							);?>
                        </div>
                    </div>

                </div>

                <div class="col-md-2 col-sm-4">
                    <div class="sect-phones-footer">
                        <div class="phones">
						<?php
							$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							Array(
								"AREA_FILE_RECURSIVE" => "Y",
								"AREA_FILE_SHOW" => "file",
								"AREA_FILE_SUFFIX" => "inc",
								"EDIT_TEMPLATE" => "",
								"PATH" => SITE_DIR."include/footer_phone.php"
							)
						);?>
						<div class="messengers pull-right"><a rel="nofollow" href="https://api.whatsapp.com/send?phone=+79098787026" target="_blank" class="m_whatsapp"></a>
						</div>
						</div> 
						
                        <div class="caption">Звонок бесплатный</div>
                    </div>


                </div>

                
                <div class="col-xs-12 visible-xs-block">

                    <div class="social-block">
                        <div class="social-title">Присоединяйтесь:</div>

                        <ul>
                                                            <li>
                                   <noindex> 
								   <a rel="nofollow" href='http://amur-bereg.ru/threads/set-magazinov-mir-prikljuchenij.8039/page-43' title='Мирприключений.рф на форуме Амурский Берег' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/amur-icon.png)'></a></noindex>
                                </li>
                                                                <li>
                                   <noindex> 
								   <a rel="nofollow" href='https://www.facebook.com/ordvor27/' title='Наша страница в фейсбуке' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/facebook-icon.png)'></a></noindex>
                                </li>
                                                                <li>
                                   <noindex> 
								   <a rel="nofollow" href='http://vk.com/shop.ordvor' title='Наша группа Вконтакте' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/vk-icon.png)'></a></noindex>
                                </li>
                                                                <li>
                                   <noindex> 
								   <a rel="nofollow" href='http://www.youtube.com/user/ORDVOR' title='Наш канал на Youtube' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/youtube-icon.png)'></a></noindex>
                                </li>
                                                                 <li>
                                   <noindex> 
								   <a rel="nofollow" href='https://www.instagram.com/ordvor27' title='Аккаунт shop.ordvor.ru в Инстаграм' target='_blank' style='background-image: url(<?=SITE_TEMPLATE_PATH?>/img/instagram-icon.png)'></a></noindex>
                                </li>
                                                        </ul>
                                                        
                                                        
<?php /* ?>
						<!-- begin of Top100 code -->
<noindex><script id="top100Counter" type="text/javascript" src="//counter.rambler.ru/top100.jcn?3119132"></script>
<noscript>
<a rel="nofollow" class='top1' href="//top100.rambler.ru/navi/3119132/">
<img src="//counter.rambler.ru/top100.cnt?3119132" alt="Rambler's Top100" border="0" /></a>
</noscript></noindex>

<!-- end of Top100 code -->
<?php */ ?>



                    </div>

                </div>

                
            </div>
        </div>

        <div class="copyright">
            <div class="row">
                <div class="col-md-7">

                    <div class="copyright1">
						<?php
							$APPLICATION->IncludeComponent(
							"bitrix:main.include",
							"",
							Array(
								"AREA_FILE_RECURSIVE" => "Y",
								"AREA_FILE_SHOW" => "file",
								"AREA_FILE_SUFFIX" => "inc",
								"EDIT_TEMPLATE" => "",
								"PATH" => SITE_DIR."include/copyright.php"
							)
						);?>
                    </div>

                </div>
                <div class="col-md-5">
                    <div class="copyright2">
                        <a target="_blank" href="https://rasa.pro">Разработка RASA</a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</footer>

<?php /* ?>
<div class="mfp-hide white-popup js-basket-popup">
    <div class="basket-popup ">
        <div class="content-basket">
            <div class="title">Товар добавлен в корзину</div>
            <div class="description js-basket-popup-res"></div>
        </div>
        <div class="action">
            <a href="#" class="btn-continue popup-modal-dismiss">
                Продолжить покупки
            </a>
            <a href="/basket/" class="btn-to-order">В корзину</a>
        </div>

    </div>

</div>


<div class="mfp-hide white-popup js-compare-popup">
    <div class="compare-popup ">
        <div class="content-compare">
            <div class="title">Товар добавлен в сравнение</div>
        </div>
        <div class="action">
            <a href="#" class="btn-continue popup-modal-dismiss">
                Продолжить покупки
            </a>
            <a href="/compare/" class="btn-to-order">Перейти в сравнение</a>
        </div>

    </div>

</div>


<div class="mfp-hide white-popup js-order-complete">
    <div class="order-popup">

        <div class="content-basket">
            <div class="title">Спасибо, ваш заказ оформлен!</div>
            <div class="description">
                Вы успешно оформили заказ на нашем сайте. </br>
				Информация о заказе отправлена на Ваш <strong>e-mail.</strong></br>
				Наши менеджеры свяжутся с вами в ближайшее время
				для уточнения дополнительных условий заказа.
            </div>
        </div>

    </div>

</div>
<?php */ ?>

<?php /* ?>
<!-- BEGIN JIVOSITE CODE {literal} -->
<script type='text/javascript'>
(function(){ var widget_id = 'FaPHLZoZLM';var d=document;var w=window;function l(){
var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
<!-- {/literal} END JIVOSITE CODE -->
<?php */ ?>


<?php /* ?>
<!--Witget.com start {literal} -->
<script type="text/javascript">
 //<![CDATA[
  ;(function(){ if(window.wit_inited)return; window.wit_inited=true; var b = (typeof this.href!="undefined")?this.href:document.location; b = b.toString().toLowerCase(); var c = (window.WitgetData)?"&userdata="+JSON.stringify(window.WitgetData):''; var a=document.createElement("script"); a.type="text/javascript"; a.async=true;a.src="//loader.witget.com/v2.2/0a15ed3957bf93a46762ba3c5e01024a?ref="+document.referrer+"&url="+b+"&nc="+Math.random()+c;var s=document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(a,s)})();
 //]]>
 </script>
 <!-- {/literal}  Witget.com end-->
<?php */ ?>

 <div id='totop'>
	<div>
		<span>
			<div id='totop_button'></div>
		</span>
	</div>
</div>
 
<div class="show_box"></div>
<div id="show_box"></div>

<div class="show_box2"></div>
<div id="show_box2"></div>

<!--  <div class="push_sales"><img src="<?=SITE_TEMPLATE_PATH?>/img/sales.png" alt="следить за скидками"></div>-->
<div class="modalform">
	<form method="post" action="" class="subscription-form" onsubmit="sendSalesFormMessage(); return false;">
		<div title="Отменить" class="closs"><img alt="X" src="<?=SITE_TEMPLATE_PATH?>/img/close_n.png"/></div>
		<div id="message_id">
			<div class="top_text">
				Хотите получать информацию<br>о <span>скидках</span> и <span>уникальных<br> предложениях!</span>
			</div>
			<div data-title="">
				<label for="theme">Как к Вам обращаться?
					<input type='text' name='name' placeholder="Ваше имя" required="required" class="name" />
				</label>
			</div>
			<div data-title="">
				<label for="theme">Телефон или e-mail
					<input type='text' name='email'  placeholder='Ваш телефон или e-mail' required="required" class="email"/>
				</label>
			</div>
	            <div class="fs_privacy" style="width: 350px;margin: 0 auto;text-align: center;">Нажимая "отправить" Вы соглашаетесь с <br/> 
	            	<a href="javascript:void(0);" class="privacy">политикой конфиденциальности персональных данных</a>
	            </div>
			<input class="button" type="submit"  value="Хочу скидку"   />  <!--onclick="AjaxFormRequest('messegeResult', 'demoForm', 'mail.php')"-->
		</div>
		<div class="subscribe-success">
			Cообщение успешно отправленно.
		</div>
	</form>
</div>
 
					
					
<div id="show_box"></div>

<div id="show-result" class="white-blue-popup mfp-hide"></div>

<div id="show-result2" class="white-popup mfp-hide"></div>
<div class="bg_buys"></div>



<script type="text/javascript">privacy({company: 'ИП Моисеев Павел Михайлович', date: '«08»  июня 2017 г.'});</script>

<!--<div class="mfp-hide white-popup js-notice-popup" id="notice-popup">
    <div class="notice-popup ">
        <div class="content-notice">
            <div class="title">Режим работы магазинов</div>
			<div class="description">Магазины "Мир приключений" открыты и работают в обычном режиме.<br>
					Покупателей магазинов "Оружейный двор" принимаем ежедневно по предварительной записи:<br>Тел. для записи:<br> 
+7 (962) 676-30-99<br>
+7 (909) 843-66-29<br>
+7 (909) 801-54-87  </div>
        </div>
        <div class="action">
            <a href="#" class="btn-continue popup-modal-dismiss">
                Понятно
            </a>
        </div>

    </div>

</div>-->

<?php $obCity = OrdvorCity::getInstance();?>
<div id="find-product-popup" class="find-product-block-popup mfp-hide">
	<form id="find-product-form">
		<div class="input-wrap first-input">
    		<h4>Какой товар Вам нужен?</h4>
    		<input type="text" placeholder="Напишите в свободной форме, какой товар Вы ищете" name="FIND" autocomplete="off" />
		</div>
		<div class="input-wrap">
    		<span>*E-mail</span>
    		<input type="email" placeholder="Введите e-mail" class="need" name="EMAIL" autocomplete="off" />
		</div>
		<div class="input-wrap">
    		<span>*Контактный телефон</span>
    		<input type="tel" placeholder="Введите телефон" class="need" name="PHONE" autocomplete="off" />
		</div>
		<div class="input-wrap">
    		<span>*Город доставки</span>
    		<input type="text" placeholder="Введите город" class="need" name="CITY" autocomplete="off" value="<?=$obCity->getDeclination("CITY")?>" />
		</div>
		<div class="g-recaptcha" data-sitekey="6Le9YA0bAAAAAEr-QweppyzAkTwQkkgk6xUxwgoD"></div>
		<div class="info"></div>
		<div class="btn btn-default">Отправить</div>
	</form>
	<div class="find-product-success">
		<h4>Спасибо за Ваш запрос!</h4>
		Мы обработаем его в порядке очереди в рабочее время и дадим ответ!
	</div>
</div>

</body>
</html>