import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
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

  const [error, setError] = useState(null)

  const [isOpen, setToggle] = useState(false)

  const [shoppingCart, setShoppingCart] = useState([])

  const [checkoutForm, setCheckoutForm] = useState({name: "",email: ""})

  const [data, setData] = useState([])

  const getData = async () => {

    try {
      //const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store")
      
      const { data } = await axios.get("http://localhost:3001/store")
      setData(data)
    } catch (err) {
        setError(err)
        console.log("Error received on API Call: ", error)
    }
    
  }

  useEffect(() => {
    setIsFetching(true)
    getData()
  }, []);

  const handleOnToggle = () => {
    if(isOpen === false) {
      setToggle(true)
    } else if(isOpen === true) {
      setToggle(false)
    }
  }

  const handleAddItemToCart = (productId) => {
    let obj = shoppingCart.find(o => o.product === productId)
    if(obj) {
      obj.quantity += 1
      setShoppingCart([...shoppingCart])
      console.log(obj.quantity)

    } else if(!obj) {
      let newItem = {
        product: productId,
        quantity: 1
      }
      setShoppingCart([...shoppingCart, newItem])
    }
    console.log("Shopping Cart(add): ", shoppingCart)
  }

  const handleRemoveItemFromCart = (productId) => {
    let obj = shoppingCart.find(o => o.product === productId)
    if(obj) {
      obj.quantity -= 1
      setShoppingCart([...shoppingCart])
      if(obj.quantity === 0) {
        const newArray = shoppingCart.filter(item => item.quantity != 0)
        setShoppingCart(newArray)
      }
    }
    console.log("Shopping Cart(remove): ", shoppingCart)
  }

  const handleOnCheckoutFormChange = e => {
    const { name, value } = e.target;
    setCheckoutForm(prevCheckoutForm => ({
      ...prevCheckoutForm,
      [name]: value
    }))
  }

  const handleOnSubmitCheckoutForm = () => {
    
    try {
      let userOrder = {
        user: {
          name: checkoutForm.name,
          email: checkoutForm.email
        }, 
        shoppingCart: [...shoppingCart]
      }
      const result = axios.post('http://localhost:3001/store', userOrder)
      .then(function(res) {
        console.log("success!")
        setShoppingCart([])
        setCheckoutForm({name: "",email: ""})
        alert("Order successful! See you soon!")
        console.log(res)
      })
      .catch(function(error) {
        console.log("Failed to submit order! Please fill shopping cart and name/email fields!")
        alert("Failed to submit order! Please fill shopping cart and name/email fields!")
      })

    } catch(error) {
      console.log(error.toJSON())
    }
  }
  

  return (
        <div className="app">
        <BrowserRouter>
          <main>
            <Sidebar 
              isOpen = {isOpen} 
              shoppingCart = {shoppingCart} 
              products = {data} 
              handleOnToggle = {handleOnToggle} 
              checkoutForm = {checkoutForm} 
              handleOnCheckoutFormChange = {handleOnCheckoutFormChange} 
              handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
            />
            <Navbar navLinks = {navLinks}/>
            
            <Routes>
                <Route path="/" element={<Home products = {data} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} shoppingCart = {shoppingCart}/>}/>
                <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} shoppingCart = {shoppingCart}/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  )
}
