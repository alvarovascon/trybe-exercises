const fs = require('fs');

const startTime = Date.now();

const filesArray = fs.readdirSync('./');

console.log(`quantidade de arquivos: ${filesArray.length}`);

const totalSize = filesArray.reduce((acc, file) => { 
  return acc + fs.readFileSync(file).byteLength;
}, 0);

console.log(`tamanho total: ${totalSize}`);

const totalTime = Date.now() - startTime;

console.log(`Tempo de execução do script: ${totalTime} milissegundos`);
