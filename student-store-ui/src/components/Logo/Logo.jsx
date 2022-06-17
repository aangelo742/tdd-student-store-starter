import * as React from "react"
import CodePathLogo from "../../../assets/codepath_logo.svg"
import { Link} from "react-router-dom"
function Logo() {
    return (
        <Link to="/"><img src={CodePathLogo} alt="codepath logo"/></Link>
        
    )
}

export default Logo;