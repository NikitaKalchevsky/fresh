// ------scroll burger---------------
const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
});
// ----------------------------------------
//BURGER MENU

$(".header__burger").on("click", function () {
  $(".menu").toggleClass("menu__burger--active");
});
$(".burger-close").on("click", function () {
  $(".menu").removeClass("menu__burger--active");
});
//---------------------Search-------------------
$(".user-nav__link-search").on("click", function () {
  $(".header-search__filter-search").toggleClass(
    "header-search__filter-search--active"
  );
});

// -------Burger-catalog-----------
$(".page-catalog__burger").on("click", function () {
  $(".page-catalog__inner").toggleClass("page-catalog__inner--active");
});
$(".filter__burger-close").on("click", function () {
  $(".page-catalog__inner").removeClass("page-catalog__inner--active");
});
// -------------------------------------------------
$(
  ".header-bottom__filter-sort, .header-bottom__filter-sort, .page-catalog__filter-sort, .page-catalog__filter-show, .product-info__buy-num "
).styler();

//slider
$(".top-slider__inner").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"></path></svg></button>',
  nextArrow:
    '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path></svg></button>',

  breakpoint: 993,
  settings: {
    draggable: true,
    arrows: false,
    dots: true,
    autoplay: false,
  },
});
//--------------------------------------------------------------

// $(".product-other__items").slick({
//   dots: false,
//   infinite: true,
//   arrows: true,
//   speed: 500,
//   autoplay: false,
//   autoplaySpeed: 2000,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   padding: "30px",
//   prevArrow:
//     '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="M37.9 46 24.1 32.3l13.8-13.7 2 2-11.8 11.7L39.9 44l-2 2"></path></svg></button>',
//   nextArrow:
//     '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow"><path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path></svg></button>',
// });

// -------------------------------------------------------------

//MIXitUP
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".product__items")) {
    var mixer = mixitup(".product__items");
  }
});
//------------RANGE----------------
var $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 60,
  max = 1100,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}
// ---------------menu catalog min max--------------
$(".page-catalog__buttons-btn").on("click", function () {
  $(".page-catalog__buttons-btn").removeClass(
    "page-catalog__buttons-btn--active"
  );
  $(this).addClass("page-catalog__buttons-btn--active");
});

$(".button-list").on("click", function () {
  $(".page-catalog__items ").addClass("page-catalog__items--list");
});

$(".button-grid").on("click", function () {
  $(".page-catalog__items ").removeClass("page-catalog__items--list");
});
$(".star").rateYo({
  starWidth: "17px",
  spacing: "6px",
  normalFill: "#C1C1C1",
  ratedFill: "#FFB800",
  readOnly: true, //фиксинг рейтинга
  starSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17">' +
    '<path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>' +
    "</svg>",
});
$(".star-nofix").rateYo({
  starWidth: "17px",
  spacing: "6px",
  normalFill: "#C1C1C1",
  ratedFill: "#FFB800",

  starSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17">' +
    '<path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>' +
    "</svg>",
});
$(".product-tabs__top-item").on("click", function (e) {
  e.preventDefault();
  $(".product-tabs__top-item").removeClass("product-tabs__top-item--active");
  $(this).addClass("product-tabs__top-item--active");

  $(".product-tabs__content-item").removeClass(
    "product-tabs__content-item--active"
  );
  $($(this).attr("href")).addClass("product-tabs__content-item--active");
});

// --------swiperJS-----------------
var swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".product-other__gallary", {
  loop: true,
  speed: 1500,
  slidesPerView: 3,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".product-other__next",
    prevEl: ".product-other__prev",
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // 1024: {
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    // },
  },
});
