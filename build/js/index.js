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
//# sourceMappingURL=index.js.map
