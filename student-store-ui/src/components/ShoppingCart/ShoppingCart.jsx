import * as React from "react" 
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
    let subtotal = 0.00;
    let percentage;
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
        return (
            <div className="shopping-cart">
                <div className="title">
                    <h3>Shopping Cart</h3>
                </div>
                <div className="item-table">
                    <table className="item-information">
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Cost</th>
                        </tr>
                        {
                            props.shoppingCart.map((item) => {
                                //console.log("Item Product #: ", item.product)
                                //console.log("Quantity: ", item.quantity)
                                let product = props.products.products[item.product - 1]
                                //console.log("Actual Product: ", product)
                                let itemTotal = (product.price * item.quantity).toFixed(2)
                                //console.log("Item Total Price: ", itemTotal)
                                subtotal = parseFloat(subtotal) + parseFloat(itemTotal)
                                subtotal = subtotal.toFixed(2)
                                //console.log("Subtotal: ", subtotal)
                                return (
                                    <tr>
                                        <td className="cart-product-name">{product.name}</td>
                                        <td className="cart-product-quantity">{item.quantity}</td>
                                        <td>{product.price}</td>
                                        <td>${itemTotal}</td>
                                    </tr>
                                )           
                            })
                        }
                        
                    </table>
                </div>     
                <div className="price-container">
                    <div className="subtotal">
                        <strong className="subtotal-title">Subtotal</strong>
                        <strong className="subtotal-value">${subtotal}</strong>
                    </div>
                    <div className="taxes">
                        <strong className="taxes-title">Taxes and Fees</strong>
                        <strong className="taxes-value">${percentage = (subtotal * 0.0875).toFixed(2)}</strong>
                    </div>
                    <hr />
                    <div className="total">
                        <strong>Total</strong>
                        <strong>${(parseFloat(subtotal) + parseFloat(percentage)).toFixed(2)}</strong>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}