import {get} from "../index";
import {API_URLS} from "../constants/apiUrls/apiUrls";

export const fetchGallery = ()  => get(API_URLS.data);