const express=require('express');
const path=require('path');
const app=express();

// in this our objective is to remove the extension from url so users don't know which technology we are using.

const root=path.join(__dirname,'public');
app.get('',(req,res)=>{
    res.sendFile(`${root}/about.html`);
});

app.get('/help',(req,res)=>{
    res.sendFile(`${root}/help.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${root}/nopage.html`);  // * indicate other invalid url then render nopage.html
});
app.listen(2500);
