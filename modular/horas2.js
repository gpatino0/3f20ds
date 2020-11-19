let i = 1;
let hora = 10;

for (i; i <= 2500; i++) {
  if (hora >= 0) hora = hora - 1;
  else if (hora <= 0) hora = 24;
}
console.log(hora);
