import React from "react";
import {StoreContext} from "../../storeContext";
import {Messege} from "./Messege";

export const MessegeConteiner = (props) => {
    return (
       <StoreContext.Consumer>
           {
               store => {
                   return (
                       <Messege
                           messege={store.getState().messege}
                           dispatch={(action) => store.dispatch(action)}
                       />
                   )
               }
           }
       </StoreContext.Consumer>
    );
};