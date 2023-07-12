(function () {
	'use strict';

	if (!!window.JCCatalogSectionComponent)
		return;

	window.JCCatalogSectionComponent = function (params) {
		this.formPosting = false;
		this.siteId = params.siteId || '';
		this.ajaxId = params.ajaxId || '';
		this.template = params.template || '';
		this.componentPath = params.componentPath || '';
		this.parameters = params.parameters || '';
		this.displayProductsInSlider = params.displayProductsInSlider || '';

		if (params.navParams) {
			this.navParams = {
				NavNum: params.navParams.NavNum || 1,
				NavPageNomer: parseInt(params.navParams.NavPageNomer) || 1,
				NavPageCount: parseInt(params.navParams.NavPageCount) || 1
			};
		}

		this.bigData = params.bigData || { enabled: false };
		this.container = document.querySelector('[data-entity="' + params.container + '"]');
		this.itemDataEntity = params.container || '';
		this.showMoreButton = null;
		this.showMoreButtonMessage = null;
		this.numberSlidesToShow = params.numberSlidesToShow;
		this.itemsInCart = params.itemsInCart;

		if (this.bigData.enabled && BX.util.object_keys(this.bigData.rows).length > 0) {
			BX.cookie_prefix = this.bigData.js.cookiePrefix || '';
			BX.cookie_domain = this.bigData.js.cookieDomain || '';
			BX.current_server_time = this.bigData.js.serverTime;

			BX.ready(BX.delegate(this.bigDataLoad, this));
		}

		if (params.initiallyShowHeader) {
			BX.ready(BX.delegate(this.showHeader, this));
		}

		if (params.deferredLoad) {
			BX.ready(BX.delegate(this.deferredLoad, this));
		}

		if (params.lazyLoad) {
			this.showMoreButton = document.querySelector('[data-use="show-more-' + this.navParams.NavNum + '"]');
			this.showMoreButtonMessage = this.showMoreButton.innerHTML;
			BX.bind(this.showMoreButton, 'click', BX.proxy(this.showMore, this));
		}
	};

	window.JCCatalogSectionComponent.prototype =
	{
		checkButton: function () {
			if (this.showMoreButton) {
				if (this.navParams.NavPageNomer == this.navParams.NavPageCount) {
					BX.remove(this.showMoreButton);
				}
				else {
					this.container.appendChild(this.showMoreButton);
				}
			}
		},

		enableButton: function () {

			if (this.showMoreButton) {
				BX.removeClass(this.showMoreButton, 'disabled');
				this.showMoreButton.innerHTML = this.showMoreButtonMessage;
			}
		},

		disableButton: function () {

			if (this.showMoreButton) {
				BX.addClass(this.showMoreButton, 'disabled');
				this.showMoreButton.innerHTML = BX.message('BTN_MESSAGE_LAZY_LOAD_WAITER');
			}
		},

		loadOnScroll: function () {

			var scrollTop = BX.GetWindowScrollPos().scrollTop,
				containerBottom = BX.pos(this.container).bottom;

			if (scrollTop + window.innerHeight > containerBottom) {
				this.showMore();
			}
		},

		showMore: function () {
			if (this.navParams.NavPageNomer < this.navParams.NavPageCount) {
				var data = {};
				data['action'] = 'showMore';
				data['PAGEN_' + this.navParams.NavNum] = this.navParams.NavPageNomer + 1;

				if (!this.formPosting) {
					this.formPosting = true;
					this.disableButton();
					this.sendRequest(data);
				}
			}
		},

		// TODO bigDataLoad
		bigDataLoad: function () {
			var url = 'https://analytics.bitrix.info/crecoms/v1_0/recoms.php',
				data = BX.ajax.prepareData(this.bigData.params);

			if (data) {
				url += (url.indexOf('?') !== -1 ? '&' : '?') + data;
			}

			var onReady = BX.delegate(function (result) {
				this.sendRequest({
					action: 'deferredLoad',
					bigData: 'Y',
					items: result && result.items || [],
					rid: result && result.id,
					count: this.bigData.count,
					rowsRange: this.bigData.rowsRange,
					shownIds: this.bigData.shownIds
				});
			}, this);
			//
			debugger;
			BX.ajax({
				method: 'GET',
				dataType: 'json',
				url: url,
				timeout: 3,
				onsuccess: onReady,
				onfailure: onReady
			});
		},

		deferredLoad: function () {
			this.sendRequest({ action: 'deferredLoad' });
		},

		sendRequest: function (data) {

			var defaultData = {
				siteId: this.siteId,
				template: this.template,
				parameters: this.parameters
			};

			if (this.ajaxId) {
				defaultData.AJAX_ID = this.ajaxId;
			}

			BX.ajax({
				url: this.componentPath + '/ajax.php' + (document.location.href.indexOf('clear_cache=Y') !== -1 ? '?clear_cache=Y' : ''),
				method: 'POST',
				dataType: 'json',
				timeout: 60,
				data: BX.merge(defaultData, data),
				onsuccess: BX.delegate(function (result) {
					if (!result || !result.JS)
						return;

					BX.ajax.processScripts(
						BX.processHTML(result.JS).SCRIPT,
						false,
						BX.delegate(function () { this.showAction(result, data); }, this)
					);
					this.heightAlignment();
				}, this)
			});
		},

		showAction: function (result, data) {

			if (!data)
				return;

			switch (data.action) {
				case 'showMore':
					this.processShowMoreAction(result);
					break;
				case 'deferredLoad':
					this.processDeferredLoadAction(result, data.bigData === 'Y');
					break;
			}
		},

		processShowMoreAction: function (result) {

			this.formPosting = false;
			this.enableButton();

			if (result) {
				this.navParams.NavPageNomer++;
				this.processItems(result.items);
				this.processPagination(result.pagination);
				this.processEpilogue(result.epilogue);
				this.checkButton();
			}
		},

		processDeferredLoadAction: function (result, bigData) {

			if (!result)
				return;

			var position = bigData ? this.bigData.rows : {};

			this.processItems(result.items, BX.util.array_keys(position));

			if (this.bigData.count !== "0" && this.displayProductsInSlider === "Y") {
				this.sliderForItemList();
				this.heightAlignment();
			}

			this.animetedItems();
		},

		processItems: function (itemsHtml, position) {

			if (!itemsHtml)
				return;

			var processed = BX.processHTML(itemsHtml, false),
				temporaryNode = BX.create('DIV');

			var items, k, origRows;

			temporaryNode.innerHTML = processed.HTML;
			items = temporaryNode.querySelectorAll('[data-entity="items-row"]');

			if (items.length) {
				this.showHeader(true);

				for (k in items) {
					if (items.hasOwnProperty(k)) {
						origRows = position ? this.container.querySelectorAll('[data-entity="items-row"]') : false;
						if (origRows && BX.type.isDomNode(origRows[position[k]])) {
							origRows[position[k]].parentNode.insertBefore(items[k], origRows[position[k]]);
						}
						else {
							this.container.appendChild(items[k]);
						}
					}
				}
			}
			BX.ajax.processScripts(processed.SCRIPT);
		},

		processPagination: function (paginationHtml) {

			if (!paginationHtml)
				return;

			var pagination = document.querySelectorAll('[data-pagination-num="' + this.navParams.NavNum + '"]');
			for (var k in pagination) {
				if (pagination.hasOwnProperty(k)) {
					pagination[k].innerHTML = paginationHtml;
				}
			}
		},

		processEpilogue: function (epilogueHtml) {

			if (!epilogueHtml)
				return;

			var processed = BX.processHTML(epilogueHtml, false);
			BX.ajax.processScripts(processed.SCRIPT);
		},

		showHeader: function (animate) {
			if ((this.bigData.count === "0" || this.bigData.count === undefined) && this.displayProductsInSlider === "Y") {
				this.sliderForItemList();
			}
			this.heightAlignment();
			var parentNode = BX.findParent(this.container, { attr: { 'data-entity': 'parent-container' } }),
				header;

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
				slidesToShow: (this.numberSlidesToShow ? this.numberSlidesToShow : '4'),
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
				overallHeight = highestItem + highestSkuBlock + 1;

				// Присваиваем полученую высоту обертке для слайдера + отрицательный margin
				for (var parentNode of parentNodesSlider) {
					parentNode.style.height = overallHeight + 'px';
					parentNode.style.marginBottom = '-' + highestSkuBlock + 'px';
				}

				// Присваиваем стрелкам слайдера абсолютное значение top (если присвоить %, то стрелки)
				for (var arrow of sliderArrows) {
					arrow.style.top = (highestItem / 2) + (arrow.clientHeight * 2) + 'px';
				}
			}
		},
		animetedItems: function () {
			let k, items = document.querySelectorAll('[data-entity="items-row"]');
			new BX.easing({
				duration: 2000,
				start: { opacity: 0 },
				finish: { opacity: 100 },
				transition: BX.easing.makeEaseOut(BX.easing.transitions.quad),
				step: function (state) {
					for (var k in items) {
						if (items.hasOwnProperty(k)) {
							items[k].style.opacity = state.opacity / 100;
						}
					}
				},
				complete: function () {
					for (var k in items) {
						if (items.hasOwnProperty(k)) {
							items[k].removeAttribute('style');
						}
					}
				}
			}).animate();
		}
	};
})();

$(function () {
	$(document).mouseup(function (e) {
		var div = $(".catalog-sorttype");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".sorttype").removeClass("chosen-with-drop");
			$(".sorttype").removeClass("chosen-container-active");
		}
		else {
			$(".sorttype").addClass("chosen-with-drop");
			$(".sorttype").addClass("chosen-container-active");
		}
	});

	$(document).mouseup(function (e) {
		var div = $(".product-count");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$(".product-count").removeClass("chosen-with-drop");
			$(".product-count").removeClass("chosen-container-active");
		}
		else {
			$(".product-count").addClass("chosen-with-drop");
			$(".product-count").addClass("chosen-container-active");
		}
	});

	$('.items-list').on('click', (e) => {
		$(e.target).closest('.js-add-basket').addClass('in-the-cart')
	});
});