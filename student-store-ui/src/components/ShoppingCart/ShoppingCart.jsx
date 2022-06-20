import * as React from "react" 
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
    let subtotal = 0;
    console.log(props.shoppingCart.length)
    if(props.shoppingCart.length === 0) {
        return (
            <div className="shopping-cart">
                <div className="title">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="notification">
                    No items added to cart yet. Start shopping now!
                </div>
            </div>
        )
    }
    else if(props.shoppingCart.length > 0) {
        console.log("Products: ", props.products.products)
        return (
            <div className="shopping-cart">
                <div className="title">
                    <h3>Shopping Cart</h3>
                </div>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Cost</th>
                    </tr>
                    {
                        props.shoppingCart.map((item) => {
                            console.log("Item Product #: ", item.product)
                            console.log("Quantity: ", item.quantity)
                            let product = props.products.products[item.product - 1]
                            console.log("Actual Product: ", product)
                            let itemTotal = (product.price * item.quantity).toFixed(2)
                            console.log("Item Total Price: ", itemTotal)
                            subtotal = subtotal + parseInt(itemTotal)
                            console.log("Subtotal: ", subtotal)
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>${itemTotal}</td>
                                </tr>
                            )           
                        })
                    }
                    
                </table>
            </div>
        )
    } else {
        return null
    }

}

