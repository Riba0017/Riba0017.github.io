
$(document).ready(() => {
    $('.menu-link').on('click', () => {
        $('.main-nav').addClass('mob-nav').removeClass('main-nav');
        $('.menu-item').addClass('mob-item').removeClass('menu-item');
        $('.menu-list').addClass('mob-list').removeClass('menu-list');
        $('.mob-list li:last-child').removeClass('button').addClass('m-button');
        $('.mob-nav').addClass('open-nav');
    });
    $('.mob-item').on('click', () => {
        $('.mob-nav').addClass('main-nav').removeClass('mob-nav');
        $('.mob-item').addClass('menu-item').removeClass('mob-item');
        $('.mob-list').addClass('menu-list').removeClass('mob-list');
        $('.menu-list li:last-child').removeClass('m-button').addClass('button');
        $('.menu-nav').removeClass('open-nav');
    });

});