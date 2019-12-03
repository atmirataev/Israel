'use strict';

(function () {
  var breakpoint = window.matchMedia('(min-width:768px)');
  var lifeInIsraelSwiper;

  var breakpointChecker = function () {
    if (breakpoint.matches === true) {

      if (lifeInIsraelSwiper !== undefined) {
        lifeInIsraelSwiper.destroy(true, true);
      }

    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  var enableSwiper = function () {
    lifeInIsraelSwiper = new Swiper('.life-in-Israel .swiper-container', {
      pagination: {
        el: '.life-in-Israel .swiper-pagination',
      },
    });
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
