const fs=require('fs');
let text=fs.readFileSync("Node.txt","utf-8");
console.log("Our first Node js File System Module.");
console.log(text);

// creating a new file and add old text with changes.
console.log("Creating a new File......");
text=text.replace("first","Second");
// fs.writeFileSync("Rohan.txt",text); 

// if we want to add or append some text into files
const addText="I love Vartika Singh";
fs.appendFileSync("Rohan.txt",addText);
const newText=fs.readFileSync("Rohan.txt","utf-8");
console.log(newText);

// asynchronous nodejs 
fs.writeFile("Read.txt","Another file for performing Asynchronous.",(err)=>{console.log("Asynchrouns way of using node js module.")});
// in node js async callback is there which is not resent in synchronus.
// NOte :- 1)Built in module 2) we can also create our own modules and import it 3) we can imort it as the third party using npm.
