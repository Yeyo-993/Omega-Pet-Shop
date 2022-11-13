const Acceso = require('../models/acceso');

function prueba (req, res) {
    res.status(200).send({
        message: 'Prueba de inicio correcto del controlador'
    });
}
//CONTROLLERS DEL CRUD DE LA COLLECTION RUTAS
//Guardar
function guardarData (req, res) {
    //INJECTAR UNA PROMISE
    var myAcceso = new Acceso(req.body);
    myAcceso.save((err, result) => {
        res.status(200).send({
            message:result
        });
    });
}

//Buscar
function buscarData(req,res) {
    var idAcceso = req.params.id;
    Acceso.findById(idAcceso).exec((err,result)=>{
        if(err){
            res.status(500).send({
                message: 'Error en la peticion'
            });
        }else{
            if(!result){
                res.status(404).send({
                    message: 'No se encontro el dato'
                });
            }else{
                res.status(200).send({
                    message: result
                });
            }
        }
    });
}

//Listar
function listarAllData (req, res) {
    var idAcceso = req.params.id;
    if(!idAcceso){
        var result = Acceso.find({}).sort('nombre');
    } else {
        var result = Acceso.find({_id:idAcceso}).sort('nombre');
    }
    result.exec(function(err, result){
        if(err){
            res.status(500).send({
                message: 'Error del servidor'
            });
        }else{
            if(!result){
                res.status(404).send({
                    message: 'No se encontro el dato error del cliente'
                });
            }else{
                res.status(200).send({
                    message: result
                });
            }
        }
    });
}


//Actualizar
function updateData (req, res) {
    var idAcceso = req.params.id;
    Acceso.findOneAndUpdate({_id:idAcceso}, req.body,{new:true},
        function(err, Acceso){
            if(err)
                res.send(err)
            res.json(Acceso)
        });
}

//Delete
function deleteData (req, res) {
    var idAcceso = req.params.id;
    Acceso.findByIdAndDelete(idAcceso,
        function(err, Acceso){
            if(err)
                return res.json(
                    500, {
                        message: 'Error del servidor'
                    }
                )
            return res.json(Acceso)
        });
}

//FIN

//exportar modulo
module.exports = {
    prueba,
    guardarData,
    buscarData,
    listarAllData,
    updateData,
    deleteData
};