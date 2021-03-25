function addAndMultiply(num1, num2, num3) {

  const promise = new Promise ((resolve, reject) => {
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(Error("Digite apenas números"));
    const result = (num1 + num2) * num3;
    if(result < 50) reject(Error("Valor muito baixo"));
    resolve(result);
  });
  return promise;
}

addAndMultiply(17, 2, 3)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));