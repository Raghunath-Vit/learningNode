const express=require('express');
const path=require('path');
const reqFilter=require('./MidWare');  // for seperate file Middleware we need to import the Module 
const app=express();

//  Middleware

// const reqFilter=(req,res,next)=>{
//     if(!req.query.age){
//         res.send('please provide your AGE');
//     }
//     else if(req.query.age <18){
//         res.send('Go and watch pOGO.');
//     }
//     else{
//         next();
//     }
// }


console.log('Always use Seerate File for Middleware. using require as line number 3.');


// for using above middleware as the route Middleware. we will use the variable name reqFilter to the route where we need to use so it is basically called as single routing. Example if we want only About page to be have middleware we pass variable name of middleware i.e. is reqFilter here to the roter as Second Argumnet.

app.get('/',(req,res)=>{
    res.send('Welcome page');
});
app.get('/user',reqFilter,(req,res)=>{    //now only About age having restriction.(Middleware).
    res.send('About page');
});
app.get('/Contact',(req,res)=>{
    res.send('Contact page');
});
app.get('/Sign',(req,res)=>{
    res.send('Sign Up page');
})
app.listen(4000);



// Here we will See 1) Apply routing on single route
// 2) Apply routing on multi route
// 3) Apply routing From External File.    External File is the best otion as it keep folder structure neat and cleean and easy to read.