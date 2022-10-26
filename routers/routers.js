const { Router } = require('express');
const router = Router();

//DEFINIR LOS ACCESOS A LOS CONTROLLERS
var controllerRuta = require('../src/controllers/controllerRuta');

//DEFINIR LAS RUTAS
router.get('/prueba', controllerAcceso.prueba);
router.post('/crear', controllerAcceso.guardarData);
router.get('/buscar/:id', controllerAcceso.buscarData);
router.get('/buscarall/:id?', controllerAcceso.listarAllData);
router.put('/acceso/:id', controllerAcceso.updateData);
router.delete('/acceso/:id', controllerAcceso.deleteData);


//export default router;
module.exports = router;