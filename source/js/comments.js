'use strict';

(function () {
  var swiper = new Swiper('.comments .swiper-container', {
    pagination: {
      el: '.comments .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.comments .swiper-button-next',
      prevEl: '.comments .swiper-button-prev',
    },
  });
})();
