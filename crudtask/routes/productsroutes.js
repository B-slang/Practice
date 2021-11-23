const express = require('express')
const router = router.express()

const {productAll, productCreate, productUpdate, productDelete} = require('./controllers/productCreate.js')


router.get('/' ,productAll)
router.post('/create',productCreate )
router.put('/:id',productUpdate)
router.delete('/:id', productDelete)

module.exports = router