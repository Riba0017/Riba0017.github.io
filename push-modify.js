
function initPushNotificationsPopupAsker() {
    // проверка поддержки уведомлений браузером
    if ("Notification" in window) {
        pushNotificationShower();
    } else {
        console.log("This browser does not support desktop notification");
    }
}

function showPopap() {
    $(document).ready(function() {
        // создание попапа
       
        var $overlay = $('<div></div>').appendTo('body').attr('id', 'pushOverlay').addClass('push-overlay');
        var $container = $('<div></div>').appendTo($overlay).addClass('popup-push-container js-popup');
        var $popupHead = $('<div></div>').appendTo($container).addClass('popup-push-head');
        var $popupBody = $('<div></div>').appendTo($container).addClass('popup-push-body');
        $('<h3>Хотите получать уведомления о новых статьях в блоге?</h3>').appendTo($popupBody).addClass('popup-push-title');
        $('<p>Разрешите присылать вам Push&#8209;уведомления</p>').appendTo($popupBody).addClass('popup-push-text');
        $('<button>Потом</button>').appendTo($popupBody).attr('type', 'button').addClass('ask-later-button js-button');
        $('<button>ОК</button>').appendTo($popupBody).attr('type', 'button').addClass('sp_notify_prompt agree-button js-button');

        // активация попапа
        $('#pushOverlay').delay(2000).fadeIn();
        $('.js-popup').delay(2000).fadeIn();
        pushNotificationsReminder()
    })
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
            } else {
                return;
            }
        } else {
            // создаем и показываем первый попап с уведомлением, устанавливаем обработчики событий
            showPopap();
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
        // закрываем попап
        $('#pushOverlay').fadeOut();
        $('.js-popup').fadeOut();
    });
}

$(document).ready(function() {
    initPushNotificationsPopupAsker();
})

//demo

function addEventToGTA() {
    var demoButton = $('.js-demo-btn');
    // demo request button
//     demoButton.on('click', function() {
//         if (dataLayer && typeof dataLayer.push === 'function') {
//             dataLayer.push({'event':'request-demo'});
//         }
//     });
    demoButton.bind('click', function() {
        $.ajax({
            url: 'http://192.168.88.124/support/contact_us/index.php',
            type: 'GET',
            data: ({ request: 'demo' }),
            dataType: 'html',
            success: funcSuccess
        })
    })
}

function funcSuccess(data) {
    return console.log(data);
}

