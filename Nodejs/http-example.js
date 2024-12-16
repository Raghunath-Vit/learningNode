const http=require('http');

const request=http.request("http://www.google.com",(res)=>{
        res.on("data",(chunk)=>{
            console.log(`data from google is : ${chunk}`);
        })
        res.on("end",()=>{
            console.log("No more data to fetch");
        })
})

request.end();