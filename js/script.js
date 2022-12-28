// dropdown
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
      
		dropDownList.classList.toggle('dropdown__list--visible');
         this.classList.add('dropdown__button--active');
         e.preventDefault();
	});

	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});
});

//Burger menu
let burger = document.querySelector('.header__burger-menu');
let menu = document.querySelector('.header__actions');
let body = document.body;
burger.addEventListener("click", function(e){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

const searchForm = document.querySelector('.header__search');
const category = document.querySelector('.header__link');
const actionsBlock = document.querySelector('.header__actions');
const logo = document.querySelector('.header__logo');

window.addEventListener('load', function(){
   const width = document.documentElement.clientWidth;
   if (width<950){
      actionsBlock.prepend(category);
   };
   if (width>950){
      searchForm.after(category);
   };
})
window.addEventListener('resize',function(){
   const width = document.documentElement.clientWidth;
   if (width<950){
      actionsBlock.prepend(category);
   };
   if (width>950){
      searchForm.after(category);
   };
});

//search icon

const searchIcon = document.querySelector('.header__search-icon');

searchIcon.addEventListener('click', function(){
   searchForm.classList.toggle('active');
})