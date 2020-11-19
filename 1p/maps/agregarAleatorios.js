let map = new Map();
let nombreString = 'nombre';
let n = 20;

while (map.size < n) {
  let numero = Math.floor(Math.random() * (100 - 1) + 1).toString();
  let nombre = nombreString + numero;
  map.set(numero, nombre);
  numero++;
}

for (let nombre of map.values()) {
  console.log(nombre);
}
