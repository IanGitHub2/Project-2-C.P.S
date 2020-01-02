const mongoose = require('./connection.js')
const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    discription: String,
    soldBy: String,
    madeBetween: String
})

const productCollection = mongoose.model('product', productSchema)

const getAllProducts = () => {
    return productCollection.find({})
}

const getSingleProduct = (productId) => {
    return productCollection.findById(productId)
}
 
const addNewProduct = (newProduct) => {
    return productCollection.create(newProduct)
}

const editProduct = (productId, editProduct) => {
    return productCollection.updateOne({_id: productId}, editProduct)
}

const deleteProduct = (productId) => {
    return productCollection.deleteOne({_id: productId})
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    addNewProduct,
    editProduct,
    deleteProduct
}