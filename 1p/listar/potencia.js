let s = [3, 1, 4, 2, 3];
let pow = (x) => {
  return x.reduce((k, y) => k.concat(k.map((d) => [y].concat(d))), [[]]);
};
console.log('función exponencial');
console.log(pow(s));
