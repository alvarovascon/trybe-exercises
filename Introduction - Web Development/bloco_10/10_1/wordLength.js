// escreva a função wordLengths aqui
function wordLengths (words) {
  result = [];
  for (let index =0; index < words.length; index += 1) {
    result.push(words[index].length);
  }
  return result;
}

module.exports = wordLengths;