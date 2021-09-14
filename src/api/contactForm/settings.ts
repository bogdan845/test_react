import {post} from "../index";
import {API_URLS} from "../constants/apiUrls/apiUrls";
import {IFormValues} from "../../utils/interface/submitForm/submitForm";


export const submitForm = (payload: IFormValues) => post(API_URLS.submitForm, payload);