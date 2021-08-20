const Moment = require('moment');


/**
 * Dada una fecha, verifica si es una fecha válida
 * @param {*} fecha string a verificar
 * @returns booleano
 */
const esFecha = (fecha) =>{

    try{
        if(fecha === ''){
            throw new Error(`La fecha es vacía`);
        }
        const valid = Moment(fecha, 'YYYY-MM-DD',true).isValid();
        if(!valid){
            throw new Error(`La fecha: ${ fecha } no es válida`) 
        }else{
            return valid;
        }
       
    }catch(error){
        throw new Error(`La fecha: ${ fecha } no es válida`);
    }
}

/**
 * Dada una fecha, la formatea por hora y fecha
 * @param {*} date fecha a formatear
 * @returns 
 */
const dateToString = (date, extra=false) => {
    return date.toISOString().
    replace(/T/, ' ').
    replace(!extra ? /\..+/ : /Z/, '');   
}




module.exports = {
    esFecha,
    dateToString
}

