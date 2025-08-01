import React from 'react'
import { Link } from 'react-router-dom'
import "../css/nav.css"
const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </nav>
    )
}

export default Nav