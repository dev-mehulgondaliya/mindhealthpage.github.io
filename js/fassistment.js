export default (function () {
  $(document).ready(function () {
    var fswiper = new Swiper(".fassistment", {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  });
})();
