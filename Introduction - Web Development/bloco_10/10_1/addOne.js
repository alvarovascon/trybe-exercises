// escreva a função addOne aqui
function addOne (arr) {
  newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    newArr.push(arr[index] + 1);
  }
  return newArr;
}

module.exports = addOne;