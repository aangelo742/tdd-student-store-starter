import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Subnavbar from "../Subnavbar/Subnavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"

function Home(props) {
  return (
    <div className="home">
      <Hero />
      <Subnavbar />
      <ProductGrid 
        products = {props.products.products} 
        handleAddItemToCart = {props.handleAddItemToCart}
        handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
        shoppingCart = {props.shoppingCart}
        />
      <About />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home;