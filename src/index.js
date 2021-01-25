import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { App } from "./component/App";

ReactDom.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.querySelector("body")
);