import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../requestStatus";
import {ContactUsAction} from "./sagas/contactUsActions";

export interface IContactUs {
    status: RequestType,
    data: {}
}

const initialState = {
    status: RequestStatus.IDLE,
    data: {}
};


export const contactUsReducer = handleActions({
    [ContactUsAction.CONTACT_US_RESPONSE_STATUS]: (state, {payload}) => ({
        ...state,
        status: payload.status,
        data: payload.data
    })
}, initialState)

