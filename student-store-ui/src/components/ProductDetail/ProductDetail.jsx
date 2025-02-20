import * as React from "react"
import "./ProductDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import ProductView from "../ProductView/ProductView"

function ProductDetail(props) {
  const id = useParams()

  const [data, setData] = useState([]);  
  const getData = async () => {
    const { data } = await axios.get(`https://codepath-store-api.herokuapp.com/store/${id.productId}`);
    setData(data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  //console.log("ProductDetail: ", data.product)

  return (
      <div className="product-detail">
        <ProductView
          product = {data.product}
          id = {id.productId}
          handleAddItemToCart = {props.handleAddItemToCart} 
          handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
        />
      </div>
    )
}

export default ProductDetail;