const readlineSync = require('readline-sync');

const inquirer = require('inquirer');

function calculaIMC(answers) {
  const imc = answers.peso / (answers.altura ** 2);

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

}


inquirer
  .prompt([
    { name: 'peso', type: 'number', message: 'Qual o seu peso?' },
    { name: 'altura', type: 'number', message: 'Qual sua altura?' },
  ])
    .then(answers => {
      calculaIMC(answers);
    })
      .catch();
