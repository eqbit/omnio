{
  const form = document.querySelector('[data-form');
  const inputs = form.querySelectorAll('input');
  
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
    
    fetch('http://localhost:3002/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state)
    }).then((response) => response.json()).then(data => {
      console.log(data.message);
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
  })
}
