import * as React from "react" 
import "./ProductView.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductView(props) {
    //console.log("ProductView: ", props.id)
    //console.log(props.product)
   if(props.product) {
    return (
        <div className="product-view">
            <h1 className="product-id">Product {props.id}</h1>
            <ProductCard 
                key = {props.product.id}
                product = {props.product}
                showDescription = {true}
                handleAddItemToCart = {props.handleAddItemToCart}
                handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
            />       
        </div>
    )
   } else {
    return null
   }
    
}