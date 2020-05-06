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

  checkHeader();
  window.addEventListener('scroll', checkHeader);
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
  var state = {
    name: '',
    email: ''
  };

  _toConsumableArray(inputs).forEach(function (input) {
    input.addEventListener('input', function (e) {
      state[input.name] = input.value;
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelector('button').disabled = true;
    console.log(state);
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
  var table = document.querySelector('[data-tariffs-table]');
  var toggle = document.querySelector('[data-tariffs-toggle]');
  var tabs = document.querySelectorAll('[data-tariffs-tab]');
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
//# sourceMappingURL=index.js.map
