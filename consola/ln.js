let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Valor de x: ', (xx) => {
  rl.question('Valor de N: ', (nn) => {
    x = parseInt(xx);
    n = parseInt(nn);
    let signo = '-';
    let frase = 'Ln(1+' + x + ')=';
    let a = 0;
    let resultado = 0;
    for (let i = 1; i <= n; i++) {
      let e = Math.pow(x, i);
      let d = e / i;

      if (signo == '+') {
        signo = '-';
      } else {
        signo = '+';
      }
      frase += signo;
      frase += d;

      if (i === 1) {
        resultado = a = d;
      } else if (i % 2 === 0) {
        resultado = a - d;
        a = resultado;
      } else {
        resultado = a + d;
        a = resultado;
      }
    }
    console.log(frase);
    console.log('Resultado: ' + resultado);
    rl.close();
  });
});
