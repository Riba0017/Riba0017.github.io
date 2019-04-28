
function stopping(evt) {
    evt.preventDefault();
}

window.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('burger-button')[0].addEventListener('click', function() {
        document.getElementsByClassName('menu-list')[0].classList.toggle('show');
        document.getElementsByClassName('menu')[0].classList.toggle('selection');
    });

    document.getElementsByClassName('filter-button')[0].addEventListener('click', stopping, false);

    document.getElementsByClassName('filter-small')[0].addEventListener('click', function () {
        document.getElementsByClassName('filter')[0].classList.add('modal-filter');
        document.getElementsByClassName('filter')[0].classList.remove('close');
        document.getElementsByClassName('filter')[0].parentNode.classList.add('shadow');
        document.getElementsByClassName('close-button')[0].classList.add('open');
    });

    document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
        document.getElementsByClassName('filter')[0].classList.remove('modal-filter');
        document.getElementsByClassName('filter')[0].classList.add('close');
        document.getElementsByClassName('shadow')[0].classList.remove('shadow');
        this.classList.remove('open');
    })
});
