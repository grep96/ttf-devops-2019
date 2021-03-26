import express from 'express';
import CmykHttpController from './controller/CmykHttpController';
import * as config from '../server-config.json'

class HttpServer {
    constructor() {
        const server = express();

        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', config.cors);
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET');
            next();
        });
        server.listen(config.port);
        new CmykHttpController(server);
    }
}

new HttpServer();
