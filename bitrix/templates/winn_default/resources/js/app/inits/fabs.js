import _parseOptions from '../../utils/parseOptions'
import Fab from '../../modules/fab'

export default function (context) {
	var fabs = {};
	$(context).find('[data-fab]').each((key, node) => {
		var name = node.getAttribute('data-fab');
		let options = _parseOptions(node.getAttribute('data-fab-options'))

		if (!name) {
			name = 'fab_' + Object.keys(app.fabs).length + 1
		}
		fabs[name] = new Fab(node, name, options);
	});
}
