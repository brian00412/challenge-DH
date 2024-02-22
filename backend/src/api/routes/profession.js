const express = require('express');
const router = express.Router();
const professionsAPIController = require('../controllers/professionController');

//Rutas
//Listado 
router.get('/', professionsAPIController.list);
//Detalle 
//router.get('/:id', professionsAPIController.detail);


module.exports = router;