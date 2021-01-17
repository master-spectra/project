import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {App} from "./component/App";
import {store} from "./state/store";
import {BrowserRouter} from "react-router-dom";
import {Provider, StoreContext} from "./storeContext";

const renderDom = () => {
    ReactDom.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.querySelector("body")
    );
};

store.subscriber(renderDom);

renderDom();