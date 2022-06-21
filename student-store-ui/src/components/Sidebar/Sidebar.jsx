import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar(props) {
  if(!props.isOpen){
    return (
      <section className="sidebar">
        <div className="closed">
          <button className="toggle-button" onClick={props.handleOnToggle}>&rarr;</button>
        </div>
      </section>
    )
  } else if(props.isOpen){
    return (
      <section className="sidebar">
        <div className="opened">
          <button 
            className="toggle-button" 
            onClick={props.handleOnToggle}>&larr;</button>
          <ShoppingCart 
            isOpen={props.isOpen} 
            products={props.products} 
            shoppingCart={props.shoppingCart} 
          />
          <CheckoutForm 
            isOpen={props.isOpen} 
            shoppingCart={props.shoppingCart} 
            checkoutForm={props.checkoutForm} 
            handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
            handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          />
        </div>
      </section>
    )
  }
  
}
