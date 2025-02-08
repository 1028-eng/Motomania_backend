const express = require ('express')
const { createUser, getUserById, deleteUserById, updateUserById, getUsers } = require ('../controllers/user.controller')
const router = express.Router()

// http://localhost:<port>/api/products/
router.get( '/', getUsers )

// http://localhost:<port>/api/products/
router.post( '/', createUser )

// http://localhost:<port>/api/products/<product-id>
// req.params.pedro = 7654ftgyhuji
router.get( '/:id', getUserById )

// http://localhost:<port>/api/products/<product-id>
router.delete( '/:id', deleteUserById )

// http://localhost:<port>/api/products/<product-id>
router.patch( '/:id', updateUserById )

module.exports = router