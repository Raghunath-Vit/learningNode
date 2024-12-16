// we can import by
const http=require('http');
console.log(http);

const Server=http.createServer((req,res)=>{
    // res.end("<h1>Noice</h1>");

    // for Routing
    if(req.url==="/about")
    {
        res.end("<h1>About Page</h1>"); 
    }
    else if(req.url==="/contact")
    {
        res.end("<h1>Contact Page</h1>"); 
    }
    else{
        res.end("<h1>Page Not Found</h1>");
    }
})
// listen first parameter is port number   2nd parameter is Username (Optional)    3rd Parameter is
Server.listen(5000,()=>{
    console.log("Server is Working");
});
// console.log("Hello, Nodejs");
// if you want to restart your nodemon just type rs in terminal
// to run type nodemon ./index.js instead of node ./index.js in order to automatic update or re-run
// console.log("Welcome Back");