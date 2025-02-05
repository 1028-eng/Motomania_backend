const ProductModel = require("../models/product.model");

async function insertProduct( newProduct ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await ProductModel.create( newProduct );    // Mongoose registra en MongoDB
}

const obtenertodoslosproductos = async( ) => {
    return await ProductModel.find( );
}

module.exports = {
    insertProduct,
    obtenertodoslosproductos
};