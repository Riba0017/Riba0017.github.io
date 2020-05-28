
export default function initTabMenu() {
    let tabs = document.querySelectorAll('.tab-menu__link'),
        cards = document.querySelectorAll('.js-card');
    /*сделано с учетом, что одна карточка может принадлежать разным категориям.
    * Но также можно реализовать выборку с помощью отдельных меток, чтобы исключить цикл в цикле.*/

    /* default sorting */
    cards.forEach((elem) => {
        let filter = elem.dataset.filter;
        let filterWords = filter.split(' ');
        let filtered = filterWords.includes('best-cards');
        !filtered ? elem.classList.add('card--hidden') : elem.classList.add('card--visible');
    });


    tabs.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            let clickedElementId = e.target.dataset.link;

            cards.forEach((elem) => {
                let filter = elem.dataset.filter;
                let filterWords = filter.split(' ');
                let filtered = filterWords.includes(clickedElementId);

                if(filtered) {
                    if(elem.classList.contains('card--hidden')) {
                        elem.classList.remove('card--hidden');
                    }
                    elem.classList.add('card--visible');
                } else {
                    if(elem.classList.contains('card--visible')) {
                        elem.classList.remove('card--visible');
                    }
                    elem.classList.add('card--hidden')
                }
            })
        })
    });
}