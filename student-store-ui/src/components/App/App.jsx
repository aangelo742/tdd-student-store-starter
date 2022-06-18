import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"
import { navLinks } from "../../constants"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import {useState, useEffect } from "react"
import axios from "axios"


export default function App() {


  const [isFetching, setIsFetching] = useState(false)
  //console.log(isFetching)

  const [error, setError] = useState(null)

  const [shoppingCart, setShoppingCart] = useState([])

  const [checkoutForm, setCheckoutForm] = useState()

  const [data, setData] = useState([])

  const getData = async () => {

    try {
      const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store")
      setData(data)
    } catch (err) {
        setError(err)
        console.log("Error received on API Call: ", error)
    }
    
  }

  const handleOnToggle = () => {

  }

  const handleAddItemToCart = (productId) => {
    let obj = shoppingCart.find(o => o.product === productId)
    if(obj) {
      obj.quantity += 1

    } else if(!obj) {
      let newItem = {
        product: productId,
        quantity: 1
      }
      shoppingCart.push(newItem)
      setShoppingCart(shoppingCart)
    }
    console.log("Shopping Cart(add): ", shoppingCart)
  }

  const handleRemoveItemFromCart = (productId) => {
    let obj = shoppingCart.find(o => o.product === productId)
    if(obj) {
      obj.quantity -= 1
      if(obj.quantity === 0) {
        const newArray = shoppingCart.filter(item => item.quantity != 0)
        setShoppingCart(newArray)
      }
    }
    console.log("Shopping Cart(remove): ", shoppingCart)
  }

  const handleOnCheckoutFormChange = () => {

  }

  const handleOnSubmitCheckoutForm = () => {

  }

  useEffect(() => {
    setIsFetching(true)
    getData()
  }, []);

  return (
        <div className="app">
        <BrowserRouter>
          <main>
            {/* YOUR CODE HERE! */}
            <Sidebar />
            <Navbar navLinks = {navLinks}/>
            
            <Routes>
                <Route path="/" element={<Home products = {data} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart}/>}/>
                <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart}/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer></Footer>
          </main>
        </BrowserRouter>
      </div>
  )
}
