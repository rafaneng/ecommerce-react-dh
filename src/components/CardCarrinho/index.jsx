import React from "react";
import "./CardCarrinho.css";
import {connect} from "react-redux";

const Card = (props) => {
    return(
        <div className="CardCarrinho">
            <div><img src={props.imagem} alt="Imagem do produto"/></div>
            <div>
                <h3>{props.nome}</h3>
                <p>{props.descricao}</p>
                <div>{props.valor}</div>
                <div><button>Ver</button><button>Remover</button></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carrinho: state.carrinho
    }
}

// const mapDispatchToProp = (dispatch) => {
//     return{
//         addProduct(novoProduto){
//             const action = addCarrinho(novoProduto)
//             dispatch(action)
//         }
//     }
// }

export default connect(mapStateToProps) (Card);