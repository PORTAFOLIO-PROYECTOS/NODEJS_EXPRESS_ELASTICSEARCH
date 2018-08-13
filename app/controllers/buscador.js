const parametrosEntrada = require('../models/parametros/parametrosEntrada');
const parametrosSalida = require('../models/parametros/parametrosSalida');
const buscadorModel = require('../models/buscador');

exports.buscar = function(req, res, next) {

    //console.log(req.params);

    //TODO: Validar parametros de entrada

    let parametros = new parametrosEntrada(
        req.params.codigoPais,
        req.params.codigocampania,
        req.params.codigoConsultora,
        req.params.codigoZona,
        req.params.textoBusqueda,
        req.params.cantidadProductos,
        req.params.sociaEmpresaria,
        req.params.suscripcionActiva,
        req.params.mdo,
        req.params.rd,
        req.params.rdi,
        req.params.rdr,
        req.params.diaFacturacion
    );

    //Ejecutar busqueda
    var resultado = buscadorModel.buscar(parametros);

    resultado.then(function(resp) {

        var arreglo = [];

        for (let index = 0; index < resp.hits.hits.length; index++) {
            const element = resp.hits.hits[index];
            const source = element._source;

            let salida = new parametrosSalida(
                source.cuv,
                source.codigoProducto,
                source.imagen,
                source.descripcion,
                source.valorizado,
                source.precio,
                source.marcaId,
                source.tipoPersonalizacion,
                source.codigoEstrategia,
                source.codigoTipoEstrategia,
                source.limiteVenta,
                true);

            arreglo.push(salida);
            
        }

        return res.json(arreglo);

    }, function(err) {
        console.trace(err);
        next(err);
    });
};