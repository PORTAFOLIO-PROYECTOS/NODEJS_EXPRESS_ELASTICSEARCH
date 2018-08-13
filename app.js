const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Cargar configuracion
const config = require('./config');

// Cargar enrutamiento
const routeBuscador = require('./app/routes/buscador');
app.use('/buscador', routeBuscador);

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.listen(config.app.port, () => {
    console.log('Server is up and running on port numner ' + config.app.port);
});