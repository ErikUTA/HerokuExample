const hostname = '127.0.0.1'; 
const express = require('express');
const app = express();

app.get('/' , function(req, res) {
    res.send('HOLA MUNDO');        
});


process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

app.listen(process.env.PORT, hostname, () => {
    console.log(`running at http://${hostname}:${process.env.port}`);    
});


