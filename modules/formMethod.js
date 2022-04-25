import methods from './methods.js';

const form = document.querySelector('.form');

const addFormData = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    methods.add();
  });
};

export default addFormData;