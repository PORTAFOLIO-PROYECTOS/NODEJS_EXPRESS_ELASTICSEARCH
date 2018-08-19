var filtroOfertaParaTi = (function () {

    function filtrar(parametrosEntrada, filtro) {        
        let _push = { term: { "tipoPersonalizacion": "ODD" }};
        filtro.push(_push);
        _push = { term: { "diaInicio": parametrosEntrada.diaFacturacion }};
        filtro.push(_push);               
    }

    return {
        filtrar: filtrar
    };

})(filtroOfertaParaTi || {});

module.exports = filtroOfertaParaTi;