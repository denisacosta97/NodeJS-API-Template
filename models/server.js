const express = require('express'); 
const cors = require('cors'); 
const testRouter = require('../routes/test');
const Conexion = require('../bd/conection');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';
        this.apiPaths = {
            test: '/api/v1/test/'
        };

        // Conectar a base de datos
        //this.dbConnection();

        // Middlewares
        this.middlewares(); //

        // Rutas de mi aplicación
        this.routes();

        
    }

    async dbConnection() {

        try {
            const bd = new Conexion();
            console.log('Database online');
            await bd.close();

        } catch (error) {
            console.log(error);
        }

    }

    middlewares() {

        // CORS
        this.app.use( cors() );
     
        // Lectura del body
        this.app.use( express.json() ); //DEFINE QEUE LA RESPUESTA ES JSON 

        // Carpeta pública
        this.app.use( express.static('public') ); //SIEMPRE USA LA CARPETA DE PROYECTO
    }


    routes() {
        this.app.use( this.apiPaths.test, testRouter )
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

module.exports = Server;
