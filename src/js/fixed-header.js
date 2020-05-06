{
  const header = document.querySelector('[data-fixed-header]');
  
  const checkHeader = () => {
    if (window.pageYOffset > 150) {
      header.classList.add('header--visible');
    } else {
      header.classList.remove('header--visible');
    }
  };
  
  checkHeader();
  
  window.addEventListener('scroll', checkHeader);
}
