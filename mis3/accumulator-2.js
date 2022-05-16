const arr = [-12, -5, -2, 1, 2, 3, 4, 5, 6, 7];


//! Создай переменную accumulator и собери в ней сумму всех положительных элементов массива. Для решения используй цикл while.


let i = 0;

let accumulator = 0;

while (i < arr.length) {
  if (arr[i] > 0) {
    accumulator += arr[i]
  }
  i++;
}

console.log(accumulator);