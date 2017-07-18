//Plugins

var swiper = new Swiper('.swiper-container', {
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

(function () {
  var view = $('.clean-list__view');
  view.on('click', '.clean-list__link', function (e) {
    e.preventDefault();
    var item = $(this).closest(view),
      content = $('.clean-list__section'),
      items = $(this).next();
    if (!content.hasClass('active-section')) {
      $(this).removeClass('active-section');
      items.addClass('active-section');
    } else {
      content.removeClass('active-section');
    }
    if (content.hasClass('active-section')) {
      $(this).addClass('active-link');
      $('.clean-list__link').next().removeClass('active-link');
    } else {
      $('.clean-list__link').removeClass('active-link');
    }
  });
}());

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

wrapper.addEventListener('click', function (e) {
  e.preventDefault();
  const target = e.target;

  if (target.classList.contains('price-list__button--prew')) {
    const input = target.nextElementSibling;
    const previousValue = Number(input.value);

    if (input.value > 0) {
      input.value = previousValue - 1;
    } else {
      return false
    }
  }

  if (target.classList.contains('price-list__button--next')) {
    const input = target.previousElementSibling;
    const previousValue = Number(input.value);

    input.value = previousValue + 1;
  }
});


//Slider

let link = $('.clean-link'),
  sliderContent = $(".clean-list__slider");

link.on('click', function(e) {
  e.preventDefault();
  link.removeClass('active');
  $(this).addClass('active');
  sliderContent.hide();
  var activeTab = $(this).attr("href");
  $(activeTab).fadeIn();
  return false;
});


// Read More
let bg_section = document.querySelector('.background'),
  read_more = document.querySelector('.reviews .clean-link'),
  more_text = document.querySelector('.more__text');

read_more.addEventListener('click', (e) => {
  e.preventDefault();
  bg_section.classList.add('hide');
  read_more.classList.add('hide');
  more_text.classList.add('active-section');
});
