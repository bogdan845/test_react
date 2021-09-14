import axios, {AxiosInstance} from "axios";

const axiosInstance : AxiosInstance = axios.create();

export const get = (url: string, payload={}) : Promise<any> => {
    return axiosInstance({
        method: "get",
        url,
        data: payload
    })
}

export const post = (url: string, payload={}) : Promise<any> => {
    return axiosInstance({
        method: "post",
        url,
        data: payload
    })
}