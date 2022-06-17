import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"

function Home(props) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid 
        products = {props.products.products} 
        handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
        />
      <About />
      <ContactUs />
    </div>
  )
}

export default Home;