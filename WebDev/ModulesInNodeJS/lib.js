function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
module.exports.add = add
module.exports.sub = sub

// console.log(module.exports)
//this pollutes the global space
// globalThis.add = function add(a,b){
//     return a+b;
// }