run(); //hoisting example
// This will work due to hoisting, as the function declaration is moved to the top

function run() {
    console.log("Hello, World!");
}
// run();
//function assignment
//Named function expression

// stand(); not defined in assignment context
// let stand = function walk () {
//     console.log("Walking...");
// }
// console.log(stand); 
// stand();  // This will work as the function is assigned to a variable

//annonymous function
let greet = function() {
    console.log("Hello, Anonymous Function!");
}
setTimeout(greet,5000 ); // This will work as the function is called after its declaration

