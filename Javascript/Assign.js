// // // 'use strict';
// // function strictFunction() {
// //     'use strict';
// //     // Strict mode is active in this function
    
// //     // This will cause an error because 'x' is not declared
// //     let x = 3.14; // ReferenceError: x is not defined
// // }

// // function nonStrictFunction() {
// //     // Strict mode is not active in this function

// //     // This will not cause an error
// //     y = 3.14; // This is allowed, but not recommended
// // }

// // strictFunction();
// // nonStrictFunction();

// // {
// //     // Strict mode is not active here

// //     // This will not cause an error
// //     z = 3.14; // This is allowed, but not recommended
// // }



// // let person = {name: 'Carla'};
// // delete person;


// // "use strict";
// // // Duplicating the parameter name is not allowed.
// // function hello(p1, p1) { console.log('hello')}; // throws an error
// // hello();

// // 'use strict';
// // let number=5;
// // console.log(number);



// // closure means innerFunctions stills remembers the outer function property even outer completed its execution
// function greet() {
//     // variable defined outside the inner function
//     let name = 'John';
//     // inner function
//     function displayName() {
//     // accessing name variable
//     return 'Hi' + ' ' + name;
//     }
//     return displayName;
//     }
//     const g1 = greet();



