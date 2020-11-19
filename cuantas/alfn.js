let n = 5;
let r = 2;
let resta = n - r;
let nu;
let p = n;
for (let i = n; i > resta; i--) {
  var resu = p;
  nu = i - 1;
  p = p * nu;
}
console.log(resu);
