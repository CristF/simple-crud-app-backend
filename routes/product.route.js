const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');
const controller = require('../controllers/product.controller.js');
console.log('Controller exports:', controller);

router.get('/', getProducts);
router.get('/:id', getProduct);

router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;