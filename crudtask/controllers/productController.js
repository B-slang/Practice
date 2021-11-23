const Sequelize  = require('sequelize')
const db = require("../models");

exports.productCreate = async (req, res, next) => {

    try {

        const data = await db.products.create({
            
            categoryId: req.body.categoryId,
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            description: req.body.description, 
            productImage: req.body.productImage,
            stock: req.body.stock


        })
        // next()

        res.status(200).json({
            success: true,
            message: "product added successfully",
            data
        })

    }
    catch (error) {
        console.log(error)
        return res.status(400).json({
            message: "something went wrong",

        })

    }




}
exports.deleteProduct = async (req, res)=> {
    id = req.params.id
    let data = await db.products.destroy({where :{id}})
    if(!data){
        return res.status(400).json({
            message : "failed to delete products"
        })
    }
    return res.status(200).json({
        message : "Product deleted successfully"
    })
}