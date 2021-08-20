const { Router } = require('express');
const { check } = require('express-validator');


const { validarCampos } = require('../middlewares/validar-campos');
const { testTest} = require('../controllers/test');

const router = Router();


/**
 * Para pruebas
 */
 router.get('/',[
    //check('token').notEmpty(), //Ejemplo de parametro no vacío
    validarCampos
] ,testTest);


module.exports = router;