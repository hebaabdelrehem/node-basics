// console.log('hello from my node js app');
const helpers = require('./helpers');
const http = require('http');

// var let const
const total = helpers.sum(10, 200);
console.log("Total: ",total);
// console.log("process:",process);

const server = http.createServer((req,res) => {
    res.end("hello from node js");
});

server.listen(3000);