function in_array(what, where) 
	{
	for(var i=0; i<where.length; i++)
	if(what == where[i]) return true;
	return false;
	}
	
function newWindow(href)
	{
	window.open(href, '_blank');
    }

function cBrowser() 
	{
	var ua = navigator.userAgent;
	var bName = function () 
		{
		if (ua.search(/MSIE/) > -1) return "ie";
		if (ua.search(/Firefox/) > -1) return "firefox";
		if (ua.search(/Opera/) > -1) return "opera";
		if (ua.search(/Chrome/) > -1) return "chrome";
		if (ua.search(/Safari/) > -1) return "safari";
		if (ua.search(/Konqueror/) > -1) return "konqueror";
		if (ua.search(/Iceweasel/) > -1) return "iceweasel";
		if (ua.search(/SeaMonkey/) > -1) return "seamonkey";
		}();
	return bName;
	}

$ = jQuery;
$(function()
	{
    
	$.extend(
		{
		getUrlVars: function()
			{
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++)
				{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
				}
			return vars;
			},
		getUrlVar: function(name)
			{
			return $.getUrlVars()[name];
			}
		});
	
	$('input[placeholder], textarea[placeholder]').placeholder();
	$('.fancybox').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',

		prevEffect : 'none',
		nextEffect : 'none',
		
		});		

    });

function number_format(number, decimals, decPoint, thousandsSep)
	{
	decimals = decimals || 0;
	number = parseFloat(number);
 
	if(!decPoint || !thousandsSep)
		{
		decPoint = '.';
		thousandsSep = ',';
		}
 
	var roundedNumber = Math.round( Math.abs( number ) * ('1e' + decimals) ) + '';
	var numbersString = decimals ? roundedNumber.slice(0, decimals * -1) : roundedNumber;
	var decimalsString = decimals ? roundedNumber.slice(decimals * -1) : '';
	var formattedNumber = "";
 
	while(numbersString.length > 3)
		{
		formattedNumber += thousandsSep + numbersString.slice(-3)
		numbersString = numbersString.slice(0,-3);
		}
 
	return (number < 0 ? '-' : '') + numbersString + formattedNumber + (decimalsString ? (decPoint + decimalsString) : '');
	}
	
function strpos(data) 
	{
	var haystack = data.str, needle = data.find, offset = 0;
	for (var i = 0; i < haystack.split(needle).length; i++) 
		{
		var index = haystack.indexOf(needle, offset + (data.index != 1 ? 1 : 0));
		if (i == data.index - 1) return (index != -1 ? index : null); 
		else offset = index;
		}
	}
	
