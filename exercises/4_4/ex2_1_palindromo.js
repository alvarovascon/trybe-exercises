function checkPalindrome (word) {
  let diffNumber = 0;

  for ( i = 0; i < word.length / 2; i += 1){
    if ( word[i] != word[word.length - i -1]) {
      diffNumber += 1;
    }
  }
  if ( diffNumber == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome('arara'));
console.log(checkPalindrome('palindromo'));
console.log(checkPalindrome('ovo'));
