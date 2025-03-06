const express = require( 'express' );
const dbConection = require('./config/mongo.config.js');
// const conexionDB = require('./config/mongo.config.js');
const app = express();


// Ejecuta la configuracion de Mongoose para Mongo
dbConection();      
// conexionDB();        

/** Middleware: Expresar de aceptar y comprender JSON */
app.use( express.json() );

/** Middleware: Endpoints del sitio */
// http://localhost:<port>/api/products
app.use( '/api/products', require( './routes/product.routes.js' ) );
app.use( '/api/categorys', require( './routes/category.routes.js' ) );
app.use('/api/users', require( './routes/user.routes.js' ) )
app.use( '/api/services', require( './routes/services.routes.js' ) );
app.use( "/api/auth", require( "./routes/auth.routes.js") );
app.use( "/api/order", require( "./routes/order.routes.js") );
app.use( "/api/citas", require( "./routes/citas.routes.js") );


/** Lanzar servidor: http://localhost:<port> */
app.listen( 3000, function() {
    console.log( 'Servidor escuchando en el puerto 3000' );
});