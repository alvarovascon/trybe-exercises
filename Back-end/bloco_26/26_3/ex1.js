const fs = require('fs');

const scriptStartTime = Date.now();

const file1Path = './lyrics.txt';
const file2Path = './test.txt';

const file1start = Date.now();

const file1 = fs.readFileSync(file1Path);

const timeSpentOnFile1 = Date.now() - file1start;

const file2start = Date.now();

const file2 = fs.readFileSync(file2Path);

const timeSpentOnFile2 = Date.now() - file2start;

const totalTime = Date.now() - scriptStartTime;

console.log(`Read ${file1Path} with ${file1.byteLength} bytes in ${timeSpentOnFile1} miliseconds`);

console.log(`Read ${file2Path} with ${file2.byteLength} bytes in ${timeSpentOnFile2} miliseconds`);

console.log(`Time spent on this task: ${totalTime} miliseconds`);
