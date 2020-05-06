{
  const table = document.querySelector('[data-tariffs-table]');
  const toggle = document.querySelector('[data-tariffs-toggle]');
  const tabs = document.querySelectorAll('[data-tariffs-tab]');
  
  let isVisible = false;
  
  const toggleTableVisibility = (show) => {
    isVisible = show;
    
    if (show) {
      table.classList.remove('tariffs__table--hidden');
      toggle.classList.add('tariffs__arrow--up');
    } else {
      table.classList.add('tariffs__table--hidden');
      toggle.classList.remove('tariffs__arrow--up');
    }
  };
  
  toggle.addEventListener('click', () => {
    toggleTableVisibility(!isVisible);
  });
  
  [...tabs].forEach((tab) => {
    tab.addEventListener('click', () => {
      [...tabs].forEach((tab) => {
        tab.classList.remove('tariffs-tabs__item--active');
      });
  
      tab.classList.add('tariffs-tabs__item--active');
    })
  });
  
  const monthPrice = document.querySelectorAll('[data-month-price]');
  const yearPrice = document.querySelectorAll('[data-year-price]');
  const monthPriceTrigger = document.querySelector('[data-tariffs-tab-month]');
  const yearPriceTrigger = document.querySelector('[data-tariffs-tab-year]');
  
  monthPriceTrigger.addEventListener('click', () => {
    [...yearPrice].forEach((item) => {
      item.style.display = 'none';
    });
    
    [...monthPrice].forEach((item) => {
      item.style.display = '';
    });
  });
  
  yearPriceTrigger.addEventListener('click', () => {
    [...monthPrice].forEach((item) => {
      item.style.display = 'none';
    });
    
    [...yearPrice].forEach((item) => {
      item.style.display = '';
    });
  });
}
