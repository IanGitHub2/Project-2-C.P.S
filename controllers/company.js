const express = require('express')


const companyApi = require('../models/company.js')


const companyRouter = express.Router()

companyRouter.get('/', (req, res) => {
  companyApi.getAllCompanys()
  .then((allCompanys) => {
    res.render('company/allCompanys', {allCompanys})
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

companyRouter.get('/editCompany/:companyId', (req, res) => {
  const companyId = req.params.companyId
  companyApi.getSingleCompany(companyId)
    .then((company) => {
      res.render('company/editCompany', {company})
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

companyRouter.put('/:companyId', (req, res) => {
  const companyId = req.params.companyId
  const updatedCompany = req.body
  companyApi.editCompany(companyId, updatedCompany)
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
  const deleteCompany = req.body
  companyApi.deleteCompany(companyId, deleteCompany)
    .then(() => {
      res.redirect('/company')
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

module.exports = {
  companyRouter
}