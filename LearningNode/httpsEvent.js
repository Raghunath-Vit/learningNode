const http=require('http');
// data end
const req=http.request("http://www.google.com",(res)=>{
    res.on('data',(dataFromRequest)=>{
        console.log(dataFromRequest);
    });
    res.on('end',(onFinishingReq)=>{
        console.log("No more data to send");
    })
})
req.end();