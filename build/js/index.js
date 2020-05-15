"use strict";

{
  var header = document.querySelector('[data-fixed-header]');

  var checkHeader = function checkHeader() {
    if (window.pageYOffset > 150) {
      header.classList.add('header--visible');
    } else {
      header.classList.remove('header--visible');
    }
  };

  if (header) {
    checkHeader();
    window.addEventListener('scroll', checkHeader);
  }
}
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

{
  var form = document.querySelector('[data-form');
  var inputs = form.querySelectorAll('input');
  var modal = document.querySelector('[data-success-modal]');
  var errorModal = document.querySelector('[data-error-modal]');
  var closeTriggers = document.querySelectorAll('[data-success-modal-close]');
  var errorCloseTriggers = document.querySelectorAll('[data-error-modal-close]');
  var state = {
    name: '',
    email: ''
  };

  _toConsumableArray(inputs).forEach(function (input) {
    input.addEventListener('input', function () {
      state[input.name] = input.value;
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('button').disabled = true;
    fetch('http://185.248.102.69:3002/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(state)
    }).then(function (response) {
      return response.json();
    }).then(function (_ref) {
      var message = _ref.message;

      if (message === 'success') {
        modal.classList.add('modal--open');
        document.body.classList.add('overflow-hidden');
      }
    })["catch"](function () {
      errorModal.classList.add('modal--open');
      document.body.classList.add('overflow-hidden');
      setTimeout(function () {
        errorModal.classList.remove('modal--open');
        document.body.classList.remove('overflow-hidden');
      }, 4000);
      setTimeout(function () {
        form.querySelector('button').disabled = false;
      }, 10000);
    });
  });
  var showFormTriggers = document.querySelectorAll('[data-show-form]');
  var formWrapper = document.querySelector('[data-form-wrapper]');

  var handleFormVisibility = function handleFormVisibility() {
    formWrapper.classList.remove('form__wrapper--hidden');

    _toConsumableArray(showFormTriggers).forEach(function (trigger) {
      trigger.removeEventListener('click', handleFormVisibility);
    });

    setTimeout(function () {
      document.querySelector('[data-form-anchor]').scrollIntoView();
    }, 300);
  };

  _toConsumableArray(showFormTriggers).forEach(function (trigger) {
    trigger.addEventListener('click', handleFormVisibility);
  });

  _toConsumableArray(closeTriggers).forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modal.classList.remove('modal--open');
      document.body.classList.remove('overflow-hidden');
    });
  });

  _toConsumableArray(errorCloseTriggers).forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modal.classList.remove('modal--open');
      document.body.classList.remove('overflow-hidden');
    });
  });
}
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

{
  var tabs = document.querySelectorAll('[data-tariffs-tab]');

  if (tabs.length) {
    var toggle = document.querySelector('[data-tariffs-toggle]');
    var table = document.querySelector('[data-tariffs-table]');
    var isVisible = false;

    var toggleTableVisibility = function toggleTableVisibility(show) {
      isVisible = show;

      if (show) {
        table.classList.remove('tariffs__table--hidden');
        toggle.classList.add('tariffs__arrow--up');
      } else {
        table.classList.add('tariffs__table--hidden');
        toggle.classList.remove('tariffs__arrow--up');
      }
    };

    toggle.addEventListener('click', function () {
      toggleTableVisibility(!isVisible);
    });

    _toConsumableArray(tabs).forEach(function (tab) {
      tab.addEventListener('click', function () {
        _toConsumableArray(tabs).forEach(function (tab) {
          tab.classList.remove('tariffs-tabs__item--active');
        });

        tab.classList.add('tariffs-tabs__item--active');
      });
    });

    var monthPrice = document.querySelectorAll('[data-month-price]');
    var yearPrice = document.querySelectorAll('[data-year-price]');
    var monthPriceTrigger = document.querySelector('[data-tariffs-tab-month]');
    var yearPriceTrigger = document.querySelector('[data-tariffs-tab-year]');
    monthPriceTrigger.addEventListener('click', function () {
      _toConsumableArray(yearPrice).forEach(function (item) {
        item.style.display = 'none';
      });

      _toConsumableArray(monthPrice).forEach(function (item) {
        item.style.display = '';
      });
    });
    yearPriceTrigger.addEventListener('click', function () {
      _toConsumableArray(monthPrice).forEach(function (item) {
        item.style.display = 'none';
      });

      _toConsumableArray(yearPrice).forEach(function (item) {
        item.style.display = '';
      });
    });
  }
}
//# sourceMappingURL=index.js.map
