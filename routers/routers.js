const { Router } = require('express');
const router = Router();

//DEFINIR LOS ACCESOS A LOS CONTROLLERS
var controllerAcceso = require('../src/controller/controllerAcceso');

//PRODUCTOS
router.get('/prueba', controllerAcceso.prueba);
router.post('/crear', controllerAcceso.guardarData);
router.get('/buscar/:id', controllerAcceso.buscarData);
router.get('/buscarall/:id?', controllerAcceso.listarAllData);
router.put('/actualizar/:id', controllerAcceso.updateData);
router.delete('/borrar/:id', controllerAcceso.deleteData);

/*//USUARIOS
router.post('/crear', controllerAcceso.guardarData);
router.get('/buscar/:id', controllerAcceso.buscarData);
router.get('/buscarall/:id?', controllerAcceso.listarAllData);
router.put('/actualizar/:id', controllerAcceso.updateData);
router.delete('/borrar/:id', controllerAcceso.deleteData);*/

//export default router;
module.exports = router;