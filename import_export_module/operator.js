

const add = (a,b)=>{
    return a+b;
}
const sub =(a,b)=>{
    return a-b;
}
const mult=(a,b)=>{
    return a*b;
}
const div=(a,b)=>{
    return a/b;
}

// const name="Vinod Bhadur Thapa";

// // multiple exports (First Way)
// module.exports={add,sub,mult,div};

// another way of multiple exports (second way)
module.exports.add1=add;
module.exports.sub2=sub;
module.exports.mult3=mult;
module.exports.div4=div;

// Third way of exporting Single function or variable to be exported.
// module.exports=add;

// variable name
// module.exports=name;
