// todo Example 10 - Оператор % та методи рядків
/*
 * Напиши скрипт який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.

* 70 покаже 01:10
* 450 покаже 07:30
*1440 покаже 24:00
 */

const totalMinutes = 1440;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const parsedHours = String(hours).padStart(2, 0);
const parsedMinutes = String(minutes).padStart(2, 0);

const result = `${parsedHours}:${parsedMinutes}`;

console.log(result);
