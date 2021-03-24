const readlineSync = require('readline-sync');

const peso = readlineSync.question('Qual seu peso? ');

const altura = readlineSync.question('Qual sua altura? ');

const imc = peso / (altura ^ 2);

const showSituation = (imc) => {
  if(imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está abaixo do peso (magreza)`);
  }
  if(imc >= 18.5 && imc < 24.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está no peso normal`);
  }
  if(imc >= 25 && imc < 29.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está acima do peso (sobrepeso)`);
  }
  if(imc >= 30 && imc < 34.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está na faixa de obesidade grau I`);
  }
  if(imc >= 35 && imc < 39.9) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está na faixa de obesidade grau II`);
  }
  if(imc >= 40) {
    console.log(`Seu IMC é ${imc.toFixed(2)}, você está na faixa de obesidade grau III ou IV`);
  }
};

showSituation(imc);
