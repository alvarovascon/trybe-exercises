let array = [2, 4, 6, 7, 10, 0, -3];

function getSmallerIndex(arrayNumbers) {
  let floor = arrayNumbers[0];
  let floorIndex;
  for(let i in arrayNumbers) {
    if (arrayNumbers[i] < floor) {
      floor = arrayNumbers[i];
      floorIndex = i;
    }
  }
  return floorIndex;
}

console.log(getSmallerIndex(array));
