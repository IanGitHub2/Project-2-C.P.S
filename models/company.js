const mongoose = require('./connection.js')
const companySchema = new mongoose.Schema({
   name: String,
   description: String,
   products: String,
   est: Number 
})

const companyCollection = mongoose.model('company', companySchema)

const getAllCompanys = () => {
   return companyCollection.find({})
}

const getSingleCompany = (companyId) => {
   return companyCollection.findOne({_companyId: companyId})
}

const addNewCompany = (newCompany) => {
   return companyCollection.create(newCompany)
}

const editCompany = (companyId, editCompany) => {
   return companyCollection.updateOne({_companyId: companyId}, editCompany)
}

const deleteCompany = (companyId) => {
   return companyCollection.deleteOne({_companyId: companyId})
}

module.exports = {
  getAllCompanys,
  getSingleCompany,
  addNewCompany,
  editCompany,
  deleteCompany
}