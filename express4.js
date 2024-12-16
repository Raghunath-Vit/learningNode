const express=require('express');
const path=require('path');
const app=express();

const root=path.join(__dirname,'public');
// for telling our system thatt we are using EJS we should write. Note first argument is fixed in app.set while second argumnet is the name of the package e are using example ejs , pug,etc. Make sure you have views folder . It is by deafault for ejs that we should have a folder named as views where we contain all ejs files.
app.set('view engine','ejs');


app.get('/profile',(req,res)=>{
    const user={
        name: 'Raghunath Singh',
        Email: 'raghunath.20bci7012@vitap.ac.in',
        City: 'Ranchi'
    }
    res.render('profile',{user});   
    // we can pass something to profile.ejs in views folder by passing as the second argumnet in render.
    // here we are passing user as an object to profile.ejs.   
     //we write render method for displaying for ejs. profile is the name of ejs file in views folder.
})


app.get('',(req,res)=>{
    res.sendFile(`${root}/about.html`);
});


// other pages.
app.get('*',(req,res)=>{
    res.sendFile(`${root}/nopage.html`);
})

app.listen(7500);


// type localhost:7500/profile to view ejs file.