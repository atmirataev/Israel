'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var callbackModal = document.querySelector('.callback-modal');
  var successModal = document.querySelector('.success-modal');
  var callbackModalOpenBtn = document.querySelector('.page-header__item_call');
  var callbackModalCloseBtn = callbackModal.querySelector('.modal__close');
  var successModalOpenBtn = document.querySelectorAll('.callback-btn');
  var successModalCloseBtn = successModal.querySelector('.modal__close');
  var nameInputEl = callbackModal.querySelector('[name=user-name]');
  var telInputEl = callbackModal.querySelector('[name=user-tel]');
  var agreementInputEl = callbackModal.querySelector('[name=agreement]');
  var isStorageSupport = true;
  var nameStorage = '';
  var telStorage = '';

  try {
    nameStorage = localStorage.getItem('nameInputEl');
    telStorage = localStorage.getItem('telInputEl');
  } catch (err) {
    isStorageSupport = false;
  }

  // Обработчики
  callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  [].forEach.call(successModalOpenBtn, function (item) {
    item.addEventListener('click', openSuccessModal);
  });

  /**
   *  Показывает модальное окно "Перезвоните мне"
   */
  function openCallbackModal() {
    var modalOverlay = callbackModal.querySelector('.modal__overlay');

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
    callbackModalOpenBtn.removeEventListener('click', openCallbackModal);
  }

  /**
   * Закрывает модальное окно "Перезвоните мне"
   */
  function closeCallbackModal() {
    callbackModal.classList.add('hidden');
    callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  }

  /**
   * Открывает модальное окно об успешной отправки данных
   * @param {Object} evt - Объект "event"
   */
  function openSuccessModal(evt) {
    var modalOverlay = successModal.querySelector('.modal__overlay');

    evt.preventDefault();
    if (!(callbackModal.classList.contains('hidden'))) {
      callbackModal.classList.add('hidden');
    }
    successModal.classList.remove('hidden');
    successModalCloseBtn.addEventListener('click', closeSuccessModal);
    modalOverlay.addEventListener('click', closeSuccessModal, {
      once: true
    });
    document.addEventListener('keydown', function (e) {
      isEscEvent(e, closeSuccessModal);
    });
  }

  /**
   * Закрывает окно об успешной отправки данных
   */
  function closeSuccessModal() {
    successModal.classList.add('hidden');
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
})();
