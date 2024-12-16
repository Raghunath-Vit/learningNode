const express=require('express');
const path=require('path');
const app=express();

// middleware
// middleware are used when we need to filter request and response.  next is very important as it will allow to load other page. if it will execute then only we can move to other page. we can use these things for restriction if user does not satisfy some of our demands. Like age is less than 18. or without login not allowded to see. 
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('please provide your AGE');
    }
    else if(req.query.age <18){
        res.send('Sorry This site not for Babies.')
    }
    else{
        next();
    }
}

// the below is application level middleware
app.use(reqFilter);


app.get('/',(req,res)=>{
    res.send('Welcome to Home page');
});

app.get('/users',(req,res)=>{
    res.send('Welcome to the Users page');
});
app.listen(9000);


// middleware are of diiferent types. it is used for putting restrictions. we can also work same thing without using middleware but for that we need to write same code to each and every page. This problem is solved by using middleware.like here the age restriction we use at application level which apply the restrictions in both Home and User page. if we want to put restriction on few pages only then we can apply middleware at Router level. Some other levels of middleware are also there. Like third party level, Application level, etc.... 