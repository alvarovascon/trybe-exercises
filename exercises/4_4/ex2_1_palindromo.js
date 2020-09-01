function checkPalindrome (palavra) {
  let diffNumber = 0;

  for ( i = 0; i < palavra.length; i += 1){
    if ( palavra[i] != palavra[palavra.length - i -1]) {
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