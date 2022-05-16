const nameArr = ['ahmad', 'Alvi', 'Ramzan', 'Djabrail', 'Musa', 'Viskhan', 'Mansur', 'Khamzat', 'Zelimkhan', 'Ahmed'];


//! Создай переменную accumulator и собери в ней все имена, которые начинаются на букву "а".
const accumulator = [];

for (let i = 0; i < nameArr.length; i++) {
  if (nameArr[i][0] == 'A' || nameArr[i][0] == 'a') {
    accumulator.push(nameArr[i]);
  }
}
console.log(accumulator);