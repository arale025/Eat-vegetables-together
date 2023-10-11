$(document).ready(function () {
  // 按漢堡打開選單
  $('.burger').click(function () {
    $('body').addClass('open');
    $('header').addClass('blur');
    $('section').addClass('blur');
    $('footer').addClass('blur');
    $('.menu::after').addClass('closeafter');
  });
  // 按Ｘ關閉選單
  $('.close').click(function (event) {
    $('body').removeClass('open');
    $('header').removeClass('blur');
    $('section').removeClass('blur');
    $('footer').removeClass('blur');
  });

  // 按連結關閉選單
  $('.title').click(function (event) {
    $('body').removeClass('open');
    $('header').removeClass('blur');
    $('section').removeClass('blur');
    $('footer').removeClass('blur');
  });

  $('.subtitle').click(function (event) {
    $('body').removeClass('open');
    $('header').removeClass('blur');
    $('section').removeClass('blur');
    $('footer').removeClass('blur');
  });

  // 按旁邊畫面關掉選單

  $('section').click(function (event) {
    $('body').removeClass('open');
    $('header').removeClass('blur');
    $('section').removeClass('blur');
    $('footer').removeClass('blur');
  });

  $('footer').click(function (event) {
    $('body').removeClass('open');
    $('header').removeClass('blur');
    $('section').removeClass('blur');
    $('footer').removeClass('blur');
  });
});