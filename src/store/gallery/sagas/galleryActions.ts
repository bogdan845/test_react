import {createAction} from "redux-actions";
import {Omit} from "react-redux";
import {IGallery} from "../galleryReducer";

type GalleryStatus = Omit<IGallery, "data">

export enum GalleryActions {
    GALLERY_REQUEST_STATUS = "GALLERY_REQUEST_STATUS",
    FETCH_GALLERY = "FETCH_GALLERY",
    GALLERY = "GALLERY"
}

export const galleryRequestStatus = createAction(
    GalleryActions.GALLERY_REQUEST_STATUS,
    (payload: GalleryStatus) => payload
);


export const galleryFetcher = createAction(
    GalleryActions.FETCH_GALLERY,
    (payload: IGallery) => payload
);

export const gallery = createAction(
    GalleryActions.GALLERY
);