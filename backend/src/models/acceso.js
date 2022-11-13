var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accesoSchema = Schema({
    nombre: String,
    marca: String,
    edad: String,
    cantidad: Number,
    tamano: Number,
    precio: Number
});

const acceso = mongoose.model('producto', accesoSchema);
module.exports = acceso;