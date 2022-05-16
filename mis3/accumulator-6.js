const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//!Создай переменную accumulatorOdd и собери в ней нечетные числа массива.
const accumulatorOdd = [];

for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 != 0) {
    accumulatorOdd.push(numArr[i])
  }
}

console.log(accumulatorOdd);