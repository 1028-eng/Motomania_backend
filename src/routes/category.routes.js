const express = require( 'express' );
const { getcategory, createcategory, getcategoryById, deletecategoryById, updatecategoryByIdPut, updatecategoryByIdPatch } = require('../controllers/category.controller');

const router = express.Router();

router.post( '/', createcategory );


router.get( '/', getcategory );


router.get( '/:id', getcategoryById );


router.delete( '/:id', deletecategoryById );


router.put( '/:id', updatecategoryByIdPut );


router.patch( '/:id', updatecategoryByIdPatch
 );


module.exports = router;