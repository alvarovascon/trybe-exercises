const readlineSync = require('readline-sync');

const peso = readlineSync.question('Qual seu peso? ');

const altura = readlineSync.question('Qual sua altura? ');

const imc = (peso / (altura ^ 2)).toFixed(2);

console.log(`imc: ${imc}` );
