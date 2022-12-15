import $ from 'jquery';

export default function (context) {

	$(context).find('.btn:not(.btn-opacity-dark)').each((key, node) => {

		node.addEventListener('mouseenter', function(e) {
			let span = this.querySelector('.btn__back');
			if (!span)
			{
				span = document.createElement('span');
				span.className = 'btn__back';
				node.append(span);
			}

			span.style.top = e.pageY - Math.ceil($(this).offset().top) + 'px';
			span.style.left = e.pageX - Math.ceil($(this).offset().left) + 'px';
		});

		
		node.addEventListener('mouseout', function(e) {
			let span = this.querySelector('.btn__back');
			if (span)
			{
				span.style.top = e.pageY - Math.ceil($(this).offset().top) + 'px';
				span.style.left = e.pageX - Math.ceil($(this).offset().left) + 'px';
			}
		});
	});
};
