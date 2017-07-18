//Plugins

new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  freeMode: true,
  speed: 400
});

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });
});


jQuery(function ($) {
  $("#phone").mask("(999) 999-9999");
});

//End Plugins


//Accordeon


$('.clean-list__link').on('click', function (e) {
  e.preventDefault();

  var $this = $(this),
    item = $this.closest('.clean-list__container'),
    list = $this.closest('.clean-list__view'),
    items = list.find('.clean-list__container'),
    content = item.find('.clean-list__section'),
    otherContent = list.find('.clean-list__section'),
    duration = 200;

  if (!item.hasClass('active-section')) {
    items.removeClass('active-section');
    item.addClass('active-section');

    otherContent.stop(true, true).slideUp(duration);
    content.stop(true, true).slideDown(duration);
  } else {

    content.stop(true, true).slideUp(duration);
    item.stop(true, true).removeClass('active-section');
  }

});

$('.services-view__link').on('click', function (e) {
  e.preventDefault();

  var $this = $(this),
    item = $this.closest('.services-view__item'),
    list = $this.closest('.services-view__list'),
    items = list.find('.services-view__item'),
    content = item.find('.dropdown'),
    otherContent = list.find('.dropdown'),
    duration = 200;


  if (!item.hasClass('active-class')) {
    items.removeClass('active-class');
    item.addClass('active-class');

    otherContent.stop(true, true).slideUp(duration);
    content.stop(true, true).slideDown(duration);
  } else {
    content.stop(true, true).slideUp(duration);
    item.stop(true, true).removeClass('active-class');
  }

});


//calculator

const wrapper = document.querySelector('.price-list__table');
const  choose = document.querySelector('.service-change__link');

wrapper.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('price-list__button--prew')) {
    const input = target.nextElementSibling;
    const previousValue = Number(input.value);

    if (input.value > 0) {
      input.value = previousValue - 1;
    }
  }

  if (target.classList.contains('price-list__button--next')) {
    const input = target.previousElementSibling;
    const previousValue = Number(input.value);

    input.value = previousValue + 1;
  }
});


//Slider

const link = $('.clean-link');
const sliderContent = $(".clean-list__slider");

link.on('click', function (e) {
  e.preventDefault();

  const activeTab = $(this).attr("href");

  link.removeClass('active');
  $(this).addClass('active');
  sliderContent.hide();
  $(activeTab).fadeIn();
});


// Read More
const bg_section = document.querySelector('.background'),
  read_more = document.querySelector('.reviews .clean-link'),
  more_text = document.querySelector('.more__text');

read_more.addEventListener('click', (e) => {
  e.preventDefault();

  bg_section.classList.add('hide');
  read_more.classList.add('hide');
  more_text.classList.add('active-section');
});
