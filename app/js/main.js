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

// -------------------------------------------------
$(".header-bottom__filter-sort ").styler();
//slider
$(".top-slider__inner").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  autoplay: true,
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

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".product__items")) {
    var mixer = mixitup(".product__items");
  }
});
