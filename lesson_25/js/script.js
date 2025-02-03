"use strict"

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// 	при повторному кліку прибрати клас

// Задача №2
// Дано в css / scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.


// 	Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// 	Задача №4
// Дано в html: текст, елемент з класом item, текст.Так, що елемент з класом item
// за межами в'юпотрта. Створити функцію яка будує інтервал який буде змінювати
// контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має
// задаватись в дата атрибутах елемента item. Функція має запустатить коли
// ми доскролюємо до елементу item(його видно), і не запускатись повторно.

// Задача №1

// document.addEventListener("click", documentAction)
// function documentAction(e) {
// 	const elementTarget = e.target
// 	console.log(elementTarget);
// 	if (elementTarget.closest('.item')) {
// 		const currentElement = elementTarget.closest('.item')
// 		changeClass(currentElement)
// 	}
// }
// function changeClass(element) {
// 	element.classList.toggle('active')
// }

// Задача №2

// window.addEventListener("load", pageLoaded)
// function pageLoaded(e) {
// 	document.documentElement.classList.add('loaded')
// }

// Задача №3

// const header = document.querySelector('.header')
// const footer = document.querySelector('.footer')
// console.log(header);
// if (header && footer) {
// 	function changeColor(e) {
// 		footer.classList.toggle('active', event.type === 'mouseenter')
// 	}
// 	header.addEventListener('mouseenter', changeColor)
// 	header.addEventListener('mouseleave', changeColor)
// }

// Задача №4

// document.addEventListener("DOMContentLoaded", function () {
// 	let item = document.querySelector(".item")
// 	if (!item) return
// 	let delay = parseInt(item.getAttribute("data-delay")) || 1000
// 	let maxNumber = parseInt(item.getAttribute("data-max")) || 10
// 	let observer
// 	function startCounter() {
// 		let count = 0
// 		item.textContent = count
// 		let interval = setInterval(() => {
// 			item.textContent = count
// 			if (count >= maxNumber) {
// 				clearInterval(interval)
// 			} else {
// 				count++
// 			}
// 		}, delay)
// 	}
// 	const itemScrollActions = () => {
// 		const itemPositionTop = item.getBoundingClientRect().top - window.innerHeight;

// 		if (itemPositionTop <= 0) {
// 			startCounter(item);
// 			removeEventListener(`scroll`, itemScrollActions);
// 		}
// 	};

// 	if (item) {
// 		window.addEventListener(`scroll`, itemScrollActions);
// 		itemScrollActions();
// 	}
// })