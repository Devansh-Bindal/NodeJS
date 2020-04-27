// 2.Reading file asnychronously.
const fs=require("fs");
let content=fs.readFile('./async.txt','utf8',(err,content)=>{
    if(err)
    {
        console.log("Error Occured ",err);
    }
    else
    {
        console.log(content);
    }
});
console.log("After Reading The File");




