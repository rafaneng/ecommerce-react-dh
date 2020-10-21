// import {ADD_TO_CART} from "./actionTypes"

export function addCarrinho(novoProduto){
    return {
        type: "ADD_TO_CART",
        payload: novoProduto
    }
}