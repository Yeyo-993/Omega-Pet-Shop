const Usuarios = require('../models/usuarios');

//CONTROLLERS DEL CRUD DE LA COLLECTION RUTAS
//Guardar
function guardarData (req, res) {
    //INJECTAR UNA PROMISE
    var myUsuario = new Usuarios(req.body);
    myUsuario.save((err, result) => {
        res.status(200).send({
            message:result
        });
    });
}

//Buscar
function buscarData(req,res) {
    var idUsuario = req.params.id;
    Usuarios.findById(idUsuario).exec((err,result)=>{
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
    var idUsuario = req.params.id;
    if(!idUsuario){
        var result = Usuarios.find({}).sort('nombre');
    } else {
        var result = Usuarios.find({_id:idUsuario}).sort('nombre');
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
    var idUsuario = req.params.id;
    Usuarios.findOneAndUpdate({_id:idUsuario}, req.body,{new:true},
        function(err, Usuarios){
            if(err)
                res.send(err)
            res.json(Usuarios)
        });
}

//Delete
function deleteData (req, res) {
    var idUsuario = req.params.id;
    Usuarios.findByIdAndDelete(idUsuario,
        function(err, Usuarios){
            if(err)
                return res.json(
                    500, {
                        message: 'Error del servidor'
                    }
                )
            return res.json(Usuarios)
        });
}

//FIN

//exportar modulo
module.exports = {
    // prueba,
    guardarData,
    buscarData,
    listarAllData,
    updateData,
    deleteData
};