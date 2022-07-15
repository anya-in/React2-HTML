const fs = require('fs');
const path = require('path');

// //Create Folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//     if (err) throw err;
//     console.log('File written to ...');
// });

// //File Append
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.JS', err => {
//     if (err) throw err;
//     console.log('File written to ...');
// });



//Read File

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});


