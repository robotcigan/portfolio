$(document).ready(function() {

  let preloader = new TweenMax.to('.preloader__plate', .8, {
    width: '100%'
  });
  let preloader2 = new TweenMax.to('.preloader__plate', .2, {
    y: -4
  }).delay(1);

  let anim1 = new TweenMax.to('.works__plate', .6, {
    width: 0
  }).delay(1.4);

  let anim2 = new TweenMax.fromTo('.works', .9,
  {
    x: -200
  },
  {
    x: 0
  }).delay(1.4);

  let anim3 = new TweenMax.fromTo('.main', .6, {
    x: -48,
    opacity: 0
  },
  {
    x: 0,
    opacity: 1
  }).delay(1.7);

});