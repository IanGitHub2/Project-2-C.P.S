const express = require('express')


const companyApi = require('../models/company.js')


const companyRouter = express.Router()

companyRouter.get('/', (req, res) => {
  companyApi.getAllCompanys()
  .then((company) => {
    res.render('company/allcompanys', {company})
  })
  .catch((error) => {
    res.send(error)
    console.log(error)
  })
})

companyRouter.get('/new', (req, res) => {
  res.render('company/createCompany')
})

companyRouter.get('/:companyId', (req, res) => {
  const companyId = req.params.companyId
  companyApi.getSingleCompany(companyId)
    .then((company) => {
      res.render('company/singleCompany', {company})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

companyRouter.post('/', (req, res) => {
  const newCompany = req.body
  companyApi.addNewCompany(newCompany)
    .then(() => {
      res.redirect('/company')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

companyRouter.get('edit/:companyId', (req, res) => {
  const companyId = req.params.body
  companyApi.getSingleCompany(companyId)
    .then((company) => {
      res.render('allCompany/editCompany', {company})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

companyRouter.put('/:companyId', (req, res) => {
  const companyId = req.params.companyId
  companyApi.editCompany(companyId)
    .then(() => {
      res.redirect(`/company/${companyId}`)
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

companyRouter.delete('/:companyId', (req, res) => {
  const companyId = req.params.companyId
  companyApi.deleteCompany(companyId)
    .then(() => {
      res.redirect('/company')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

module.exports = {
  companyRouter,
  companyApi
}