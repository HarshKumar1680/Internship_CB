const { writeFile} =  require(`fs/promises`);
let data = `I am writing Data using Async Await API`;

async function writeData(data) {
   await  writeFile(
    "World Text",
    data,
    {
        encoding: `utf-8`,
        flag:`w`
    }
   )
   console.log(`I am Iron Man`);
}

writeData(data);
// let data = `I am writing Data using Promises API`;

// let write = writeFile(
//     `World.txt`,
//     data,
//     {
//     encoding: `utf-8`,
//     flag: `w`
    
//     }
// )
// write.then(()=>{
//     console.log(`File written Successfully`);
// }).catch(()=>{
//     console.log(`Error:`, err);
// })
console.log(`run at last`);