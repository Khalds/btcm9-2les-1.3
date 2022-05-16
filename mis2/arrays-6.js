const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//! Ниже напиши цикл for, который выводит в консоль всё четные числа.
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 == 0) {
    console.log(numArr[i]);
  }
}



//! Еще ниже напиши цикл while, который выводит в консоль все нечетные числа.
let i = 0;

while (i < numArr.length) {
  if (numArr[i] % 2 != 0) {
    console.log(numArr[i]);
  }
  i++;
}