const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

rl.question('What file do you want to read? ', async (answer) => {
  try {
    const content = await readFilePromise(answer);
    console.log(`Lido ${answer} com ${content.byteLength} bytes`);
  } catch (err) {
    console.log(`Erro ao ler arquivo 1: ${err.message}`);
  }

  rl.close();
});