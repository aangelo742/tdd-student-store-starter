import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

function Home(props) {
  console.log("From Home: ", props.products.products)
  return (
    <div className="home">
      <Hero />
      <ProductGrid products = {props.products.products} />
    </div>
  )
}

export default Home;