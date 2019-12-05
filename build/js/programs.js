'use strict';

(function () {
  var programBtns = document.querySelectorAll('.programs__btn');
  var programsItems = document.querySelectorAll('.programs__item');

  programBtns[0].classList.add('programs__current-btn');
  programsItems[0].classList.add('programs__item_current');

  [].forEach.call(programBtns, function (item, index) {
    item.addEventListener('click', function () {
      var chosenBtn = document.querySelector('.programs__current-btn');
      var chosenItem = document.querySelector('.programs__item_current');

      chosenBtn.classList.remove('programs__current-btn');
      chosenItem.classList.remove('programs__item_current');
      item.classList.add('programs__current-btn');
      programsItems[index].classList.add('programs__item_current');
    });
  });
})();
