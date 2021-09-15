import {post} from "../index";
import {API_URLS} from "../constants/apiUrls/apiUrls";
import {IFormValues} from "../../utils/interface/submitForm/submitForm";

export interface ISubmitForm {
    payload: IFormValues
}

export const submitForm = ({payload}: ISubmitForm) => post(API_URLS.submitForm, payload);