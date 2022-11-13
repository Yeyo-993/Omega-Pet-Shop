// Traer libreria express
var express = require('express');
//LLamar a la funcion express
var app = express();
//Traer mongoose
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded(
    {extended: true}
));

//Configurar cabecera y CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//USO ROUTERS
app.use(require('./routers/routers'));

//Exportar modulo app
module.exports = app;