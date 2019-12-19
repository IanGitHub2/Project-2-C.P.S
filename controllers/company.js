const express = require('express')


const companyApi = require('../models/company.js')


const companyRouter = express.Router()





module.exports = {
  companyRouter,
  companyApi
}