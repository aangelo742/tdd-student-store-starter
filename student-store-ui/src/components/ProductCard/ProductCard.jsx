import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
export default function ProductCard(props) {
    //console.log("Product Card: ", props.product)
    return (
        <div className="product-card">
            <div className="media">
            <Link to={`/products/${props.product.id}`}><img src={props.product.image} className="product-img"/></Link>
            </div>
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