{
  const form = document.querySelector('[data-form');
  const inputs = form.querySelectorAll('input');
  const modal = document.querySelector('[data-success-modal]');
  const errorModal = document.querySelector('[data-error-modal]');
  const closeTriggers = document.querySelectorAll('[data-success-modal-close]');
  const errorCloseTriggers = document.querySelectorAll('[data-error-modal-close]');
  
  const state = {
    name: '',
    email: ''
  };
  
  [...inputs].forEach((input) => {
    input.addEventListener('input', () => {
      state[input.name] = input.value;
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('button').disabled = true;
    
    fetch('https://omnio.eqbit.tech/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    }).then((response) => response.json())
      .then(({ message }) => {
      if (message === 'success') {
        modal.classList.add('modal--open');
        document.body.classList.add('overflow-hidden');
      }
    }).catch((e) => {
      console.log(e);
      
      errorModal.classList.add('modal--open');
      document.body.classList.add('overflow-hidden');
  
      setTimeout(() => {
        errorModal.classList.remove('modal--open');
        document.body.classList.remove('overflow-hidden');
      }, 4000);
  
      setTimeout(() => {
        form.querySelector('button').disabled = false;
      }, 10000);
    })
  });
  
  const showFormTriggers = document.querySelectorAll('[data-show-form]');
  const formWrapper = document.querySelector('[data-form-wrapper]');
  
  const handleFormVisibility = () => {
    formWrapper.classList.remove('form__wrapper--hidden');
    
    [...showFormTriggers].forEach((trigger) => {
      trigger.removeEventListener('click', handleFormVisibility);
    });
    
    setTimeout(() => {
      document.querySelector('[data-form-anchor]').scrollIntoView();
    }, 300)
  };
  
  [...showFormTriggers].forEach((trigger) => {
    trigger.addEventListener('click', handleFormVisibility);
  });
  
  [...closeTriggers].forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modal.classList.remove('modal--open');
      document.body.classList.remove('overflow-hidden');
    });
  });
  
  [...errorCloseTriggers].forEach((trigger) => {
    trigger.addEventListener('click', () => {
      modal.classList.remove('modal--open');
      document.body.classList.remove('overflow-hidden');
    });
  });
}
