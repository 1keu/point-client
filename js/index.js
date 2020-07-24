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

var selectedCon = document.querySelector(".selected-container");
var arrowIcon = document.querySelector(".up-icon");
var selectedHeader = document.getElementById("selected-header");
console.log(selectedHeader.addEventListener("click", showHide))
function showHide() {
    console.log("g")
    selectedCon.classList.toggle("selected-open")
    arrowIcon.classList.toggle("up-icon-reverse")
}
