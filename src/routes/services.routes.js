const express = require( 'express' );
const { createservice, getservice, getserviceById, deleteserviceById, updateserviceByIdPatch } = require('../controllers/services.controller');

const router = express.Router();

router.post( '/', createservice );


router.get( '/', getservice );


router.get( '/:id', getserviceById );


router.delete( '/:id', deleteserviceById );


router.patch( '/:id', updateserviceByIdPatch
 );


module.exports = router;