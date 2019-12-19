const express = require('express')


const productApi = require('../models/product.js')


const productRouter = express.Router()

productRouter.get('/', (req, res) => {
  productApi.getAllProducts()
  .then((allProducts) => {
    res.render('product/getAllProducts', {allProducts})
  })
  .catch((error) => {
    res.render(error)
    console.log(error)
  })
})

productRouter.get('/new', (req, res) => {
  res.render('product/createProduct')
})

productRouter.get('/productId', (req, res) => {
  const productId = req.params.productId
  productApi.getSingleProduct(productId)
    .then((product) => {
      res.render('product/singleProduct', {product})
    })
    .catch((error) =>{
      res.send(error)
      console.log(error)
    })
})

productRouter.post('/', (req, res) => {
  const newProduct = req.body 
  productApi.addNewProduct(newProduct)
    .then(() => {
      res.redirect('/product')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

productRouter.get('/company/companyId', (req, res) => {
  const productId = req.params.productId
  productApi.getSingleProduct(productId)
    .then((product) => {
      res.render('product/editProduct')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

productRouter.put('/productId', (req, res) => {
  const productId = req.params.productId
  const editProduct = req.body
  productApi.editProduct(productId, editProduct)
    .then(() => {
      res.redirect(`/product/${productId}`)
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

productRouter.delete('/productId', (req, res) => {
  const productId = req.params.productId
  const deleteProduct = req.body
  productApi.deleteProduct(productId, deleteProduct)
    .then(() => {
      res.redirect('/product')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

module.exports = {
  productRouter
}