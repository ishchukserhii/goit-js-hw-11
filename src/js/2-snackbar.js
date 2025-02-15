import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', start => {

  start.preventDefault();

  const delay = parseInt(start.target.delay.value, 10);
  const state = start.target.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        color: 'green',
        messageColor: 'white',
        position: 'topRight',
        layout: 2,
        transitionIn: 'fadeInLeft',
        backgroundColor: 'green'
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        color: 'red',
        messageColor: 'white',
        position: 'topRight',
        layout: 2,
        transitionIn: 'fadeInLeft',
        backgroundColor: 'red'
      });
    });
    start.target.delay.value = null;
});
