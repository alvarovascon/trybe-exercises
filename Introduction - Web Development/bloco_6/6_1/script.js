const states = document.getElementById('estados');
const statesArray = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];



for (let stateNumber = 0; stateNumber < 27; stateNumber += 1) {
  let currentState = document.createElement('option');
  currentState.value = statesArray[stateNumber];
  currentState.innerHTML = statesArray[stateNumber];
  states.appendChild(currentState);
}