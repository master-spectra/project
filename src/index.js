import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {HashRouter} from "react-router-dom";
import {store} from "./state/store";
import {Provider} from "react-redux";
import {AppConteiner} from "./component/AppConteiner";

ReactDom.render(
    <HashRouter>
        <Provider store={store}>
            <AppConteiner/>
        </Provider>
    </HashRouter>,
    document.querySelector("body")
);