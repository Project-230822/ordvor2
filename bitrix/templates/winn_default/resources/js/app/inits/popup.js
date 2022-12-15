import _parseOptions from '../../utils/parseOptions'
import Popup from '../../modules/popup'

export default function (context) {
	var popups = {};
	/* TODO: не инициализировать повторно */
	$(context).find('[data-popup][data-type="ajax"],[data-popup][data-type="inline"]').each((key, node) => {
		var name = node.getAttribute('data-popup');
		let options = _parseOptions(node.getAttribute('data-popup-options'))

		if (!name) {
			name = 'popup_' + Object.keys(popups).length + 1
		}
		popups[name] = new Popup(node, name, options);
	});
}
