const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to/products'
    });
});

router.post('/', (req, res, next) => {

    let product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product.save().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Oh POST ne !',
            createdProduct: result
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});

router.get('/:productID', (req, res, next) => {
    let id = req.params.productID;

    Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res
                    .status(404)
                    .json({
                        message: "No valid entry found for provided ID"
                    });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

router.patch('/:productID', (req, res, next) => {
    let id = req.params.productID;
    res.status(200).json({
        message: `You updated information of productID ${id}`
    });
});

router.delete('/:productID', (req, res, next) => {
    let id = req.params.productID;
    res.status(200).json({
        message: `You deleted information of productID ${id}`
    });
});


module.exports = router;