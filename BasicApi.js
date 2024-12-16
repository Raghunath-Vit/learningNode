const http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify({name:'Raghunath', email:'test@gmail.com'}));
    res.end();
}).listen(5000);