'use strict';

(function () {
  var questionsItems = document.querySelectorAll('.questions__item');

  questionsItems.forEach(function (item) {
    var infoOpenBtn = item.querySelector('.questions__text');
    infoOpenBtn.addEventListener('click', function () {
      if (item.classList.contains('questions__item_current')) {
        item.classList.remove('questions__item_current');
      } else {
        item.classList.add('questions__item_current');
      }
    });
  });
})();
