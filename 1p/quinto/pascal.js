let n = 5;
let x;
let a = new Array(n);
let b = new Array(n);

for (let k = 0; k <= n; k++) {
  A[k] = 0;
}

a[1] = 1;
x = a[1] + '|';

for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    b[j] = a[j - 1] + a[j];
    x += b[j] + ' ';
  }

  for (j = 1; j <= i; j++) {
    a[j] = b[j];
  }

  x += '|';
}
console.log(x);
