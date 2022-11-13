var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuariosSchema = Schema({
    nombre: String,
    correo: String,
    direccion: String,
    telefono: Number,
    contraseña: String
});

const usuarios = mongoose.model('usuario', usuariosSchema);
module.exports = usuarios;