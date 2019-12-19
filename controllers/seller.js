const express = require('express')


const sellerApi = require('../models/seller.js')


const sellerRouter = express.Router()





module.exports = {
  sellerRouter,
  sellerApi
}