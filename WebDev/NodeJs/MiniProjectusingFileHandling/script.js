// const fs = require('fs');
// const Jimp = require('jimp');
// // fs.readFile('Image.jpg',{
// //     encoding:'base64'
// // },(err,data)=>{
// //     if(err) return console.log(err);
// //     console.log(data);
// // })


// // // let file = fs.readFileSync('image.jpg');
// // // console.log(file);
// // // let str = file.toString('base64');
// // // console.log(str);

// // write or storing the image in a  file

// // let file = fs.readFileSync('image.jpg');
// // console.log(file);
// // let str = file.toString('base64');

// // fs.writeFileSync('image1.txt',str);
// str = fs.readFileSync('image.txt',{encoding:'utf-8'});
// let buffer = Buffer.from(str,'base64');
// console.log(buffer);
// fs.writeFileSync('Image1.jpg',buffer);




// // open a file called "lenna.png"
// // const image = await Jimp.read("image.jpg");

// // image.resize(256, 256); // resize

// // await image.write("image-small.jpg"); // save


const fs = require('fs');
const Jimp = require('jimp'); 


const base64Str = fs.readFileSync('image.jpg').toString('base64');
fs.writeFileSync('image.txt', base64Str);


const str = fs.readFileSync('image.txt', { encoding: 'utf-8' });
const buffer = Buffer.from(str, 'base64');
fs.writeFileSync('Image1.jpg', buffer);


Jimp.read('Image1.jpg', function (err, image) {
  if (err) {
    console.error('Error reading image:', err);
    return;
  }

  image
    .resize(256, 256)
    .quality(60)
    .write('imagesmall.jpg', () => {
      console.log('Resized image saved as imagesmall.jpg');
    });
});
