const express=require('express');
const port= process.env.PORT || 8000;
const app=express();
const expressLayouts = require('express-ejs-layouts');


app.use(express.static('./assets'));
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views','./views');





app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server on port: ${port}`);
        return;
    }
    console.log(`Server is up and running successfully on:${port}`);
});