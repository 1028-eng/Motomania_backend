const mongoose = require( "mongoose" );

function validateId( id ) { 

    if( ! mongoose.Types.ObjectId.isValid( id ) ) {
        return res.json( {
            ok: false,
            msg: "El id NO es valido"
        } );
    }
}

module.exports = validateId