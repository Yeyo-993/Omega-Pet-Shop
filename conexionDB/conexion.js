const mongoose = require('mongoose');

mongoose.connect('#', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("La conexion se a realizado exitosamente a la base de datos")
    }
});

module.exports = mongoose;