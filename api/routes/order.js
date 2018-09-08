const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order was created !'
    });
});

router.post('/', (req, res, next) => {
    let orders = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created !',
        order: orders
    });
});
router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: `You get information of orderID ${req.params.orderId}`
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: `You deleted the orderID ${req.params.orderId}`
    });
});

module.exports = router;