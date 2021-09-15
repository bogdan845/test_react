import {call, put, takeLatest} from "redux-saga/effects";
import {RequestStatus} from "../../requestStatus";
import {GalleryActions, galleryFetcher, galleryRequestStatus} from "./galleryActions";
import {api} from "../../../api/services";


function* galleryHandler(): Generator<{}> {
    try {
        yield put(galleryRequestStatus({status: RequestStatus.LOADING}));
        const getData: any = yield call(api.gallery.fetchGallery);
        if (getData.data) {
            yield put(galleryFetcher({
                status: RequestStatus.SUCCEED,
                data: getData.data.slice(0, 7)
            }))
        }
    } catch {
        yield put(galleryRequestStatus({status: RequestStatus.FAILED}));
    }
}

export function* gallerySaga() {
    yield takeLatest(GalleryActions.GALLERY, galleryHandler);
}