let i = 1;
let primo = 2;
let esPrimo = 1;
let n = 5;

while (i <= n) {
  let mid = Math.round(primo / 2);
  while (mid >= 2 && esPrimo == 1) {
    if (primo % mid == 0) {
      esPrimo = 0;
    }
    mid--;
  }
  if (esPrimo == 1) {
    i++;
  }
  primo += 1;
  esPrimo = 1;
}
primo -= 1;
console.log(primo);
