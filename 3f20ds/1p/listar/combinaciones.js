let s = [3, 1, 4, 2, 3];
let res = [];

function combinar(intArr) {
  function comb(arr, x = []) {
    if (arr.length === 0) {
      res.push(x);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let ac = arr.slice();
        let sig = ac.splice(i, 1);
        comb(ac, x.concat(sig));
      }
    }
  }
  comb(intArr);
  return res;
}
console.log('función cuadrática');
console.log(combinar(s));
