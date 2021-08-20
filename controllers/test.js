const { response, request } = require('express');

/**
 * Función de prueba 
 * @param {*} req 
 * @param {*} res 
 */
const testTest = async(req = request, res = response) => {
   
    return res.json({mensaje: "Hola Mundo - NodeJS"});
}


module.exports = {
    testTest
}