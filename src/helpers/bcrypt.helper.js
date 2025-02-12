const bcrypt = require( "bcrypt" );

function encryptedPassword ( pass ) {
    const salt = bcrypt.genSaltSync();
    console.log( "salt: ", salt );

    const hashPassword = bcrypt.hashSync(
        pass,
        salt
    );

    return hashPassword;
}

module.exports = encryptedPassword;