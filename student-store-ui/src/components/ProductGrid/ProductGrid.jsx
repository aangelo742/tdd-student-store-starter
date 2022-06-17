import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
    console.log("From ProductGrid: ", props.products)
        if(props.products) {
        console.log("works")
        return (
            <div className="product-grid">
                <div className="content">
                    {
                        props.products.map((product) => {
                        return (
                            <ProductCard
                                key = {product.id}
                                product = {product}
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