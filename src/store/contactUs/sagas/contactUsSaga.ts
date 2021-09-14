import {call, put, takeLatest} from "redux-saga/effects";
import {ContactUsAction, contactUsResponseStatus, contactUsSubmittingStatus} from "./contactUsActions";
import {api} from "../../../api/services";
import {RequestStatus} from "../../requestStatus";


function* contactUsHandler(action: any): Generator<any> {
    try {
        yield put(contactUsSubmittingStatus({status: RequestStatus.LOADING}));
        const submittingForm = yield call(api.form.submitForm, action.payload)
        if (submittingForm) {
            yield put(contactUsResponseStatus({
                status: RequestStatus.SUCCEED,
                data: "Simple lorem text"
            }))
        }
    } catch {
        yield put(contactUsSubmittingStatus({status: RequestStatus.FAILED}));
    }
}

export function* contactUsSaga() {
    yield takeLatest(ContactUsAction.CONTACT_US, contactUsHandler);
}