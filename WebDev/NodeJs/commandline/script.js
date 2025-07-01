console.log('Hello Harsh')
// let a = 10
// let b = 20
// console.log(a+b)
console.log(process.argv)
let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

console.log('Afeter adding: ', a+b);