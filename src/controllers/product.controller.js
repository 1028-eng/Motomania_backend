const ProductModel = require("../models/product.model");
const { insertProduct }  = require("../models/product.model");
const { obtenertodoslosproductos, obtenerProductoPorId, eliminarProductoPorId } = require("../services/product.service");

async function getProducts( req, res ) {

    try { 
    const data = await obtenertodoslosproductos();

    res.json({
        ok: true,
        data: data
    });
} catch (error) {
    console.error(error)
    res.json ({
        ok: false,
        msg: "Ha ocurrido un error en los datos"
    })
}
}

async function createProduct( req, res ) {
    const inputData = req.body;

    const data = await insertProduct( inputData );

    res.json({
        ok: true,
        data: data
    });
}

async function getProductById( req, res ) {
    const id = req.params.id;
    try {
        const data = await obtenerProductoPorId (id)
        res.json({
            ok: true,
            data: data
    });
    } catch (error) {
        console.error(error)
        res.json ({
            ok: false,
            msg: "Ha ocurrido un error en los datos del id"
        })
    }
    
} 

async function deleteProductById( req, res ) {
    const id = req.params.id;
    try {
        const data = await eliminarProductoPorId (id)
        res.json({
            ok:true,
            data: data
        })
    } catch (error) {
        console.error(error)
        res.json ({
            ok: false,
            msg: "Error al eliminar la id"
    });
}
}

function updateProductByIdPut( req, res ) {
    const id = req.params.id;
    res.json({
        ok: true,
        msg: `Actualiza todos los recursos de un producto por ID: ${ id }`
    });
}

async function updateProductByIdPatch( req, res ) {
    const id = req.params.id;
    const imputdata = req.body
    try { 
    const data = await ProductModel.findByIdAndUpdate(id,imputdata,{new:true})
    res.json({
        ok: true,
        data: data
    });
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            msg: "Error al actualizar el objeto"
        })
    }
}

// module.exports = getProducts;  // Export Default
module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    updateProductByIdPut,
    updateProductByIdPatch
};