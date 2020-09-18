const states = document.getElementById('estados');
const statesArray = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];
const allInputs = document.querySelectorAll('input');
const clearButton = document.getElementById('limpar');
const textAreas = document.querySelectorAll('textarea');
const cpfInput = document.getElementById('cpf');

function checkIfNumber (event) {
  const charCode = event.charCode;
  if (charCode != 0) {
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      alert("insira apenas números!." + "\n" + "charCode: " + charCode + "\n");
    }
}
}

for (let stateNumber = 0; stateNumber < 27; stateNumber += 1) {
  let currentState = document.createElement('option');
  currentState.value = statesArray[stateNumber];
  currentState.innerHTML = statesArray[stateNumber];
  states.appendChild(currentState);
}

clearButton.addEventListener('click', function () {
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
    if (index < textAreas.length) {
      textAreas[index].value = '';
    }
  }
});

cpfInput.addEventListener('keypress', checkIfNumber, false);