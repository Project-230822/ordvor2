$(function()
	{
		
	$('#catalog_text a > img').each(function()
		{
		var href_url = $(this).parent().attr('href');
		var src_url = $(this).attr('src');
		if ((href_url == src_url)&&($(this).parent().attr('data-fancybox-group') != '')) 
			{
			$(this).parent().attr('data-fancybox-group', 'gallery');
			$(this).parent().addClass('fancybox');
			}
		});
		
	});