const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! Создай переменную accumulator и собери в ней сумму всех элементов массива. Для решения используй цикл for.
let accumulator = 0;

for (let i = 0; i < arr.length; i++) {
  accumulator += arr[i];
}

console.log(accumulator);