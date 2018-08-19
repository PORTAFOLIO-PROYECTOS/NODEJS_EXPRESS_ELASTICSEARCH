var filtroShowroom = (function() {

    function filtrar(parametrosEntrada, filtro) {

        console.log(parametrosEntrada);

        if (parametrosEntrada.rd == '1' &&
            parametrosEntrada.mdo == '1' &&
            parametrosEntrada.suscripcionActiva ==  '0'){

                let _push = { term: {"tipoPersonalizacion": "SR"}};
                filtro.push(_push);
                _push = { term: {"revistaDigital": "0"}};
                filtro.push(_push);
        }

        if(parametrosEntrada.rd == '0'){
            let _push = { term: {"tipoPersonalizacion": "SR"}};
            filtro.push(_push);
            _push = { term: {"revistaDigital": "0"}};
            filtro.push(_push);
        }
    }

    return {
        filtrar: filtrar
    };

})(filtroShowroom || {});

module.exports = filtroShowroom;