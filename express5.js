const express=require('express');
const path=require('path');
const app=express();

const root=path.join(__dirname,'public');
// dynamic webpage
app.set('view engine','ejs');
app.get('/profile',(req,res)=>{
    const user={
        name: 'Raghunath Singh',
        Email: 'raghunath.20bci7012@vitap.ac.in',
        City: 'Ranchi',
        Skills: ['coding','communication','JAVA','Backend','Frontend']
    }
    res.render('profile',{user});
});

app.get('/login',(req,res)=>{
    res.render('login');
});
app.listen(8000);
