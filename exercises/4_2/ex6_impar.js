let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numImpares=0;

for (let i=0;i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    numImpares ++;
}
}
console.log('a lista possui %s numeros impares', numImpares);
