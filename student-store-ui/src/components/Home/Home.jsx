import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Subnavbar from "../Subnavbar/Subnavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import Footer from "../Footer/Footer"
import { categories } from "../../constants"

function Home(props) {
  if(props.products.products) {
    let currentProducts;
    if(props.selectedCategory == "All Categories") {
      currentProducts = props.products.products
    } else {
      currentProducts = props.products.products.filter((product) => {
        return (
          product.category === props.selectedCategory.toLowerCase()
        )
      })
    }

    let currentSearch;
      if(props.searchBar.length === 0) {
        currentSearch = currentProducts;
      } else {
        currentSearch = currentProducts.filter((product) => {
          return (
            product.name.toLowerCase().includes(props.searchBar)
          )
        })
      }

    console.log("Current Products: ", currentProducts)
    console.log(currentSearch)
    return (
      <div className="home">
        <Hero />
        <Subnavbar 
          selectedCategory = {props.selectedCategory}
          setSelectedCategory = {props.setSelectedCategory}
          searchBar = {props.searchBar}
          handleOnSearchBarChange = {props.handleOnSearchBarChange}
        />
        <ProductGrid 
          products = {currentSearch} 
          handleAddItemToCart = {props.handleAddItemToCart}
          handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
          shoppingCart = {props.shoppingCart}
          />
        <About />
        <ContactUs />
        <Footer />
      </div>
    )
  } else {
    return (
      null
    )
  }
  
}

export default Home;