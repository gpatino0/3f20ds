let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Numeros a generar', (xx) => {
  x = parseInt(xx);
  let aleatorio;

  for (let i = 0; i <= x; i++) {
    aleatorio = Math.floor(Math.random() * (10 - 1)) + 1;

    console.log(aleatorio);
  }
  rl.close();
});
