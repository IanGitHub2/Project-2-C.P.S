const mongoose = require('./connection.js')
const sellerSchema = new mongoose.Schema({
    name: String,
    discription: String,
    productsSold:String
})

const sellerCollection = mongoose.model('seller', sellerSchema)

const getAllSellers = () => {
    return sellerCollection.find({})
}

const getSingleSeller = (sellerId) => {
    return sellerCollection.findById(sellerId)
}

const addNewSeller = (newSeller) => {
    return sellerCollection.create(newSeller)
}

const editSeller = (sellerId, editSeller) => {
    return sellerCollection.updateOne({_id: sellerId}, editSeller)
}

const deleteSeller = (sellerId, deleteSeller) => {
    return sellerCollection.deleteOne({_id: sellerId}, deleteSeller)
}

module.exports = {
    getAllSellers,
    getSingleSeller,
    addNewSeller,
    editSeller,
    deleteSeller
}