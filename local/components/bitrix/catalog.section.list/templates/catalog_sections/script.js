let showAllSections = document.querySelectorAll('.categories-list__show-all-sections');
for (let i = 0; i < showAllSections.length; i++) {
	showAllSections[i].onclick = function (e) {
		console.log(e.target);
		e.target.previousElementSibling.classList.toggle('categories-list__sections-list_show')
	}
}