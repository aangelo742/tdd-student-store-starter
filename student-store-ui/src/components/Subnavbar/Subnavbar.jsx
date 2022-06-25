import * as React from "react" 
import "./Subnavbar.css"
import { categories } from "../../constants"

export default function Subnavbar(props) {
    return (
        <nav className="sub-navbar" >
            <div className="content">
                <div className="row">
                    <div className="search-bar">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Search"
                            value={props.searchBar}
                            onChange={props.handleOnSearchBarChange}
                        />
                        <i className="material-icons">
                            search
                        </i>
                    </div>
                    <div className="links">
                        <span className="help">
                            <i className="material-icons">
                                help
                            </i>
                            Help
                        </span>
                        <div className="carts">
                            <a href="/">
                                My Cart
                                <i className="material-icons">shopping_cart</i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="hamburger-menu">
                        <i className="material-icons">menu</i>
                    </div>
                    <ul className="category-menu open">
                        {
                            categories.map((category) => {
                                return (
                                    <CategoryCard 
                                        category = {category}
                                        selectedCategory = {props.selectedCategory}
                                        setSelectedCategory = {props.setSelectedCategory}
                                        isActive = {props.selectedCategory === category.label}
                                    />
                                )    
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export function CategoryCard(props) {
    return (
        <li className={props.isActive ? "is-active" : ""}>
            <button onClick={() => props.setSelectedCategory(props.category.label)}>{props.category.label}</button>
        </li>
    )
}