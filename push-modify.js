
function initPushNotificationsPopupAsker() {
    var $cancelButton = $('.js-ask-later-button');
    var $popup = $('.js-popup');
    var $overlay = $('#overlay');

    $cancelButton.on('click', function() {
        $overlay.fadeOut();
        $popup.fadeOut();
    });

    // Let's check if the browser supports notifications
    if ("Notification" in window) {
        notifyMe();
    } else {
        console.log("This browser does not support desktop notification");
    }
}

function notifyMe() {
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
        //показываем первый попап с уведомлением
        //здесь должен быть вызов функции создания и показа попапа
        $overlay.delay(2000).fadeIn();
        $popup.delay(2000).fadeIn();
    } 
    // если запрос на подписку был отклонен ранее
    else {
        return;
    }
}

$(document).ready(function() {
    initPushNotificationsPopupAsker();
})

