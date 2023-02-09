<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$obCity = OrdvorCity::getInstance();

$APPLICATION->SetTitle("Информация о доставке товаров - Оружейный двор");

$APPLICATION->SetPageProperty("description", "Информация о доставке товаров - Оружейный двор");


?>
	<?php die;?>
	<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<ul class="nav nav-tabs deliver_tabs">
	<li class="active"><a data-toggle="tab" href="#menu1">Транспортные компании</a></li>
	<li><a data-toggle="tab" href="#menu2">Доставка почтой России</a></li>
	<li><a data-toggle="tab" href="#menu3">Служба экспресс доставки EMS</a></li>
	<li><a data-toggle="tab" href="#menu4">Служба доставки "Boxberry"</a></li>
	 <?php
		if ($samovivoz == true)
		{
			?>
	<li><a data-toggle="tab" href="#menu5">Самовывоз</a></li>
	 <?php
		}
		?>
</ul>
<div class="tab-content">
	<div class="tab-pane fade in active deliv_comp" id="menu1">
		<ul>
			<li>ПЭК <a rel="nofollow" href="https://pecom.ru" target="_blank">ознакомиться с тарифами на официальном сайте ПЭК</a></li>
			<li>Деловые Линии <a href="https://khabarovsk.dellin.ru/" rel="nofollow" target="_blank">ознакомиться с тарифами на официальном сайте Деловых Линий</a></li>
			<li>Энергия <a rel="nofollow" href="https://nrg-tk.ru/" target="_blank">ознакомиться с тарифами на официальном сайте Энергия</a></li>
			<li>Другой компанией по желанию клиента</li>
		</ul>
		<p>
			 Стоимость доставки товара из магазина до склада транспортной компании - по тарифам забора груза у отправителя транспортной компании. Стоимость доставки рассчитывается менеджером интернет-магазина и сообщается покупателю после поступления заказа. Услуги транспортной компании оплачиваются покупателем при получении товара на складе транспортной компании.
		</p>
		<p>
			 Средний срок доставки сильно зависит от удаленности города.
		</p>
 <br>
		<p>
 <b>Уважаемый покупатель!</b><br>
			 В нашем интернет-магазине действует БЕСПЛАТНАЯ ДОСТАВКА для покупок свыше 10000 руб. Доставка осуществляется Почтой России. Заказ должен проходить по массогабаритным ограничениям почтовой службы. Чтобы получить бесплатную доставку, необходимо оплатить заказ через сайт интернет-магазина.
		</p>
		<div class="deliv_logo">
		</div>
	</div>
	<div class="tab-pane fade deliv_comp" id="menu2">
		<p>
			 Наиболее бюджетный способ доставки практически во все населенные пункты России. Стоимость доставки рассчитывается менеджером интернет-магазина и сообщается покупателю после поступления заказа. Однако, Вы можете самостоятельно расчитать приблизительную стоимость с помощью <a rel="nofollow" href="https://www.pochta.ru/PARCELS" target="_blank">онлайн-калькулятора почтовых отправлений</a> , укажите город отправления - <?=$obCity->getDeclination(false)?>.
		</p>
		<p>
			 Средний срок доставки - 7-20 дней.
		</p>
 <br>
		<p>
 <b>Уважаемый покупатель!</b><br>
			 В нашем интернет-магазине действует БЕСПЛАТНАЯ ДОСТАВКА для покупок свыше 10000 руб. Доставка осуществляется Почтой России. Заказ должен проходить по массогабаритным ограничениям почтовой службы. Чтобы получить бесплатную доставку, необходимо оплатить заказ через сайт интернет-магазина.
		</p>
	</div>
	<div class="tab-pane fade deliv_comp" id="menu3">
		<p>
			 Стоимость доставки рассчитывается менеджером интернет-магазина и сообщается покупателю после поступления заказа. Вы можете самостоятельно расчитать приблизительную стоимость с помощью <a rel="nofollow" href="http://emscalculator.ru/" target="_blank">онлайн-калькулятора почтовых отправлений</a> , курьерская доставка ,укажите город отправления - <?=$obCity->getDeclination(false)?>.
		</p>
		<p>
			 Средний срок доставки - 4-6 дней.
		</p>
		<p>
 <a rel="nofollow" href="http://www.emspost.ru/" target="_blank">Отследить посылку</a>
		</p>
	</div>
	<div class="tab-pane fade deliv_comp" id="menu4">
		 <?$APPLICATION->IncludeComponent(
	"bberry:boxberry.widget",
	"info_widget",
Array()
);?>
		<p>
			 Данный способ доставки является недорогим, однако срок доставки выше, чем у службы EMS. Средний срок доставки сильно зависит от удаленности города.
		</p>
		<p>
			 Стоимость доставки рассчитывается менеджером интернет-магазина и сообщается покупателю после поступления заказа. Однако, Вы можете самостоятельно расcчитать приблизительную стоимость с помощью <a target="_blank" rel="nofollow" href="https://boxberry.ru/calculate_the_cost_of_sending/">онлайн-калькулятора</a>, в поле "город-отправитель" указать - <?=$obCity->getDeclination(false)?>. К стоимости доставки прибавляется 100 руб. за перевозку товара от склада Интернет-магазина до приемного пункта
		</p>
		<p>
			 Посылки отправляются из <?=$obCity->getDeclination("WHENCE_CITY")?> в западные регионы России по воскресеньям.
		</p>
		<p class="deliv_header" style="display: none;">
			 Адреса и режим работы
		</p>
		 <?php
				foreach ($bb_adress as $item)
				{
					?><?php
				}
				?>
		<table class="table table-striped deliv_table">
		<tbody>
		<tr>
			<td class="col-md-3">
				 <?php echo $item['AddressReduce']; ?>
			</td>
			<td class="col-md-4">
				 <?php echo $item['WorkSchedule']; ?>
			</td>
			<td class="col-md-5">
				 <?php echo $item['TripDescription']; ?>
			</td>
		</tr>
		</tbody>
		</table>
	</div>
	 <?php
		if ($samovivoz == true)
		{

			?>
	<div class="tab-pane fade deliv_comp" id="menu5">
		<div style="width: 100%; height: 400px;" id="map2">
			  
		</div>
		 <script>
                    ymaps.ready(init);

                    function init() {
                        var myGeocoder = ymaps.geocode('<?php echo $nowCity;?>');
                        myGeocoder.then(
                            function (res) {
                                var myMap = new ymaps.Map("map2", {
                                        center: res.geoObjects.get(0).geometry.getCoordinates(),
                                        zoom: 12
                                    }, {
                                        searchControlProvider: 'yandex#search'
                                    }),

                                    // Создаем геообъект с типом геометрии "Точка".
                                    myGeoObject = new ymaps.GeoObject();

                                myMap.geoObjects
					            <? foreach($contacts as $mark){
					            ?>
                                    .add(new ymaps.Placemark(<?= '['.$mark['coords'].']'; ?>, {
                                        balloonContent: '<?= $mark['adress'].'</br>'.$mark['time']; ?>'
                                    }, {
                                        preset: 'islands#icon',
                                        iconColor: '#0095b6'
                                    }))
					            <?
					            } ?>
                            })
                    }
                </script>
		<p class="deliv_header" style="display: none;">
			 Адреса и режим работы
		</p>
		 <?php
                        foreach ($contacts as $item){
                            ?><?php
                        }
                    ?>
		<table class="table table-striped deliv_table">
		<tbody>
		<tr>
			<td class="col-md-3">
				 <?php echo $item['adress']?>
			</td>
			<td class="col-md-4">
				 <?php echo $item['time']?>
			</td>
			<td class="col-md-5">
				 <?php echo $item['transport']?>
			</td>
		</tr>
		</tbody>
		</table>
	</div>
	 <?php
		}
		?>
</div>
<br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>