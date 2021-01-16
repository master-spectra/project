import React from "react";
import ReactDom from "react-dom";
import "./style.scss";
import {AppConteiner} from "./component/AppConteiner";
import {store} from "./state/store";
import {StoreContext} from "./storeContext";
import {BrowserRouter} from "react-router-dom";

const renderDom = () => {
    ReactDom.render(
		<StoreContext.Provider value={store}>
			<BrowserRouter>
				<StoreContext.Consumer>
					{
						store => {
							return <AppConteiner store={store} />
						}
					}
				</StoreContext.Consumer>
			</BrowserRouter>
		</StoreContext.Provider>,
		document.querySelector("body")
    );
};

store.subscriber(renderDom);

renderDom();
