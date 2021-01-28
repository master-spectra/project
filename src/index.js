import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {BrowserRouter} from "react-router-dom";
import {store} from "./state/store";
import {Provider} from "react-redux";
import {App} from "./component/App";
import {authReducer} from "./state/reducers/authReducer";

authReducer()

const body = document.querySelector("body");

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    body
);