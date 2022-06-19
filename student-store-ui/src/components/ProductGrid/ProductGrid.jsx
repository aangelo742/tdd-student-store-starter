import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
        if(props.products) {
        return (
            <div className="product-grid">
                
                <div className="content">
                    <div className="title">
                        <h3>Best Selling Products</h3>
                    </div> 
                    {
                        props.products.map((product) => {
                        return (
                            <ProductCard
                                key = {product.id}
                                product = {product}
                                showDescription = {false}
                                handleAddItemToCart = {props.handleAddItemToCart}
                                handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
                            />
                        )
                    
                    })}
                </div>
            
            </div>
        ) 
    } else {
        return null
    }
    
}