import * as Yup from "yup";
import React from "react";
import {Errormessage} from "../../component/common/FormComponent/FormComponent";

const setSettingCreator = (min, max) => Yup.string().trim().min(min, <Errormessage/>).max(max, <Errormessage/>).required(<Errormessage/>);
const setStartCreator = setting => Yup.object().shape(setting);

export const setStatusValidation = setStartCreator({status: setSettingCreator(1, 5)});
export const setPostValidation = setStartCreator({postText: setSettingCreator(1, 50)});
export const setmessageValidation = setStartCreator({messageText: setSettingCreator(1, 50)});