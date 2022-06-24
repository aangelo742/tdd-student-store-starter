const express = require("express")
const Store = require("../models/store")
const { NotFoundError, BadRequestError } = require("../utils/errors")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const products = await Store.showAllProducts()
        res.status(200).json( { products } )
        //console.log(products)
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

router.post("/", async (req, res, next) => {
    try {
      const newPurchase = req.body.user
      const name = req.body.user.name
      const email = req.body.user.email
      const newShoppingCart = req.body.shoppingCart
      if(!name || !email) {
        console.log("No name or email found in request.")
        return next(new BadRequestError("No name and email found in request."))
        
      }
      else if(newShoppingCart.length === 0) {
        console.log("No shoppingCart found in request.")
        return next(new BadRequestError("No shoppingCart found in request."))
      }
      else {
        const purchase= await Store.recordPurchase(newPurchase, newShoppingCart)
        console.log("purchase: ", purchase)
        res.status(201).json({ purchase })
      }
      
    } catch (err) {
      next(err)
    }
  })

module.exports = router
