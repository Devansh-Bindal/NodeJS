const fs = require('fs');
var zlib=require('zlib');

// Reading

let readStream = fs.createReadStream('./npm-debug.log');


readStream.on('data', (chunk) => {
    chunk += 'some random string'
    console.log(chunk);
})

readStream.on('open', () => {
    console.log('Stream opened');
});

//Will run at the end of readStream
readStream.on('end', () => {
    console.log('Stream Closed...');

  });


// Writing

// const readStream = fs.createReadStream('./npm-debug.log');
// const writeStream = fs.createWriteStream('./write.txt');

// readStream.pipe(writeStream);


//Compressing

// fs.createReadStream('./write.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('./write.txt.gz'));
  
// console.log("File Compressed.");

//Decompress

// fs.createReadStream('./write.txt.gz')
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream('/write.txt'));
  
// console.log("File Decompressed.");
