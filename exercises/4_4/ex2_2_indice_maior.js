let array = [2, 3, 6, 7, 10, 1];

function getBiggerIndex(arrayNumbers) {
  let ceil = 0;
  let ceilIndex;
  for (let i = 0;i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > ceil) {
      ceil = arrayNumbers[i];
      ceilIndex = i;
    }
  }
  return ceilIndex;
}

console.log(getBiggerIndex(array));
