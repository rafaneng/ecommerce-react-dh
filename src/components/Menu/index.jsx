import React from "react";
import {Link} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return(
        <nav className="Menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/carrinho">Carrinho</Link></li>
            </ul>
        </nav>
    )
}
export default Menu