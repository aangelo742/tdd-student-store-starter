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
  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get("https://codepath-store-api.herokuapp.com/store")
    setData(data)
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("Called from App.jsx: ", data)

  return (
        <div className="app">
        <BrowserRouter>
          <main>
            {/* YOUR CODE HERE! */}
            <Sidebar />
            <Navbar navLinks = {navLinks}/>
            
            <Routes>
                <Route path="/" element={<Home products = {data}/>}/>
                <Route path="/products" element={<ProductDetail/>}/>
                <Route path="*" element={<NotFound/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  )
}
