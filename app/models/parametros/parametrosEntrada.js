class parametrosEntrada {
    constructor(
        codigoPais,
        codigoCampania,
        codigoConsultora,
        codigoZona,
        textoBusqueda,
        cantidadProductos,
        sociaEmpresaria,
        suscripcionActiva,
        mdo,
        rd,
        rdi,
        rdr,
        diaFacturacion,
    ) {
        this.codigoPais = codigoPais;
        this.codigoCampania = codigoCampania;
        this.codigoConsultora = codigoConsultora;
        this.codigoZona = codigoZona;
        this.textoBusqueda = textoBusqueda;
        this.cantidadProductos = cantidadProductos;
        this.sociaEmpresaria = sociaEmpresaria;
        this.suscripcionActiva = suscripcionActiva;
        this.mdo = mdo;
        this.rd = rd;
        this.rdi = rdi;
        this.rdr = rdr;
        this.diaFacturacion = diaFacturacion;
    }
};

module.exports = parametrosEntrada;