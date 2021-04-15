import {MyMessage} from "./MyMessage";
import React from "react";

export const MyMessageArrays = ({messageList}) => messageList.map((item, index) => <MyMessage key={index} text={item.text}/>);
