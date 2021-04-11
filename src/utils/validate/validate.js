import * as Yup from "yup";
import React from "react";
import {ErrorMessege} from "../../component/common/FormComponent/FormComponent";

const setSettingCreator = () => Yup.string().trim().min(1, <ErrorMessege/>).max(5, <ErrorMessege/>).required(<ErrorMessege/>);
const setStartCreator = setting => Yup.object().shape(setting);

export const setStatusValidation = setStartCreator({status: setSettingCreator()});
export const setPostValidation = setStartCreator({postText: setSettingCreator()});
export const setMessegeValidation = setStartCreator({messegeText: setSettingCreator()});