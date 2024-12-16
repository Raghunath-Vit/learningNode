const express=require('express');
const path=require('path');
const app=express();
const root=path.join(__dirname,'public');
console.log(root);

app.use(express.static(root));
app.listen(6600);

// to view html page (about.html) we write localhost:6600/about.html in url.
// to render html pages make seperate files of Html and keep them in a seperate folder. Then get the folder name using path module.         
// path.join(__dirname,'FOLDER_NAME');      here __dirname gives path location for current working root folder. 

// here in variable root contain the path location of the folder containig html pages and we display them using static pages by app.use(express.static(root));

// we generally don't follow this way of including html page. we follow express3.js file to do the same.