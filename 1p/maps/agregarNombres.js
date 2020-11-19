let nombresMap = new Map();
let nombreString = 'nombre';
let n = 1;

while (nombresMap.size < 10) {
  let nombreCompleto = (nombreString + n).toString();
  nombresMap.set(n, nombreCompleto);
  n++;
}
for (let nombre of nombresMap.values()) {
  console.log(nombre);
}
