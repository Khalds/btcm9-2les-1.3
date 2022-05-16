const nameArr = ['ahmad', 'Alvi', 'Ramzan', 'Djabrail', 'Musa', 'Viskhan', 'Mansur', 'Khamzat', 'Zelimkhan', 'Ahmed'];

//! Ниже напиши цикл for, который выводит в консоль имена начинающиеся на букву "а".

for (let i = 0; i < nameArr.length; i++) {
  if (nameArr[i][0] == 'A' || nameArr[i][0] == 'a') {
    console.log(nameArr[i]);
  }
}