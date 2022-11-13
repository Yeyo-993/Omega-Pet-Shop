var app = require('./app');
var mongoose = require('./conexionDB/conexion');
var port = 4200;

app.listen(port, ()=>{
    console.log("El backend se ejecuto correctamente");
});