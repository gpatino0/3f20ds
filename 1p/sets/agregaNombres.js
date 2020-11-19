let nom = new Set();
let nombreString = 'nombre';

while (nom.size < 10) {
  let n = Math.floor(Math.random() * (100 - 1) + 1).toString();
  let nombreCompleto = nombreString + n;
  nom.add(nombreCompleto);
}
console.log(nom);
