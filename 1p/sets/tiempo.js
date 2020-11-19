let ns = new Set();
let nombreBase = 'name';
let n = 100000;
let tiempo = new Date().getTime();
while (ns.size < n) {
  let numero = Math.floor(Math.random() * n).toString();
  let nombreCompleto = nombreBase + numero;
  ns.add(nombreCompleto);
}
console.log(ns);
console.log(tiempo, 'ms');
