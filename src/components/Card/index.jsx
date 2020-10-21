import React from "react";
import "./Card.css";
import {addCarrinho} from "../../store/actions/carrinho";
import {connect} from "react-redux";

const Card = (props) => {
    return(
        <div className="Card">
            <div className="Card-img"><img src={props.imagem} alt="Imagem do produto"/></div>
            <div className="Card-txt">
                <p>R${props.valor}</p>
                <p><strong>{props.nome}</strong></p>
            </div>
            <div className="Card-btn">
                <button>Ver</button>
                <button onClick = {e => {props.addProduct(props.prod);console.log(props.carrinho)}}>Carrinho</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carrinho: state.carrinho
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        addProduct(novoProduto){
            const action = addCarrinho(novoProduto)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp) (Card);