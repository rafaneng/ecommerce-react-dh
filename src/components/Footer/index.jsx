import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return(
        <footer className="Footer">
            <p>Todos os direitos reservados. {props.nome} 2020.</p>
        </footer>
    )
}
export default Footer;