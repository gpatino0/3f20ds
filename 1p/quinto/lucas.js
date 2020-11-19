let a = 2;
let b = 1;
let temp = a;
let arr = [];

for (let i = 0; i < 9; i++) {
  temp = a;
  a = b;
  b = temp + b;
  arr[i] = b;
}
console.log('Numero quinto de la serie de lucas es = ' + arr[2]);
