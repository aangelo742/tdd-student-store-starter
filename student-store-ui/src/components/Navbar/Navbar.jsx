import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar({navLinks}) {
  return (
    <nav className="navbar">
      <Logo />
      <NavLinks
        navLinks = {navLinks}
      />
    </nav>
  )
}

export function NavLinks({navLinks}) {
  return <ul className="nav-links">
    {
      navLinks.map((navLink) => {
        return (
          <NavLink
            key = {navLink.label}
            navLink = {navLink}
          />
        )
      })
    }
  </ul>
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </li>
  )
}