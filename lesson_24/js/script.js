"use strict"

// Задача №1
// Отримати в константу елемент < body >

// 	Задача №2
// Написати функцію, яка додає в < body > список UL
// з певною кількістю LI(кількість має передаватись як параметр функції, також мати значення за замовченням)

// Задача №3
// Додати до елементу < body > класс loaded.
// Потім перевірити чи є клас loaded у елемента < body >
// 	і, якщо є, додати стиль кольору тесту зедлений.

// 		Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// 	та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

// 		Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

//Задача №1

// const body = document.body
// console.log(body);

//Задача №2

// const body = document.body

// function addList(item = 6) {
// 	if (item > 0) {
// 		const list = document.createElement('ul')
// 		for (let i = 1; i <= item; i++) {
// 			const li = document.createElement('li');
// 			li.textContent = `Елемент №${i}`;
// 			list.appendChild(li)
// 		}
// 		document.body.appendChild(list)
// 	}
// }

// addList(7)

//Задача №3

// const body = document.body

// body.setAttribute('class', 'loaded')

// console.log(body)
// if (body.hasAttribute('class', 'loaded')) {
// 	body.style.color = 'green'
// }

//Задача №4

// const liElements = document.querySelectorAll('.list__item')
// console.log(liElements)
// if (liElements.length) {
// 	liElements.forEach((liElement, index) => {
// 		liElement.classList.add('active')
// 		liElement.textContent = `Елемент №${++index}`
// 	})
// }

//Задача №5

// const button = document.querySelector('.button')
// function scrollToButton(element) {
// 	element.scrollIntoView({
// 		block: "start",
// 		inline: "nearest",
// 		behavior: "smooth"
// 	})
// }
// scrollToButton(button)

//Задача №6

// const link = document.querySelector('.link')
// link.setAttribute('data-speed', '100')
// const speed = parseFloat(link.dataset.speed)
// console.log(speed);
// if (link){
// 	if (speed < 200 && speed > 0) {
// 		link.style.color = 'red'
// 	}
// }