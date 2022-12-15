function profile_settings_save()
	{
	phone = $('input[name=profile_phone]').val();
	email = $('input[name=profile_email]').val();
	name = $('input[name=profile_name]').val();
	city = $('input[name=profile_city]').val();
	addr = $('input[name=profile_addr]').val();
	index_number = $('input[name=profile_index_number]').val();
	
	$("#profile_status").empty();
	$.ajax(
		{
		url: "/ajax/profile/settings_save.php",
		type: "GET",
		data: { "phone": phone, "email": email, "name": name, "city": city, "addr": addr , "index_number": index_number },
		cache: false,			
		success: function(response)
			{
			if (response != '') $("#profile_status").append(response);
			if ($.cookie('profile_status') == '1') checkmail_show();
			}
		});
	}

function profile_change_pass()
	{
	oldpass = md5($('input[name=profile_oldpass]').val());
	pass = $('input[name=profile_pass]').val();
	repeatpass = $('input[name=profile_repeatpass]').val();
	
	$("#profile_status").empty();
	$.ajax(
		{
		url: "/ajax/profile/change_pass.php",
		type: "GET",
		data: { "oldpass": oldpass, "pass": pass, "repeatpass": repeatpass },
		cache: false,			
		success: function(response)
			{
			if (response != '') $("#profile_status").append(response);
			}
		});
	}
	
$(function()
	{
	$('#profile').on('click', '#profile_settings_save', function(e)
		{
		profile_settings_save();
		});
	$('#profile').on('click', '#profile_change_pass', function(e)
		{
		profile_change_pass();
		});
	});