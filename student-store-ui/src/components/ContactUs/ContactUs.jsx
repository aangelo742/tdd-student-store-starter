import * as React from "react"
import "./ContactUs.css"

export default function ContactUs() {
    return (
        <div className="contact">
            <div className="title">
                <h3>Contact Us</h3>
            </div>
            <div className="content">
                <div className="summary">
                    <ul className="info">

                        <li>
                            <span className="label">Email:</span>
                            <span>code@path.org</span>
                        </li>

                        <li>
                            <span className="label">Phone:</span>
                            <span>1-800-CODEPATH</span>
                        </li>

                        <li>
                            <span className="label">Address:</span>
                            <span>123 Fake Street, San Francisco, CA</span>
                        </li>

                        <li>
                            <span className="label">Socials:</span>
                            <span></span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>       
    )  
}