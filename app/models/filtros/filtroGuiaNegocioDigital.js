var filtroGuiaNegocioDigital = (function() {

    function filtrar(parametrosEntrada, filtro) {

        if (parametrosEntrada.sociaEmpresaria == '1') {
            let _push = {
                term: {
                    "tipoPersonalizacion": "GND"
                }
            };
            filtro.push(_push);
        }

        if (parametrosEntrada.sociaEmpresaria == '0' && parametrosEntrada.suscripcionActiva == '1') {
            let _push = {
                term: {
                    "tipoPersonalizacion": "GND"
                }
            };
            filtro.push(_push);
        }
    }

    return {
        filtrar: filtrar
    };

})(filtroGuiaNegocioDigital || {});

module.exports = filtroGuiaNegocioDigital;