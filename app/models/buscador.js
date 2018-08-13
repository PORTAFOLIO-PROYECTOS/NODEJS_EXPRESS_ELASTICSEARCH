const elasticsearch = require('elasticsearch');
const config = require('../../config');
const filtroShowroom = require('./filtros/filtroShowRoom');

const client = new elasticsearch.Client({
    host: `${config.elasticsearch.host}:${config.elasticsearch.port}`,
    log: 'trace'
});

var buscador = (function() {

    function buscar(parametrosEntrada) {

        console.log(parametrosEntrada);

        //let indexName = `${config.elasticsearch.index}_${parametrosEntrada.codigoPais}`;
        let indexName = config.elasticsearch.index;
        let typeName = config.elasticsearch.type;

        //Construir query con parametros fijos
        let body = {
            /*_source: {
                "includes": ["productoResumenId", "codigoCampania", "cuv", "descripcion","codigoProducto","imagen","imagenOrigen","valorizado","precio"]
            },*/
            query: {
                wildcard: { "descripcion": parametrosEntrada.textoBusqueda } 
            },
            size: parametrosEntrada.cantidadProductos
        };

        //Construir query con parametros variables

        if (config.flags.filtroShowroom === true) {
            let filtro = filtroShowroom.filtrar(parametrosEntrada);
            //TODO: Adicionar el filtro a la variable query declarada anteriormente
        }

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