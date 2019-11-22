// 'use strict';
// var TABLET_WIDTH = 768;

// var israelLifeContainer = document.querySelector('.life-in-Israel__container');
// var israelLifeList = israelLifeContainer.querySelector('.life-in-Israel__list');
// var israelLifeItems = israelLifeContainer.querySelectorAll('.life-in-Israel__item');

// function doBlockAsSwiper() {
//   var viewportWidth = document.body.clientWidth;
//   console.log(viewportWidth);

//   if (viewportWidth < TABLET_WIDTH) {
//     israelLifeContainer.classList.add('swiper-container');
//     console.log(israelLifeContainer);
//     israelLifeList.classList.add('swiper-wrapper');
//     israelLifeItems.forEach(function (item) {
//       item.classList.add('swiper-slide');
//     });

//     var swiper = new Swiper('.swiper-container', {
//       scrollbar: {
//         el: '.swiper-scrollbar',
//         hide: true,
//       },
//     });
//   } else {
//     israelLifeContainer.classList.remove('swiper-container');
//     console.log(israelLifeContainer);
//     israelLifeList.classList.remove('swiper-wrapper');
//     israelLifeItems.forEach(function (item) {
//       item.classList.remove('swiper-slide');
//     });
//   }
// }

// window.addEventListener('resize', doBlockAsSwiper);
