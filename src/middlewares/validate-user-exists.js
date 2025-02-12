const { dbGetUserByUsername } = require( "../services/user.service");

async function validateUserExists (req, res, next ) {
    console.log( "Soy el Middleware de validacion de usuario");

    const  inputData = req.body;

    try { 
    const dataFound = await dbGetUserByUsername( inputData.username);

    if (dataFound) {
        return res.json({
            ok: false,
            msg: "El usuario ya existe"
        });
    }

    next();
    }
    catch (error) {
        console.error( error );
        res.json({
            ok: false,
            msg: "Ha ocurrido una excepcion al validar si el usuario existe"
        })
    }
}

module.exports = validateUserExists;