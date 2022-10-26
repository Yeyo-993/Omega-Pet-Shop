let app = require('./app');
let mongoose = require('mongoose');
let port = 4200;

app.listed(port,()=>{
    console.log("El backend se ejecuto correctamente")
});