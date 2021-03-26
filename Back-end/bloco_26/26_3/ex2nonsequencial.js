const fs = require('fs').promises;

const file1Path = './lyrics.txt';
const file2Path = './test.txt';

let filesRead = 0;


const readFileFunction = async (filePath) => {
  try {
    const startTime = Date.now();
    const content = await fs.readFile(filePath);
    const timeToRead = Date.now() - startTime;
    filesRead += 1;
    console.log(`Read ${filePath} with ${content.byteLength} bytes in ${timeToRead} miliseconds`);

    if(filesRead == 2) {
      const totalTime = Date.now() - scriptStartTime;
      console.log(`Time spent on this task: ${totalTime} miliseconds`);
    }
  }
  catch (e) {
    console.error(e)
  }
};

const scriptStartTime = Date.now();
readFileFunction(file1Path);
readFileFunction(file2Path);