function email_delivery()
	{
	email = $('input[name=footer_delivery]').val();
	
	pattern_email = new RegExp(/^((\"[\w-\s]+\")|([\w-]+(?:\.[\w-]+)*)|(\"[\w-\s]+\")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	if (email == '')
		{
		alert("Введите e-mail");
		return false;
		}
		
	if (!pattern_email.test(email)) 
		{
		alert("Введите правильный e-mail");
		return false;
		}
		
	$.ajax(
		{
		url: "/ajax/email_delivery.php",
		type: "GET",
		data: { "email": email },
		cache: false,
		async: false,
		success: function(response)
			{
			var status = parseInt(response);
			switch (status) 
				{
				case 1:
				alert('E-mail уже есть в базе данных');
				break;
				case 2:
				alert('E-mail добавлен в базу');
				var location = document.location.href;
				document.location = location;
				break;
				default:
				}
			}
		});
	}
	
function main_search()
	{
	var word = $('input[name=main_search]').val();
	var id_cat = parseInt($('#main_search_section').data('id'));
	console.log(id_cat);
	if (word != '') 
		{
		var url_search = '/search/?word=' + word;
		if (id_cat != 0) url_search += '&id_cat='+id_cat;
		document.location = url_search;
		}
	}

function menu()
	{
	$('.submenu').each(function(e)
		{
		width = $(this).parents('.menu').width();
		$(this).width(width);
		});
	}

function fixedrecycle()
	{	
	var top = $(document).scrollTop();
	top_height = 159;
	if ($('#header_slider').length == 1) top_height += $('#header_slider').height();
	if (top > top_height)
		{
		$('#fixed_recycle_box').show();	
		}
	else
		{
		$('#fixed_recycle_box').hide();
		}
	}
		
$(document).ready(function()
	{	
	var mobile = device.mobile();
	
	menu();
	fixedrecycle();
	$(window).on('scroll', function() 
		{
		fixedrecycle()
		});
		
	$(window).on('resize', function(e)
		{
		menu();
		fixedrecycle()
		});
		
	var busy_search = 0;
	function word_search()
		{

		var result = $("#main_search_input_results");
		var id = false;
		var post = new Object();
		post['id'] = id;
		post['search'] = $('input[name="word"]').val();
		var length_search= post['search'].length;
		var post_data = $.param(post);
		if (busy_search == 0)
			{
			if (length_search > 2)
				{
				busy_search = 1;
				$.ajax(
					{
					url: "/ajax/search_aside.php",
					type: "POST",
					data: post_data,
					cache: false,
					success: function(response)
						{
						var content = result.html();
						if ((response != content)&&(response != '')) result.html(response).show();
						else if (response == '') result.hide();
						busy_search = 0;
						}
					});
				}
			else result.hide();
			}
		else 
			{
			setTimeout(function()
				{
				word_search();
				}, 100);
			}
		}
		
	function fixed_word_search()
		{
		var fixed_search = $('#fixed_search');
		var result = fixed_search.find("#fixed_search_input_results");
		var id = fixed_search.find('#fixed_search_section').data('id');
		var post = new Object();
		post['id'] = id;
		post['search'] = $('input[name=fixed_search]').val();
		var length_search= post['search'].length;
		var post_data = $.param(post);
		if (busy_search == 0)
			{
			if (length_search > 2)
				{
				busy_search = 1;
				$.ajax(
					{
					url: "/ajax/search_aside.php",
					type: "POST",
					data: post_data,
					cache: false,
					success: function(response)
						{

						var content = result.html();
						if ((response != content)&&(response != '')) result.html(response).show();
						else if (response == '') result.hide();
						busy_search = 0;
						}
					});
				}
			else result.hide();
			}
		else
			{
			setTimeout(function()
				{
				fixed_word_search()
				}, 100);
			}
		}

	$('.search-top').on('keydown keyup change', 'input[name="word"]', function(e)
	{
		word_search();
	});
	
	$('#main_search').on('keydown', 'input[name=main_search]', function(e)
		{
		if (e.keyCode == 13) main_search();
		});
		
	$('#main_search').on('keyup', 'input[name=main_search]', function(e)
		{
		$('input[name=fixed_search]').val($('input[name=main_search]').val());
		});
		
	$('#main_search').on('click', '#main_search_loop, #main_search_submit', function(e)
		{
		main_search();
		});
		
	$('#main_search').on('click', '#main_search_section > div > span', function(e)
		{
		busy_search = 1;
		$(this).parents('#main_search').find('#main_search_choose').toggle();
		if ($(this).parents('#main_search').find('#main_search_choose').css('display') == 'block') $(this).parents('#main_search').find('#main_search_input_results').hide();
		busy_search = 0;
		});


		
	$('#main_search').on('click', '.main_search_choose_info_cell.active, #main_search_choose_title', function(e)
		{
		var id = $(this).data('id');
		var title = $(this).html();
		var length = title.length;
		var width = 11 * length;
		if (width > 200) width = 200; else if (width < 121) width = 121;
		var main_search = $(this).parents('#main_search');
		main_search.find('#main_search_section > div').width(width);
		main_search.find('#main_search_section').data('id', id);
		main_search.find('#main_search_section_title > div').html(title);
		main_search.find('#main_search_choose').hide();
		var fixed_search = $('#fixed_search');
		fixed_search.find('#fixed_search_section > div').width(width);
		fixed_search.find('#fixed_search_section').data('id', id);
		fixed_search.find('#fixed_search_section_title > div').html(title);
		fixed_search.find('#fixed_search_choose').hide();
		//word_search();
		});
	
	$('#fixed_search').on('keydown', 'input[name=fixed_search]', function(e)
		{;
		if (e.keyCode == 13) main_search();
		});
		
	$('#fixed_search').on('keyup', 'input[name=fixed_search]', function(e)
		{
		$('input[name=main_search]').val($('input[name=fixed_search]').val())
		});
		
	$('#fixed_search').on('click', '#fixed_search_loop, #fixed_search_submit', function(e)
		{
		main_search();
		});
		
	$('#fixed_search').on('click', '#fixed_search_section > div > span', function(e)
		{
		busy_search = 1;
		$(this).parents('#fixed_search').find('#fixed_search_choose').toggle();
		if ($(this).parents('#fixed_search').find('#fixed_search_choose').css('display') == 'block') $(this).parents('#fixed_search').find('#fixed_search_input_results').hide();
		busy_search = 0;
		});

	$('#fixed_search').on('keydown keyup change', 'input[name=fixed_search]', function(e)
		{
		fixed_word_search();
		});
		
	$('#fixed_search').on('click', '.fixed_search_choose_info_cell.active, #fixed_search_choose_title', function(e)
		{
		var id = $(this).data('id');
		var title = $(this).html();
		var length = title.length;
		var width = 11 * length;
		if (width > 200) width = 200; else if (width < 121) width = 121;
		var fixed_search = $(this).parents('#fixed_search');
		fixed_search.find('#fixed_search_section > div').width(width);
		fixed_search.find('#fixed_search_section').data('id', id);
		fixed_search.find('#fixed_search_section_title > div').html(title);
		fixed_search.find('#fixed_search_choose').hide();
		var main_search = $('#main_search');
		main_search.find('#main_search_section > div').width(width);
		main_search.find('#main_search_section').data('id', id);
		main_search.find('#main_search_section_title > div').html(title);
		main_search.find('#main_search_choose').hide();
		//fixed_word_search();
		});
	

	/*
	$('body').on('click mouseover', function(e)
	{
		var fixed_search = $(e.target).closest("#fixed_recycle_search");
		if (fixed_search.length == 0)
			{
			$(this).filter(function()
				{
				if ($('#fixed_search_input_results').css('display') == 'block')
					{
					$('#fixed_search_input_results').hide();
					return false;
					}
				});
			}
		var main_search = $(e.target).closest("#main_recycle_search");
		if (main_search.length == 0)
			{
			$(this).filter(function()
				{
				if ($('#main_search_input_results').css('display') == 'block')
					{
					$('#main_search_input_results').hide();
					return false;
					}
				});
			}
	});*/



	$('body').on('click', function(e)
		{
		var fixed_choose1 = $(e.target).closest("#fixed_search_section");
		var fixed_choose2 = $(e.target).closest("#fixed_search_choose");
		var length = fixed_choose1.length + fixed_choose2.length;
		if (length == 0)
			{
			$(this).filter(function()
				{
				if ($('#fixed_search_choose').css('display') == 'block')
					{
					$('#fixed_search_choose').hide();
					return false;
					}
				});
			}
		var main_choose1 = $(e.target).closest("#main_search_section");
		var main_choose2 = $(e.target).closest("#main_search_choose");
		var length = main_choose1.length + main_choose2.length;
		if (length == 0)
			{
			$(this).filter(function()
				{
				if ($('#main_search_choose').css('display') == 'block')
					{
					$('#main_search_choose').hide();
					return false;
					}
				});
			}
		});
		
	$(window).on('resize', function(e) 
		{
		$('.show_box').width($(document).width()).height($(document).height()); 
		if (($('#maintenancebox').length == 1)||($('#testbox').length == 1))
			{
			$('.show_box2').width($(window).width() + 20).height($(window).height()); 
			$('#container').css(
				{
				'overflowY' : 'hidden',
				'overflowX' : 'auto',
				'height' : $(window).height() + 'px',
				});
			}
		});
	
	$('.show_box').on('click', function(e)
		{
		$('#show_box').hide();
		$('.show_box').hide();
		});
	
	$('.show_box2').on('click', function(e)
		{
		$('#show_box2').hide();
		$('.show_box2').hide();
		});
	
	$('#footer_delivery_submit').on('click', function(e)
		{
		email_delivery();
		});
		
	$('#footer_delivery_input').on('keydown', function(e)
		{
		if (e.keyCode == 13) email_delivery();
		});
	
	$('#private_office').on('click', '#exit_click', function(e)
		{
		$.cookie("id_avt", null, { path: '/' });
		document.location = document.location.href;
		});
		
	// стрелочка для возврата наверх
	$.fn.scrollToTop = function()
		{
		var scrollDiv = $(this);
		scrollDiv.hide();
		var strollTop = parseInt($(window).scrollTop());
		if (strollTop > 1500)
			{
			$(this).fadeIn(500)
			}
		$(window).scroll(function()
			{
			var strollTop = parseInt($(window).scrollTop());
			if (strollTop > 1500) 
				{
				$(scrollDiv).fadeIn(500);
				}
			else
				{
				$(scrollDiv).fadeOut(500);
				}
			});
		scrollDiv.on('click', function()
			{
			$("html, body").animate({ scrollTop: 0 }, 1000);
			$(this).fadeOut(0); 
			})
			
		var width = $(window).width();
		if (width < 1144) width = 1144;
		var right = parseInt((1144 - width)/2);
		if (right < -131) right = -131;
		$('#totop_button').css({ 'right': right+'px' });
		$(window).on('resize', function()
			{
			var width = $(this).width();
			if (width < 1144) width = 1144;
			var right = parseInt((1144 - width)/2);
			if (right < -131) right = -131;
			$('#totop_button').css({ 'right': right+'px' });
			});
		}
	$("#totop").scrollToTop();
	
	var active_aside = 0;
	if (mobile == false)
		{
            $('.container').on('mousemove', function(e)
            {
                if (!($(e.target).closest("#aside_catalog").length)&&(active_aside == 0))
                {

                    active_aside = 1;
                    $('#aside_catalog_lvl2').hide();
                    setTimeout(function()
                    {
                        $('.aside_catalog_lvl1.active').removeClass('active');
                        $('.aside_catalog_lvl2.active').removeClass('active');
                        setTimeout(function()
                        {
                            active_aside = 0;
                        }, 10);
                    }, 10);
                }
            });

            $('#aside_catalog').on('mouseenter', '.aside_catalog_lvl1:not(.active)', function(e)
            {
                if (active_aside == 0)
                {
                    active_aside = 1;
                    var id = $(this).data('id');
                    $('#aside_catalog_lvl2').show();
                    setTimeout(function()
                    {
                        $('.aside_catalog_lvl1.active').removeClass('active');
                        $('.aside_catalog_lvl2.active').removeClass('active');
                        $('.aside_catalog_lvl1[data-id='+id+']').addClass('active');
                        $('.aside_catalog_lvl2[data-id='+id+']').addClass('active');
                        setTimeout(function()
                        {
                            active_aside = 0;
                        }, 10);
                    }, 10);
                }
            });
		}
	else
		{
		$('#container').on('click', function(e)
			{
			if (!($(e.target).closest("#aside_catalog").length)&&(active_aside == 0))
				{
				active_aside = 1;
				$('#aside_catalog_lvl2').hide();
				setTimeout(function()
					{
					$('.aside_catalog_lvl1.active').removeClass('active');
					$('.aside_catalog_lvl2.active').removeClass('active');
					setTimeout(function()
						{
						active_aside = 0;
						}, 10);
					}, 10);
				}
			});

		$('#aside_catalog').on('click', '.aside_catalog_lvl1.active', function(e)
			{
			e.preventDefault();
			if (active_aside == 0)
				{
				active_aside = 1;
				$('#aside_catalog_lvl2').hide();
				$('.aside_catalog_lvl1.active').removeClass('active');
				$('.aside_catalog_lvl2.active').removeClass('active');
				active_aside = 0;
				}
			});
			if(window.innerWidth > 640) {
				$('#aside_catalog').on('click', '.aside_catalog_lvl1:not(.active)', function (e) {
					e.preventDefault();
					if (active_aside == 0) {
						active_aside = 1;
						var id = $(this).data('id');
						$('#aside_catalog_lvl2').show();
						setTimeout(function () {
							$('.aside_catalog_lvl1.active').removeClass('active');
							$('.aside_catalog_lvl2.active').removeClass('active');
							$('.aside_catalog_lvl1[data-id=' + id + ']').addClass('active');
							$('.aside_catalog_lvl2[data-id=' + id + ']').addClass('active');
							setTimeout(function () {
								active_aside = 0;
							}, 10);
						}, 10);
					}
				});
			}
		}
	
	/*$('#aside_catalog').on('mouseleave', function(e)
		{
		$('.aside_catalog_lvl1.active').removeClass('active');
		$('#aside_catalog_lvl2').hide();
		$('.aside_catalog_lvl2.active').hide();
		});*/
	
	$('.contacts_city').on('click', '.contacts_city_choose', function(e)
		{
		$(this).hide();
		$('.contacts_city_select').show();
		});
		
	$('body').on('click mouseover', function(e)
		{
		var city = $(e.target).closest("#header2");
		if (city.length == 0)
			{
			$(this).filter(function()
				{
				if ($('.contacts_city_select').css('display') == 'block')
					{
					$('.contacts_city_select').hide();
					$('.contacts_city_choose').show();
					return false;
					}
				});
			}
		});
		
	var busy_city = 0;
	function city_search()
		{
		var city = $('.contacts_city');
		var result = city.find(".contacts_city_results");
		var post = new Object();
		post['search'] = $('input[name=name_city]').val();
		var length_search= post['search'].length;
		var post_data = $.param(post);
		if (busy_city == 0)
			{
			if (length_search >= 1)
				{
				busy_city = 1;
				$.ajax(
					{
					url: "/ajax/search_city.php",
					type: "POST",
					data: post_data,
					cache: false,
					success: function(response)
						{
						var content = result.html();
						if ((response != content)&&(response != '')) result.html(response).show();
						busy_city = 0;
						}
					});
				}
			else result.hide();
			}
		}
		
	$('.contacts_city').on('keydown', 'input[name=name_city]', function(e)
		{
		if (busy_city == 0) city_search();
		});
		
	$('.contacts_city').on('click', '.contacts_city_result', function(e)
		{
		var city_id = $(this).data('city-id');
		var city_name = $(this).data('city-name');
		var date = new Date();
		date.setTime(date.getTime() + (60 * 60 * 1000));
		$('.contacts_city_choose span').html(city_name);
		$.cookie("city_id", city_id, { expires: date, path: '/' });
		$('.contacts_city_choose').hide();
		$('.contacts_city_results').hide();
		});
		
	});