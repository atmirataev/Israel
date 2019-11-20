'use strict';

(function () {
  var ESC_KEYCODE = 27;

  var callbackModal = document.querySelector('.callback-modal');
  var successModal = document.querySelector('.success-modal');
  var callbackModalOpenBtn = document.querySelector('.page-header__item_call');
  var callbackModalCloseBtn = callbackModal.querySelector('.modal__close');
  var successModalOpenBtn = document.querySelectorAll('.callback--btn');
  var successModalCloseBtn = successModal.querySelector('.modal__close');

  // Обработчики
  callbackModalOpenBtn.addEventListener('click', openCallbackModal);
  successModalOpenBtn.forEach(function (item) {
    item.addEventListener('click', openSuccessModal);
  });


  /**
   *  Показывает модальное окно "Перезвоните мне"
   */
  function openCallbackModal() {
    callbackModal.classList.remove('hidden');
    callbackModalCloseBtn.addEventListener('click', closeCallbackModal);
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
    evt.preventDefault();
    if (!(callbackModal.classList.contains('hidden'))) {
      callbackModal.classList.add('hidden');
    }
    successModal.classList.remove('hidden');
    successModalCloseBtn.addEventListener('click', closeSuccessModal);
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
