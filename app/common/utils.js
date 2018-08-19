const config = require('../../config');

var utils = (function() {

    var urlSB = config.constantes.urlImagenesSB;
    var urlAPP = config.constantes.urlImagenesAppCatalogo;
    var matriz = config.constantes.Matriz + '/';

    function getQueryElasticSearch(parametrosEntrada, must_not){
        let textoBuscar = '*' + parametrosEntrada.textoBusqueda + '*';

        let should = [
            { term: { "codigoConsultora": parametrosEntrada.codigoConsultora }},
            { term: { "codigoConsultora": "000000000" }},
            { term: { "codigoConsultora": "YYYYYYYYY" }}
        ];

        let must = [
            { term: { "codigoCampania": parametrosEntrada.codigoCampania }},
            { wildcard: { "textoBusqueda": textoBuscar }},
            {
                bool: { should }
            }
        ];

        if (parametrosEntrada.textoBusqueda.length == 5){
            if (!isNaN(parametrosEntrada.textoBusqueda.length)){
                must = [
                    { term: { "codigoCampania": parametrosEntrada.codigoCampania }},
                    { term: { "cuv":  parametrosEntrada.textoBusqueda}},
                    {
                        bool: { should }
                    }
                ];
            }
        }

        return {
            query: {
                bool: {
                    must,
                    filter: { bool: { must_not }}
                }
            },
            size: parametrosEntrada.cantidadProductos
        };
    }

    function getUrlImagen(nombre, paisISO, origen, campania, marcaId){
        if (!nombre.length) return "no_tiene_imagen.jpg";

        if (nombre.startsWith("http")){
            return nombre;
        }
        if (nombre.startsWith("https")){
            return nombre;
        }

        if (origen == 1){
            return urlSB + matriz + paisISO + '/' + nombre;
        }

        if (origen == 2){
            let marcas = ['L','E','C'];

            let splited = nombre.split('|');

            if (splited.length > 1){
                return urlAPP + splited[0] + '/' + splited[1]  + '/' + marcas[marcaId -1] + '/productos/' + splited[2];
            }

            return urlAPP + paisISO + '/' + campania + '/' + marcas[marcaId -1] + '/productos/' + nombre;
        }
    }

    return {
        getUrlImagen: getUrlImagen,
        getQueryElasticSearch: getQueryElasticSearch
    };

})(utils || {});

module.exports = utils;