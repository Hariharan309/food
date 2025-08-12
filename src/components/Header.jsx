import React from 'react'
import "./Header.css";
import {Link} from "react-router-dom"
export const Header = ({cart}) => {
  return (
    <div className="navbar">
        <div className="logo">Food Cart 
            <ul>
                <li className='a' >
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Cart" className='a'><span className="count">{cart.length}</span>View Cart</Link>
                </li>
            </ul>
        </div>
    </div>
  );
}
