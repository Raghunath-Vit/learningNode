const EventEmitter=require('events');
const celebrity=new EventEmitter();

celebrity.on('callMe',()=>{
    console.log("Baby call me");
})
celebrity.on('makeNoise',()=>{
    console.log("Make Noise ");
})
celebrity.emit('makeNoise');