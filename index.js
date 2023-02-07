const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 8000;
const db = require('./config/mongoose');


// app.use(expressLayouts);
// extract styles and scripts of subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./assests'));



app.use('/',require('./routes/index'));

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on port", port);
});