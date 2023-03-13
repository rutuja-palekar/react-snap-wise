import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
      <ul className="menus">
        <Link to="/home">{props.menu1}</Link>
        <Link to="/about">{props.menu2}</Link>
        <Link to="/faqs">{props.menu3}</Link>
        {/* <Link href="/">{props.menu4}</Link> */}
      </ul>
      <Outlet />
    </div>
  )
}
