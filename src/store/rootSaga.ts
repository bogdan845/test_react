import {all} from "redux-saga/effects"
import {gallerySaga} from "./gallery/sagas/gallerySagas";
import {contactUsSaga} from "./contactUs/sagas/contactUsSaga";

export default function* Saga() {
    yield all([
        gallerySaga(),
        contactUsSaga()
    ])
}