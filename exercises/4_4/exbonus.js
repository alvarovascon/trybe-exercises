function romanos(numero) {

  let soma = 0;
  let algarismos = [];
  let valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (let i in numero) {
    algarismos[i] = valores[numero[i]]; //cada caracter (numero[x]) tem o nome = uma propriedade de valores
  }
  
  for (let j in algarismos) {
  
    if(algarismos[j] >= algarismos[j + 1]) {
      
      soma += algarismos[j];

    } else {
      algarismos[j + 1] = algarismos[j + 1] - algarismos[j];
      
    }

  }
  return soma;
  
}

console.log(romanos("XVII"));