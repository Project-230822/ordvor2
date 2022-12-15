jQuery(function() {

$('body').on('click', '.ajax-popup', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.magnificPopup.open({
            type: 'ajax',
            items: {
                src: url,
            }
        });
    });
	
    $('body').on('change keyup', '.cities-block-popup .search-city-input', function() {
        var count = 0;
        var need = $(this).val().toLowerCase();
        var result = '';
        var content = $(this).closest('.cities-block-popup').find('.cities-items');
        var cityList = $('.cities-items').find('a');
        if (need) {
            cityList.each(function() {
                var elem = $(this);
                var str = elem.text().toLowerCase();
                if ((str).indexOf(need) >= 0) {
                    result += '<div class="city-item"><a href="' + elem.attr('href') + '">' + elem.text() + '</a></div>';
                    count++;
                }
            });
        }
        if (result) {
            result = result;
        } else if (need) {
            result = '<div class="no-result">По запросу ничего не найдено</div>'
        }
        if (result) {
            content.hide();
        } else {
            content.show();
        }
        $('.cities-block-popup .search-result').html(result);
    });
    
   
    $('body').on('click', '.cities-block-popup .clearbtn', function(){     
      $(this).closest('.search-city').find('.search-city-input').val('').change();
    });
	
});