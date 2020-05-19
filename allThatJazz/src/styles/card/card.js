

document.addEventListener('DOMContentLoaded', () => {

    let items = document.querySelectorAll(".item"),
        startingX,
        touchEndX;

    function saveEvent() {
        items.forEach((item) => {
            let margin = getComputedStyle(item).marginLeft,
                num = margin.slice(0, margin.length-2),
                number = Number(num);

            item.addEventListener('touchstart', function (evt) {
                toStart(evt, item);
            });
            item.addEventListener('touchmove', function (evt) {
                toMove(evt, number, item)
            });
            item.addEventListener('touchend', function (evt) {
                toEnd(evt, item);
            });
        });
    }

    function toStart(evt, item) {
        startingX = evt.touches[0].pageX;
    }

    function toMove(evt, number, item) {
        let move = evt.touches[0].pageX;
        let left = move - startingX;
        let swipe = number + left;
        if(swipe <= 0) {
            item.style.marginLeft = swipe + 'px';
        }
    }

    function toEnd(evt, item) {
        touchEndX = evt.changedTouches[0].pageX;

        if (touchEndX < startingX) {
            item.style.marginLeft = '-128px';
        }
        if (touchEndX > startingX) {
            item.style.marginLeft = '0px';
            setTimeout(() => {
                let card = item.querySelector('.card__label');
                if(card.classList.contains('card__label--new')) {
                    card.classList.remove('card__label--new')
                }
                if(card.classList.contains('card__label--saved')) {
                    card.classList.remove('card__label--saved')
                } else {
                    card.classList.add('card__label--saved');
                }
                item.style.marginLeft = '-128px';
            }, 500);
        }
    }

    saveEvent();

});
