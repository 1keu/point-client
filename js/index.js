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
