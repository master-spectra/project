import React from "react";
import MessegeStyle from "./messege.module.scss";
import {MessegeFormConteiner} from "./messegeForm/messegeFormConteiner";
import {MyMessege} from "./myMessege/MyMessege";

export const Messege = (props) => {
    const {messegeList} = props;

    return (
        <div className={MessegeStyle.messege}>
            <div className={MessegeStyle.listMessege}>
                {
                    messegeList.map((item, index) => {
                        return <MyMessege key={index} text={item.text}/>
                    })
                }
            </div>
            <MessegeFormConteiner/>
        </div>
    );
};