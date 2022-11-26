// const net = require("net");
// const connect = require('./client');



// console.log("Connecting ...");
// connect();

const connect  = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");
connect();

setupInput(connect());