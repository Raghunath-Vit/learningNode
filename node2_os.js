const os=require('os');
console.log(os.arch());
const freespace=os.freemem();
// writting free space in gb
console.log(`${freespace/1024/1024/1024}`);