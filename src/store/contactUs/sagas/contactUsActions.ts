import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IContactUs} from "../contactUsReducer";
import {IFormValues} from "../../../utils/interface/submitForm/submitForm";


type ContactUsSubmittingStatus = Omit<IContactUs, "data">

export enum ContactUsAction {
    CONTACT_US_SUBMITTING_STATUS = "CONTACT_US_SUBMITTING_STATUS",
    CONTACT_US_RESPONSE_STATUS = "CONTACT_US_RESPONSE_STATUS",
    CONTACT_US = "CONTACT_US"
};

export const contactUsSubmittingStatus = createAction(
    ContactUsAction.CONTACT_US_SUBMITTING_STATUS,
    (payload: ContactUsSubmittingStatus) => payload
);

export const contactUsResponseStatus = createAction(
    ContactUsAction.CONTACT_US_RESPONSE_STATUS,
    (payload: IContactUs) => payload
);

export const contactUs = createAction(
    ContactUsAction.CONTACT_US,
    (payload: IFormValues) => payload
);