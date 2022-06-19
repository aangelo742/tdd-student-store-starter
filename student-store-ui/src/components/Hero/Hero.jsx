import * as React from "react"
import "./Hero.css"
import HouseSVG from "../../../assets/hero_home.svg"

export default function Hero() {
    return (
      <div className="hero">
        <div className="content">
          <div className="text">
            <div className="intro">
                <h1>Welcome!</h1>
                <h1>Find Your Merch!</h1>
                <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            </div>
          </div>
          <div className="media">
            <img className="hero-img" src={HouseSVG}/>
          </div>          
        </div>        
      </div>
    )
  }