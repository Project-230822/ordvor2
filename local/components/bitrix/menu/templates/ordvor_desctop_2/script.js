document.addEventListener("DOMContentLoaded", () => {
	if (document.querySelector('.main-nav.done')) {
		document.querySelector('.main-nav.done').classList.remove("done");
	}
	function menu() {
		let minHeightImg = 250;
		let node = document.querySelector('.bx-top-nav-container > .bx-nav-list-1-lvl');
		let ParentItems = document.querySelectorAll('.bx-top-nav-container > .bx-nav-list-1-lvl > .bx-nav-1-lvl');
		let Items = document.querySelectorAll('.bx-top-nav-container > .bx-nav-list-1-lvl > .bx-nav-1-lvl > .bx-nav-2-lvl-container');
		if (node) {
			let nodeProps = node.getBoundingClientRect();

			ParentItems.forEach((item) => {
				if (item.classList.contains("off")) {
					item.classList.remove("off");

				}
			});

			ParentItems.forEach((item) => {
				let positon = item.getBoundingClientRect();
				if (positon["right"] > nodeProps["right"]) {
					item.classList.add("off");
				}
			});
			Items.forEach((item) => {
				item.style.marginLeft = "";
			})
			Items.forEach((item) => {
				let self = item;
				let sublvl4 = item.querySelectorAll('.bx-nav-list-3-lvl');
				sublvl4.forEach((item) => { item.style.display = "block"; });

				if (item.getBoundingClientRect()["right"] > nodeProps["right"]) {
					item.style.left = -(item.getBoundingClientRect()["right"] - nodeProps["right"]) + "px";
				}
				if (item.getBoundingClientRect()["height"] < minHeightImg) {
					item.style.minHeight = minHeightImg + "px";
				}
				sublvl4.forEach((item) => {
					if (self.getBoundingClientRect()["height"] < item.getBoundingClientRect()["height"]) {
						self.style.minHeight = (10 + item.getBoundingClientRect()["height"]) + "px";
					}
				})

				//sublvl4.forEach((item) => {
				//	if (item.getBoundingClientRect()["bottom"] > self.getBoundingClientRect()["bottom"]) {
				//		item.style.marginTop = -(item.getBoundingClientRect()["bottom"] - self.getBoundingClientRect()["bottom"]) + "px";
				//	}
				//});
				item.style.display = "";
				item.querySelector('.bx-nav-list-3-lvl').style.display = "";
				sublvl4.forEach((item) => {
					item.style.display = "";
				})
			})

			if (window.innerWidth <= 990) {
				Items.forEach((item) => {
					let sublvl4 = item.querySelectorAll('.bx-nav-list-3-lvl');
					item.style.marginLeft = "";
					sublvl4.forEach((item) => {
						item.style.marginTop = "";
					});
					item.style.minHeight = "";
				});
			}

		}
	}

	//function resize_menu() {
	//	let a = document.querySelector('.main-na') || document.querySelector('.main-nav');
	//	if (window.innerWidth <= 990) {
	//		a.classList = "main-nav";
	//	}
	//	else {

	//		setTimeout(() => { menu(); }, 100);
	//		a.classList = "main-na";
	//	}
	//}
	//resize_menu();
	//window.onresize = () => {
	//	resize_menu();
	//};
	menu();
});