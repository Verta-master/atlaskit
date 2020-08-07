//Mobile menu
$('.menu-mobile__btn').click(function() {
  $(this).toggleClass('menu-mobile__btn--cross');
  $('.menu-mobile__list').slideToggle();
});

$('.menu-mobile__down').click(function() {
  $('.menu-mobile__sublist').slideToggle();
});

//Scroll to top
$('.to-top').click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
