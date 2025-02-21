const express = require( 'express' );

const validateId = require('../middlewares/validate-id.middleware');
const { createOrder, getOrder, getOrderById, deleteOrderById } = require('../controllers/order.controller');
const { actualizarOrderPorId } = require('../services/order.services');

const router = express.Router();

router.post( '/', createOrder );


router.get( '/', getOrder );


router.get( '/:id', validateId, getOrderById );


router.delete( '/:id', validateId, deleteOrderById );


router.patch( '/:id', validateId, actualizarOrderPorId);


module.exports = router;