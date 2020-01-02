const mongoose = require('./connection.js')
const companySchema = new mongoose.Schema({
   name: String,
   image: String,
   discription: String,
   products: String,
   est: Number 
})

const companyCollection = mongoose.model('company', companySchema)

const getAllCompanys = () => {
   return companyCollection.find({})
}

const getSingleCompany = (companyId) => {
   return companyCollection.findById(companyId)
}

const addNewCompany = (newCompany) => {
   return companyCollection.create(newCompany)
}

const editCompany = (companyId, editCompany) => {
   return companyCollection.updateOne({_id: companyId}, editCompany)
}

const deleteCompany = (companyId, deleteCompany) => {
   return companyCollection.deleteOne({_id: companyId}, deleteCompany)
}

module.exports = {
  getAllCompanys,
  getSingleCompany,
  addNewCompany,
  editCompany,
  deleteCompany
}