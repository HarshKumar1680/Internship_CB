// console.log("Hello Ji from Node Js");
// CALLBACK API
const {writeFile} = require(`fs`);
// let data = `We ar learning file system!`;
let data = `Someother data is here!`;

writeFile(
    `hello.txt`,
    data,
    {
        encoding:`utf-8`,
        flag:`a`

    },
    (err) =>{
        if(err) return console.log(`Error: `, err);
        console.log(`File written sucessfully!`);
    }
)