import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { storeRedux } from "./state/redux-store";
import { Provider } from "react-redux";
import { App } from "./component/App";

ReactDom.render(
	<BrowserRouter>
		<Provider store={storeRedux}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.querySelector("body")
);