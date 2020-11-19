let i = 0;
let dia = 1;
let dias = [
  'domingo',
  'lunes',
  'martes',
  'miercoles',
  'jueves',
  'viernes',
  'sabado',
];
for (i; i <= 11; i++) {
  if (dia <= 7) dia = dia + 1;
  else if (dia > 7) dia = 1;
}

console.log(dia);
console.log(dias[dia]);
