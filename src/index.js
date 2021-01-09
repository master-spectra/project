import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {App} from "./component/App.js";
import {store} from "./state/state";

const renderDom = () => {
	ReactDom.render(<App store={store} />, document.querySelector("body"));
};

store.subscriber(renderDom);

renderDom();