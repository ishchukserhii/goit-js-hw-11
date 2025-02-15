import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

let userSelectedDate = null;
flatpickr('input#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate && userSelectedDate > new Date()) {
      refs.startBtn.disabled = false;
    } else {
      iziToast.show({
        message: 'Please choose a date in the future',
        color: 'red',
        messageColor: 'white',
        position: 'topRight',
        layout: 2,
        transitionIn: 'fadeInLeft'
      });
      refs.startBtn.disabled = true;
    }
  },
});

const refs = {
  inputTime: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  clockface: document.querySelector('.js-clockface'),
  inputFlat: document.querySelector('.flatpickr-input'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true
const timer = {
  intervalId: null,
  initTime: null,

  start() {
    this.initTime = userSelectedDate;
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.inputFlat.disabled = true;
    refs.inputTime.disabled = true;
  },

  stop() {
    refs.startBtn.disabled = false;
    refs.inputFlat.disabled = false;
    clearInterval(this.intervalId);
  },

  tick() {
    const currentTime = Date.now();
    const ms = this.initTime - currentTime;
    const time = convertMs(ms);

    refs.days.textContent = time.days < 10 ? '0' + time.days : time.days;
    refs.minutes.textContent = time.minutes.toString().padStart(2,"0");
    refs.seconds.textContent = time.seconds.toString().padStart(2,"0");
    refs.hours.textContent = time.hours.toString().padStart(2,"0");

    if (ms < 1000) {
      this.stop();
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});


function timeToSTR({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, '0');
  hour = hours.toString().padStart(2, '0');
  mins = minutes.toString().padStart(2, '0');
  secs = seconds.toString().padStart(2, '0');
  return `${hours}:${mins}:${secs}`;
}