var filtroLanzamiento = (function() {

    function filtrar(parametrosEntrada, filtro) {
        if (parametrosEntrada.suscripcionActiva == '0') {
            let _push = { term: { "tipoPersonalizacion": "LAN" } };
            filtro.push(_push);
        }
    }

    return {
        filtrar: filtrar
    };

})(filtroLanzamiento || {});

module.exports = filtroLanzamiento;