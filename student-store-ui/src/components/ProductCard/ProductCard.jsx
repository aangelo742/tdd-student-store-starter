import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
export default function ProductCard(props) {
    console.log("Product Description: ", props.showDescription)
    console.log(props.shoppingCart)
    if(props.showDescription) {
        return (
            <div className="detail-product-card">
                <div className="media">
                    <Link to={`/products/${props.product.id}`}><img src={props.product.image} className="product-img"/></Link>
                </div>
    
                <div className="product-information">
                    <div className="product-name">
                        {props.product.name}
                    </div>
                    <div className="product-price">
                        ${props.product.price.toFixed(2)}
                    </div>
                    <div className="product-description">
                        {props.product.description}
                    </div>
                </div>   
    
                <div className="product-buttons">
                    <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>+</button>
                    <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>-</button>
                </div>
            </div>
        )

    } else if(!props.showDescription) {
        return (
            <div className="product-card">
                <div className="media">
                    <Link to={`/products/${props.product.id}`}><img src={props.product.image} className="product-img"/></Link>
                </div>
    
                <div className="product-information">
                    <div className="product-name">
                        {props.product.name}
                    </div>
                    <div className="product-price">
                        ${props.product.price.toFixed(2)}
                    </div>
                </div>   
    
                <div className="product-buttons">
                    <button className="add" onClick={() => props.handleAddItemToCart(props.product.id)}>+</button>
                    <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.product.id)}>-</button>
                </div>
            </div>
        )
    }   
}

export function amountCounter(props) {
    return (
        <div>

        </div>
    )
}