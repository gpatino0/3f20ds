let a = 0;
let b = 1;
let temp = a;
let arr = [];

for (let i = 0; i < 9; i++) {
  temp = a;
  a = b;
  b = temp + b;
  arr[i] = b;
}
console.log('El quinto numero de la serie es = ' + arr[2]);
