
$(document).ready(() => {
    $('.menu-link').on('click', () => {
        $('.mob-nav').addClass('open-nav');
    }).on('swiperight', () => {
        $('.mob-nav').removeClass('open-nav');
    });
});