const express = require('express');
const router = express.Router();

const buscadorController = require('../controllers/buscador');

router.get(
    '/:codigoPais' +
    '/:codigocampania' +
    '/:codigoConsultora' +
    '/:codigoZona' +
    '/:textoBusqueda' +
    '/:cantidadProductos' +
    '/:sociaEmpresaria?' +
    '/:suscripcionActiva?' +
    '/:mdo?' +
    '/:rd?' +
    '/:rdi?' +
    '/:rdr?' +
    '/:diaFacturacion?',
    buscadorController.buscar);

module.exports = router;