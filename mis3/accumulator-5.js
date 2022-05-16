const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//!Создай переменную accumulatorEven и собери в ней четные числа массива.

const accumulatorEven = [];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 == 0) {
    accumulatorEven.push(numArr[i])
  }
}

console.log(accumulatorEven);