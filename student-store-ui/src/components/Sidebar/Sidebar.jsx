import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
export default function Sidebar(props) {
  if(!props.isOpen){
    return (
      <section className="sidebar closed">
        <button className="toggle-button" onClick={props.handleOnToggle}>&rarr;</button>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart} />
      </section>
    )
  } else if(props.isOpen){
    return (
      <section className="sidebar open">
        <button className="toggle-button" onClick={props.handleOnToggle}>&larr;</button>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart} />
      </section>
    )
  }
  
}
