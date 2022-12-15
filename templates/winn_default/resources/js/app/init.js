import $ from 'jquery'

import buttons from './inits/buttons'
import sliders from './inits/sliders'
import popup from './inits/popup'
import links from './inits/links'
import navSlide from './inits/navSlide'
import scrollbar from './inits/scrollbar'
import smoothscroll from 'smoothscroll-polyfill';
import fabs from './inits/fabs';
import inputMask from './inits/input-mask';

const AllModules = [
	'bmd',
	'buttons',
	'sliders',
	// 'popovers',
	// 'timers',
	'popup',
	// 'lazy-images',
	'links',
	'nav-slide',
	'scrollbar',
	'fabs',
	'input-mask',
];

export default function(context = document.body, modules = AllModules, options ={})
{
	modules.forEach(module => {
		switch (module) {
			case 'bmd':
				$(context).bootstrapMaterialDesign();
				break;

			case 'buttons':
				buttons(context);
				break;
	
		// 	case 'sidebar':
		// 		sidebar(context);
		// 		break;

			case 'sliders':
				sliders(context);
				break;

		// 	case 'popovers':
		// 		popovers(context);
		// 		break;

		// 	case 'timers':
		// 		timers(context, options);
		// 		break;

			case 'popup':
				popup(context, options);
				break;

		// 	case 'lazy-images':
		// 		lazyImages(context);
		// 		break;

			case 'links':
				smoothscroll.polyfill();
				links(context);
				break;

			case 'nav-slide':
				navSlide(context);
				break;

			case 'scrollbar':
				scrollbar(context);
				break;

			case 'fabs':
				fabs(context);
				break;

			case 'input-mask':
				inputMask(context);
				break;
		}
	})
}
