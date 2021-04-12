import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/store";
import {Provider} from "react-redux";
import {AppConteiner} from "./component/AppConteiner";

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppConteiner/>
        </Provider>
    </BrowserRouter>,
    document.querySelector("body")
);