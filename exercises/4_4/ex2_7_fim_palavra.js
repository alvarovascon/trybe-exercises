let word = 'trybe';
let ending = 'be';

function isEnd (string, stringEnd) {

  let differences = 0;
  let sizeString = string.length;
  let sizeStringEnd = stringEnd.length;
  let sizeDiff = sizeString - sizeStringEnd;

  for( i = sizeDiff; i < sizeString; i += 1) {

    if(stringEnd[ i - sizeDiff] !== string[i]) {
      differences += 1;
    }

  }
  
  if (differences === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEnd(word, ending));
