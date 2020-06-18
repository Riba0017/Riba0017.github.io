

export default function formAction() {
    let actionButton = document.querySelector('.js-promo__button');

    actionButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        checkInputValue();
    })
}

function checkInputValue() {
    let inputField = document.querySelector('.js-promo__input'),
        errorMessage = 'Введите номер в формате +375290000000!',
        successMessage = 'Ваше сообщение было отправлено!',
        value = inputField.value;

    /\+\d{12}$/.test(value) ? showMessage(successMessage, '#abf496') : showMessage(errorMessage, '#dc143c');
}

function showMessage(message = 'Что-то пошло не так, но мы исправим!', color = 'pink') {
    let modalWindow = document.querySelector('.js-promo__modal'),
        promoMessage = document.querySelector('.js-promo__message'),
        windowWidth = window.innerWidth;

    promoMessage.innerHTML = message;
    modalWindow.style.backgroundColor = color;

    if(windowWidth < 850) {
        modalWindow.style.zIndex = '10';
        modalWindow.style.opacity = '1';
    } else {
        modalWindow.style.right = '-100%';
        modalWindow.style.opacity = '1';
    }

    setTimeout(() => {
        if(windowWidth < 850) {
            modalWindow.style.zIndex = '0';
            modalWindow.style.opacity = '0';
        } else {
            modalWindow.style.right = '30px';
        }
    }, 3000)
}