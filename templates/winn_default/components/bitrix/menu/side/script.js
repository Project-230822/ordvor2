(function (window){
	'use strict';

	if (window.SideMenu)
		return;

	window.SideMenu = function (arParams)
	{
		this.isHoverSideMenu = false;
		this.isExpandSideMenu = false;
		this.isTouchDevice = BX.hasClass(document.documentElement, 'bx-touch');
		this.params = {};
		this.menuItems = [];
		this.sections = [];

		if (typeof arParams === 'object')
		{
			this.params = arParams;
		}

		BX.ready(BX.delegate(this.init, this));
	};

	SideMenu.prototype = {
		init: function()
		{
			this.obMenu = BX(this.params.ID);

			var menuItems = this.obMenu.querySelectorAll('[data-entity="menu-link"]');
			for (var i in menuItems)
			{
				if (menuItems.hasOwnProperty(i) && BX.type.isDomNode(menuItems[i]))
				{
					this.menuItems.push(menuItems[i]);
				}
			}

			// if (!this.isTouchDevice)
			// {
			// 	BX.bind(this.obMenu, 'mouseenter', BX.proxy(this.expand, this));
			// 	BX.bind(this.obMenu, 'mousemove', BX.proxy(this.expand, this));

			// 	BX.bind(this.obMenu, 'mouseleave', BX.proxy(this.reduce, this));
			// }
		},

		// expand: function()
		// {
		// 	if (!this.isHoverSideMenu)
		// 	{
		// 		this.isHoverSideMenu = true;
		// 		BX.addClass(this.obMenu, 'side-menu--expand');

		// 		for (var i in this.menuItems)
		// 		{
		// 			if (BX.hasClass(this.menuItems[i], 'is-active'))
		// 			{
		// 				BX.removeClass(this.menuItems[i], 'is-active');
		// 				BX.addClass(this.menuItems[i], 'is-active-disabled');
		// 			}
		// 		}
		// 	}
		// },


		// reduce: function()
		// {
		// 	if (this.isHoverSideMenu)
		// 	{
		// 		this.isHoverSideMenu = false;
		// 		if (!this.isExpandSideMenu)
		// 		{
		// 			BX.removeClass(this.obMenu, 'side-menu--expand');
		// 		}

		// 		for (var i in this.menuItems)
		// 		{
		// 			if (BX.hasClass(this.menuItems[i], 'is-active-disabled'))
		// 			{
		// 				BX.addClass(this.menuItems[i], 'is-active');
		// 				BX.removeClass(this.menuItems[i], 'is-active-disabled');
		// 			}
		// 		}
		// 	}
		// },
	};

	return SideMenu;

})(window);