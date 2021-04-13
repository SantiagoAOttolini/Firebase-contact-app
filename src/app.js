const express = require('express');
const morgan = require('morgan');
const expresshdb = require('express-handlebars');
const path = require('path');

const app = express();

//SETTING
//process.env.PORT = validation, if the port not exist assign a port, in this case 3000
app.set('port', process.env.PORT || 3000); 
//path.join, allow to combine two routes fodlers
//__dirname said where the folder src is ,and the second parameters is view folder
app.set("view", path.join(__dirname, "view"))
app.engine(".hbs", expresshdb({
    //Thats mean that one files share the same configuration
    defaultLayout="main",
    //Write the extencion that use the file syste
    extname=".hbs"
}))
app.set("view engine", ".hbs")

//middleware

//routes

//static files

module.exports = app;
