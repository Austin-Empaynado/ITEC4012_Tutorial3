// const sum = (num1, num2) => {

//     return num1 + num2;
// }

// const result = sum(2, 3);

// console.log(result);

// const fs = require('fs');

// const generateFile = () => {
//     try {
//         fs.writeFileSync('data.txt', 'Hi, this file was made with Node!');
//     } catch(err){
//         console.log (err);        
//     }
    
// }

// generateFile();

// const http = require('http');

// http.createServer(function (req, res){
//     res.write('Server started. Hello there.');
//     res.end();
// }).listen(8080);
//going to use a package to make server creation easier

//Module creation that we can import and export to other files, by requiring it in the file that's using it. We create a module by creating a file

//import module
// const myModule = require('./my-module.js');

// const date = myModule();
// console.log(date);


//Using NPM

//requiring express
const express = require('express');

//initializing express app
const app = express();

//specifying a port to listen on localhost: 9000
const port = 9000;

//API - URLS
//whenever someone visits our server, there's going to be a request and response
app.get('/', (req, res)=>{
    res.send("Hi from the express server!");
});

app.get('/api/cats', (req, res)=>{

    // call to db would go here
    // for now, return dummy data

    const cats = ["British Shorthair", "Ragdoll", "Russian Blue"];
    
    //Sending a response should be in JSON
    res.send(JSON.stringify(cats));
});


//tell app to listen on the port we defined, when app successfully runs on port, output a message
//running the express http server on the port we specified
app.listen(port, ()=>{
    console.log('listening on port', port);
});

