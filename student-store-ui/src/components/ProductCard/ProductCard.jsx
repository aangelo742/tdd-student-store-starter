import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.product.image} className="product-img"/>
            <div className="product-name">
                {props.product.name}
            </div>
            <div className="product-price">
                ${props.product.price.toFixed(2)}
            </div>
            <div className="product-buttons">
                <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>+</button>
                <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>-</button>
            </div>  
        </div>
    )
}