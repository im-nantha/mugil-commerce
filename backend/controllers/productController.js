const productModel = require('../models/productModel');

// Get product API - /api/v1/products
exports.getProducts = async (req,res,next) => {
    const query = req.query.keyword?{
        name : { 
            $regex : req.query.keyword,
            $options : 'i'
        }
    }:{}

    const products = await productModel.find(query);

    res.json({
        success: true,
        message: "Get products working",
        products
    });
};

// Get single product API - /api/v1/product/:id
exports.getSingleProduct = async (req,res,next) => {
    try {
        const singleProduct = await productModel.findById(req.params.id);
        res.json({
        success: true,
        message: "Get single products working",
        singleProduct
    });
    } catch {
        res.status(404).json({
        success: false,
        message: "unable to get single product. Please check your order id",
    });
    }
};