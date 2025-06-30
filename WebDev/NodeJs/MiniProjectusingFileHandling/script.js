const fs = require('fs');
const Jimp = require('jimp');
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




// open a file called "lenna.png"
// const image = await Jimp.read("image.jpg");

// image.resize(256, 256); // resize

// await image.write("image-small.jpg"); // save
jimp.read('image.jpg', (err, image) => {
    if (err) throw err;
    image
    .resize(257, 256)
    .quality(60)
    .write('imagesmall.jpg');
});

