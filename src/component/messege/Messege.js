import React from "react";
import MessegeStyle from "./messege.module.scss";
import {MessegeFormConteiner} from "./messegeForm/messegeFormConteiner";
import {MyMessege} from "./myMessege/MyMessege";

export const Messege = (props) => {
    const {messegeList} = props;
    const getMessege = () => messegeList.map((item, index) => <MyMessege key={index} text={item.text}/>);

    return (
        <div className={MessegeStyle.messege}>
            <div className={MessegeStyle.listMessege}>{getMessege()}</div>
            <MessegeFormConteiner/>
        </div>
    );
};