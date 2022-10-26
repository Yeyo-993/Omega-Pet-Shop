let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let accesoSchema = Schema({
    origen: String,
    destino: String,
    activo: Number
});

const acceso = mongoose.model('tbc_acceso', accesoSchema);
module.exports = acceso;