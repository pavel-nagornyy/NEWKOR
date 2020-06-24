$(document).ready(function () {
  // Слайдер с новостями
  $(".slider-news").slick({
    slidesToShow: 2,
    responsive: [{
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        infinite: false
      },
    }, ],
  });

  // Слайдер с производителями
  $(".slider-manufacturers").slick({
    slidesToShow: 5,
    responsive: [{
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
      },
    }, ],
  });

  // Прилипающее меню
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 10 && $(document).width() >= 1200) {
      $('.header-sticky').addClass('header-fixed');
    } else {
      $('.header-sticky').removeClass('header-fixed');
    }
  });

  // popup-access open
  $('.popup__link').click(function (e) {
    e.preventDefault();
    $('.popup-access.open').addClass('popup__active');
    $('body').css('overflow', 'hidden')
  });

  // Ссылка возле значка(красного) логина
  $('.login-hover__link').click(function (e) {
    e.preventDefault();
    $('.popup-registration.open').addClass('popup__active');
  });

  // Ссылка из popup`a Вход в регистрацию
  $('.popup-access__link').click(function (e) {
    e.preventDefault();
    $('.popup-registration.open').addClass('popup__active');
    $('.popup-access.open').removeClass('popup__active');
  });

  // Ссылка из popup`a Регистрация во вход
  $('.popup-registration__link').click(function (e) {
    e.preventDefault();
    $('.popup-access.open').addClass('popup__active');
    $('.popup-registration.open').removeClass('popup__active');
  });

  $('.callback__link').click(function (e) {
    e.preventDefault();
    $('.popup-callback.open').addClass('popup__active');
  });
});