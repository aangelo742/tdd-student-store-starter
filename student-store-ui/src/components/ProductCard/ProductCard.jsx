import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
export default function ProductCard(props) {
    let obj
    //console.log(props.shoppingCart)
    if(props.shoppingCart) {
        let product = props.product.id
        obj = props.shoppingCart.find(o => o.product === product)
    }
   
    if(props.showDescription) {
        //console.log(props.shoppingCart)
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
                    
                    
                    {obj ? <div className="amount">{obj.quantity}</div> : null}
                    
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
                {obj ? <div className="amount">{obj.quantity}</div> : null}
            </div>
        )
    }   
}