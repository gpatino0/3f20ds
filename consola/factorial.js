let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Valor de x: ', (xx) => {
  x = parseInt(xx);

  let temp = 1;
  for (let i = 1; i <= x; i++) {
    temp = temp * i;
  }
  console.log(temp);
  rl.close();
});
