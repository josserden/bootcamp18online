import { getRefs } from './getRefs';
const { inputDate, timer } = getRefs();
import { convertMs } from './helpers/convertMs';

let timerId = null;

inputDate.addEventListener('change', event => {
  const { value } = event.target;
  const birthDay = new Date(value);

  timerId = setInterval(() => renderTime(birthDay), 1000);
});

function renderTime(date) {
  const currentDate = new Date();
  const difference = currentDate - date;
  const { days, hours, minutes, seconds } = convertMs(difference);

  if (difference < 0) {
    timer.textContent = `❌ Дата не може бути в майбутньому`;

    clearInterval(timerId);
    return;
  }

  timer.textContent = `🎂 ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
}
