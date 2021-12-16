import Swiper from 'swiper/swiper-bundle.min.js';

const gallerySlider = document.querySelector('.product-gallery__slider');
const galleryThumbs = document.querySelector('.product-gallery__thumbs');
if (gallerySlider && galleryThumbs) {
    const galleryThumbsSwiper = new Swiper(galleryThumbs, {
        slidesPerView: 5,
        breakpoints: {
            992: {
                direction: 'vertical',
            }
        }
    });

    new Swiper(gallerySlider, {
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 500,
        thumbs: {
            swiper: galleryThumbsSwiper,
        },
        navigation: {
            nextEl: '.product-gallery__slider-next',
            prevEl: '.product-gallery__slider-prev',
        },
        pagination: {
            el: ".product-gallery__slider-pagination",
            clickable: true,
        }
    });
} else if (gallerySlider) {
    new Swiper(gallerySlider, {
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 500,
        navigation: {
            nextEl: '.product-gallery__slider-next',
            prevEl: '.product-gallery__slider-prev',
        },
        pagination: {
            el: ".product-gallery__slider-pagination",
            clickable: true,
        }
    });
}