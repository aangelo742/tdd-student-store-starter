const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
    static async showAllProducts() {
        const allProducts = storage.get("products").value()
        return allProducts
    }

    static async fetchById(productId) {
        const product = storage
            .get("products")
            .find({id: Number(productId)})
            .value()
        return product
    }

    static async showAllPurchases() {
        const allPurchases = storage.get("purchases").value()
        return allPurchases
    }

    static async recordPurchase(purchase, shoppingCart) {
        // create a new purchase 
        const purchases = await Store.showAllPurchases()
        const products = await Store.showAllProducts()
        const purchaseId = purchases.length + 1

        const postedAt = new Date().toISOString()

        let total = 0.00
        let percentage = 0.0875
        shoppingCart.forEach(item => {
            let obj = products.find(o => o.id === item.product)
            let quantity = item.quantity
            let itemAmount = quantity * obj.price
            total += parseFloat(itemAmount.toFixed(2))
        })
        total += parseFloat((total * percentage).toFixed(2))
    
        const newPurchase = { id: purchaseId, ...purchase, order:  shoppingCart, total: total, createdAt: postedAt}
    
        storage.get("purchases").push(newPurchase).write()
    
        return newPurchase
      }
}

module.exports = Store