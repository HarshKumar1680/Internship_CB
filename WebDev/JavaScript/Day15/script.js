// console.log('let start');

// let rectangle={
//     length: 1,
//     breadth: 2,

//     draw: function(){
//         console.log('draw');
//     }    
// };
// console.log(rectangle.draw);

//factory function

// function createRectangle(){

//     return rectangle={
//         length :1,
//         breadth:2,
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };    

//factory function

//    function createRectangle(len,bre ) { 
//     const rectangle = {
//         length: len,
//         breadth: bre,
//         draw() {
//             console.log('drawing rectangle');
//         }
//     };
//     console.log('Rectangle created:', rectangle); 
//     return rectangle; 
// }

// // let rectangleObj1 = createRectangle(2,3);
// let rectangle2  = createRectangle(5,4);
// rectangle2.color = 'yellow';
// console.log(rectangle2);

// delete rectangle2.color;
// console.log(rectangle2);





//CONSTRUCTION FUNCTION - use pascal notation -> first letter of every word is capital

// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw = function(){
//         console.log('drawing');
//     }

// };
// console.log('Rectangle created:', Rectangle); 

// let rectangleObj1 = new Rectangle(3,4);

// let a =10;
// let b =a;
// a++;
// console.log(a);
// console.log(b);

// let a={ value:10};
// let b=a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a= 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

//reference

// let a ={value :10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);


let rectangle= {
    length:2,
    breadth:4
};
// //for in loop generally for objects
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }


//  for-of loop generally for arrays or iterable objects
for (let value of Object.entries(rectangle)) {
    console.log(value);
}





