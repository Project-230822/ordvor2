document.addEventListener("DOMContentLoaded", () => {
	let firstCity, firstStore, allStores, listOfCity, dataId;
	firstCity = document.querySelector('.store-listings__city');
	firstStore = document.querySelector('.store-listings__list-of-store');
	allStores = document.querySelectorAll('.store-listings__list-of-store');
	listOfCity = document.querySelector('.store-listings__list-of-cities');

	if (firstCity.dataset.id === firstStore.dataset.id) {
		firstCity.classList.add('store-listings__city_active');
		firstStore.classList.add('store-listings__list-of-store_active');
	}
	listOfCity.addEventListener('click', function (event) {
		if (event.target.classList.contains('store-listings__city')) {
			// Удаляем со всем элементов магазинов класс активности
			allStores.forEach((store) => {
				store.classList.remove('store-listings__list-of-store_active');
			});
			// Удаляем со всем элементов городов класс активности
			listOfCity.querySelectorAll('.store-listings__city').forEach((city) => {
				city.classList.remove('store-listings__city_active');
			});
			// Получаем data-id активных элементов
			dataId = event.target.getAttribute('data-id');
			// Присваиваем элементу списку магазинов класс активности
			document.querySelector(".store-listings__list-of-store[data-id='" + dataId + "']").classList.add('store-listings__list-of-store_active');
			// Присваиваем элементу городу класс активности
			document.querySelector(".store-listings__city[data-id='" + dataId + "']").classList.add('store-listings__city_active');
		}
	});
});
