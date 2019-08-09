
function initPushNotificationsPopupAsker() {
    // проверка поддержки уведомлений браузером
    if ("Notification" in window) {
        pushNotificationShower();
    } else {
        console.log("This browser does not support desktop notification");
    }
}

function showPopap() {
    // создание попапа
    $(document).append(' <div id="overlay" class="overlay">\n' +
        '        <div class="popup-push-container js-popup">\n' +
        '            <div class="popup-push-head">\n' +
        '                <img src="/style/images/Img-Block.png" alt="Подписка на блог">\n' +
        '            </div>\n' +
        '            <div class="popup-push-body">\n' +
        '                <h3 class="popup-push-title">Хотите получать уведомления о новых статьях в блоге?</h3>\n' +
        '                <p class="popup-push-text">Разрешите присылать вам Push&#8209;уведомления</p>\n' +
        '                <button type="button" class="ask-later-button js-button">Потом</button>\n' +
        '                <button type="button" class="sp_notify_prompt agree-button js-button">ОК</button>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>');


    var $popup = $('.js-popup');
    var $overlay = $('#overlay');

    $overlay.delay(2000).fadeIn();
    $popup.delay(2000).fadeIn();
}

function pushNotificationShower() {

    console.log(Notification.permission);

    // проверка: есть ли уже активная подписка на уведомления
    if (Notification.permission === "granted" || Notification.permission === "denied") {
        if(localStorage.getItem('time')) { localStorage.removeItem('time') }
        if(localStorage.getItem('userStatus')) { localStorage.removeItem('userStatus') }
        return;
    }
    // проверка: запрос отклонен в прошлом или нет
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        // проверка: это первый визит пользователя или он уже нажимал кнопку "потом"
        if(localStorage.getItem('userStatus')) {
            var lastVisitDate = localStorage.getItem('time');
            var remaneTime = + new Date() - parseInt(lastVisitDate);
            var delayTime = 60000; //время отсрочки для повторного показа попапа (1 мин для теста)
            if(remaneTime >= delayTime) {
                // создаем и показываем первый попап с уведомлением, устанавливаем обработчики событий
                showPopap();
                pushNotificationsReminder();
            } else {
                return;
            }
        } else {
            // создаем и показываем первый попап с уведомлением, устанавливаем обработчики событий
            showPopap();
            pushNotificationsReminder();
        }
    }
}

function pushNotificationsReminder() {
    var $choiceBtn = $('.js-button');

    // действия при нажатии кнопки
    $choiceBtn.on('click', function() {
        //добавление статуса клиента и текущей даты
        localStorage.setItem('userStatus', 'askLater');
        var date = + new Date();
        localStorage.setItem('time', date);
    });
}

$(document).ready(function() {
    initPushNotificationsPopupAsker();
})

