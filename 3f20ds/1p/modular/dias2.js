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
  if (dia > 0) dia = dia - 1;
  else if (dia <= 0) dia = 7;
}
console.log(dias[dia]);
