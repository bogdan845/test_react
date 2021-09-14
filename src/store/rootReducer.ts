import {combineReducers} from "redux";
import {galleryReducer, IGallery} from "./gallery/galleryReducer";
import {contactUsReducer, IContactUs} from "./contactUs/contactUsReducer";


export interface IStore {
    gallery: IGallery,
    contactUs: IContactUs,
}

export const rootReducer = combineReducers({
    gallery: galleryReducer,
    contactUs: contactUsReducer
});