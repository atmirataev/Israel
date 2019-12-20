'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var programBtns = document.querySelectorAll('.programs__btn');
  console.log(programBtns);
  console.log(programBtns[0]);
  var programsItems = document.querySelectorAll('.programs li');

  if (programBtns && programsItems) {
    programBtns[0].classList.add('programs__current-btn');
    programsItems[0].classList.add('programs__current-item');

    [].forEach.call(programBtns, function (item, index) {
      item.addEventListener('click', function () {
        var chosenBtn = document.querySelector('.programs__current-btn');
        var chosenItem = document.querySelector('.programs__current-item');

        chosenBtn.classList.remove('programs__current-btn');
        chosenItem.classList.remove('programs__current-item');
        item.classList.add('programs__current-btn');
        programsItems[index].classList.add('programs__current-item');
      });
    });
  }


  var questionsItems = document.querySelectorAll('.questions li');

  if (questionsItems) {
    [].forEach.call(questionsItems, function (item) {
      var infoOpenBtn = item.querySelector('.questions__text');
      infoOpenBtn.addEventListener('click', function () {
        if (item.classList.contains('questions__current-item')) {
          item.classList.remove('questions__current-item');
        } else {
          item.classList.add('questions__current-item');
        }
      });
    });
  }

  var callbackModal = document.querySelector('.callback-modal');
  var successModal = document.querySelector('.success-modal');
  var callbackModalOpenBtn = document.querySelector('.page-header__nav_call');
  var callbackModalCloseBtn = callbackModal.querySelector('.modal__close');
  var orderForm = document.querySelector('.order__form');
  var contactsForm = document.querySelector('.contacts__form');
  var successModalCloseBtn = successModal.querySelector('.modal__close');
  var nameInputEl = callbackModal.querySelector('[name=user-name]');
  var telInputEl = callbackModal.querySelector('[name=user-tel]');
  var agreementInputEl = callbackModal.querySelector('[name=agreement]');
  var siteBody = document.querySelector('body');
  var isStorageSupport = true;
  var nameStorage = '';
  var telStorage = '';

  try {
    nameStorage = localStorage.getItem('nameInputEl');
    telStorage = localStorage.getItem('telInputEl');
  } catch (err) {
    isStorageSupport = false;
  }

  if (callbackModalOpenBtn) {
    callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  }

  if (orderForm || contactsForm) {
    orderForm.addEventListener('submit', openSuccessModal);
    contactsForm.addEventListener('submit', openSuccessModal);
  }

  /**
   *  Показывает модальное окно "Перезвоните мне"
   */
  function openCallbackModal() {
    var modalOverlay = callbackModal.querySelector('.modal__overlay');

    siteBody.setAttribute('style', 'overflow: hidden');
    callbackModal.classList.remove('hidden');

    if (nameStorage) {
      nameInputEl.value = nameStorage;
      telInputEl.focus();
    } else if (telStorage) {
      telInputEl.value = telStorage;
      agreementInputEl.focus();
    } else {
      nameInputEl.focus();
    }

    callbackModalCloseBtn.addEventListener('click', closeCallbackModal);
    modalOverlay.addEventListener('click', closeCallbackModal, {
      once: true
    });
    document.addEventListener('keydown', function (evt) {
      isEscEvent(evt, closeCallbackModal);
    });
    callbackModal.addEventListener('submit', closeCallbackModal);
    callbackModal.addEventListener('submit', openSuccessModal);
    callbackModalOpenBtn.removeEventListener('click', openCallbackModal);
  }

  /**
   * Закрывает модальное окно "Перезвоните мне"
   */
  function closeCallbackModal() {
    callbackModal.classList.add('hidden');
    siteBody.removeAttribute('style');
    callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  }

  /**
   * Открывает модальное окно об успешной отправки данных
   * @param {Object} evt - Объект "event"
   */
  function openSuccessModal(evt) {
    evt.preventDefault();
    var modalOverlay = successModal.querySelector('.modal__overlay');

    if (!(callbackModal.classList.contains('hidden'))) {
      callbackModal.classList.add('hidden');
    } else {
      successModal.classList.remove('hidden');
      siteBody.setAttribute('style', 'overflow: hidden');
      successModalCloseBtn.addEventListener('click', closeSuccessModal);
      modalOverlay.addEventListener('click', closeSuccessModal, {
        once: true
      });
      document.addEventListener('keydown', function (e) {
        isEscEvent(e, closeSuccessModal);
      });
    }

  }

  /**
   * Закрывает окно об успешной отправки данных
   */
  function closeSuccessModal() {
    successModal.classList.add('hidden');
    siteBody.removeAttribute('style');
    callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  }

  /**
   * Выполняет func по нажатию на клавишу Esc
   * @param {Object} evt - Событие во время нажатия на клавишу
   * @param {Function} func - Фукнкция обратного вызова
   */
  var isEscEvent = function (evt, func) {
    if (evt.keyCode === ESC_KEYCODE) {
      func();
    }
  };

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

  var enableCommentsSwiper = function () {
    var commentsSwiper = new Swiper('.comments .swiper-container', {
      pagination: {
        el: '.comments .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.comments .swiper-button-next',
        prevEl: '.comments .swiper-button-prev',
      },
    });
    return commentsSwiper;
  };

  enableCommentsSwiper();

  var orderPhoneMask = IMask(document.querySelector('.order__form input[type=tel]'), {
    mask: '+{7}(000)000 00 00'
  });

  var contactsPhoneMask = IMask(document.querySelector('.contacts__form input[type=tel]'), {
    mask: '+{7}(000)000 00 00'
  });

})();
