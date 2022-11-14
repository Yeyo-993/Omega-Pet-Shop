const { Router } = require('express');
const router = Router();

//DEFINIR LOS ACCESOS A LOS CONTROLLERS
var controllerAcceso = require('../src/controller/controllerAcceso');
var controllerUsuarios = require('../src/controller/contollerUsuarios');


//PRODUCTOS
router.get('/prueba', controllerAcceso.prueba);
router.post('/producto/crear', controllerAcceso.guardarData);
router.get('/producto/buscar/:id', controllerAcceso.buscarData);
router.get('/producto/buscarall/:id?', controllerAcceso.listarAllData);
router.put('/producto/actualizar/:id', controllerAcceso.updateData);
router.delete('/producto/borrar/:id', controllerAcceso.deleteData);

//USUARIOS
router.post('/usuario/crear', controllerUsuarios.guardarData);
router.get('/usuario/buscar/:id', controllerUsuarios.buscarData);
router.get('/usuario/buscarall/:id?', controllerUsuarios.listarAllData);
router.put('/usuario/actualizar/:id', controllerUsuarios.updateData);
router.delete('/usuario/borrar/:id', controllerUsuarios.deleteData);

//export default router;
module.exports = router;