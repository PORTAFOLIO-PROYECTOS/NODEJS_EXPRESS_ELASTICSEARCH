const elasticsearch = require('elasticsearch');
const config = require('../../config');
const filtroShowroom = require('./filtros/filtroShowRoom');
const filtroLanzamiento = require('./filtros/filtroLanzamiento');
const filtroOfertaParaTi = require('./filtros/filtroOfertaParaTi');
const filtroOfertaDelDia = require('./filtros/filtroOfertaDelDia');
const filtroGuiaNegocioDigital = require('./filtros/filtroGuiaNegocioDigital');
const utils = require('../common/utils');

const client = new elasticsearch.Client({
    host: `${config.elasticsearch.host}:${config.elasticsearch.port}`,
    log: 'trace'
});

var buscador = (function () {

    function buscar(parametrosEntrada) {
        let must_not = [];
        let indexName = config.elasticsearch.index;
        let typeName = config.elasticsearch.type;

        if (config.flags.logicaShowRoom) {
            filtroShowroom.filtrar(parametrosEntrada, must_not);
        }

        if (config.flags.logicaLanzamiento) {
            filtroLanzamiento.filtrar(parametrosEntrada, must_not);
        }

        if (config.flags.logicaOPT) {
            filtroOfertaParaTi.filtrar(parametrosEntrada, must_not);
        }

        if (config.flags.logicaODD) {
            filtroOfertaDelDia.filtrar(parametrosEntrada, must_not);
            console.log(must_not);
        }

        if (config.flags.logicaGN) {
            filtroGuiaNegocioDigital.filtrar(parametrosEntrada, must_not);
        }        

        let body = utils.getQueryElasticSearch(parametrosEntrada, must_not);

        return client.search({
            index: indexName,
            type: typeName,
            body: body
        });
    }

    return {
        buscar: buscar
    };

})(buscador || {});

module.exports = buscador;