(function() {
	'use strict';

	var form = document.forms['ORDER_FORM'];

	if (form)
	{
		form.addEventListener('submit', function (event)
		{
			if (form.checkValidity() === false)
			{
				event.preventDefault();
				event.stopPropagation();
			}
			BX.closeWait();

			form.classList.add('was-validated');
		});

		if (RS.Init)
		{
			RS.Init(form);
		}
	}
})();