//Q2.Reading file sychronously.
const fs=require("fs");
let content=fs.readFileSync('./sync.txt','utf8');
console.log(content);
console.log("After Reading The File");
