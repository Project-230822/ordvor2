(function () {
	'use strict';

	if (!!window.JCCatalogProductsViewedComponent)
		return;

	window.JCCatalogProductsViewedComponent = function (params) {
		this.container = document.querySelector('[data-entity="' + params.container + '"]');

		if (params.initiallyShowHeader) {
			BX.ready(BX.delegate(this.showHeader, this));
		}
	};

	window.JCCatalogProductsViewedComponent.prototype =
	{
		showHeader: function (animate) {
			var parentNode = BX.findParent(this.container, { attr: { 'data-entity': 'parent-container' } }),
				header;
			this.sliderForItemList();
			this.heightAlignment();

			if (parentNode && BX.type.isDomNode(parentNode)) {
				header = parentNode.querySelector('[data-entity="header"]');

				if (header && header.getAttribute('data-showed') != 'true') {
					header.style.display = '';

					if (animate) {
						new BX.easing({
							duration: 2000,
							start: { opacity: 0 },
							finish: { opacity: 100 },
							transition: BX.easing.makeEaseOut(BX.easing.transitions.quad),
							step: function (state) {
								header.style.opacity = state.opacity / 100;
							},
							complete: function () {
								header.removeAttribute('style');
								header.setAttribute('data-showed', 'true');
							}
						}).animate();
					}
					else {
						header.style.opacity = 100;
					}
				}
			}
		},

		sliderForItemList: function () {
			$(this.container).slick({
				infinite: true,
				slidesToScroll: 1,
				slidesToShow: 4,
				prevArrow: '<div class="prev-arrow fade-out"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 16.5L8.25 11L13.75 5.5" stroke="#404040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
				nextArrow: '<div class="next-arrow fade-out"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
				responsive: [
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 3,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
							dots: true,
							arrows: false,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							dots: true,
							arrows: false,
							slidesToScroll: 1
						}
					}
				]
			});
		},

		heightAlignment: function () {
			let allListItems, highestItem = 0, sliderArrows, skuBlocks, highestSkuBlock = 0, overallHeight, parentNodesSlider;
			allListItems = this.container.querySelectorAll('.main_catalog_popular_item')
			sliderArrows = this.container.querySelectorAll('.slick-arrow');
			skuBlocks = this.container.querySelectorAll('.product-item-hidden.sku-block .product-item-info-container');
			parentNodesSlider = this.container.querySelectorAll('.slick-list.draggable');

			// Получаем самую высокую карточку из списка товаров
			for (var item of allListItems) {
				if (item.offsetHeight > highestItem) {
					highestItem = item.offsetHeight;
				}
			}

			// Присваиваем всем карточкам вычисленную высоту
			for (var item of allListItems) {
				item.style.minHeight = highestItem + 'px';
			}
			if (window.innerWidth > 767) {
				// Получаем самый высокий блок со SKU из списка товаров
				for (var skuBlock of skuBlocks) {
					if (skuBlock.offsetHeight > highestSkuBlock) {
						highestSkuBlock = skuBlock.offsetHeight;
					}
				}

				// Складываем полученые высоты
				overallHeight = highestItem + highestSkuBlock;

				// Присваиваем полученую высоту обертке для слайдера + отрицательный margin
				for (var parentNode of parentNodesSlider) {
					parentNode.style.height = overallHeight + 'px';
					//parentNode.style.marginBottom = '-' + highestSkuBlock + 'px';
				}

				// Присваиваем стрелкам слайдера абсолютное значение top (если присвоить %, то стрелки)
				for (var arrow of sliderArrows) {
					arrow.style.top = (highestItem / 2) + (arrow.clientHeight * 2) + 'px';
				}
			}
		}
	}
})();