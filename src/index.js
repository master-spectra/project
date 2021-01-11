import React from "react"; // Import react library for read syntax jsx
import ReactDom from "react-dom"; // Import reactDom for render app
import "./style.scss"; // import style for app 
import {AppConteiner} from "./component/AppConteiner"; // import component   
import {store} from "./state/store"; // import BLL

const renderDom = () => { // create expresion function for render DOM and post reRender
	ReactDom.render(<AppConteiner store={store} />, document.querySelector("body")); 
};

store.subscriber(renderDom); // export renderDom to BLL 

renderDom(); // render DOM