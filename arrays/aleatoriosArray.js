let ran;
let arr = [];

for (let i = 0; i <= 9; i++) {
  ran = Math.floor(Math.random() * (10 - 1)) + 1;
  arr[i] = ran;
  console.log(arr[i]);
}
