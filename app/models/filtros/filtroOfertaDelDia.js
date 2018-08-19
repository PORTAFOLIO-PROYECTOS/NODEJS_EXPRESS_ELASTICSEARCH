var filtroOfertaDelDia = (function () {

    function filtrar(parametrosEntrada, filtro) {

        if (parametrosEntrada.rd == '1' &&
            parametrosEntrada.mdo == '1' &&
            parametrosEntrada.suscripcionActiva == '1') {

            let _push = {
                term: {
                    "tipoPersonalizacion": "OPT"
                }
            };
            filtro.push(_push);
        }

        if (parametrosEntrada.rd == '1' &&
            parametrosEntrada.mdo == '1' &&
            parametrosEntrada.suscripcionActiva == '0') {

            let _push = {
                term: {
                    "tipoPersonalizacion": "OPT"
                }
            };
            filtro.push(_push);
            _push = {
                term: {
                    "tipoPersonalizacion": "OPM"
                }
            };
            filtro.push(_push);
            _push = {
                term: {
                    "tipoPersonalizacion": "PAD"
                }
            };
            filtro.push(_push);
            _push = {
                term: {
                    "revistaDigital": "0"
                }
            };
            filtro.push(_push);
        }

        if (parametrosEntrada.rd == '1' &&
            parametrosEntrada.mdo == '0' &&
            parametrosEntrada.suscripcionActiva == '1') {

            let _push = {
                term: {
                    "tipoPersonalizacion": "OPT"
                }
            };
            filtro.push(_push);
        }

        if (parametrosEntrada.rd == '1' &&
            parametrosEntrada.mdo == '0' &&
            parametrosEntrada.suscripcionActiva == '0') {

            let _push = {
                term: {
                    "tipoPersonalizacion": "OPM"
                }
            };
            filtro.push(_push);
            _push = {
                term: {
                    "tipoPersonalizacion": "PAD"
                }
            };
            filtro.push(_push);
        }

        if (parametrosEntrada.rdi == '1') {
            let _push = {
                term: {
                    "tipoPersonalizacion": "OPM"
                }
            };
            filtro.push(_push);
            _push = {
                term: {
                    "tipoPersonalizacion": "PAD"
                }
            };
            filtro.push(_push);
        }
    }

    return {
        filtrar: filtrar
    };

})(filtroOfertaDelDia || {});

module.exports = filtroOfertaDelDia;