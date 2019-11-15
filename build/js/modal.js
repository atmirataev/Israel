'use strict';

(function () {
  var callbackModal = document.querySelector('.callback-modal');
  var testBtn = document.querySelector('.site-title');
  var siteBody = document.querySelector('body');

  function openCallbackModal() {
    siteBody.classList('blur');
    callbackModal.classList.remove('hidden');
  }
  testBtn.addEventListener('click', openCallbackModal);
})();
