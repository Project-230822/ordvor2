import $ from 'jquery';

var settings = {
	owl_class: ".owl-carousel",
	duration: 7000,
	progress: true,
	mouse: "mouseleave",
	owl: undefined,
	owl_dot: undefined,
	owl_dot_index: 0,
	owl_dot_progress: undefined,
	timeout: 1000,
	timeout_id: undefined,
};

function indexActive() {
	var ind = 0;
	settings.owl_dot.each(function (index, value) {
		if (this.classList.contains("active")) {
			ind = index;
		}
	})
	return ind;
};

var methods = {
	init: function (options) {
		var doc = options;
		settings = $.extend(settings, options);
		return this.each(function () {
			var $this = $(this);
			settings.owl = $(doc).find(settings.owl_class);
			settings.owl_dot = $this.find(".owl-dot");
			settings.owl_dot.each(function (index, value) {
				var t = $(this).find('.progressline').is('.progressline');
				if (!t) {
					$(this).append('<div class="progressline"><div class="progressline__progress" style="width:0"></div></div>');
					$(this).on('click', methods.clickdots);
				}
			});
			$this.on('mouseenter', methods.mouseenter);
			$this.on('mouseleave', methods.mouseleave);
			settings.owl.on('mouseup', methods.mouseup);
			settings.owl.on('mousedown', methods.mousedown);
			methods.start.apply(this);
		});
	},
	start: function () {
		return $(this).each(function () {
			var dot, width_dot, width_dot_progress, cur_duration;
			var ind = indexActive();
			if (settings.timeout_id != undefined) {
				clearTimeout(settings.timeout_id);
				settings.timeout_id = undefined;
			}
			if (settings.owl_dot_index != ind) {
				$(settings.owl_dot_progress).attr("style", "width:0");
				settings.owl_dot_index = ind;
			}
			dot = settings.owl_dot[settings.owl_dot_index];
			width_dot = parseInt($(dot).css('width'));
			settings.owl_dot_progress = $(dot).find(".progressline__progress");
			width_dot_progress = parseInt($(settings.owl_dot_progress).css('width'));
			cur_duration = settings.duration - (settings.duration * (width_dot_progress / width_dot)).toFixed();
			if (!(isNaN(cur_duration)) && (cur_duration > 0)) {
				$(settings.owl_dot_progress).animate(
					{ width: "100%" },
					{
						duration: cur_duration,
						easing: "linear",
						queue: false,
						complete: methods.next,
					});
				settings.progress = true;
			}
		});
	},
	stop: function () {
		return $(this).each(function () {
			$(settings.owl_dot_progress).stop();
		});
	},
	next: function () {
		return $(this).each(function () {
			$(this).attr("style", "width:0");
			$(settings.owl_dot_progress).stop();
			settings.progress = false;
			if (settings.mouse == "mouseleave") {
				$(settings.owl).trigger('next.owl.carousel');
				methods.start.apply(this);
			}
		});
	},
	clickdots: function () {
		return $(this).each(function () {
			var $this = $(this);
			var dot;
			for (var i = 0; i < settings.owl_dot.length; i++) {
				dot = settings.owl_dot[i];
				if ($(dot).text() == $this.text()) {
					settings.owl_dot_index = i;
					$(settings.owl_dot_progress).attr("style", "width:0");
				}
			}
		});
	},
	mouseenter: function () {
		return $(this).each(function () {
			settings.mouse = "mouseenter";
			if (settings.progress) {
				methods.stop.apply(this);
			}
		});
	},
	mouseleave: function () {
		return $(this).each(function () {
			settings.mouse = "mouseleave";
			if (settings.progress) {
				methods.start.apply(this);
			}
		});
	},
	mouseup: function (event) {
		return $(this).each(function () {
			methods.stop.apply(this);
			$(settings.owl_dot_progress).attr("style", "width:0");
			settings.progress = false;
			if (settings.timeout_id != undefined) {
				clearTimeout(settings.timeout_id);
			}
			settings.timeout_id = setTimeout(methods.start, settings.timeout);
		});
	},
	mousedown: function (event) {
		return $(this).each(function () {
			methods.stop.apply(this);
			$(settings.owl_dot_progress).attr("style", "width:0");
			settings.progress = false;
		});
	},


};//end methods

$.fn.progressLine = function (doc, method) {
	if (methods[method]) {
		return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof method === 'object' || !method) {
		return methods.init.apply(this, arguments, doc);
	} else {
		// console.log( 'Method ' +  method + ' undefined jQuery.progressLine' );
	}
};