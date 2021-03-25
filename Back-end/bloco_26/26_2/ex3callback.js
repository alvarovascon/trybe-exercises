const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What file do you want to read? ', (answer) => {

  fs.readFile(answer, (err, content) => {
    if (err) return console.log(`Erro ao ler arquivo 1: ${err.message}`);
  
    console.log(`Lido ${answer} com ${content.byteLength} bytes`);
  });

  rl.close();
});