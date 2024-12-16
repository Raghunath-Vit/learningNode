const express=require('express');
const app=express();
// app.get takes route as first argumnet and second argument is a callback function which has two parameters as request and response.

// app.get() methos is used when we want to render a age on the screen.
app.get('',(req,res)=>{
    res.send('<h1>Welcome to the introduction of Express js</h1> <a href="/about">Go to About page</a>');
});

// about page
app.get('/about',(req,res)=>{
    // req.get()
    res.send(`<p>this is rendering from the about page.</p> <input type="text" placeholder="Name" value=${req.query.name}/><button>Submit</button><a href="/help">Go to help</a>`);
    // in above code http://localhost:5400/about?name=Raghunath Singh in url. From this The query i.e. after ? name="Raghunath Singh" will collected using req.query.name and put that in value so in textbox input name will visible.
});

app.get('/help',(req,res)=>{
    res.send([
        {
            name:'test',
            email: 'test@gmail.com'
        },
        {
            name:'pen',
            email: 'pen@gmail.com'
        },
        {
            name:'Thor',
            email: 'Thor@gmail.com'
        },
    ]);
});
// to view about page type localhost:5400/about in url.
app.listen(5400);