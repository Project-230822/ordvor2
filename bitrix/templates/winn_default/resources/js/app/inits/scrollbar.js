import $ from 'jquery';
import _parseOptions from '../../utils/parseOptions'
import assign from 'lodash/assign'


export default function (context) {
	const Default = {
	};

	$(context).find('[data-scrollbar]').each((key, node) => {

		let options = _parseOptions(node.getAttribute('data-scrollbar-options'))
		
		options = assign({}, Default, options);

		node.classList.remove('scroll-wrapper');

		$(node).scrollbar(options);
	});
}
