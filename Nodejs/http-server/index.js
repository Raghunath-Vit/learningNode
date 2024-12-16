const http=require('http');


const PORT=3000;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type': 'application/json',
    });
    // Note res.end accepts string as arguments and to pass javascript objects we need to convert them into string that's why we use JSOn.stringfy.
    res.end(JSON.stringify({
        id:1,
        name:'Raghunath Singh',
    }));
});

server.listen(PORT,()=>{
    console.log("Server Running...");
})