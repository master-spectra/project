import * as Yup from "yup";
import React from "react";
import {ErrorMessage} from "../../component/common/FormComponent/FormComponent";

const setSettingCreator = (min, max) => Yup.string().trim().min(min, <ErrorMessage/>).max(max, <ErrorMessage/>).required(<ErrorMessage/>);
const setStartCreator   = setting => Yup.object().shape(setting);

export const setStatusValidation    = setStartCreator({status: setSettingCreator(1, 50)});
export const setPostValidation      = setStartCreator({postText: setSettingCreator(1, 50)});
export const setMessageValidation   = setStartCreator({messageText: setSettingCreator(1, 50)});
