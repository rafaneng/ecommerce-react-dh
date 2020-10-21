import {createStore, combineReducers} from "redux";
import carrinhoReducer from "./reducers/carrinho";

const reducers = combineReducers({
    carrinho: carrinhoReducer
})

function storeConfig(){
    return createStore(reducers)
}
export default storeConfig