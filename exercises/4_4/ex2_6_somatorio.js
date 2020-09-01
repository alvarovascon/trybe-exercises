let n = 6;

function somatorio (x) {
  let soma = 0;

  for (let i = n; i > 0; i -= 1) {
    soma = soma + i;
  }

  return soma;
}

console.log(somatorio(n))