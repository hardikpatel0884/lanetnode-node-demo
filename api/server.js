/**
 * server.js
 * use to handle routes and work flow of application
 * author: Hardik Patel
 * created: 29/12/2017 09:40:00 AM
 */

// create require object
const express=require("express");// structure of project
const hbs=require("hbs");// use for hangle view
const app=express();
const fs=require("fs");// require for writing file

app.set('view engine','hbs');// setting view engine
app.use(express.static(__dirname+'/public')); //use files in public directory (localhost:3000/file.html)
hbs.registerPartials(__dirname+'/views/partials'); // Registering Partial view(s) [header,footer]

// registering helpers 
// work as method(s)

/**
 * conver message to upper case
 * @param {String} text given in hbs page
 * @returns {String} upper case string
 */
hbs.registerHelper('screem',(text)=>{
    return text.toUpperCase();
});
hbs.registerHelper('currentYear',()=>{
    return new Date().getFullYear();
});

/**
 * use to pree or post process of request
 * @param {Request} req
 * @param {Response} res
 * @param {Stack} next
 */
app.use((req,res,next)=>{
    var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
    var log=`${new Date().toString()}: ${req.method} ${req.url}`;
    fs.appendFile('server.log',log+'\n');
    //res.render('poster.hbs'); //for disaplay another page like under maintenance
    next();    
});

/*app.use((req,res,next)=>{
    res.render('poster.hbs'); //for disaplay another page like under maintenance
});*/

/**
 * handle index request
 * url - localhost:3000/
 */
app.get('/',(req,res)=>{
    res.render('home.hbs',{
        pageTitle:"Home",
        welcomeMessage:"Welcome to my application"
    });
});

/**
 * handle about request
 * url - localhost:3000/about
 */
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle:"About",
    });
});

// start appication
app.listen(3000);