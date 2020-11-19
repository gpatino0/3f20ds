let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Numero: ', (xx) => {
  rl.question('Potencia: ', (yy) => {
    let numero = parseInt(xx);
    let pow = parseInt(yy);
    potencia = Math.pow(numero, pow);
    console.log(potencia);
    rl.close();
  });
});
