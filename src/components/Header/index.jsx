import React from "react";
import Menu from "../Menu"
import './Header.css';

const Header = (props) => {
    return(
        <header className="Header">
            <h2>Ecommerce do {props.nome}</h2>
            <section>
            <Menu /> 
            </section>
        </header>
    )
}
export default Header;