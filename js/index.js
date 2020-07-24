var galleryThumbs = new Swiper('.tab-menu', {
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideActiveClass: 'swiper-slide-active'
});
galleryThumbs.on('tap', function () {
    var current = galleryTop.activeIndex;
    galleryThumbs.slideTo(current, 500, true);
});
var galleryTop = new Swiper('.tab-contents', {
    autoHeight: true,
    thumbs: {
        swiper: galleryThumbs
    }
});

var historyThumbs = new Swiper('.history-tab-menu', {
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideActiveClass: 'swiper-slide-active'
});
historyThumbs.on('tap', function () {
    var current = historyTop.activeIndex;
    historyThumbs.slideTo(current, 500, true);
});
var historyTop = new Swiper('.history-tab-contents', {
    autoHeight: true,
    thumbs: {
        swiper: historyThumbs
    }
});

function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
    var hamburgerClose = document.getElementById('js-close');
    hamburgerClose.classList.add('hide');
    hamburger.addEventListener('click', function () {
        body.classList.add('nav-open');
        hamburger.classList.add('hide');
        hamburgerClose.classList.remove('hide');
    });
    hamburgerClose.addEventListener('click', function () {
        body.classList.remove('nav-open');
        hamburger.classList.remove('hide');
        hamburgerClose.classList.add('hide');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
        hamburger.classList.remove('hide');
        hamburgerClose.classList.add('hide');
    });
}
toggleNav();
