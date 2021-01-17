import React from "react";

export const StoreContext = React.createContext(null);

export const Provider = (props) => {
    const {store} = props;

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
};