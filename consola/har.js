let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('¿Cuántos valores deseas saber?');
rl.question('', (nn) => {
  let x = 0;
  let n = parseInt(nn);

  for (let i = 1; i <= n; i++) {
    x += 1 / i;
  }
  console.log(x);
  rl.close();
});
