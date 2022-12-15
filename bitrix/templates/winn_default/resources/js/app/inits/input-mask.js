import IMask from 'imask';

export default function (context) {

	$(context).find('input[data-mask]').each((key, node) => {
		let maskOptions = {
			mask: node.getAttribute('data-mask')
		};

		let mask = new IMask(node, maskOptions);
	});
};
