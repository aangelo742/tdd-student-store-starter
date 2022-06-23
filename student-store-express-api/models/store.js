const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
    static async showAll() {
        const allItems = storage.get("products").value()
        return allItems
    }

    static async fetchById(productId) {
        const product = storage
            .get("products")
            .find({id: Number(productId)})
            .value()
        return product
    }

    static purchaseOrder() {

    }
}

module.exports = Store