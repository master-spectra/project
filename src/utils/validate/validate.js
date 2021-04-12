import * as Yup from "yup";
import React from "react";
import {ErrorMessege} from "../../component/common/FormComponent/FormComponent";

const setSettingCreator = (min, max) => Yup.string().trim().min(min, <ErrorMessege/>).max(max, <ErrorMessege/>).required(<ErrorMessege/>);
const setStartCreator = setting => Yup.object().shape(setting);

export const setStatusValidation = setStartCreator({status: setSettingCreator(1, 5)});
export const setPostValidation = setStartCreator({postText: setSettingCreator(1, 50)});
export const setMessegeValidation = setStartCreator({messegeText: setSettingCreator(1, 50)});