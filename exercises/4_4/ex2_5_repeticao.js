let array = [2, 3, 3, 5, 8, 2, 3];

function getMode (numbers) {
  
  let numRepetitions = 0;     //conta repetiçoes no indice i atual
  let maxRep = 0;             //conta o maior numero de repetiçoes
  let indexMode = 0;          //guarda o indice do numero que se repete mais vezes

  for(let i in numbers) {
    
    for(let j in numbers) {

      if(numbers[i] === numbers [j]) {
        numRepetitions += 1;
      }
    }

    if(numRepetitions > maxRep) {
      maxRep = numRepetitions;
      indexMode = i;
    }
  }
  return numbers[indexMode];
}

console.log(getMode(array));
