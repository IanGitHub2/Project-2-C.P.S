const express = require('express')


const sellerApi = require('../models/seller.js')


const sellerRouter = express.Router()

sellerRouter.get('/', (req, res) => {
  sellerApi.getAllSellers()
    .then((allSellers) => {
      res.render('seller/allSellers', {allSellers})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

sellerRouter.get('/new', (req, res) => {
  res.render('seller/createSeller')
})

sellerRouter.get('/:sellerId', (req, res) => {
  const sellerId = req.params.sellerId
  sellerApi.getSingleSeller(sellerId)
    .then((seller) => {
      res.render('seller/singleSeller', {seller})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

sellerRouter.post('/', (req, res) => {
  const newSeller = req.body
  sellerApi.addNewSeller(newSeller)
    .then(() => {
      res.redirect('/seller')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

sellerRouter.get('/editSeller/:sellerId', (req, res) => {
  const sellerId = req.params.sellerId
  sellerApi.getSingleSeller(sellerId)
    .then((seller) => {
      res.render('seller/editSeller', {seller})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

sellerRouter.put('/:sellerId', (req, res) => {
  const sellerId = req.params.sellerId
  const updateSeller = req.body
  sellerApi.editSeller(sellerId, updateSeller)
    .then(() => {
      res.redirect(`/seller/${sellerId}`)
    })
    .catch((error => {
      res.send(error)
      console.log(error)
    }))
})

sellerRouter.delete('/:sellerId', (req, res) => {
  const sellerId = req.params.sellerId
  const deleteSeller = req.body
  sellerApi.deleteSeller(sellerId, deleteSeller)
    .then(() => {
      res.redirect('/seller')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})
module.exports = {
  sellerRouter
}