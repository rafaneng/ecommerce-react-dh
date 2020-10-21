import React, {useState, useEffect} from "react";
import "./Home.css"
import Header from "../../components/Header";
import Pesquisa from "../../components/Pesquisa";
import Card from "../../components/Card";
// import AllCards from '../../AllCards.json'
import axios from "axios"

function Home(){

   /*function imprimeCard () {
        const containerCards = AllCards.map(card => {
            return (
                <Card key={card.id} nome={card.nome} imagem={card.imagem} valor={card.valor} descricao={card.descricao} />
            );
        });
        return containerCards;
    }*/

        /*var cards2 = [];

        for(let i=0; i < apiCards.results.length; i++){
            cards2.push(
                <Card titulo={apiCards.results[i].titulo} img={apiCards.results[i].img} valor={apiCards.results[i].valor} descricao={apiCards.results[i].descricao} />
            );
        }

        return cards2;*/
    
    //IMPRIMINDO POR FOR 
    // function imprimeCard(quantidade){
    //     let cards =[];
    //     for (let i = 1; i < quantidade + 1; i++) {
    //         cards.push(<Card key={i} nome={"Produto " + i} imagem ="https://semantic-ui.com/images/wireframe/image.png" descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>)
    //     }
    //     return cards;
    // }

    const [products, setProducts] = useState([])
    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProducts(res.data))
            .then(() => console.log(products))
    }

    useEffect(() => {
        getProducts()
    }, [])

    const productList = products.map((prod) => {
        return <Card key={prod.id} nome={prod.title} imagem={prod.image} valor={prod.price} prod={prod}/>
    })

    return(
        <>
            <Header nome="Rafael"/>
            <Pesquisa />
            <h1 id="header-title">Bem-vindo ao site!</h1>
            <div className="cards">
                {productList}
                {/* { {imprimeCard()} } */}
            </div>
        </>
    )
};
export default Home;