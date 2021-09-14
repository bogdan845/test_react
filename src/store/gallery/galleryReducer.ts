import {handleActions} from "redux-actions";
import {RequestStatus, RequestType} from "../requestStatus";
import {GalleryActions} from "./sagas/galleryActions";

export interface IGallery {
    status: RequestType,
    data: []
};

const initialState = {
    status: RequestStatus.IDLE,
    data: []
};


export const galleryReducer = handleActions({
    [GalleryActions.FETCH_GALLERY]: (state, {payload}) => ({
        ...state,
        status: payload.status,
        data: payload.data
    })
}, initialState)