import React, {Suspense} from "react";
import {Loader} from "../loader/Loader";

export const suspenseCreatConteinerComponent = Component => {
    const componentConteiner = () => {
        return <Suspense fallback={<Loader/>}><Component/></Suspense>;
    };

    return componentConteiner;
};