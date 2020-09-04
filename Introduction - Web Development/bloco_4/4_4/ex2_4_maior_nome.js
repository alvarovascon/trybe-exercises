let list = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longestName (array) {
  let longest = '';
  for (let index = 0; index < array.length - 1; index += 1) {
    if(array[index].length > array[index + 1].length) {
      longest = array[index];
    }
  }
  return longest;
}

console.log(longestName(list));
