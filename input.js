const fs=require('fs');
const input=process.argv

// we could take input from proceess.argv[2] 
// here if we pass add as inut it will create a file with 3rd argumnet as file name and 4th argument as its content. 
// if we pass remove it will delete the file 
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log('invalid request by user');
}