const fs = require('fs').promises;

const file1Path = './lyrics.txt';
const file2Path = './test.txt';

const readFileFunction = async (filePath) => {
  try {
    const startTime = Date.now();
    const content = await fs.readFile(filePath);
    const timeToRead = Date.now() - startTime;
    console.log(`Read ${filePath} with ${content.byteLength} bytes in ${timeToRead} miliseconds`);
  }
  catch (e) {
    console.error(e)
  }
};

const readBoth = async () => {
  try {
    const scriptStartTime = Date.now();

    await readFileFunction(file1Path);
   
    await readFileFunction(file2Path);

    const totalTime = Date.now() - scriptStartTime;

    console.log(`Time spent on this task: ${totalTime} miliseconds`);
  } catch (e) {
    console.log(e.message);
  }

};

readBoth();
