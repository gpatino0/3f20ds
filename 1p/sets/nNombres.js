let n = 'name';
let i = 0;
while (i < 10) {
  let numb = Math.floor(Math.random() * (100 - 1) + 1).toString();
  let nombre = n + numb;
  console.log(nombre);
  i++;
}
