import React, {useState} from "react";
import "./Pesquisa.css"

const Pesquisa = () => {
    const [pesquisa, setPesquisa] = useState("");
    const imprimePesquisa = () => {
        console.log(pesquisa)
    }
    return(
        <section className="Pesquisa">
            <input type="text" placeholder="Insira o nome do produto" value={pesquisa} onChange={(event) => {setPesquisa(event.target.value)}} />
            <button onClick={imprimePesquisa}>Pesquisar</button>
        </section>
    )
}
export default Pesquisa;