const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.showAll()
        res.status(200).json( { products } )
    } catch (err) {
        next(err)
    }  
})

router.get("/:productId", async (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.fetchById(productId)
        if (!product) {
            throw new NotFoundError("Product not found")
        }
        res.status(200).json({ product })
    } catch (err) {
        next(err)
    }
})

module.exports = router
