
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

    // Let's check whether notification permissions have already been granted
    if (Notification.permission === "granted") {
        console.log('User is already subscribed');
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        $overlay.delay(2000).fadeIn();
        $popup.delay(2000).fadeIn();
//         Notification.requestPermission(function (permission) {
//             // If the user accepts, let's create a notification
//             if (permission === "granted") {
//                 var notification = new Notification("Hi there!");
//             }
//         });
    }
    console.log(Notification.permission);

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}

initPushNotificationsPopupAsker();
