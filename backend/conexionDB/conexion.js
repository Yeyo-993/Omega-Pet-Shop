const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/omega-pet-shop-g5', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("La conexion se a realizado exitosamente a la base de datos");
    }
});

module.exports = mongoose;