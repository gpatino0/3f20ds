let i = 1;
let hora = 10;

for (i; i <= 14; i++) {
  if (hora <= 24) hora = hora + 1;
  else if (hora > 24) hora = 0;
}
console.log(hora);
