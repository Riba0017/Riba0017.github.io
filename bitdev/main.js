let arrOfBlocks = document.getElementsByClassName('animate-block');

let Visible = function (target) {
    let innerElem = target.querySelector('.block-item');
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom &&
        // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left &&
        // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        innerElem.style.transform = 'translate(0px)';
        innerElem.style.opacity = '1';

    }
};

let showImmediately = function (arr) {
    for(let i = 0; i < arr.length; i++) {
        Visible (arr[i]);
    }
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
    showImmediately(arrOfBlocks);
});

// А также запустим функцию сразу, если элемент изначально видно
window.addEventListener('DOMContentLoaded', () => {
    showImmediately(arrOfBlocks);
});

//Работа с кнопкой-бургером и левым меню
let mainMenu = document.querySelector('.main-menu');
let mainContent = document.querySelector('.content');
let buttonContainer = document.querySelector('.button-container');
let burgerBtn = document.querySelector('.burger-button');

if ('ontouchstart' in window) {
    buttonContainer.addEventListener('touched', () => {
        burgerBtn.classList.toggle('close');
        mainMenu.classList.toggle('transition');
        mainContent.classList.toggle('transition');
    });
}
    buttonContainer.addEventListener('click', () => {
        burgerBtn.classList.toggle('close');
        mainMenu.classList.toggle('transition');
        mainContent.classList.toggle('transition');
    });




