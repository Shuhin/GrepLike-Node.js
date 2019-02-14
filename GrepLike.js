let fs = require('fs');
let readLine = require('readline');

let ProcessQuery = process.argv.slice(2);

let readlineInterFace = readLine.createInterface({
  input: fs.createReadStream(`./${ ProcessQuery[1]}`)
});

readlineInterFace.on("line", line => {
  if (line.includes(ProcessQuery[0])) {
    console.log(line);
  }
});
