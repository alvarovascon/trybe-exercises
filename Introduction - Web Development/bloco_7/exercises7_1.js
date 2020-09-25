const factorial = (N) => {
  let result = 1
  for (let i = 2; i <= N; i += 1) {
    result *= i;
  }
  return result;
}

//  console.log(factorial(5));

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

