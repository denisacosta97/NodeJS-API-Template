//const { Client } = require('pg');
//const pg = require('pg');


class Conexion {

    constructor() {

        const user = process.env.USERBD;
        const host = process.env.HOST;
        const database = process.env.DATABASE;
        const password = process.env.PASSWORD;
        const port = process.env.PORTBD;
        
        const connectionData = {
            user,
            host,
            database,
            password,
            port,
        }
        
        /*this.client = new Client(connectionData);
        
        this.client.connect();

        const types = pg.types;

        //Solo válido para Postgres (devuelve la fecha en formato standard)
        types.setTypeParser(1114, function(stringValue) {
            return stringValue;
           
        });*/

        
    }
     
    getBD = async () => {
        //return this.client;
    
    }

    close = async() => {
        //await this.client.end();
    }
   
}

module.exports = Conexion;
