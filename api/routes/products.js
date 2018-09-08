const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to/products'
    });
});

router.post('/', (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        message: 'Handling POST request to/products',
        createdProduct: product
    });
});

router.get('/:productID', (req, res, next) => {
    let id = req.params.productID;
    res.status(200).json({
        message: `You get information of productID ${id}`
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