const mongoose = require( 'mongoose' );

/** Paso 1: Definir una estructura de datos */
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    urlImage: {
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "category"
    },
    state: {
        type: Boolean,
        default: true
    },
     userId: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
    
        }
});

/** Paso 2: Vinculamos la estructura de datos a una coleccion dando como resultado un Modelo de datos */
const ProductModel = mongoose.model(
    "products",         // Nombre de la coleccion donde se agruparan los documentos
    ProductSchema       // Estructura de datos de la Entidad
);

// Exponemos la funcionalidad para que otros archivos puedan hacer uso de ella
module.exports = ProductModel;


