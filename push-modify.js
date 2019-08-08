
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
            //здесь должно быть обращение к таймеру
            var lastVisitDate = localStorage.getItem('time');
            var remaneTime = new Date()/1000 - parseInt(lastVisitDate);
            var delayTime = 60000; //время отсрочки для повторного показа попапа (0,5 мин)
            if(remaneTime >= delayTime) {
                // показываем первый попап с уведомлением
                // здесь должен быть вызов функции создания и показа попапа
                $overlay.delay(2000).fadeIn();
                $popup.delay(2000).fadeIn();
                pushNotificationsReminder();
            } else {
                return;
            }
        } else {
            // показываем первый попап с уведомлением
            // здесь должен быть вызов функции создания и показа попапа
            $overlay.delay(2000).fadeIn();
            $popup.delay(2000).fadeIn();
            pushNotificationsReminder();
        }
    }
    // если запрос на подписку был отклонен ранее
    else {
        return;
    }
}

function pushNotificationsReminder() {
    // var $agreeBtn = $('.js-agree-button');
    var $remindBtn = $('.js-ask-later-button');

    // действия при нажатии кнопки "ОК"
    // вызов браузерного окна подписки по классу стороннего сервиса

    // действия при нажатии кнопки "Потом"
    $remindBtn.on('click', function() {
        //добавление статуса клиента и текущей даты
        var userStatus = localStorage.setItem('userStatus', 'askLater');
        var date = new Date()/1000;
        var lastVisit = localStorage.setItem('time', date);
    })
}

$(document).ready(function() {
    initPushNotificationsPopupAsker();
})

