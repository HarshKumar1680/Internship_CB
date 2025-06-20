// let a = Math.random();
// console.log(a);

// let b = Math.PI;
// console.log(b);

// let c = Math.round(1.8);
// console.log(c);

// Math.max(2,34,54);
// Math.min(2,34,54);

// Math.abs(-3);


// let lastName = 'Babbar';


// let lastName1 = new String('Babbar')

// console.log(lastName.includes('Ba'));
// console.log(lastName.startsWith('Babb'));
// console.log(lastName.startsWith('Babb'));

// let message = 'this is my first message';
// let words = message.split(' ');
// console.log(words);

// let date = new Date();
// console.log(date);

// date.getDay;
// date.setDate;

// let numbers = [1,2,3,4,5];
// console.log(numbers);

//insertion
//  console.log(numbers.unshift(6));
//  console.log(numbers);
//  console.log(numbers.splice(2,0,'a','b'));
//  console.log(numbers);
//  console.log(numbers.push(8));
//  console.log(numbers);

//search

// console.log(numbers.indexOf(9));
// console.log(numbers.indexOf(1,5));

// console.log(numbers.includes(9));

// let courses = [
//     {no:1, name:'Harsh'  },
//     {no:2, name:'Nisha'  }
// ];
// console.log(courses);

// console.log(courses.indexOf({no:1, name:'Harsh'}));
// console.log(courses.includes({no:1, name:'Harsh'})); =>bot method giving us wrong output so we use callback function method

// let course = courses.find(function(course){
//     return course.name === 'Nisha';
// });
// console.log(course);

//arrow function/predicate function

// let course = courses.find(course => course.name ==='Nisha');
// console.log(course);

//REMOVING AN ELEMENT
// let numbers = [1,2,3,4,5];
// console.log(numbers.pop(4));
// console.log(numbers.shift(3));
// console.log(numbers.splice(2,1));
// console.log(numbers);
// while(numbers.length > 1) {
//   console.log(numbers.pop());
// }
// console.log(numbers);
 //empty an array
//  let numbers2 = numbers;
//  numbers = [];
//  console.log(numbers2); // This will still show the original array as both variables point to the same array in memory.
//  console.log(numbers); // This will show an empty array as we have reassigned the variable to an empty array.


//COMBINING ARRAYS
// let first = [1, 2, 3];
// let second = [4, 5, 6];
// let combined = first.concat(second);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// //SLICING AN ARRAY
// let sliced = combined.slice(2, 5);
// console.log(sliced); // Output: [3, 4, 5]

// // SPREAD OPERATOR
// let spreadCombined = [...first, ...second];
// console.log(spreadCombined); // Output: [1, 2, 3, 4, 5, 6]

// // SPREAD OPERATOR WITH OBJECTS     
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

//ITERATING OVER AN ARRAY
// let numbers = [1, 2, 3, 4, 5];
// Using forEach
// numbers.forEach(number=> console.log(number));
// numbers.sort();
// console.log(numbers);
// let numbers = [1, 2, -3, -4, 5];

// let filtered = numbers.filter( value => value >= 0
// );
// console.log(filtered);

let number = [2,3,4,5]

let items = number.map(function(value){
    return 'student_no' + value;
})
console.log(items);



















