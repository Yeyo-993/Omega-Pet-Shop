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
    let myAcceso = new Acceso(req.body);
    myAcceso.save((err, result) => {
        res.status(200).send({
            message:result
        });
    });
}

//Buscar
function buscarData(req,res) {
    let idAcceso = req.params.id;
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
    let idAcceso = req.params.id;
    if(!idAcceso){
        let result = Acceso.find({}).sort('origen');
    } else {
        let result = Acceso.find({_id:idAcceso}).sort('origen');
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
    let idAcceso = req.params.id;
    Acceso.findOneAndUpdate({_id:idAcceso}, req.body,{new:true},
        function(err, Acceso){
            if(err)
                res.send(err)
            res.json(Acceso)
        });
}

//Delete
function deleteData (req, res) {
    let idAcceso = req.params.id;
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