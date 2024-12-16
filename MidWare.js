module.exports= reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('0lease provide your AGE');
    }
    else if(req.query.age <18){
        res.send('Go and watch pOGO.');
    }
    else{
        next();
    }
}
// here we create a seperate file for Route Middleware 
// in order to use this we have to export it using module.exports= 