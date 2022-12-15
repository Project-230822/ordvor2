import merge from 'lodash/merge'
import $ from 'jquery'
import ApplicationInit from './app/init.js'
import { show as showOverlay, hide as hideOverlay } from './utils/overlay'
import Panel from './panel';
import openPopup from './modules/popup';
import toastr from 'toastr';


global.$ = global.jQuery = $;

global.toastr = toastr;
merge(toastr.options, {
	positionClass: 'toast-bottom-right',
	closeButton: true,
	closeHtml: '<button><svg class="icon-svg"><use xlink:href="#svg-cross"></use></svg></button>',
	// timeOut : 0,
	// extendedTimeOut  : 0,
});

import './modules/jquery.setHtmlByUrl.js';
import './modules/bootstrap';
import PageAnimate from './modules/page-animate';

global.RS = global.RS || {};
merge(global.RS, {
	Init: ApplicationInit,
	Utils: {
		popup: openPopup,
		overlay: {
			show: showOverlay,
			hide: hideOverlay
		},
		PageAnimate: PageAnimate,
	},
});

$(document).ready(function () {
	const panel = new Panel;

	merge(global.RS, {
		Panel: panel
	});
});
