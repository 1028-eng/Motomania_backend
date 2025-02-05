const ProductModel = require("../models/product.model");

async function insertProduct( newProduct ) {
    /** Consulta a la BD (Responsabilidad del Servicio) */
    return await ProductModel.create( newProduct );    // Mongoose registra en MongoDB
}

const obtenertodoslosproductos = async( ) => {
    return await ProductModel.find( );
}

const obtenerProductoPorId = async(id) => {
    return await ProductModel.findOne ({_id:id});
}

const eliminarProductoPorId = async(id) => {
    return await ProductModel.findOneAndDelete ({_id:id});
}

module.exports = {
    insertProduct,
    obtenertodoslosproductos,
    obtenerProductoPorId,
    eliminarProductoPorId
};