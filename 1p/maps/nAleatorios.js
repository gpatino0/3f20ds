let map = new Map();
let nombreString = 'nombre';
let n = 20;

while (map.size < n) {
  let n = Math.floor(Math.random() * (100 - 1) + 1).toString();
  let nombreFinal = nombreString + n;
  map.set(n, nombreFinal);
  n++;
}

for (let nombre of map.values()) {
  console.log(nombre);
}
