import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {  
    //console.log("From ProductCard: ", props.product)
    return (
        <div className="product-card">
            <img src={props.product.image} className="product-img"/>
            <div className="product-name">
                {props.product.name}
            </div>
            <div className="product-price">
                ${props.product.price}
            </div>
        </div>
    )
}