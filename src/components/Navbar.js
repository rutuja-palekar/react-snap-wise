import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
    return (
        <div className="header">
            <h1 className="title">{props.title}</h1>
            <ul className="menus">
               <a href="/">{props.menu1}</a>
               <a href="/">{props.menu2}</a>
               <a href="/">{props.menu3}</a>
               <a href="/">{props.menu4}</a>
            </ul>
        </div>
    )
}
