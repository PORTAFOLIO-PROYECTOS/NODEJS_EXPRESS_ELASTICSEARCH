class parametrosSalida {
    constructor(
        CUV,
        SAP,
        Imagen,
        Descripcion,
        Valorizado,
        Precio,
        MarcaId,
        TipoPersonalizacion,
        CodigoEstrategia,
        CodigoTipoEstrategia,
        LimiteVenta,
        Stock,
    ) {
        this.CUV = CUV;
        this.SAP = SAP;
        this.Imagen = Imagen;
        this.Descripcion = Descripcion;
        this.Valorizado = Valorizado;
        this.Precio = Precio;
        this.MarcaId = MarcaId;
        this.TipoPersonalizacion = TipoPersonalizacion;
        this.CodigoEstrategia = CodigoEstrategia;
        this.CodigoTipoEstrategia = CodigoTipoEstrategia;
        this.LimiteVenta = LimiteVenta;
        this.Stock = Stock;
    }

    // Getter
    get resultado(){
        return {
            'CUV': this.CUV,
            'SAP': this.SAP,
            'Imagen': this.Imagen,
            'Descripcion': this.Descripcion,
            'Valorizado': this.Valorizado,
            'Precio': this.Precio,
            'MarcaId': this.MarcaId,
            'TipoPersonalizacion': this.TipoPersonalizacion,
            'CodigoEstrategia': this.CodigoEstrategia,
            'CodigoTipoEstrategia': this.CodigoTipoEstrategia,
            'LimiteVenta': this.LimiteVenta,
            'Stock': this.Stock
        };
    }
};

module.exports = parametrosSalida;
