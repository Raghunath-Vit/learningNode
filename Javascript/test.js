// Heap Memory stores non-primitve data type like object array and regular exprssion changing them result in changing real data

// Stack memory stores primitive data type like Number, String, Boolean etc They generally stores copy of the object and changing them does not ovveride the real data.

// Note always prefer let or const .


// do not use var as this do not have concept of scoping i.e. block level scope changing variable declare wth var will chnage the variable in other function too.

let name="Raghunath Singh"
console.log(name[0])


console.log(Math.round(4.5))



// if we want Math.random to give value between two numbers say 10 and 20 so

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)


//  as Math.random gives value betwwen 0 to 1 and Mat.floor may give value 0 so we add 1 and to ensure between range we did max-min and to ensure the minimum value we add min and in these we take care of brackets to ensure Maths Bodmas Operations.

// Arrays in javaScript
const arr1=[1,2,3,4]
console.log(arr1);
// to add in front of array use unshift
arr1.unshift(0);
console.log(arr1);
//to add in last of array use push
arr1.push(9);
console.log(arr1)

// to delete last element of array
arr1.pop()
console.log(arr1)

// to check wheter present or not :- use includes
console.log(arr1.includes(9))

// to convert array into string use join
const Myarr1=arr1.join();
console.log(Myarr1);
console.log(typeof Myarr1)

// Slice will return the range from start inclusive to end exclusive
console.log(arr1.slice(1,3));

// above index number 1 and 2 are included while index number 3 is not included


// Splice will return the range from start inclusive to end inclusive and Most Important it will change the real array too. Splice is used to Override the arrays Content

let Myarr2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Starting Myarr1 Values ${Myarr2}`);
Myarr2.splice(1, 3);
console.log(`After Splice Myarr1 Values ${Myarr2}`);


