//todo Колбек функції
/*
 * Напишіть такі функції:

* createProduct(obj, callback) - приймає об'єкт товару без ID, а також колбек. Функція створює об'єкт товару, додаючи унікальний ідентифікатор у властивість id і викликає колбек передаючи йому створений об'єкт.
* logProduct(product) - колбек, що приймає об'єкт продукту і логує його в консоль
* logTotalPrice(product) - колбек, що приймає об'єкт продукту і логує загальну вартість товару в консоль
 */

function createProduct(object, callback) {
  const product = {
    ...object,
    id: Date.now().toString(),
  };

  callback(product);
}

function logProduct(product) {
  console.log(product);
}

function logTotalPrice({ price, quantity }) {
  const total = price * quantity;

  console.log(total);
}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);

createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
