import $ from 'jquery'

export default function (options) {
	return $(window).innerWidth() >= 768 && !BX.hasClass(document.documentElement, 'bx-touch');
}
