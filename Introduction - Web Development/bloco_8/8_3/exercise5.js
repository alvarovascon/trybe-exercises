    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const getACount = (count, word) => {
    for (let i = 0; i < word.length; i += 1) {
      if (word[i] === 'a' || word[i] === 'A') {
        count +=1;
      }
    }
    return count;
  };
  return names.reduce(getACount, 0);
}

assert.deepStrictEqual(containsA(), 20);