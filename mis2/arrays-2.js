const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//! 1
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//! 2
let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}