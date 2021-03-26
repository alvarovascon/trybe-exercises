const fs = require('fs').promises;

const startTime = Date.now();

fs.readdir('./')
  .then( async (data) => {
    console.log(`quantidade de arquivos: ${data.length}`);

    const totalSize = await data.reduce(async (acc, fileName) => {
      try {
        const response = await fs.readFile(fileName);
        return (await acc) + response.byteLength;
      } catch (e) {
        console.log(e.message);
      }
    }, 0);
  
    console.log(`tamanho total: ${totalSize}`);
  
    const totalTime = Date.now() - startTime;
  
    console.log(`Tempo de execução do script: ${totalTime} milissegundos`);
  });



