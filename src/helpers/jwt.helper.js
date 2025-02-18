const jwt = require( 'jsonwebtoken' );


function generateToken ( payload ) {
    return jwt.sign( 
        payload,                    
        'Sid?6&n,3oI0',       
        { expiresIn: '1h' }        
    );
}

function verifyToken ( token ) {
    return jwt.verify( 
        token,                      
        'Sid?6&n,3oI0'        
    );
}


module.exports = {
    generateToken,
    verifyToken
};