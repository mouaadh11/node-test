const { log } = require('console');
const { TIMEOUT } = require('dns');
const {readFile, writeFile} = require ('fs');
readFile('./textTest/hello.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } console.log(result);
});
