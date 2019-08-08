
function initPushNotificationsPopupAsker() {
    var $cancelButton = $('.js-ask-later-button');
    var $popup = $('.js-popup');
    var $overlay = $('#overlay');

    $cancelButton.on('click', function() {
        $overlay.fadeOut();
        $popup.fadeOut();
    });

    // проверка поддержки уведомлений браузером
    if ("Notification" in window) {
        pushNotificationShower();
    } else {
        console.log("This browser does not support desktop notification");
    }
}

function pushNotificationShower() {
    var $popup = $('.js-popup');
    var $overlay = $('#overlay');
    console.log(Notification.permission);

    // проверка: есть ли уже активная подписка на уведомления
    if (Notification.permission === "granted") {
        console.log('User is already subscribed');
        return;
    }
    // проверка: запрос отклонен в прошлом или нет
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        // проверка: это первый визит пользователя или он уже нажимал кнопку "потом"
        if(localStorage.getItem('userStatus')) {
            return console.log('remind me later');
        }
        // показываем первый попап с уведомлением
        // здесь должен быть вызов функции создания и показа попапа
        $overlay.delay(2000).fadeIn();
        $popup.delay(2000).fadeIn();
        pushNotificationsReminder();
    }
    // если запрос на подписку был отклонен ранее
    else {
        return;
    }
}

function pushNotificationsReminder() {
    // var $agreeBtn = $('.js-agree-button');
    var $remindBtn = $('.js-ask-later-button');

    // по клику на agreeBtn происходит вызов браузерного окна подписки
    // (повешен сервисный класс)

    // создание таймера отсрочки на Х секунд
    $remindBtn.on('click', function() {
        var userStatus = localStorage.setItem('userStatus', askLater)
    })
}

$(document).ready(function() {
    initPushNotificationsPopupAsker();
})

