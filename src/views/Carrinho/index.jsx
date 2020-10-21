import React from "react";
import "./Carrinho.css"
import Header from "../../components/Header"
import {connect} from "react-redux"
import carrinho from "../../store/reducers/carrinho"
import CardCarrinho from "../../components/CardCarrinho"

function Carrinho(props){
    
    const cartList = props.carrinho.map((prod) => {
        return <CardCarrinho key={prod.id} nome={prod.title} imagem={prod.image} valor={prod.price} prod={prod}/>
    })

    return(
        <>
            <Header nome="Rafael"/>
            <h1>Bem-vindo ao carrinho!</h1>
            <div className="cards">
                {cartList}
            </div>
            

                        
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        carrinho: state.carrinho
    }
}

export default connect (mapStateToProps)(Carrinho);


