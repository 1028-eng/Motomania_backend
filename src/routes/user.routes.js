const express = require ('express');
const { createUser, getUserById, deleteUserById, updateUserById, getUsers } = require ('../controllers/user.controller');
const validateId = require('../middlewares/validate-id.middleware');
const validateUserExists = require('../middlewares/validate-user-exists');

const router = express.Router();

// http://localhost:<port>/api/products/
router.get( '/', getUsers )

// http://localhost:<port>/api/products/
router.post( '/', validateUserExists, createUser )

// http://localhost:<port>/api/products/<product-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', validateId, getUserById )

// http://localhost:<port>/api/products/<product-id>
router.delete( '/:id', validateId, deleteUserById )

// http://localhost:<port>/api/products/<product-id>
router.patch( '/:id', validateId, updateUserById )

module.exports = router