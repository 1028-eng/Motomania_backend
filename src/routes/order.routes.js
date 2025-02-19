const express = require( 'express' );
const { createorder, getorder, getorderById, deleteorderById, updateorderByIdPatch } = require('../controllers/order.controller');
const validateId = require('../middlewares/validate-id.middleware');

const router = express.Router();

router.post( '/', createorder );


router.get( '/', getorder );


router.get( '/:id', validateId, getorderById );


router.delete( '/:id', validateId, deleteorderById );


router.patch( '/:id', validateId, updateorderByIdPatch
 );


module.exports = router;