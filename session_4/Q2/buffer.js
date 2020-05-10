const buf1=Buffer.alloc(10); // Created an empty buffer of size 10,that only can accommodate 10 bytes.
const buf2 = Buffer.from("hello World!!"); //Created buffer with some content

//Examining structure of a buffer
console.log(buf1.toJSON());
console.log(buf2.toJSON());

//Length of buffer
console.log(buf1.length);
console.log(buf2.length);

buf1.write("Adding data to buffer");
console.log(buf1.toString()); //allocates upto only 10 bytes
console.log(buf1.toJSON());

buf2.write("Adding data to buffer-2");
console.log(buf2.toString());//allocates upto only 13 bytes(buffer content)
// console.log(buf1.toJSON());