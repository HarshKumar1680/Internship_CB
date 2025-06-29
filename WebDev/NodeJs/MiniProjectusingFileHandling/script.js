const fs = require('fs');

fs.readFile('Image.jpg',{
    encoding:'base64'
},(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})


// let file = fs.readFileSync('image.jpg');
// console.log(file);
// let str = file.toString('base64');
// console.log(str);