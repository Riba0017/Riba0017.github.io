


function fadeOut(el) {
    let opacity = 1;
    let timer = setInterval(function() {
        if(opacity <= 0.1) {
            clearInterval(timer);
            el.style.opacitye = '0';
        }

        el.style.opacity = opacity;
        opacity -= opacity * 0.1;
    }, 10);
}

function fadeIn(el) {
    let opacity = 0.01;
    el.style.opacity = '1';
    let timer = setInterval(function() {
        if(opacity >= 1) {
            clearInterval(timer);
        }
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {

    let holder = document.querySelector('.js-slider__container'),
        bottomImage = document.querySelectorAll('.js-slider__image'),
        dots = document.querySelectorAll('.js-slider__dot'),
        slideWidth = screen.width,
        touchStartX,
        touchMoveX,
        moveX,
        index = 0,
        longTouch;

    function bindUIEvents() {
        holder.addEventListener('touchstart', function (evt) {
            start(evt);
        });
        holder.addEventListener('touchmove', function (evt) {
            move(evt)
        });
        holder.addEventListener('touchend', function (evt) {
            end(evt);
        });
    }

    function start(evt) {
        longTouch = false;
        setTimeout(() => {
            return longTouch = true;
        }, 250);

        touchStartX = evt.touches[0].pageX;

        let animate = document.querySelectorAll('.animate');
        if(animate.length > 0) {
            animate.forEach((elem) => {
                elem.classList.remove('animate');
            })
        }
    }

    function move(evt) {
        touchMoveX = evt.touches[0].pageX;
        moveX = index * slideWidth + (touchStartX - touchMoveX);

        if(moveX < 600) {
            holder.style.transform = 'translate3d(-' + moveX + 'px,0,0)';
        }
    }

    function end(evt) {
        let absMove = Math.abs(index * slideWidth - moveX);
        if(absMove > slideWidth/2 || longTouch === false) {
            if(moveX > index * slideWidth && index < 2) {
                index++;
            } else if(moveX < index * slideWidth && index > 0) {
                index--;
            }
        }
        let distance = index * slideWidth;
        let slide = distance / slideWidth; //index of active slide

        holder.classList.add('animate');
        holder.style.transform = 'translate3d(-' + distance + 'px,0,0)';


        bottomImage.forEach((elem) => {
            let param = index * (elem.offsetWidth + 10);

            elem.classList.add('animate');
            elem.style.transform = 'translate3d(-' + param + 'px,0,0)';
        });

        fadeIn(bottomImage[slide]);
        dots.forEach((elem, num) => {
            if(num !== slide) {
                elem.classList.remove('slider__dot--active');
            } else {
                elem.classList.add('slider__dot--active');
            }
        });

        if(slide - 1 >= 0) {
            fadeOut(bottomImage[slide - 1]);
        }
    }

    bindUIEvents();
});