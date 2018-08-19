const parametrosEntrada = require('../models/parametros/parametrosEntrada');
const parametrosSalida = require('../models/parametros/parametrosSalida');
const buscadorModel = require('../models/buscador');
const utils = require('../common/utils');

exports.buscar = function(req, res, next) {

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

    var resultado = buscadorModel.buscar(parametros);

    resultado.then(function(resp) {

        var arreglo = [];

        for (let index = 0; index < resp.hits.hits.length; index++) {
            const element = resp.hits.hits[index];
            const source = element._source;

            let imagen = utils.getUrlImagen(source.imagen, 
                parametros.codigoPais,
                source.imagenOrigen,
                parametros.codigocampania,
                source.marcaId
            );

            let salida = new parametrosSalida(
                source.cuv,
                source.codigoProducto,
                imagen,
                source.descripcion,
                source.valorizado,
                source.precio,
                source.marcaId,
                source.tipoPersonalizacion,
                source.codigoEstrategia,
                source.codigoTipoEstrategia,
                9999,
                source.limiteVenta ? source.limiteVenta : 0,
                true);

            arreglo.push(salida);            
        }

        return res.json(arreglo);

    }, function(err) {
        console.trace(err);
        next(err);
    });
};