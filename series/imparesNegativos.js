let i = 0;
let n = -10;
for (i; i >= n; i--) {
  if (i % 2 !== 0) {
    console.log(i);
    n = n - 1;
  }
}
