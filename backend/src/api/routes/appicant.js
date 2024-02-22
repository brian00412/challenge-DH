const express = require('express');
const router = express.Router();
const applicantsAPIController = require('../controllers/applicantController');

//Rutas
//Listado 
router.get('/', applicantsAPIController.list);
//Detalle 
//router.get('/:id', applicantsAPIController.detail);


module.exports = router;