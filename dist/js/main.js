'use strict';

$(document).ready(function () {

  // SVG magic
  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  // Phone mask Телефон маска
  if ($('.phone-mask').length) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMask: true,
      showMaskOnHover: false
    });
  }

  // Sendmail
  // $('#send-mail').on('click', function() {
  //   $(this).closest('.modal').find('.callback-before-send').addClass('callback-before-send--disable');
  //   $(this).closest('.modal').find('.callback-success-send').addClass('callback-success-send--active');
  // })

  // Mouse
  var cursor = $('.cursor');
  $(window).on('mousemove', function (e) {
    $('.cursor__before, .cursor__after, .cursor__text').css({
      transform: 'translate(' + (e.clientX - 4) + 'px, ' + (e.clientY - 4) + 'px)'
    });
    // $('.cursor__after').css({
    //     transform: `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    // });
  });
  $('.btn').on('mouseenter', function () {
    cursor.addClass('cursor--active');
  });
  $('.btn').on('mouseleave', function () {
    cursor.removeClass('cursor--active');
  });

  $('.work').on('mouseenter', function () {
    cursor.addClass('cursor--active-works');
  });
  $('.work').on('mouseleave', function () {
    cursor.removeClass('cursor--active-works');
  });

  // Модальное окно
  $('.modal-open').magnificPopup({
    type: 'inline'
  });
  $('.modal-case-open').magnificPopup({
    type: 'ajax'
  });
});