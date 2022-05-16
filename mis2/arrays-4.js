const arr = ['JavaScript', 'Java', 'Python', 'C++', 'C#', 'GO', 'PHP', 'Ruby', 'Pascal', 'Kotlin'];

//! Ниже напиши цикл while, который выводит в консоль все названия длиннее трёх символов.
let i = 0;

while (i < arr.length) {
  if (arr[i].length > 3) {
    console.log(arr[i]);
  }
  i++;
}