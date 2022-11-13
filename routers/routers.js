const { Router } = require('express');
const router = Router();

//DEFINIR LOS ACCESOS A LOS CONTROLLERS
var controllerAcceso = require('../src/controller/controllerAcceso');
var controllerUsuarios = require('../src/controller/contollerUsuarios');


//PRODUCTOS
router.get('/prueba', controllerAcceso.prueba);
router.post('/crear', controllerAcceso.guardarData);
router.get('/buscar/:id', controllerAcceso.buscarData);
router.get('/buscarall/:id?', controllerAcceso.listarAllData);
router.put('/actualizar/:id', controllerAcceso.updateData);
router.delete('/borrar/:id', controllerAcceso.deleteData);

//USUARIOS
router.post('/crearusuario', controllerUsuarios.guardarData);
router.get('/buscarusuario/:id', controllerUsuarios.buscarData);
router.get('/buscarallusuarios/:id?', controllerUsuarios.listarAllData);
router.put('/actualizarusuarios/:id', controllerUsuarios.updateData);
router.delete('/borrarusuario/:id', controllerUsuarios.deleteData);

//export default router;
module.exports = router;