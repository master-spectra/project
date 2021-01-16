import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {AppConteiner} from "./component/AppConteiner";
import {store} from "./state/store";
import {BrowserRouter} from "react-router-dom";

const renderDom = () => {
    ReactDom.render(
		<BrowserRouter>
			<AppConteiner store={store} />
		</BrowserRouter>,
		document.querySelector("body")
    );
};

store.subscriber(renderDom);

renderDom();
