
export default function initTabMenu() {
    let tabs = document.querySelectorAll('.tab-menu__link');
    /*сделано с учетом, что одна карточка может принадлежать разным категориям.
    * Но также можно реализовать выборку с помощью отдельных меток, чтобы исключить цикл в цикле.*/
    tabs.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            let clickedElementId = e.target.dataset.link,
                cards = document.querySelectorAll('.js-card');

            cards.forEach((elem) => {
                let filter = elem.dataset.filter;
                let filterWords = filter.split(' ');
                let filtered = filterWords.includes(clickedElementId);
                if(!filtered) {
                    elem.classList.toggle('card--hidden')
                } else {
                    elem.classList.toggle('card--visible')
                }
            })
        })
    });
}