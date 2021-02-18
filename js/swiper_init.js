var swiper = new Swiper('.swiper-container', {
    breakpoints: {

        320: {
            slidesPerView: 1
        },
        660: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true
});


var swiper = new Swiper('.swiper-container-promo', {
    breakpoints: {

        320: {
            slidesPerView: 1
        },
        660: {
            slidesPerView: 4,
            spaceBetween: 16
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 16
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true
});

