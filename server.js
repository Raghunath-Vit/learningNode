const http=require('http');

// const add=(req,res)=>{
//     res.write("hello");
//     res.end();
// }
// http.createServer(add).listen(8800);

// another way:-
http.createServer((req,res)=>{
    res.write("Another way of writting http create server");
    res.end();
}).listen(5500);