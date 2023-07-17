(function () {
	'use strict';
	if (!!window.JCCatalogSectionComponentTab)
		return;

	window.JCCatalogSectionComponentTab = function (params) {
		this.arParamsSigned = params.arParamsSigned;
		this.templateFolder = params.templateFolder;
		this.componentName = params.componentName;
		this.parentComponentObject = params.parentComponentObject;
		this.labelListContainer = document.querySelector('.label-list');
		this.isClicked = false;
		this.init();
	};

	window.JCCatalogSectionComponentTab.prototype =
	{
		init: function () {
			let clickHandler = this.showSelection.bind(this);
			this.labelListContainer.addEventListener('click', (event) => {
				clickHandler(event.target);
			});
			this.showFirstContainer();
		},
		sendRequest: function (element, parentContainer, elementList) {

			let promise = BX.ajax.promise({
				url: this.templateFolder + "/ajax.php",
				method: 'POST',
				dataType: 'html',
				data: {
					filterKey: element.dataset.key,
					parameters: this.arParamsSigned,
					componentName: this.componentName,
					parentComponentObject: this.parentComponentObject
				},
				emulateOnload: true
			});

			promise
				.then(function (response) {
					let parseHtmlShell = $.parseHTML(response);
					parentContainer.append(parseHtmlShell[3]);
					element.classList.add('label-list__item_clicked');
					setTimeout((function () {
						elementList.classList.add('section-containers__element-list_hide-stub');
					}), 100);
				})
				.catch(function () {
				});
		},
		showSelection: function (element) {
			if (element.classList.contains('label-list__item')) {
				let parentContainer, label, elementList;
				parentContainer = document.querySelector(".section-containers__element-list[data-code='" + element.dataset.code + "']");
				label = document.querySelector(".label-list__item[data-code='" + element.dataset.code + "']");
				elementList = document.querySelector(".section-containers__element-list[data-code='" + element.dataset.code + "']");

				document.querySelectorAll("[data-code]").forEach((elementTab) => {
					elementTab.classList.remove('section-containers__element-list_active');
					elementTab.classList.remove('label-list__item_active');
				});

				label.classList.add('label-list__item_active');

				elementList.classList.add('section-containers__element-list_active');
				if (!element.classList.contains('label-list__item_clicked')) {
					this.sendRequest(element, parentContainer, elementList);
				}
			}
		},
		showFirstContainer: function () {
			if (!this.isClicked) {
				document.querySelector('.label-list__item').click();
				this.isClicked = true;
			}
		}
	}
})();