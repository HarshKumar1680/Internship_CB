const fs = require('fs');

// fs.readFile('Image.jpg',{
//     encoding:'base64'
// },(err,data)=>{
//     if(err) return console.log(err);
//     console.log(data);
// })


// // let file = fs.readFileSync('image.jpg');
// // console.log(file);
// // let str = file.toString('base64');
// // console.log(str);

// write or storing the image in a  file

// let file = fs.readFileSync('image.jpg');
// console.log(file);
// let str = file.toString('base64');

// fs.writeFileSync('image1.txt',str);
str = fs.readFileSync('image.txt',{encoding:'utf-8'});
let buffer = Buffer.from(str,'base64');
console.log(buffer);
fs.writeFileSync('Image1.jpg',buffer);





