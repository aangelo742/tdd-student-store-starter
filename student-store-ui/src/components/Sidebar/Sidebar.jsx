import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
export default function Sidebar(props) {
  if(!props.isOpen){
    console.log(props.shoppingCart)
    return (
      <section className="sidebar">
        <div className="closed">
          <button className="toggle-button" onClick={props.handleOnToggle}>&rarr;</button>
        </div>
      </section>
    )
  } else if(props.isOpen){
    console.log(props.shoppingCart)
    return (
      <section className="sidebar">
        <div className="opened">
          <button className="toggle-button" onClick={props.handleOnToggle}>&larr;</button>
          <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart} />
        </div>
      </section>
    )
  }
  
}
