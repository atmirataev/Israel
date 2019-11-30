'use strict';

(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.comments__btn-next',
      prevEl: '.comments__btn-prev',
    },
  });

  var nextBtn = document.querySelector('.comments__btn-next');
  var title = document.querySelector('.comments__title');

  title.addEventListener('click', function () {
    alert('clicked');
  });

  nextBtn.addEventListener('click', function () {
    alert('clicked');
  });
})();
