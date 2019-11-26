'use strict';

var breakpoint = window.matchMedia('(min-width:768px)');
var lifeInIsraelSwiper;

var breakpointChecker = function () {
  if (breakpoint.matches === true) {

    if (lifeInIsraelSwiper !== undefined) {
      lifeInIsraelSwiper.destroy(true, true);
    }

    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

var enableSwiper = function () {
  lifeInIsraelSwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
};


breakpoint.addListener(breakpointChecker);

breakpointChecker();
