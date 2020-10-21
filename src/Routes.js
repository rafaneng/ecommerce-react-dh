import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./views/Home";
import Carrinho from "./views/Carrinho";
import Produto from "./views/Produto";

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/carrinho" component={Carrinho} />
            <Route path="/produto" component={Produto} />
        </BrowserRouter>
    )
}
export default Routes;