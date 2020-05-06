{
  const form = document.querySelector('[data-form');
  const inputs = form.querySelectorAll('input');
  
  const state = {
    name: '',
    email: ''
  };
  
  [...inputs].forEach((input) => {
    input.addEventListener('input', (e) => {
      state[input.name] = input.value;
    })
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelector('button').disabled = true;
  
    console.log(state);
  })
}
