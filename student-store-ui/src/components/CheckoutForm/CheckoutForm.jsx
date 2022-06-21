import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    return (
        <div className="checkout-form">
            <div className="checkout-title">
                <h3>Payment Info</h3>
            </div>
            <div className="user-name">
                <p>Name</p>
                <input 
                    className="name-input" 
                    type="text" 
                    name="name" 
                    placeholder="Student Name"
                    value={props.checkoutForm.name}
                    onChange={props.handleOnCheckoutFormChange}
                    
                />
            </div>
            <div className="user-email">
                <p>Email</p>
                <input 
                    className="email-input" 
                    type="email" 
                    name="email" 
                    placeholder="student@codepath.org"
                    value={props.checkoutForm.email}
                    onChange={props.handleOnCheckoutFormChange}
                />
            </div>

            <div className="checkout-button-container">
                <button className="checkout-button" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
            </div>
            
        </div>
    )
}