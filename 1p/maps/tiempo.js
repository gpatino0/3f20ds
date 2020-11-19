let map = new Map();
let nombreString = 'nombre';

let tiempo = new Date().getTime();
let n = 100000;

while (map.size < n) {
  let n = Math.floor(Math.random() * n).toString();
  let nombreFinal = nombreString + n;
  map.set(n, nombreFinal);
  n++;
}

for (let nombre of map.values()) {
  console.log(nombre);
}

console.log(tiempo);
