const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        if(errors.errors.length >= 0){
            let {codigo, param, value, msg} = errors.errors[0];
            return res.json({codigo, mensaje: msg});
        }
    }

    next();
}



module.exports = {
    validarCampos
}
