import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {AppConteiner} from "./component/AppConteiner";
import {store} from "./state/store";

const renderDom = () => {
	ReactDom.render(<AppConteiner store={store} />, document.querySelector("body"));
};

store.subscriber(renderDom);

renderDom();