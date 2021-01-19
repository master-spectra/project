import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import { AppConteiner } from "./component/AppConteiner";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { storeRedux } from "./state/redux-store";

ReactDom.render(
	<BrowserRouter>
		<Provider store={storeRedux}>
			<AppConteiner />
		</Provider>
	</BrowserRouter>,
	document.querySelector("body")
);