// console.log('hello from my node js app');
// const helpers = require('./helpers');
// const http = require('http');

// // var let const
// const total = helpers.sum(100, 200);
// console.log("Total: ",total);
// // console.log("process:",process);

// const server = http.createServer((req,res) => {
//     res.end("hello from node js application real updates");
// });

// server.listen(3000);

// use espress package to create server
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hey from express package')
// })

// app.listen(3000)

const fs = require('fs');
const fileName = 'target.txt';
fs.watch(fileName,() => console.log('file changes'));