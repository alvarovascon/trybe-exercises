//  exercise 1
const factorial = (N) => {
  let result = 1
  for (let i = 2; i <= N; i += 1) {
    result *= i;
  }
  return result;
}
//  console.log(factorial(5));

//  exercise 2
const longestWord = (phrase) => {
  const phraseArray = phrase.split(' ');
  let longest = ''
  for (let i = 0; i < phraseArray.length; i += 1) {
    if (phraseArray[i].length > longest.length) {
      longest = phraseArray[i];
    }
  }
  return longest;
}
//  console.log(longestWord("Antônio foi no banheiro e não sabbebebebeemos o que aconteceu"));

//  exercicio 4.1
const bebeto = (string) => {
  const tryber = 'Tryber x aqui!';
  const splatTryber = tryber.split('x');
  return `${splatTryber[0]} ${string} ${splatTryber[1]}`
}

const skills = ['js', 'html', 'css'];

const skillfunction = (initString) => {
  resultString = `Eu sou ${initString} e minhas habilidades são:`
  skills.forEach(element => {
    resultString += ` ${element}`;
    //console.log(element)
  });
  return resultString;
}
console.log(skillfunction('alvaro'));
