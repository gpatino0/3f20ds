let s = [31, 1, 4, 2, 32];
let permutacion = [];

function permutaciones(n) {
  function permu(a, p = []) {
    if (!a.length) {
      permutacion.push(p);
      return;
    }
    for (let i in a) {
      let curr = a.slice();
      let nx = curr.splice(i, 1);
      permu(curr, p.concat(nx));
    }
  }
  permu(n);
  return permutacion;
}
console.log(' función cuadrática');
console.log(permutaciones(s));
