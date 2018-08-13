const config = {
    app: {
        port: 7777
    },
    elasticsearch: {
        host: 'localhost',
        port: 9200,
        index: 'producto_pe',
        type: 'Producto'
    },
    flags: {
        logicaShowRoom: true,

    },
    constantes: {
        urlImagenesSB: "",
        urlImagenesAppCatalogo: ""
    }
};

module.exports = config;