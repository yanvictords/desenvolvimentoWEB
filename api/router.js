const express = require('express')
const controller = require('./controller.js')

const router = express.Router()

router.get('/', controller.home)

// USER
// login
router.post('/login', controller.login)
// create
router.post('/user', controller.createUser)
// read
router.get('/user', controller.getUsers)
router.get('/user/:_id', controller.getUser)
// update
router.patch('/user/:_id', controller.updateUser)
// delete
router.delete('/user/:_id', controller.deleteUser)

// PRODUCT
// create
router.post('/produto', controller.createProduto)
// read
router.get('/produto', controller.getProdutos)
router.get('/produto/:_id', controller.getProduto)
// update
router.patch('/produto/:_id', controller.updateProduto)
// delete
router.delete('/produto/:_id', controller.deleteProduto)
module.exports = router
