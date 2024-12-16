// here we are keaning how to tackle diadvantages of Asynchronous nature of Node js.
// we can tackle them by using either callBack or Promises . New technology is Promises.

let a=20;
let b=0;

// setTimeout(()=>{
//     b=30;
// },2000);


// making promises
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // other codes and at last line resolve(30);
        // we generally pass the result of complex code in resolve. and we get it using .then  
        resolve(30);
    },2000);
});

// using waitingData.then we get the resolve(30) in as data=30;
waitingData.then((data)=>{
    b=data;
    console.log(a+b);
})
// console.log(a+b);